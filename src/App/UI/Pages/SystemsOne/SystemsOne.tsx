import React from "react";
import {
    Activity,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Database,
    Gauge,
    KeyRound,
    Layers3,
    Lock,
    ShieldCheck,
    UserPlus,
} from "lucide-react";
import Footer from "../../Components/Footer";

const features = [
    {
        icon: UserPlus,
        title: "Create an Account",
        description:
            "Create your Systems One account through a simple and streamlined registration experience.",
    },
    {
        icon: Lock,
        title: "Secure Sign In",
        description:
            "Sign in securely and access protected areas of the Systems One platform with authenticated sessions.",
    },
    {
        icon: ShieldCheck,
        title: "Protected Sessions",
        description:
            "Keep authenticated sessions protected while maintaining reliable access across the platform.",
    },
    {
        icon: KeyRound,
        title: "Password Recovery",
        description:
            "Recover access to your account through a secure password reset and account recovery workflow.",
    },
];

const capabilities = [
    "User registration",
    "Secure sign in",
    "Authenticated sessions",
    "Password recovery",
    "Protected account access",
    "Account management",
];

const architecture = [
    {
        icon: UserPlus,
        title: "Create an Account",
        description:
            "New users can create a Systems One account through a streamlined registration experience.",
    },
    {
        icon: Lock,
        title: "Secure Sign In",
        description:
            "Authenticated users can securely sign in and access protected areas of the Systems One platform.",
    },
    {
        icon: KeyRound,
        title: "Recover Access",
        description:
            "Forgot your password? Users can securely initiate account recovery and reset their credentials.",
    },
];

const stats = [
    { value: "Secure", label: "Authentication" },
    { value: "24/7", label: "Account Access" },
    { value: "Protected", label: "User Sessions" },
    { value: "Simple", label: "Account Recovery" },
];

export default function SystemsOneLandingPage() {
    return (
        <main className="min-h-screen bg-[#05070a] text-white overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/[0.06] blur-[140px]" />

                <div className="absolute top-[800px] right-[-300px] w-[600px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
            </div>

            {/* Navigation */}
            <nav className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between border-b border-white/[0.05]">
                <a
                    href="#"
                    className="flex items-center gap-3"
                >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-blue-400">
                            S1
                        </span>
                    </div>

                    <div>
                        <span className="font-semibold tracking-tight">
                            Systems One
                        </span>

                        <span className="hidden sm:block text-[9px] uppercase tracking-[0.25em] text-slate-600 font-mono">
                            Secure Platform
                        </span>
                    </div>
                </a>

                <div className="hidden md:flex items-center gap-8 text-xs text-slate-400">
                    <a
                        href="#platform"
                        className="hover:text-white transition-colors"
                    >
                        Platform
                    </a>

                    <a
                        href="#authentication"
                        className="hover:text-white transition-colors"
                    >
                        Authentication
                    </a>

                    <a
                        href="#security"
                        className="hover:text-white transition-colors"
                    >
                        Security
                    </a>

                    <a
                        href="/signin"
                        className="text-slate-300 hover:text-white transition-colors"
                    >
                        Sign In
                    </a>

                    <a
                        href="/signup"
                        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition-all"
                    >
                        Get Started
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 md:pt-32 pb-28">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] text-blue-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Secure Platform
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-[-0.05em] leading-[0.95]">
                        One account.
                        <br />

                        <span className="text-slate-500">
                            Complete access.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed">
                        Systems One provides a secure account platform for
                        managing user identity, authentication, and access.
                        Sign up, sign in, recover your account, and securely
                        access the Systems One ecosystem from one place.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3">
                        <a
                            href="/signup"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium transition-colors"
                        >
                            Create Account
                            <ArrowRight size={16} />
                        </a>

                        <a
                            href="/signin"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/[0.03] text-slate-300 text-sm transition-colors"
                        >
                            Sign In
                            <ChevronRight size={16} />
                        </a>
                    </div>
                </div>

                {/* Authentication Flow */}
                <div className="mt-20 relative">
                    <div className="absolute inset-0 bg-blue-500/[0.04] blur-3xl" />

                    <div className="relative border border-white/[0.08] rounded-2xl bg-slate-950/70 overflow-hidden">
                        {/* Terminal Header */}
                        <div className="h-10 px-4 border-b border-white/[0.06] flex items-center justify-between">
                            <div className="flex gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-400/50" />
                                <span className="w-2 h-2 rounded-full bg-yellow-400/50" />
                                <span className="w-2 h-2 rounded-full bg-green-400/50" />
                            </div>

                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                                systems-one / authentication
                            </span>
                        </div>

                        {/* Flow */}
                        <div className="grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
                            {[
                                {
                                    icon: UserPlus,
                                    label: "ACCOUNT",
                                    value: "SIGN UP",
                                },
                                {
                                    icon: Lock,
                                    label: "AUTHENTICATION",
                                    value: "SIGN IN",
                                },
                                {
                                    icon: ShieldCheck,
                                    label: "SECURITY",
                                    value: "SESSION",
                                },
                                {
                                    icon: KeyRound,
                                    label: "RECOVERY",
                                    value: "PASSWORD RESET",
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="p-7 relative"
                                    >
                                        <div className="flex items-center justify-between">
                                            <Icon
                                                size={18}
                                                className="text-blue-400"
                                            />

                                            <span className="font-mono text-[9px] text-slate-600">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <div className="mt-12">
                                            <p className="text-[9px] font-mono tracking-[0.2em] text-slate-600">
                                                {item.label}
                                            </p>

                                            <p className="mt-2 font-mono text-sm text-slate-300">
                                                {item.value}
                                            </p>
                                        </div>

                                        <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="relative z-10 border-y border-white/[0.05] bg-white/[0.015]">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="px-6 lg:px-8 py-8 border-r border-b lg:border-b-0 border-white/[0.05] last:border-r-0"
                        >
                            <p className="text-2xl md:text-3xl font-semibold tracking-tight">
                                {stat.value}
                            </p>

                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-600 font-mono">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Platform */}
            <section
                id="platform"
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28"
            >
                <div className="max-w-2xl">
                    <p className="text-blue-400 text-[10px] font-mono uppercase tracking-[0.25em]">
                        Account Platform
                    </p>

                    <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
                        Everything required to
                        <span className="text-slate-500">
                            {" "}
                            access your account.
                        </span>
                    </h2>

                    <p className="mt-6 text-slate-400 leading-relaxed">
                        Systems One provides the core authentication experience
                        for the platform, giving users a secure and
                        straightforward way to create accounts, authenticate,
                        maintain sessions, and recover access when needed.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] mt-16 rounded-xl overflow-hidden border border-white/[0.06]">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="bg-[#070a0e] p-7 hover:bg-blue-500/[0.025] transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center">
                                    <Icon
                                        size={17}
                                        className="text-blue-400"
                                    />
                                </div>

                                <h3 className="mt-7 text-sm font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Authentication */}
            <section
                id="authentication"
                className="relative z-10 border-y border-white/[0.05] bg-white/[0.012]"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Left */}
                        <div>
                            <p className="text-blue-400 text-[10px] font-mono uppercase tracking-[0.25em]">
                                Authentication
                            </p>

                            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
                                Simple access.
                                <br />

                                <span className="text-slate-500">
                                    Strong protection.
                                </span>
                            </h2>

                            <p className="mt-6 text-slate-400 leading-relaxed max-w-xl">
                                Systems One gives users everything they need to
                                securely manage access to their account, from
                                initial registration through authentication
                                and account recovery.
                            </p>

                            <div className="mt-10 space-y-3">
                                {capabilities.map((capability) => (
                                    <div
                                        key={capability}
                                        className="flex items-center gap-3 text-sm text-slate-400"
                                    >
                                        <CheckCircle2
                                            size={15}
                                            className="text-blue-400 shrink-0"
                                        />

                                        {capability}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Authentication Cards */}
                        <div className="space-y-3">
                            {architecture.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group p-6 rounded-xl border border-white/[0.06] bg-slate-950/60 hover:border-blue-500/20 transition-colors"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0">
                                                <Icon
                                                    size={18}
                                                    className="text-blue-400"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-semibold">
                                                        {item.title}
                                                    </h3>

                                                    <span className="font-mono text-[9px] text-slate-700">
                                                        0{index + 1}
                                                    </span>
                                                </div>

                                                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Security */}
            <section
                id="security"
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28"
            >
                <div className="grid md:grid-cols-3 gap-5">
                    {/* Main Security Card */}
                    <div className="md:col-span-2 p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-blue-500/[0.06] to-transparent">
                        <ShieldCheck
                            size={22}
                            className="text-blue-400"
                        />

                        <h2 className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight">
                            Your account stays protected.
                        </h2>

                        <p className="mt-4 max-w-xl text-sm text-slate-400 leading-relaxed">
                            Systems One is designed around secure
                            authentication, protected sessions, and reliable
                            account recovery so users can access the platform
                            with confidence.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "Secure Authentication",
                                "Protected Sessions",
                                "Account Recovery",
                                "Access Control",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1.5 rounded-md border border-white/[0.07] bg-white/[0.02] text-[10px] font-mono text-slate-400"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Status Card */}
                    <div className="p-8 rounded-2xl border border-white/[0.06] bg-slate-950/50">
                        <Gauge
                            size={22}
                            className="text-blue-400"
                        />

                        <h3 className="mt-8 text-lg font-semibold">
                            Platform Status
                        </h3>

                        <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                            Systems One authentication services are designed
                            to provide dependable access to registered users
                            across the platform.
                        </p>

                        <div className="mt-8 h-px bg-white/[0.06]" />

                        <div className="mt-5 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-slate-600">
                                SYSTEM STATUS
                            </span>

                            <span className="text-emerald-400 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                OPERATIONAL
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section
                id="contact"
                className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center"
            >
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Layers3
                        size={22}
                        className="text-blue-400"
                    />
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-semibold tracking-[-0.04em]">
                    Your account.
                    <br />

                    <span className="text-slate-500">
                        Your access.
                    </span>
                </h2>

                <p className="mt-6 max-w-xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed">
                    Create your Systems One account or sign in to access the
                    platform. Forgot your password? Account recovery is built
                    right in.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                        href="/signup"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-sm font-medium transition-colors"
                    >
                        Create Account
                        <ArrowRight size={16} />
                    </a>

                    <a
                        href="/signin"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/[0.03] text-slate-300 text-sm transition-colors"
                    >
                        Sign In
                        <ChevronRight size={16} />
                    </a>
                </div>

                <a
                    href="/forgot-password"
                    className="inline-block mt-5 text-xs text-slate-600 hover:text-blue-400 transition-colors"
                >
                    Forgot your password?
                </a>
            </section>

            <Footer />
        </main>
    );
}