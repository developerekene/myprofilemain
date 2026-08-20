import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    KeyRound,
    Mail,
    ShieldCheck,
    Lock,
} from "lucide-react";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setLoading(true);

        try {
            // Connect your password-reset API here.
            //
            // Example:
            // await fetch("/api/auth/forgot-password", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ email }),
            // });

            await new Promise((resolve) => setTimeout(resolve, 700));

            setSubmitted(true);
        } catch (error) {
            console.error("Password reset error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#08090b] text-slate-100 relative overflow-hidden">

            {/* ==========================================
                BACKGROUND
            ========================================== */}
            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/[0.045] blur-[120px]" />

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.035] blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.018]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

            </div>

            {/* ==========================================
                NAVIGATION
            ========================================== */}
            <header className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-6">

                <div className="flex items-center justify-between">

                    <a
                        href="/apps/systems-one"
                        className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group"
                    >
                        <ArrowLeft
                            size={15}
                            className="group-hover:-translate-x-0.5 transition-transform"
                        />

                        <span>Systems One</span>
                    </a>

                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600">
                        <ShieldCheck size={13} />
                        Secure Recovery
                    </div>

                </div>

            </header>

            {/* ==========================================
                MAIN
            ========================================== */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-20">

                <div className="grid lg:grid-cols-12 gap-14 items-center">

                    {/* ==========================================
                        LEFT CONTENT
                    ========================================== */}
                    <div className="lg:col-span-5">

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] text-blue-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-7">

                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />

                            Account Recovery

                        </div>

                        <h1 className="text-5xl sm:text-6xl font-semibold tracking-[-0.05em] leading-[0.95] text-white">

                            Forgot your
                            <br />

                            <span className="text-slate-500">
                                password?
                            </span>

                        </h1>

                        <p className="mt-7 text-base text-slate-400 leading-relaxed max-w-md">
                            No problem. Enter the email address associated with
                            your Systems One account and we'll send you a secure
                            password reset link.
                        </p>

                        {/* Recovery Information */}
                        <div className="mt-10 space-y-5">

                            <div className="flex gap-4">

                                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.02] flex items-center justify-center">
                                    <Mail
                                        size={15}
                                        className="text-blue-400"
                                    />
                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-slate-200">
                                        Check your email
                                    </p>

                                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                                        A password reset link will be sent to
                                        your registered email address.
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.02] flex items-center justify-center">
                                    <KeyRound
                                        size={15}
                                        className="text-indigo-400"
                                    />
                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-slate-200">
                                        Create a new password
                                    </p>

                                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                                        Follow the secure link to choose a new
                                        password for your account.
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.02] flex items-center justify-center">
                                    <Lock
                                        size={15}
                                        className="text-purple-400"
                                    />
                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-slate-200">
                                        Secure recovery
                                    </p>

                                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                                        Password recovery links should be
                                        treated as private and temporary.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ==========================================
                        RECOVERY CARD
                    ========================================== */}
                    <div className="lg:col-span-7">

                        <div className="border border-white/[0.08] bg-slate-950/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">

                            {/* Card Header */}
                            <div className="px-7 py-5 border-b border-white/[0.06] flex items-center justify-between">

                                <div>

                                    <p className="text-sm font-semibold text-white">
                                        Reset your password
                                    </p>

                                    <p className="mt-1 text-xs text-slate-600">
                                        Enter your account email to continue.
                                    </p>

                                </div>

                                <div className="w-8 h-8 rounded-lg bg-blue-500/[0.08] border border-blue-500/20 flex items-center justify-center">

                                    <KeyRound
                                        size={15}
                                        className="text-blue-400"
                                    />

                                </div>

                            </div>

                            {!submitted ? (

                                <form
                                    onSubmit={handleSubmit}
                                    className="p-7 space-y-6"
                                >

                                    {/* Email */}
                                    <div>

                                        <label className="block text-[10px] font-mono uppercase tracking-[0.15em] text-slate-600 mb-2">
                                            Email Address
                                        </label>

                                        <div className="relative">

                                            <Mail
                                                size={15}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
                                            />

                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                                autoComplete="email"
                                                placeholder="you@example.com"
                                                className="w-full bg-white/[0.025] border border-white/[0.08] rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                            />

                                        </div>

                                        <p className="mt-2 text-[10px] text-slate-700">
                                            Enter the email you used when
                                            creating your Systems One account.
                                        </p>

                                    </div>

                                    {/* Security Notice */}
                                    <div className="p-4 rounded-xl border border-blue-500/10 bg-blue-500/[0.03]">

                                        <div className="flex gap-3">

                                            <ShieldCheck
                                                size={16}
                                                className="text-blue-400 shrink-0 mt-0.5"
                                            />

                                            <p className="text-xs text-slate-500 leading-relaxed">
                                                For your security, reset
                                                instructions will only be sent
                                                through the account's registered
                                                email address.
                                            </p>

                                        </div>

                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all shadow-lg shadow-blue-950/20"
                                    >
                                        {loading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending Reset Link...
                                            </>
                                        ) : (
                                            <>
                                                Send Reset Link
                                                <ArrowRight size={16} />
                                            </>
                                        )}
                                    </button>

                                    {/* Back to Sign In */}
                                    <a
                                        href="/signin"
                                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] text-slate-400 hover:text-white text-sm transition-all"
                                    >
                                        <ArrowLeft size={15} />
                                        Back to Sign In
                                    </a>

                                </form>

                            ) : (

                                /* ==========================================
                                   SUCCESS STATE
                                ========================================== */
                                <div className="p-7">

                                    <div className="py-8 text-center">

                                        <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/20 flex items-center justify-center">

                                            <CheckCircle2
                                                size={26}
                                                className="text-emerald-400"
                                            />

                                        </div>

                                        <h2 className="mt-6 text-xl font-semibold text-white">
                                            Check your email
                                        </h2>

                                        <p className="mt-3 max-w-sm mx-auto text-sm text-slate-500 leading-relaxed">
                                            If an account exists for{" "}
                                            <span className="text-slate-300">
                                                {email}
                                            </span>
                                            , you'll receive instructions for
                                            resetting your password shortly.
                                        </p>

                                        <div className="mt-7 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-left">

                                            <div className="flex gap-3">

                                                <Mail
                                                    size={15}
                                                    className="text-blue-400 shrink-0 mt-0.5"
                                                />

                                                <div>

                                                    <p className="text-xs font-semibold text-slate-300">
                                                        Didn't receive the email?
                                                    </p>

                                                    <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">
                                                        Check your spam or junk
                                                        folder. You can also
                                                        request another reset
                                                        link after a short wait.
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="mt-7 flex flex-col gap-3">

                                            <a
                                                href="/signin"
                                                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors"
                                            >
                                                Return to Sign In
                                                <ArrowRight size={16} />
                                            </a>

                                            <button
                                                type="button"
                                                onClick={() => setSubmitted(false)}
                                                className="inline-flex items-center justify-center px-5 py-3 text-xs text-slate-600 hover:text-slate-300 transition-colors"
                                            >
                                                Use a different email
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            )}

                        </div>

                        {/* Footer */}
                        <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-slate-700">

                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                            Systems One Recovery Online

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}