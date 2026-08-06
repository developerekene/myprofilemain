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
                <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                        <CheckCircle2 size={24} />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xl font-black uppercase tracking-tight text-white">Application Ingested</h1>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Your identity profile has been instantiated and diagnostic parameters compiled successfully.
                        </p>
                    </div>
                    <div className="pt-2">
                        <a
                            href="/about-the-engineer#learn-with-ekene"
                            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-white bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 transition-colors"
                        >
                            <ArrowLeft size={12} />
                            <span>Go Back</span>
                        </a>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 grid lg:grid-cols-12 font-sans antialiased relative overflow-x-hidden">

            {/* LEFT COLUMN: TELEMETRY AND MENTEE CASE STUDIES */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-slate-900/60 p-8 lg:p-12 space-y-12 relative flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/[0.01] pointer-events-none" />

                <div className="space-y-8 relative z-10">
                    <a
                        href="/about-the-engineer#learn-with-ekene"
                        className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-emerald-400 transition-colors group"
                    >
                        <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span>BACK TO ABOUT ENGINEER</span>
                    </a>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                                Student Growth Hub
                            </span>
                            <ChevronRight size={12} className="text-slate-800" />
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">iTrain Mentorship Results</span>
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase leading-none">
                            The Official<br />Learning Path
                        </h1>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                            No boring lectures. We give you hands-on coding challenges, 1-on-1 feedback, and real-world projects to help you step up your developer career.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-y border-slate-900 py-6">
                        <div>
                            <p className="text-lg font-mono font-black text-emerald-400">96%</p>
                            <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-0.5">Career Growth Rate</p>
                        </div>
                        <div>
                            <p className="text-lg font-mono font-black text-purple-400">140+</p>
                            <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-0.5">Real Projects Built</p>
                        </div>
                        <div>
                            <p className="text-lg font-mono font-black text-sky-400">£18k+</p>
                            <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-0.5">Avg Salary Boost</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">What Our Mentees Say</h3>

                        <div className="space-y-4">
                            <div className="bg-slate-950/60 border border-slate-900 p-4 rounded-xl space-y-2">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Software Engineer Student</h4>
                                    <span className="text-[9px] font-mono text-emerald-400 px-2 py-0.5 bg-emerald-500/10 rounded">Mid → Senior Lead</span>
                                </div>
                                <p className="text-slate-400 text-[11px] leading-relaxed italic">
                                    "Before iTrain, my code worked but wasn't organized well. Within months, I learned how to build clean, fast apps and landed my target lead developer role."
                                </p>
                            </div>

                            <div className="bg-slate-950/60 border border-slate-900 p-4 rounded-xl space-y-2">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Full-Stack Student</h4>
                                    <span className="text-[9px] font-mono text-purple-400 px-2 py-0.5 bg-purple-500/10 rounded">Junior → Full Developer</span>
                                </div>
                                <p className="text-slate-400 text-[11px] leading-relaxed italic">
                                    "The practical exercises are tough but really helpful. I learned how to debug complex errors fast and present my technical work with confidence."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 text-[10px] font-mono text-slate-600 space-y-1 hidden lg:block">
                    {/* <p>PROGRAM CODE: ITRAIN-LEARN-2026</p> */}
                    <p>FLEXIBLE MENTORSHIP &amp; LIVE CODE REVIEWS</p>
                </div>
            </div>

            {/* RIGHT COLUMN: CORE APPLICATION SCREENING FORM */}
            <div className="lg:col-span-7 p-8 lg:p-12 max-w-3xl mx-auto w-full space-y-8">

                <div className="border-b border-slate-900 pb-6 space-y-2">
                    <h2 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
                        <Cpu size={16} className="text-emerald-400" />
                        Diagnostic Ingestion Questionnaire
                    </h2>
                    <p className="text-slate-400 text-xs leading-relaxed">
                        Complete your system profile coordinates. Be concise, highly technical, and completely transparent regarding your structural knowledge barriers.
                    </p>
                </div>

                <form onSubmit={handlePreSubmitCheck} className="space-y-6">
                    {error && (
                        <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center space-x-3 text-rose-400 font-mono text-xs">
                            <ShieldAlert size={14} />
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Section Block 1: Identity Metadata */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">First Name *</label>
                            <input
                                type="text"
                                required
                                value={formData.user.primaryInformation.firstName}
                                onChange={(e) => handleNestedInputChange("primaryInformation", "firstName", e.target.value)}
                                placeholder="Ekene"
                                className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Last Name *</label>
                            <input
                                type="text"
                                required
                                value={formData.user.primaryInformation.lastName}
                                onChange={(e) => handleNestedInputChange("primaryInformation", "lastName", e.target.value)}
                                placeholder="Okoli"
                                className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Contact Email *</label>
                        <input
                            type="email"
                            required
                            value={formData.user.primaryInformation.email}
                            onChange={(e) => handleNestedInputChange("primaryInformation", "email", e.target.value)}
                            placeholder="example@domain.com"
                            className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 outline-none transition-colors"
                        />
                    </div>

                    {/* Section Block 2: Architectural Coordinates */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">GitHub Repository Engine URL</label>
                            <input
                                type="url"
                                value={formData.user.diagnostics.gitHubUrl}
                                onChange={(e) => handleNestedInputChange("diagnostics", "gitHubUrl", e.target.value)}
                                placeholder="https://github.com/..."
                                className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">LinkedIn Identity URL</label>
                            <input
                                type="url"
                                value={formData.user.diagnostics.linkedInUrl}
                                onChange={(e) => handleNestedInputChange("diagnostics", "linkedInUrl", e.target.value)}
                                placeholder="https://linkedin.com/in/..."
                                className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 outline-none transition-colors"
                            />
                        </div>
                    </div>

                    {/* Section Block 3: Stack Blueprint and Dedication Specs */}
                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="sm:col-span-2 space-y-2">
                            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                                <Code2 size={12} className="text-slate-500" /> Current Core Technical Stack *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.user.diagnostics.coreStack}
                                onChange={(e) => handleNestedInputChange("diagnostics", "coreStack", e.target.value)}
                                placeholder="TypeScript, React Native, Python, Django"
                                className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                                <Clock size={12} className="text-slate-500" /> Weekly Hours *
                            </label>
                            <select
                                value={formData.user.diagnostics.weeklyCommitment}
                                onChange={(e) => handleNestedInputChange("diagnostics", "weeklyCommitment", e.target.value)}
                                className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors appearance-none cursor-pointer font-mono text-[11px]"
                            >
                                <option value="5-10">5-10 hours / wk</option>
                                <option value="10-20">10-20 hours / wk</option>
                                <option value="20+">20+ extreme track</option>
                            </select>
                        </div>
                    </div>

                    {/* Section Block 4: Strategic Track Targeting */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Development Acceleration Path</label>
                            <select
                                value={formData.user.secondaryInformation.accountType}
                                onChange={(e) => handleNestedInputChange("secondaryInformation", "accountType", e.target.value)}
                                className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors appearance-none cursor-pointer"
                            >
                                <option value="engineering">Engineering Mastery (Architecture, Optimizations)</option>
                                <option value="leadership">Technical Leadership (Product Scoping, Team Orchestration)</option>
                                <option value="dual">Dual Matrix Focus (Full-Spectrum Leadership & Engineering)</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Target Base Tier</label>
                            <select
                                value={formData.user.primaryInformation.userType}
                                onChange={(e) => handleNestedInputChange("primaryInformation", "userType", e.target.value)}
                                className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors appearance-none cursor-pointer"
                            >
                                <option value="mid-level">Mid-Level Developer (Targeting True Senior Execution)</option>
                                <option value="junior">Junior Engineer (Refining Systems Core Fluency)</option>
                                <option value="academic">Academic Candidate (Tracking For High-Tier Entry)</option>
                            </select>
                        </div>
                    </div>

                    {/* Section Block 5: Qualitative System Diagnostics */}
                    <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Primary Growth Objective *</label>
                        <textarea
                            required
                            rows={3}
                            value={formData.user.diagnostics.primaryGoal}
                            onChange={(e) => handleNestedInputChange("diagnostics", "primaryGoal", e.target.value)}
                            placeholder="Detail your target career, product scaling, or capability milestones over the next 6-12 months."
                            className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl p-4 text-xs text-white placeholder-slate-700 outline-none transition-colors resize-none leading-relaxed"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Most Defining Code Structure Shipped</label>
                        <textarea
                            rows={3}
                            value={formData.user.diagnostics.definingProject}
                            onChange={(e) => handleNestedInputChange("diagnostics", "definingProject", e.target.value)}
                            placeholder="What is the most complex full-stack algorithm, application component, or automation pipeline you have built to date?"
                            className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl p-4 text-xs text-white placeholder-slate-700 outline-none transition-colors resize-none leading-relaxed"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Core Structural Bottleneck</label>
                        <textarea
                            rows={3}
                            value={formData.user.diagnostics.biggestBottleneck}
                            onChange={(e) => handleNestedInputChange("diagnostics", "biggestBottleneck", e.target.value)}
                            placeholder="What precise concept (e.g., race conditions, deep data optimization, scoping patterns) is slowing down your mastery track?"
                            className="w-full bg-slate-900/40 border border-slate-900 focus:border-emerald-500/30 rounded-xl p-4 text-xs text-white placeholder-slate-700 outline-none transition-colors resize-none leading-relaxed"
                        />
                    </div>

                    <div className="pt-4 flex flex-col items-center justify-between gap-4 border-t border-slate-900 sm:flex-row">
                        <p className="text-[10px] font-mono text-slate-600">
                            * Denotes mandatory system ingestion criteria parameters.
                        </p>
                        <button
                            type="submit"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 bg-slate-900 hover:bg-slate-850 px-6 py-3.5 rounded-xl border border-emerald-500/20 transition-all cursor-pointer group"
                        >
                            <Award size={14} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
                            <span>Apply for Mentorship</span>
                            <Send size={11} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </form>
            </div>

            {/* SECURITY VERIFICATION MODAL GATEWAY */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                            <div className="flex items-center gap-2 text-slate-200 font-mono text-xs font-bold uppercase tracking-wide">
                                <KeyRound size={14} className="text-emerald-400" />
                                <span>Security Gateway Initialization</span>
                            </div>
                            <button
                                onClick={() => { setIsModalOpen(false); setModalError(null); setModalPassword(""); }}
                                className="text-slate-500 hover:text-white transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <form onSubmit={handleFinalizeRegistration} className="p-6 space-y-4">
                            <p className="text-xs text-slate-400 leading-relaxed">
                                To protect your diagnostic profile configuration matrix, please construct a root secure password parameter for your <span className="text-slate-200 font-mono">SystemsOne</span> profile architecture.
                            </p>

                            {modalError && (
                                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center space-x-3 text-rose-400 font-mono text-[11px]">
                                    <ShieldAlert size={14} className="shrink-0" />
                                    <span>{modalError}</span>
                                </div>
                            )}

                            <div className="space-y-1.5 relative">
                                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Account Access Password *</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={modalPassword}
                                        onChange={(e) => setModalPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/30 rounded-xl pl-4 pr-10 py-3 text-xs text-white placeholder-slate-700 outline-none transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2 flex justify-end gap-3">
                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={() => { setIsModalOpen(false); setModalError(null); setModalPassword(""); }}
                                    className="px-4 py-2.5 rounded-xl border border-slate-800 font-mono text-xs text-slate-400 hover:text-white transition-colors disabled:opacity-40"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 rounded-xl font-mono text-xs font-bold text-emerald-400 transition-all disabled:opacity-40 shrink-0"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-3 h-3 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                                            <span>Streaming Matrix...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Authorize & Register</span>
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