import React from 'react';
import {
    Smartphone,
    Layers,
    Zap,
    Cpu,
    CheckCircle2,
    MessageSquare,
    ArrowRight,
    ShieldCheck,
    Code2,
    Sparkles,
    Database,
    CloudLightning,
    GitBranch,
    ToolCaseIcon,
    ArrowDown,
    MessageCircle,
    ToolCase,
    Rocket
} from 'lucide-react';
import NavbarNew from '../Components/NavbarNew';
import Footer from '../Components/Footer';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGoogle, FaReact } from 'react-icons/fa';

export default function MobileSolutions() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-white">
            <NavbarNew />
            {/* ========================================== */}
            {/* MOBILE APP DEVELOPMENT HERO               */}
            {/* ========================================== */}
            <header className="relative py-24 sm:py-32 border-b border-slate-900 bg-slate-950 overflow-hidden">

                {/* Ambient Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-0 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">

                        {/* Main Message */}
                        <div className="lg:col-span-7">

                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 rounded-full bg-sky-400" />

                                <span className="text-xs uppercase tracking-[0.2em] font-bold text-sky-400">
                                    Mobile App Development
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
                                Have an idea for an app?
                                <span className="block text-slate-500">
                                    Let's turn it into something
                                </span>
                                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                                    people can actually use.
                                </span>
                            </h1>

                            <p className="mt-7 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                                I design and build mobile applications for businesses,
                                organisations, and individuals. From the first idea to
                                the finished app, I can help you plan, build, test, and
                                launch your product on both <strong className="text-white">
                                    Android and iPhone</strong>.
                            </p>

                            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
                                Whether you need an app for your customers, an internal
                                business tool, a marketplace, a booking system, an
                                automation platform, or something completely new, we can
                                build it around what your users actually need.
                            </p>

                            {/* CTA */}
                            <div className="pt-8 flex flex-col sm:flex-row gap-3">

                                <a
                                    href="mailto:ekenehq@gmail.com?subject=Mobile%20App%20Development%20Inquiry"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-black transition-all shadow-lg shadow-sky-500/10"
                                >
                                    Tell Me About Your App
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </a>

                                <a
                                    href="https://play.google.com/store/apps/details?id=com.devekene.ToolBox"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-sm font-bold transition-colors"
                                >
                                    See what we built
                                    <ArrowRight name="ArrowRicht" size={15} />
                                </a>

                            </div>

                            {/* Reassurance */}
                            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-500">

                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Android & iPhone
                                </span>

                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Designed around your needs
                                </span>

                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Built for real users
                                </span>

                            </div>

                        </div>

                        {/* App Visual */}
                        <div className="lg:col-span-5 flex justify-center">

                            <div className="relative w-[280px] sm:w-[320px]">

                                {/* Glow */}
                                <div className="absolute inset-10 bg-sky-500/10 rounded-full blur-3xl" />

                                {/* Phone */}
                                <div className="relative rounded-[3rem] border border-slate-700 bg-slate-900 p-3 shadow-2xl">

                                    <div className="relative aspect-[9/18.5] rounded-[2.4rem] bg-slate-950 border border-slate-800 overflow-hidden">

                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-20" />

                                        {/* App Preview */}
                                        <div className="h-full p-6 pt-12 flex flex-col">

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="h-3 w-20 bg-slate-800 rounded" />
                                                    <div className="mt-2 h-2 w-28 bg-slate-900 rounded" />
                                                </div>

                                                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                                                    <Smartphone
                                                        size={16}
                                                        className="text-sky-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Main App Card */}
                                            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/10 border border-sky-500/20 p-5">
                                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                                                    <Sparkles
                                                        size={18}
                                                        className="text-sky-400"
                                                    />
                                                </div>

                                                <div className="mt-6 h-3 w-28 bg-slate-700 rounded" />

                                                <div className="mt-3 space-y-2">
                                                    <div className="h-2 w-full bg-slate-800 rounded" />
                                                    <div className="h-2 w-4/5 bg-slate-800 rounded" />
                                                </div>
                                            </div>

                                            {/* Feature Cards */}
                                            <div className="mt-5 grid grid-cols-2 gap-3">

                                                <div className="h-24 rounded-xl bg-slate-900 border border-slate-800 p-3">
                                                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10" />
                                                    <div className="mt-4 h-2 w-12 bg-slate-800 rounded" />
                                                </div>

                                                <div className="h-24 rounded-xl bg-slate-900 border border-slate-800 p-3">
                                                    <div className="w-7 h-7 rounded-lg bg-purple-500/10" />
                                                    <div className="mt-4 h-2 w-12 bg-slate-800 rounded" />
                                                </div>

                                            </div>

                                            {/* Bottom Navigation */}
                                            <div className="mt-auto h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-around">
                                                <div className="w-5 h-5 rounded bg-sky-500/20" />
                                                <div className="w-5 h-5 rounded bg-slate-800" />
                                                <div className="w-5 h-5 rounded bg-slate-800" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Floating Android / iPhone Badge */}
                                <div className="absolute -left-6 top-1/3 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl">
                                    <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                                        Available For
                                    </div>

                                    <div className="mt-1 text-sm font-extrabold text-white">
                                        Android + iPhone
                                    </div>
                                </div>

                                {/* Floating Custom Badge */}
                                <div className="absolute -right-6 bottom-1/4 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />

                                        <span className="text-xs font-bold text-slate-300">
                                            Built Around You
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </header>

            {/* ========================================== */}
            {/* HOW IT WORKS                               */}
            {/* ========================================== */}
            <section
                id="how-it-works"
                className="relative py-24 sm:py-32 bg-slate-950 border-b border-slate-900 overflow-hidden"
            >
                {/* Ambient Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Section Header */}
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 rounded-full bg-sky-400" />

                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-sky-400">
                                How It Works
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08]">
                            From a rough idea
                            <span className="block text-slate-500">
                                to an app people
                            </span>
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                                actually want to use.
                            </span>
                        </h2>

                        <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                            You don't need a finished specification or a technical
                            background. We start with what you know, figure out what
                            needs to be built, and turn it into a practical product.
                        </p>
                    </div>

                    {/* Process */}
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                        {/* Step 01 */}
                        <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-sky-500/30 transition-colors">

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black tracking-widest text-sky-400">
                                    01
                                </span>

                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                                    <MessageCircle
                                        size={18}
                                        className="text-sky-400"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-8 text-lg font-extrabold text-white">
                                Tell Me Your Idea
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                We talk through what you want to build, who it is for,
                                and the problem you want the app to solve.
                            </p>

                            <div className="mt-6 h-px bg-slate-800" />

                            <p className="mt-4 text-xs font-semibold text-slate-600">
                                No technical jargon required.
                            </p>
                        </div>

                        {/* Step 02 */}
                        <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-indigo-500/30 transition-colors">

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black tracking-widest text-indigo-400">
                                    02
                                </span>

                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                                    <ToolCase
                                        size={18}
                                        className="text-indigo-400"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-8 text-lg font-extrabold text-white">
                                Plan the Product
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                We turn the idea into a clear plan covering features,
                                user journeys, screens, technology, and what should
                                be built first.
                            </p>

                            <div className="mt-6 h-px bg-slate-800" />

                            <p className="mt-4 text-xs font-semibold text-slate-600">
                                Build what matters. Skip what doesn't.
                            </p>
                        </div>

                        {/* Step 03 */}
                        <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black tracking-widest text-purple-400">
                                    03
                                </span>

                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                    <Code2
                                        size={18}
                                        className="text-purple-400"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-8 text-lg font-extrabold text-white">
                                Build & Test
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                I design and develop the app, connect the necessary
                                systems, and test the experience across real devices
                                and use cases.
                            </p>

                            <div className="mt-6 h-px bg-slate-800" />

                            <p className="mt-4 text-xs font-semibold text-slate-600">
                                Android and iPhone ready.
                            </p>
                        </div>

                        {/* Step 04 */}
                        <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-emerald-500/30 transition-colors">

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black tracking-widest text-emerald-400">
                                    04
                                </span>

                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <Rocket
                                        size={18}
                                        className="text-emerald-400"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-8 text-lg font-extrabold text-white">
                                Launch & Improve
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                Once everything is ready, we prepare the app for
                                launch and continue improving it based on feedback
                                and real-world usage.
                            </p>

                            <div className="mt-6 h-px bg-slate-800" />

                            <p className="mt-4 text-xs font-semibold text-slate-600">
                                Launch is the beginning, not the end.
                            </p>
                        </div>

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                        <div>
                            <p className="text-xs uppercase tracking-[0.18em] font-bold text-slate-500">
                                Have an idea already?
                            </p>

                            <h3 className="mt-2 text-xl sm:text-2xl font-black text-white">
                                Let's figure out what it could become.
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                A conversation is all you need to get started.
                            </p>
                        </div>

                        <a
                            href="mailto:ekenehq@gmail.com?subject=Mobile%20App%20Development%20Inquiry"
                            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 text-sm font-black transition-colors"
                        >
                            Start a Conversation
                            <ArrowRight size={16} />
                        </a>

                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* 2. CORE METRICS ENGINE                     */}
            {/* ========================================== */}
            <section className="py-16 border-b border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">60 FPS</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">Fluid Interface Render</p>
                        </div>
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">2 Apps</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">Single Shared Codebase</p>
                        </div>
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">&lt; 3.5s</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">Cold App Launch Time</p>
                        </div>
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">100%</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">TypeScript Type-Safety</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 3. CORE CAPABILITIES MATRIX                */}
            {/* ========================================== */}
            <section id="ecosystem" className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900/30">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="max-w-2xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                            Engineering Pillars
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Production-Grade Capabilities
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            We look past basic layout shells. We specialize in building deep background integrations, absolute memory optimization, and rock-solid offline synchronization models.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Capability 1 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                                <CloudLightning size={20} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Offline-First Sync Engine</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Local caching schemes utilizing SQLite and MMKV for lightning-fast, asynchronous local data writing that queues and pushes up to your remote database background workers automatically.
                            </p>
                        </div>

                        {/* Capability 2 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                                <Cpu size={20} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Native Module Bridges</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Direct infrastructure access including biometric secure locks, location tracking telemetry, camera hardware interactions, and background system thread management routines.
                            </p>
                        </div>

                        {/* Capability 3 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                                <Database size={20} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Structured State Control</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Clean, robust state configuration utilizing TanStack Query and Zustand to manage real-time UI data streams while preventing memory overhead.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 4. THE EXPO DEPLOYMENT ENGINE (SEQUENCE)  */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <div className="text-center space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full inline-block">
                            Continuous Pipeline
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            The App Store Launch Sequence
                        </h2>
                        <p className="text-slate-400 text-sm max-w-xl mx-auto">
                            Our structured approach utilizing Expo Application Services (EAS) guarantees transparent milestones and rapid, stable platform deployments.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-slate-900 pl-6 sm:pl-8 ml-4 space-y-12">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-sky-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-sky-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">Phase 01 / Design Architecture</span>
                                <h3 className="text-lg font-bold text-white">System Specification & Theming</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    We lay down strict data type schemas, complete a comprehensive UX architecture analysis, and construct a highly optimized structural design blueprint matching your specific brand goals.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">Phase 02 / Continuous Integration</span>
                                <h3 className="text-lg font-bold text-white">EAS Test Builds & Ad-Hoc Prototyping</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    We generate internal distribution builds using EAS Build profiles. This lets you install the active application on your real smartphone devices instantly during early feedback intervals.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">Phase 03 / Final Verification</span>
                                <h3 className="text-lg font-bold text-white">Over-The-Air (OTA) & Store Production Launch</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    We handle the complete asset setup, construct release builds, and deploy to TestFlight and Google Play tracks. We also integrate Expo Updates for critical bug patches rolled out to users *instantly* without awaiting store approval loops.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 5. ECOSYSTEM TOOLING GRID                  */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900/40">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="max-w-2xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
                            The Stack Spec
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Ecosystem & Framework Tooling
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            The structural frameworks and platforms engineered directly into our native development workflow.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-mono text-xs font-bold flex-shrink-0">RN</div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">React Native</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">True native components yielding maximum scrolling performance.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-mono text-xs font-bold flex-shrink-0">EX</div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">Expo Runtime</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Unified tooling for rapid prototyping and platform integrations.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold flex-shrink-0">TS</div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">TypeScript</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Strict compilation checks eliminating runtime mobile app crashes.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold flex-shrink-0">TW</div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">Tailwind CSS</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Utility-first layouts translating beautifully to NativeWind styles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 6. CONVERSION FOOTER ENGAGEMENT            */}
            {/* ========================================== */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/[0.02] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                        Ready to Build Your Mobile Product?
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Let's bypass common architecture mistakes. Drop a quick operational brief to our main communications channel and let's structure a premium engineering scope.
                    </p>

                    <div className="pt-4">
                        <a
                            href="mailto:ekenehq@gmail.com?subject=Inquiry%20regarding%20Mobile%20Engineering%20Partnership&body=Hi%20Ekene%2C%20I'm%20looking%20to%20develop%20a%20high-performance%20cross-platform%20mobile%20application.%20Let's%20connect."
                            className="inline-flex bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-4 px-10 rounded-xl text-sm font-bold shadow-xl shadow-sky-950/40 items-center justify-center gap-2 hover:from-sky-500 hover:to-indigo-500 transition-all active:scale-[0.99] group"
                        >
                            <Smartphone size={16} className="text-sky-200" />
                            <span>Email me below</span>
                            <ArrowRight size={14} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-[10px] text-slate-500 font-mono mt-3">
                            Direct line to **hello@ekenedilichukwu.com**
                        </p>
                    </div>
                </div>
            </section>
            {/* ========================================== */}
            {/* TOOLBOX — PRODUCT SHOWCASE                 */}
            {/* ========================================== */}
            <section
                id="download"
                className="relative py-24 border-t border-slate-900 bg-slate-950 overflow-hidden"
            >
                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                        {/* Toolbox Image */}
                        <div className="relative flex justify-center">

                            {/* Glow */}
                            <div className="absolute inset-10 bg-indigo-500/10 blur-3xl rounded-full" />

                            <div className="relative max-w-sm w-full">

                                <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-3 shadow-2xl">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D4E22AQGeiJMJVfEg-w/feedshare-shrink_1280/B4EZ_oDfdzHMAM-/0/1786304657593?e=1788998400&v=beta&t=YQQDyQ53FVMRlu50rk4h3PsW8Rgu5PttBVZkopll_co"
                                        alt="Toolbox mobile application"
                                        className="w-full rounded-[1.5rem] object-cover"
                                    />
                                </div>

                                {/* Floating Label */}
                                <div className="absolute -bottom-5 -right-4 sm:-right-8 bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <Smartphone name="smartphone" size={18} />
                                        </div>

                                        <div>
                                            <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500">
                                                Live on Google Play
                                            </span>

                                            <span className="text-sm font-extrabold text-white">
                                                Toolbox by Devekene
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-7">

                            <div>
                                <div className="inline-flex items-center gap-2 mb-5">
                                    <span className="w-2 h-2 rounded-full bg-indigo-400" />

                                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-400">
                                        A Project I am proud of
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                                    Meet
                                    <span className="text-indigo-400"> Toolbox.</span>
                                </h2>

                                <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                                    A mobile application designed to put useful tools,
                                    information, and workflows directly in your hands.
                                </p>
                            </div>

                            <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                                Toolbox is built around a simple idea: the tools you use
                                should be easy to access when you need them. It brings
                                practical functionality into one convenient mobile
                                experience.
                            </p>

                            {/* Features */}
                            <div className="grid sm:grid-cols-2 gap-3">

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <RiJavascriptFill name="RiJavascriptFill" size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        Typescript
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <FaReact name="FaReact" size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        React Native
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                        <FaGoogle name="FaGoogle" size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        Google API
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                        <ToolCaseIcon name="ToolCaseIcon" size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        30+ individual tools
                                    </span>
                                </div>

                            </div>

                            {/* Download CTA */}
                            <div className="pt-2">

                                <a
                                    href="https://play.google.com/store/apps/details?id=com.devekene.ToolBox"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white hover:bg-slate-200 text-slate-950 rounded-xl font-black text-sm transition-all hover:scale-[1.02]"
                                >
                                    <span>Get Toolbox on Google Play</span>

                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M3 20.05v-16c0-.52.28-1 .73-1.27l12.44 12.44-3.69 3.69c-.27.27-.63.43-1.01.43H4c-.55 0-1-.45-1-1zm16.51-2.91L16.27 13.9l2.74-2.74 3.51 3.51c.27.27.43.63.43 1.01 0 .38-.16.74-.43 1.01l-2.02 2.02zM17.02 3.99l-3.51 3.51-2.74-2.74 3.24-3.24c.27-.27.63-.43 1.01-.43.38 0 .74.16 1.01.43l.99.99zM2.27 3.23L11.75 12.7l-2.75 2.75L3 9.27c-.47-.47-.73-1.1-.73-1.77V4c0-.28.06-.55.19-.77z" />
                                    </svg>
                                </a>

                                <p className="mt-3 text-xs text-slate-600">
                                    Available now for Android devices.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
}