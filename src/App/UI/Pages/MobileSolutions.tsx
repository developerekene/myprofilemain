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
    GitBranch
} from 'lucide-react';
import NavbarNew from '../Components/NavbarNew';

export default function MobileSolutions() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-white">
            <NavbarNew />
            {/* 1. HERO DECK LAYER */}
            <header className="relative py-28 sm:py-36 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/50 overflow-hidden">
                {/* Ambient background glow grids */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
                    <div className="absolute top-12 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8 text-center md:text-left md:flex md:items-center md:justify-between md:gap-12">
                    <div className="max-w-3xl space-y-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full inline-block">
                            Cross-Platform Native Engineering
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]">
                            High-Performance <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-indigo-400">
                                Mobile Ecosystems
                            </span>
                        </h1>
                        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                            We build production-grade iOS and Android mobile applications using React Native and Expo. Get seamless native animations, offline-first architectures, and fluid user experiences compiled from a single, robust TypeScript codebase.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#ecosystem"
                                className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-sky-950/50 hover:from-sky-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>Explore the Architecture</span>
                                <ArrowRight size={16} className="opacity-70 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="mailto:hello@ekenedilichukwu.com?subject=Mobile%20App%20Development%20Inquiry"
                                className="border border-slate-800 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <MessageSquare size={16} className="text-slate-500" />
                                <span>Scope Your Project</span>
                            </a>
                        </div>
                    </div>

                    {/* Visual Floating Mockup Frame */}
                    <div className="hidden md:flex flex-shrink-0 w-80 h-[560px] bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[48px] p-3.5 shadow-2xl relative group hover:border-slate-700 transition-all">
                        <div className="w-full h-full bg-slate-950 rounded-[38px] border border-slate-900/60 p-6 flex flex-col justify-between relative overflow-hidden">
                            {/* Top Notch UI */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-950 rounded-b-2xl border-x border-b border-slate-900" />

                            <div className="pt-8 space-y-4">
                                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                    <Sparkles size={16} />
                                </div>
                                <div className="h-4 w-2/3 bg-slate-900 rounded-md" />
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-slate-900/60 rounded-md" />
                                    <div className="h-2 w-5/6 bg-slate-900/60 rounded-md" />
                                </div>
                            </div>

                            <div className="bg-slate-900/30 border border-slate-900 p-4 rounded-xl space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="h-2 w-12 bg-slate-800 rounded-md" />
                                    <div className="h-3 w-8 bg-sky-500/20 rounded-md" />
                                </div>
                                <div className="h-1.5 w-full bg-slate-900 rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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
                            href="mailto:hello@ekenedilichukwu.com?subject=Inquiry%20regarding%20Mobile%20Engineering%20Partnership&body=Hi%20Ekene%2C%20I'm%20looking%20to%20develop%20a%20high-performance%20cross-platform%20mobile%20application.%20Let's%20connect."
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

        </div>
    );
}