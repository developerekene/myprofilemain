import React, { useState } from "react";
import { Award, ArrowLeft, Send, CheckCircle2, ChevronRight, Cpu, Clock, Code2, ShieldAlert, KeyRound, Eye, EyeOff, X } from "lucide-react";
import { authServiceMain } from "../../Redux/configuration/auth.service";

// Appended a direct password coordinate variable fields mapping to auth payload constraints
interface SystemsOneAccount {
    user: {
        primaryInformation: {
            firstName: string;
            lastName: string;
            email: string;
            isUserLoggedIn: boolean;
            userType: string;
            userId: string;
        };
        secondaryInformation: {
            accountType: string;
            userReferenceId: string;
        };
        locationAndTime: {
            timeZone: string;
            locale: string;
            location: string;
        };
        diagnostics: {
            gitHubUrl: string;
            linkedInUrl: string;
            coreStack: string;
            weeklyCommitment: "5-10" | "10-20" | "20+";
            primaryGoal: string;
            biggestBottleneck: string;
            definingProject: string;
        };
    };
    password?: string;
}

const INITIAL_STATE: SystemsOneAccount = {
    user: {
        primaryInformation: {
            firstName: "",
            lastName: "",
            email: "",
            isUserLoggedIn: true,
            userType: "mid-level",
            userId: "",
        },
        secondaryInformation: {
            accountType: "engineering",
            userReferenceId: "",
        },
        locationAndTime: {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            locale: typeof navigator !== "undefined" ? navigator.language : "en-US",
            location: "",
        },
        diagnostics: {
            gitHubUrl: "",
            linkedInUrl: "",
            coreStack: "",
            weeklyCommitment: "10-20",
            primaryGoal: "",
            biggestBottleneck: "",
            definingProject: "",
        },
    },
    password: "",
};

const MentorshipApply: React.FC = () => {
    const [formData, setFormData] = useState<SystemsOneAccount>(INITIAL_STATE);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Modal Interaction States
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalPassword, setModalPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [modalError, setModalError] = useState<string | null>(null);

    const handleNestedInputChange = (
        section: "primaryInformation" | "secondaryInformation" | "diagnostics",
        field: string,
        value: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            user: {
                ...prev.user,
                [section]: {
                    ...prev.user[section],
                    [field]: value,
                },
            },
        }));
    };

    // Intercepts base form submit event, validates fields, and presents security gate modal
    const handlePreSubmitCheck = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const { primaryInformation, diagnostics } = formData.user;

        if (!primaryInformation.firstName || !primaryInformation.lastName || !primaryInformation.email || !diagnostics.primaryGoal || !diagnostics.coreStack) {
            setError("Validation Failure: Missing critical diagnostic field parameters.");
            return;
        }

        setIsModalOpen(true);
    };

    // Registers the user first before binding and writing structural application data profiles
    const handleFinalizeRegistration = async (e: React.FormEvent) => {
        e.preventDefault();
        setModalError(null);

        if (modalPassword.length < 6) {
            setModalError("Security Parameter Fault: Password must contain at least 6 tokens.");
            return;
        }

        setIsSubmitting(true);

        try {
            let runtimeUserId = "";
            let isExistingUser = false;

            const authPayload = {
                email: formData.user.primaryInformation.email,
                password: modalPassword,
                firstName: formData.user.primaryInformation.firstName,
                lastName: formData.user.primaryInformation.lastName
            };

            try {
                // STEP 1: Attempt initial user account registration instance
                const authResult = await authServiceMain.handleUserRegistration(authPayload);
                runtimeUserId = authResult?.user?.uid || authResult?.userId || "";
            } catch (authError: any) {
                // STEP 2: Intercept collision if user account is already created
                // Adjust the error code pattern string based on your auth service structure (e.g., "auth/email-already-in-use")
                const isEmailTaken = authError?.code === "auth/email-already-in-use" ||
                    authError?.message?.includes("already") ||
                    authError?.status === 409;

                if (isEmailTaken) {
                    isExistingUser = true;
                    // If your service supports mapping an existing login session or reference parsing on conflict:
                    runtimeUserId = authError?.userId || authError?.user?.uid || "";
                } else {
                    // If it's a completely different auth failure, pass it up to the parent catch container
                    throw authError;
                }
            }

            // STEP 3: Handle database record mutation path (New setup vs Inplace override update)
            // If runtimeUserId wasn't surfaced from the catch block, compile structural fallback updates using custom identifiers
            const mergedDiagnostics = {
                ...formData.user.diagnostics,
                userId: runtimeUserId,
                updatedAt: new Date().toISOString(),
                isExistingUserRecord: isExistingUser
            };

            // Execute profile parameters update in Firebase/Backend Database
            await authServiceMain.updateUserInformation(mergedDiagnostics);

            // STEP 4: Trigger administrative notification dispatch hook
            try {
                // Note: Replace this placeholder fetch sequence with your exact email service endpoint 
                // (e.g., emailJS, SendGrid, Firebase cloud functions trigger, or internal authServiceMailer)
                await fetch("/api/v1/telemetry/notify-registration", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        recipient: "ekenehq@gmail.com",
                        subject: isExistingUser
                            ? `[Profile Update] Diagnostic Sync: ${formData.user.primaryInformation.firstName} ${formData.user.primaryInformation.lastName}`
                            : `[New Ingestion] Mentorship Application: ${formData.user.primaryInformation.firstName} ${formData.user.primaryInformation.lastName}`,
                        meta: {
                            candidate: `${formData.user.primaryInformation.firstName} ${formData.user.primaryInformation.lastName}`,
                            email: formData.user.primaryInformation.email,
                            stack: formData.user.diagnostics.coreStack,
                            goal: formData.user.diagnostics.primaryGoal,
                            actionType: isExistingUser ? "UPDATE_EXISTING" : "NEW_REGISTRATION"
                        }
                    })
                });
            } catch (emailError) {
                // Silently log email dispatch pipeline fault so it doesn't break user flow if the write itself succeeded
                console.error("Error sending email:", emailError);
            }

            // Reset UI State Elements upon valid completion stream
            setIsSuccess(true);
            setIsModalOpen(false);
            setModalPassword("");
            setFormData(INITIAL_STATE);

        } catch (err: any) {
            console.error("Global Registration Chain Aborted:", err);
            setModalError(
                err?.message || "Authentication Ingestion Aborted: Registration Successful."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans antialiased">
                <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-6 shadow-2xl">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                        <CheckCircle2 size={28} />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-black text-white">
                            Application received
                        </h1>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Thank you for applying for mentorship. Your information
                            has been saved successfully. I’ll review your application
                            and use the details you provided to understand how I can help.
                        </p>
                    </div>

                    <a
                        href="/about-the-engineer#learn-with-ekene"
                        className="inline-flex items-center gap-2 font-semibold text-sm text-slate-300 hover:text-white bg-slate-950 px-5 py-3 rounded-xl border border-slate-800 transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back to Ekene's page
                    </a>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased relative overflow-x-hidden">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10 sm:py-16 relative z-10">

                {/* Back */}
                <a
                    href="/about-the-engineer#learn-with-ekene"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors group"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                    Back to mentorship
                </a>

                {/* Page Intro */}
                <div className="max-w-3xl mx-auto text-center mt-12">
                    <div className="inline-flex items-center gap-2 mb-5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
                            Mentorship Application
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                        Let's understand where you are
                        <span className="block text-slate-500">
                            and where you want to go.
                        </span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                        Tell me a little about yourself, your experience, and what
                        you want to improve. There are no trick questions. Your answers
                        simply help me understand whether I can be useful to you.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
                        <span className="px-3 py-2 rounded-full bg-slate-900 border border-slate-800">
                            About 5–10 minutes
                        </span>
                        <span className="px-3 py-2 rounded-full bg-slate-900 border border-slate-800">
                            Be honest and specific
                        </span>
                        <span className="px-3 py-2 rounded-full bg-slate-900 border border-slate-800">
                            No perfect answers needed
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-14 mt-14 items-start">

                    {/* Helpful Context */}
                    <aside className="lg:sticky lg:top-8 space-y-6">

                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                            <h2 className="text-lg font-black text-white">
                                What happens next?
                            </h2>

                            <div className="mt-6 space-y-5">
                                <div className="flex gap-3">
                                    <div className="w-7 h-7 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white">
                                            You apply
                                        </h3>
                                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                                            Tell me about yourself and what you want to achieve.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-7 h-7 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white">
                                            I review your answers
                                        </h3>
                                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                                            I look at your goals, current skills, and the areas where you need help.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-7 h-7 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white">
                                            We decide what makes sense
                                        </h3>
                                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                                            If the mentorship is a good fit, we can discuss the next step.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/20 border border-slate-800 rounded-2xl p-6">
                            <h2 className="text-sm font-bold text-white">
                                You don't need to be an expert.
                            </h2>
                            <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                                This application is about understanding where you are
                                today. Whether you're a student, junior developer,
                                experienced developer, or changing careers, just be honest
                                about your current level.
                            </p>
                        </div>

                    </aside>

                    {/* Application Form */}
                    <div className="bg-slate-900/20 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10">

                        <form onSubmit={handlePreSubmitCheck} className="space-y-10">

                            {error && (
                                <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-3 text-rose-400 text-sm">
                                    <ShieldAlert size={16} className="shrink-0 mt-0.5" />
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Section 1 */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-emerald-400 font-bold">
                                        Step 1
                                    </p>
                                    <h2 className="mt-1 text-xl font-black text-white">
                                        Tell me about yourself
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-500">
                                        Start with the basics so I know who I’m speaking with.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-300">
                                            First name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.user.primaryInformation.firstName}
                                            onChange={(e) => handleNestedInputChange("primaryInformation", "firstName", e.target.value)}
                                            placeholder="Your first name"
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-700 outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-300">
                                            Last name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.user.primaryInformation.lastName}
                                            onChange={(e) => handleNestedInputChange("primaryInformation", "lastName", e.target.value)}
                                            placeholder="Your last name"
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-700 outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-300">
                                        Email address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.user.primaryInformation.email}
                                        onChange={(e) => handleNestedInputChange("primaryInformation", "email", e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-700 outline-none transition-colors"
                                    />
                                    <p className="text-xs text-slate-600">
                                        Use an email address you check regularly.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-slate-800" />

                            {/* Section 2 */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-emerald-400 font-bold">
                                        Step 2
                                    </p>
                                    <h2 className="mt-1 text-xl font-black text-white">
                                        Where are you in your tech journey?
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-500">
                                        This helps me understand your current experience.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-300">
                                            Your current level
                                        </label>
                                        <select
                                            value={formData.user.primaryInformation.userType}
                                            onChange={(e) => handleNestedInputChange("primaryInformation", "userType", e.target.value)}
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors cursor-pointer"
                                        >
                                            <option value="mid-level">Mid-level developer</option>
                                            <option value="junior">Junior developer</option>
                                            <option value="academic">Student / Academic</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-300">
                                            How do you want to grow?
                                        </label>
                                        <select
                                            value={formData.user.secondaryInformation.accountType}
                                            onChange={(e) => handleNestedInputChange("secondaryInformation", "accountType", e.target.value)}
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors cursor-pointer"
                                        >
                                            <option value="engineering">Become a better developer</option>
                                            <option value="leadership">Learn technical leadership</option>
                                            <option value="dual">Both development and leadership</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-300">
                                        What technologies do you currently use? *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.user.diagnostics.coreStack}
                                        onChange={(e) => handleNestedInputChange("diagnostics", "coreStack", e.target.value)}
                                        placeholder="e.g. React, TypeScript, Python, Node.js"
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-700 outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-300">
                                        How much time can you give each week?
                                    </label>
                                    <select
                                        value={formData.user.diagnostics.weeklyCommitment}
                                        onChange={(e) => handleNestedInputChange("diagnostics", "weeklyCommitment", e.target.value)}
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors cursor-pointer"
                                    >
                                        <option value="5-10">5–10 hours</option>
                                        <option value="10-20">10–20 hours</option>
                                        <option value="20+">20+ hours</option>
                                    </select>
                                </div>
                            </div>

                            <div className="border-t border-slate-800" />

                            {/* Section 3 */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-emerald-400 font-bold">
                                        Step 3
                                    </p>
                                    <h2 className="mt-1 text-xl font-black text-white">
                                        What do you want to achieve?
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-500">
                                        Be as specific as you can. This is one of the most useful parts of the application.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-300">
                                        What is your main goal? *
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.user.diagnostics.primaryGoal}
                                        onChange={(e) => handleNestedInputChange("diagnostics", "primaryGoal", e.target.value)}
                                        placeholder="For example: I want to become a senior developer, build my first production app, get a better job, or become more confident with backend development."
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl p-4 text-sm text-white placeholder-slate-700 outline-none transition-colors resize-none leading-relaxed"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-300">
                                        What is your biggest challenge right now?
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={formData.user.diagnostics.biggestBottleneck}
                                        onChange={(e) => handleNestedInputChange("diagnostics", "biggestBottleneck", e.target.value)}
                                        placeholder="Tell me what you find difficult or where you feel stuck."
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl p-4 text-sm text-white placeholder-slate-700 outline-none transition-colors resize-none leading-relaxed"
                                    />
                                </div>
                            </div>

                            <div className="border-t border-slate-800" />

                            {/* Section 4 */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-emerald-400 font-bold">
                                        Step 4
                                    </p>
                                    <h2 className="mt-1 text-xl font-black text-white">
                                        Tell me about your work
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-500">
                                        These questions are optional, but they help me understand your experience.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-300">
                                        What is the best project you've built?
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={formData.user.diagnostics.definingProject}
                                        onChange={(e) => handleNestedInputChange("diagnostics", "definingProject", e.target.value)}
                                        placeholder="Tell me what you built, what you were responsible for, and what made the project challenging."
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl p-4 text-sm text-white placeholder-slate-700 outline-none transition-colors resize-none leading-relaxed"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-300">
                                            GitHub profile
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.user.diagnostics.gitHubUrl}
                                            onChange={(e) => handleNestedInputChange("diagnostics", "gitHubUrl", e.target.value)}
                                            placeholder="https://github.com/..."
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-700 outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-300">
                                            LinkedIn profile
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.user.diagnostics.linkedInUrl}
                                            onChange={(e) => handleNestedInputChange("diagnostics", "linkedInUrl", e.target.value)}
                                            placeholder="https://linkedin.com/in/..."
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-700 outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-6 border-t border-slate-800">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Ready to send your application?
                                        </p>
                                        <p className="mt-1 text-xs text-slate-600">
                                            Required fields are marked with *.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-black transition-all shadow-lg shadow-emerald-500/10 cursor-pointer group"
                                    >
                                        <Award size={16} className="group-hover:rotate-6 transition-transform" />
                                        <span>Submit My Application</span>
                                        <Send size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            {/* Password / Account Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
                            <div>
                                <h2 className="text-base font-black text-white">
                                    One last step
                                </h2>
                                <p className="mt-1 text-xs text-slate-500">
                                    Create a password for your account.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setModalError(null);
                                    setModalPassword("");
                                }}
                                className="text-slate-500 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <form onSubmit={handleFinalizeRegistration} className="p-6 space-y-5">

                            <p className="text-sm text-slate-400 leading-relaxed">
                                Your application is ready. Create a password of at least
                                6 characters so your profile can be securely saved.
                            </p>

                            {modalError && (
                                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-3 text-rose-400 text-xs">
                                    <ShieldAlert size={14} className="shrink-0 mt-0.5" />
                                    <span>{modalError}</span>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-300">
                                    Create password *
                                </label>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={modalPassword}
                                        onChange={(e) => setModalPassword(e.target.value)}
                                        placeholder="At least 6 characters"
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/40 rounded-xl pl-4 pr-11 py-3.5 text-sm text-white placeholder-slate-700 outline-none transition-colors"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2 flex flex-col-reverse sm:flex-row justify-end gap-3">
                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setModalError(null);
                                        setModalPassword("");
                                    }}
                                    className="px-5 py-3 rounded-xl border border-slate-800 text-sm font-semibold text-slate-400 hover:text-white transition-colors disabled:opacity-40"
                                >
                                    Go Back
                                </button>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 rounded-xl text-sm font-black text-slate-950 transition-all disabled:opacity-40"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                                            <span>Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Finish Application</span>
                                            <ChevronRight size={14} />
                                        </>
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </main>
    );
};

export default MentorshipApply;
