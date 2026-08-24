import React from 'react';
import {
    Globe,
    Zap,
    MessageSquare,
    ArrowRight,
    Database,
    Server,
    Terminal
} from 'lucide-react';
import NavbarNew from '../Components/NavbarNew';
import Footer from '../Components/Footer';

export default function WebSolutions() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-white">
            <NavbarNew />

            {/* ========================================== */}
            {/* 1. HERO DECK LAYER                         */}
            {/* ========================================== */}
            <header className="relative py-28 sm:py-36 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/50 overflow-hidden">
                {/* Ambient background glow grids */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
                    <div className="absolute top-12 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8 text-center md:text-left md:flex md:items-center md:justify-between md:gap-12">
                    <div className="max-w-3xl space-y-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
                            Enterprise Web Architectures
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]">
                            Blazing Fast <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                Web Systems
                            </span>
                        </h1>
                        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                            We build hyper-scalable web platforms using React and Next.js. Move past heavy templates and give your clients static speed combined with dynamic serverless capabilities, precision responsive layouts, and rock-solid SEO performance out of the box.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#architecture"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-indigo-950/50 hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>Explore the Architecture</span>
                                <ArrowRight size={16} className="opacity-70 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="border border-slate-800 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <MessageSquare size={16} className="text-slate-500" />
                                <span>Scope Your Project</span>
                            </a>
                        </div>
                    </div>

                    {/* Visual Floating Web Browser Frame */}
                    <div className="hidden md:flex flex-shrink-0 w-[420px] h-80 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-2 shadow-2xl relative group hover:border-slate-700 transition-all">
                        <div className="w-full h-full bg-slate-950 rounded-xl border border-slate-900/60 flex flex-col justify-between relative overflow-hidden">
                            {/* Browser Window Chrome header */}
                            <div className="h-8 border-b border-slate-900 bg-slate-900/40 px-4 flex items-center space-x-1.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                <div className="h-4 w-40 bg-slate-950 rounded ml-4 border border-slate-900 text-[8px] font-mono text-slate-600 flex items-center px-2">localhost:3000</div>
                            </div>

                            <div className="p-6 space-y-4 flex-grow">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <Terminal size={14} />
                                    </div>
                                    <div className="space-y-1.5 flex-grow">
                                        <div className="h-3 w-1/3 bg-slate-900 rounded" />
                                        <div className="h-2 w-2/3 bg-slate-900/60 rounded" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3 pt-2">
                                    <div className="h-16 bg-slate-900/30 border border-slate-900 rounded-lg p-2 space-y-1">
                                        <div className="h-1.5 w-1/2 bg-slate-800 rounded" />
                                        <div className="h-1 w-full bg-slate-900 rounded" />
                                    </div>
                                    <div className="h-16 bg-slate-900/30 border border-slate-900 rounded-lg p-2 space-y-1">
                                        <div className="h-1.5 w-1/3 bg-slate-800 rounded" />
                                        <div className="h-1 w-5/6 bg-slate-900 rounded" />
                                    </div>
                                    <div className="h-16 bg-slate-900/30 border border-slate-900 rounded-lg p-2 space-y-1">
                                        <div className="h-1.5 w-1/2 bg-slate-800 rounded" />
                                        <div className="h-1 w-4/5 bg-slate-900 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ========================================== */}
            {/* 2. PERFORMANCE METRICS GRID                */}
            {/* ========================================== */}
            <section className="py-16 border-b border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">&lt; 1.2s</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">Largest Contentful Paint (LCP)</p>
                        </div>
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">100/100</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">Lighthouse SEO Performance</p>
                        </div>
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">0 ms</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">Edge Runtime Hydration Latency</p>
                        </div>
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">99.9%</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">Serverless Endpoint Uptime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 3. CORE CAPABILITIES MATRIX                */}
            {/* ========================================== */}
            <section id="architecture" className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900/30">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="max-w-2xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
                            Engineering Architecture
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Web Engineering Capabilities
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            We look past clean presentation layers. We build complex backends, deep API integration hooks, and secure state handling schemas tailored for real traffic demands.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Capability 1 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                                <Server size={20} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Serverless API Middleware</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Lightweight Next.js route handlers that execute isolated background tasks, validate request payloads, and map transactional database records without heavy server overhead.
                            </p>
                        </div>

                        {/* Capability 2 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                                <Zap size={20} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Dynamic Static Hydration</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Utilizing Incremental Static Regeneration (ISR) to pre-render public layouts into CDN caching slots while hydrating targeted dashboard sections asynchronously on load.
                            </p>
                        </div>

                        {/* Capability 3 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                                <Database size={20} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Flexible Context Caching</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Deep synchronization loops linking frontend structures to active Firestore clusters, ensuring atomic database operations and secure session validation keys.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 4. PERFORMANCE & PRODUCTION SEQUENCE        */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <div className="text-center space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full inline-block">
                            Development Pipeline
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            The Architecture Deployment Flow
                        </h2>
                        <p className="text-slate-400 text-sm max-w-xl mx-auto">
                            How we take your product requirements from absolute scratch down to a globally cached, production-grade web infrastructure system.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-slate-900 pl-6 sm:pl-8 ml-4 space-y-12">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">Phase 01 / Technical Discovery</span>
                                <h3 className="text-lg font-bold text-white">System Schema & State Modeling</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    We define strict payload expectations, map data storage relationships, and structure the state boundaries required to make sure your dashboard layers run without architectural bottlenecks.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">Phase 02 / Component Engineering</span>
                                <h3 className="text-lg font-bold text-white">Isomorphic Coding & Interface Tying</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    We construct component patterns wrapped directly inside Tailwind CSS styles. We leverage Next.js optimization layouts to eliminate layout shift metrics (CLS) entirely.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">Phase 03 / Continuous Delivery</span>
                                <h3 className="text-lg font-bold text-white">Edge Rollout & Optimization Audit</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    We launch the platform onto globally optimized serverless edge networks. We hook up continuous build integration hooks and complete deep Lighthouse performance audits before passing over administration keys.
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
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                            The Framework Spec
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Web Infrastructure & Tooling
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            The baseline technical framework engineered into our core modular production stacks.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold flex-shrink-0">NX</div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">Next.js / React</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Optimized routing structures coupled with server component compilation layers.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-mono text-xs font-bold flex-shrink-0">TS</div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">TypeScript</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Strict application contract structures eliminating common data handling errors.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-mono text-xs font-bold flex-shrink-0">TW</div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">Tailwind CSS</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Utility CSS definitions yielding minuscule production bundle assets.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold flex-shrink-0">FB</div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">Firebase Core</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Secure relational key lookups, identity tokens, and streaming sockets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 6. CONVERSION FOOTER ENGAGEMENT            */}
            {/* ========================================== */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/[0.02] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                        Ready to Deploy Your Web Product?
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Let's avoid standard monolithic code complications. Drop a breakdown of your application layout to our workspace channel to schedule a deep architecture session.
                    </p>

                    <div className="pt-4">
                        <a
                            href="/contact"
                            className="inline-flex bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-10 rounded-xl text-sm font-bold shadow-xl shadow-indigo-950/40 items-center justify-center gap-2 hover:from-indigo-500 hover:to-purple-500 transition-all active:scale-[0.99] group"
                        >
                            <Globe size={16} className="text-indigo-200" />
                            <span>Email me below</span>
                            <ArrowRight size={14} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                        </a>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}