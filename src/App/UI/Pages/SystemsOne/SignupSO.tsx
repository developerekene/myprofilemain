import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Eye,
    EyeOff,
    Lock,
    Mail,
    User,
    ShieldCheck,
    Clock,
} from "lucide-react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        registeredTime: new Date().toISOString(),
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        console.log("Systems One registration:", formData);

        // Connect your registration API here.
    };

    const handleGoogleSignup = () => {
        // Connect Google OAuth here.
        console.log("Continue with Google");
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
                        Secure Access
                    </div>

                </div>

            </header>

            {/* ==========================================
                SIGN UP CONTENT
            ========================================== */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-20">

                <div className="grid lg:grid-cols-12 gap-14 items-start">

                    {/* ==========================================
                        LEFT — INTRO
                    ========================================== */}
                    <div className="lg:col-span-5 lg:sticky lg:top-10">

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] text-blue-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-7">

                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />

                            Create Account

                        </div>

                        <h1 className="text-5xl sm:text-6xl font-semibold tracking-[-0.05em] leading-[0.95] text-white">

                            Your account.
                            <br />

                            <span className="text-slate-500">
                                Your access.
                            </span>

                        </h1>

                        <p className="mt-7 text-base text-slate-400 leading-relaxed max-w-md">
                            Create your Systems One account to securely access
                            applications, services, and resources across the
                            Systems One ecosystem.
                        </p>

                        {/* Security Information */}
                        <div className="mt-10 space-y-5">

                            <div className="flex gap-4">

                                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.02] flex items-center justify-center">
                                    <Lock
                                        size={15}
                                        className="text-blue-400"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-200">
                                        Secure authentication
                                    </p>

                                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                                        Your credentials are protected using
                                        secure authentication practices.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.02] flex items-center justify-center">
                                    <ShieldCheck
                                        size={15}
                                        className="text-indigo-400"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-200">
                                        One account
                                    </p>

                                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                                        Use one identity to access the wider
                                        Systems One platform.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.02] flex items-center justify-center">
                                    <Clock
                                        size={15}
                                        className="text-purple-400"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-200">
                                        Account registration
                                    </p>

                                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                                        Your registration time is securely
                                        recorded when your account is created.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ==========================================
                        RIGHT — FORM
                    ========================================== */}
                    <div className="lg:col-span-7">

                        <div className="border border-white/[0.08] bg-slate-950/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">

                            {/* Form Header */}
                            <div className="px-7 py-5 border-b border-white/[0.06] flex items-center justify-between">

                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Create your account
                                    </p>

                                    <p className="mt-1 text-xs text-slate-600">
                                        Complete the form below to get started.
                                    </p>
                                </div>

                                <div className="w-8 h-8 rounded-lg bg-blue-500/[0.08] border border-blue-500/20 flex items-center justify-center">
                                    <User
                                        size={15}
                                        className="text-blue-400"
                                    />
                                </div>

                            </div>

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="p-7 space-y-6"
                            >

                                {/* Name */}
                                <div className="grid sm:grid-cols-2 gap-4">

                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-[0.15em] text-slate-600 mb-2">
                                            First Name
                                        </label>

                                        <div className="relative">

                                            <User
                                                size={15}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
                                            />

                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                placeholder="John"
                                                className="w-full bg-white/[0.025] border border-white/[0.08] rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                            />

                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-[0.15em] text-slate-600 mb-2">
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Doe"
                                            className="w-full bg-white/[0.025] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                        />
                                    </div>

                                </div>

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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                            className="w-full bg-white/[0.025] border border-white/[0.08] rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                        />

                                    </div>

                                </div>

                                {/* Registered Time */}
                                <div>

                                    <label className="block text-[10px] font-mono uppercase tracking-[0.15em] text-slate-600 mb-2">
                                        Registration Time
                                    </label>

                                    <div className="relative">

                                        <Clock
                                            size={15}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
                                        />

                                        <input
                                            type="text"
                                            value={new Date(
                                                formData.registeredTime
                                            ).toLocaleString()}
                                            readOnly
                                            className="w-full bg-white/[0.015] border border-white/[0.06] rounded-lg pl-10 pr-4 py-3 text-sm text-slate-500 outline-none cursor-not-allowed"
                                        />

                                    </div>

                                    <p className="mt-2 text-[10px] text-slate-700">
                                        Automatically generated when the
                                        registration form is initialized.
                                    </p>

                                </div>

                                {/* Password */}
                                <div>

                                    <label className="block text-[10px] font-mono uppercase tracking-[0.15em] text-slate-600 mb-2">
                                        Password
                                    </label>

                                    <div className="relative">

                                        <Lock
                                            size={15}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
                                        />

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            minLength={8}
                                            placeholder="Create a secure password"
                                            className="w-full bg-white/[0.025] border border-white/[0.08] rounded-lg pl-10 pr-11 py-3 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-300"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={15} />
                                            ) : (
                                                <Eye size={15} />
                                            )}
                                        </button>

                                    </div>

                                </div>

                                {/* Confirm Password */}
                                <div>

                                    <label className="block text-[10px] font-mono uppercase tracking-[0.15em] text-slate-600 mb-2">
                                        Confirm Password
                                    </label>

                                    <div className="relative">

                                        <Lock
                                            size={15}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
                                        />

                                        <input
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            placeholder="Repeat your password"
                                            className="w-full bg-white/[0.025] border border-white/[0.08] rounded-lg pl-10 pr-11 py-3 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-300"
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff size={15} />
                                            ) : (
                                                <Eye size={15} />
                                            )}
                                        </button>

                                    </div>

                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-3">

                                    <div className="mt-0.5 w-4 h-4 shrink-0 rounded border border-white/10 bg-white/[0.02] flex items-center justify-center">
                                        <Check
                                            size={10}
                                            className="text-blue-400"
                                        />
                                    </div>

                                    <p className="text-[11px] text-slate-600 leading-relaxed">
                                        By creating an account, you agree to
                                        the Systems One terms of service and
                                        privacy policy.
                                    </p>

                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-950/20"
                                >
                                    Create Systems One Account
                                    <ArrowRight size={16} />
                                </button>

                                {/* Divider */}
                                <div className="relative py-1">

                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/[0.06]" />
                                    </div>

                                    <div className="relative flex justify-center">
                                        <span className="px-4 bg-slate-950 text-[10px] font-mono uppercase tracking-widest text-slate-700">
                                            Or continue with
                                        </span>
                                    </div>

                                </div>

                                {/* Google */}
                                <button
                                    type="button"
                                    onClick={handleGoogleSignup}
                                    className="w-full inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] text-slate-300 hover:text-white text-sm font-medium transition-all"
                                >

                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.76h3.57c2.09-1.92 3.28-4.74 3.28-8.08z"
                                        />

                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.67l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.15v2.85A11 11 0 0 0 12 23z"
                                        />

                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.12-1.43.34-2.1V7.05H2.15A11 11 0 0 0 1 12c0 1.77.42 3.44 1.15 4.95l3.69-2.85z"
                                        />

                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.08.56 4.22 1.66l3.16-3.16C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.15 7.05l3.69 2.85C6.71 7.31 9.14 5.38 12 5.38z"
                                        />
                                    </svg>

                                    Continue with Google

                                </button>

                                {/* Sign In */}
                                <p className="text-center text-xs text-slate-600 pt-2">

                                    Already have an account?

                                    <a
                                        href="/apps/systems-one/sign-in"
                                        className="ml-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Sign in
                                    </a>

                                </p>

                            </form>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}