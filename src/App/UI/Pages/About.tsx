import React from 'react';
import {
    Code2,
    Terminal,
    Cpu,
    GitBranch,
    Layers,
    Award,
    ExternalLink,
    MessageSquare,
    ArrowRight,
    ShieldCheck,
    Zap,
    Globe2,
    ArrowDown,
    Search,
    Globe
} from 'lucide-react';
import NavbarNew from '../Components/NavbarNew';
import Footer from '../Components/Footer';

export default function AboutEngineer() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-white">
            <NavbarNew />

            {/* ========================================== */}
            {/* 1. HERO ARCHITECTURE LAYER                 */}
            {/* ========================================== */}
            <header className="relative py-28 sm:py-36 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/50 overflow-hidden">
                {/* Subtle geometric lighting accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
                    <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">
                    <div className="space-y-4 max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-black px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                            The Mind Behind the Systems
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]">
                            Engineering High-Yield <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400">
                                Digital Ecosystems
                            </span>
                        </h1>
                    </div>

                    {/* Core Profile Narrative Block */}
                    <div className="grid md:grid-cols-12 gap-12 pt-6 items-start">
                        <div className="md:col-span-8 space-y-6 text-slate-400 text-base sm:text-lg leading-relaxed">
                            <p>
                                I am a Senior Software Engineer and Full-Stack Systems Architect with over six years of rigorous production experience building resilient web applications, autonomous AI architectures, and cross-platform mobile systems.
                            </p>
                            <p>
                                My professional technical stack centers on <strong className="text-white font-semibold">React, Python, React Native, Expo, TypeScript, and Firebase</strong>, integrated with cutting-edge workflow orchestration engines like <strong className="text-white font-semibold">n8n</strong> and frontier reasoning systems. I design software with an absolute focus on execution speed, strict type-safety boundaries, and zero operational waste.
                            </p>

                            {/* New AI Integration & Strategy Paragraph */}
                            <p>
                                Rather than treating Artificial Intelligence as a novelty, I treat it as a foundational infrastructure layer. I embed autonomous logic directly into business architectures—building intelligent agent networks that read/write securely to operational databases, handle complex data transformations, and automate high-value pipelines. My approach combines advanced multi-agent systems with deterministic workflows to eliminate hallucinations and achieve 100% predictable execution at scale.
                            </p>

                            {/* Technical Research & Google Mastery Statement */}
                            <p>
                                A core component of my engineering efficiency is an elite capability for technical research, rapid synthesis, and advanced Google dorking (structured search patterns). I don't waste time guess-checking errors; I efficiently trace stack logs through obscure open-source issue trackers, dissect undocumented APIs, and isolate breaking dependencies. This rigorous investigative speed allows me to solve complex architectural roadblocks in hours that typically stall engineering teams for days.
                            </p>

                            {/* AI Tool Stack Inventory Grid */}
                            <div className="pt-4 space-y-3">
                                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                                    Production AI Toolchain & Efficiency Vector
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                        <span>OpenAI API (GPT-4o)</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                        <span>Anthropic Claude (3.5 Sonnet)</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                        <span>DeepSeek V3 / R1</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                        <span>n8n (Agent Routing)</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                        <span>Cursor Shards</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                        <span>GitHub Copilot</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                        <span>LangChain / LangGraph</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                        <span>v0 by Vercel</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                        <span>Perplexity Pro</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-slate-900 rounded-lg col-span-2 sm:col-span-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                                        <span>Ollama (Local LLMs)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Learn More Action Button Group */}
                            <div className="pt-6">
                                <a
                                    href="#mindset"
                                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 hover:bg-slate-850 text-white font-mono text-xs font-bold rounded-xl border border-slate-800 hover:border-slate-700 shadow-md transition-all active:scale-[0.99] group"
                                >
                                    <span>Learn More about Ekenedilichukwu</span>
                                    <ArrowDown size={13} className="text-purple-400 group-hover:translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Summary Spec Box */}
                        <div className="md:col-span-4 bg-slate-900/40 border border-slate-900 rounded-2xl p-6 space-y-4 font-mono text-xs">
                            <div className="text-slate-500 uppercase tracking-widest font-bold pb-2 border-b border-slate-900 text-[10px]">
                                System Architecture Specs
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Core Focus:</span>
                                <span className="text-purple-400 font-bold">Full-Stack / AI Ops</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Tenure:</span>
                                <span className="text-white font-bold">6+ Years Production</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Location Base:</span>
                                <span className="text-white font-bold">Lincoln, UK / Remote</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Preferred Stack:</span>
                                <span className="text-indigo-400 font-bold">TS, Next.js, Expo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ========================================== */}
            {/* 2. CHRONOLOGICAL MILESTONES TIMELINE       */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
                            Proven Performance
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Technical Milestones & Leadership
                        </h2>
                        <p className="text-slate-400 text-sm max-w-xl">
                            A historical footprint of systems engineered, technical assets deployed, and digital communities brought to market.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-slate-900 pl-6 sm:pl-8 ml-4 space-y-12">

                        {/* Project Milestone: Mobile Apps */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center">
                                <Code2 size={12} className="text-purple-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">Mobile Systems Architecture</span>
                                <h3 className="text-lg font-bold text-white">Ecobank Mobile Application</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Steered the core application build engineering and architecture optimization models. Directed multi-disciplinary development teams remotely to achieve extreme platform modularity, fluid cross-platform view scaling, and secure data isolation schemas.
                                </p>
                            </div>
                        </div>

                        {/* Project Milestone: iLead */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center">
                                <Globe2 size={12} className="text-indigo-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">Community Ecosystem Launch</span>
                                <h3 className="text-lg font-bold text-white">Founder, iLead Talent Incubator</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Established a global digital literacy ecosystem designed to bridge tech accessibility divides through structured education tracking modules (`iTrain`) and open source resource nodes.
                                </p>
                            </div>
                        </div>

                        {/* Project Milestone: Local Business AI Automations */}
                        <div className="relative">
                            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-sky-500 flex items-center justify-center">
                                <Cpu size={12} className="text-sky-400" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">Automated Intelligence Ops</span>
                                <h3 className="text-lg font-bold text-white">Local Enterprise Digital Modernization</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Launched a regional outreach framework empowering companies across Lincoln and remote spaces to deploy fixed-rate, node-based autonomous AI helpers that interface securely with business databases.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ========================================== */}
            {/* NEW: PODCASTS & MEDIA BROADCASTING LAYER   */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-xl space-y-3">
                            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full inline-block">
                                Audio Distribution Nodes
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                                Podcasts & Media Logs
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                Deconstructing complex software systems, advanced AI pipelines, and the relentless discipline required to survive and thrive in deep production cycles.
                            </p>
                        </div>

                        {/* Broadcast Action Buttons */}
                        <div className="flex items-center gap-3 self-start md:self-auto font-mono text-xs">
                            <a
                                href="/podcasts"
                                className="px-5 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-sky-950/30 flex items-center gap-2 transition-all group"
                            >
                                <span>Listen to Episodes</span>
                                <ArrowRight size={12} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <a
                                href="mailto:ekenehq@gmail.com?subject=Podcast%20Guest%20/%20Topic%20Pitch&body=Hi%20Kenny%2C%20%0D%0A%0D%0AI%20have%20a%20podcast%20collaboration%20proposal%20or%20a%20specific%20technical%20topic%20pitch%20for%20your%20show%3A"
                                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold rounded-xl border border-slate-800 flex items-center gap-2 transition-all"
                            >
                                <span>Pitch a Topic</span>
                            </a>
                        </div>
                    </div>

                    {/* Podcast Focus Categories Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {/* Show Category 1 */}
                        <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-2xl space-y-4 relative group hover:border-slate-800 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                <Terminal size={18} />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-500">Core Deep-Dives</span>
                                <h3 className="text-base font-bold text-white uppercase tracking-wide">The Full-Stack Blueprint</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Raw, unsalted teardowns of enterprise codebase challenges. I discuss optimizing heavy React Native rendering lifecycles, isolating runtime state engines, and setting up bulletproof deployment scripts.
                                </p>
                            </div>
                        </div>

                        {/* Show Category 2 */}
                        <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-2xl space-y-4 relative group hover:border-slate-800 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <Cpu size={18} />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">Automation Vectors</span>
                                <h3 className="text-base font-bold text-white uppercase tracking-wide">AI-Driven Operations</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Mapping out how businesses go from manual bottlenecks to autonomous workflows. Episodes cover the plumbing behind multi-agent orchestrations, token budgets, and connecting LLMs to live telemetry.
                                </p>
                            </div>
                        </div>

                        {/* Show Category 3 */}
                        <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-2xl space-y-4 relative group hover:border-slate-800 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Award size={18} />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">Execution Psychology</span>
                                <h3 className="text-base font-bold text-white uppercase tracking-wide">The Unyielding Mindset</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Dedicated audio logs mapping the mental frameworks required for long-term engineering. We dive into radical consistency, grit during critical system crashes, and managing elite asynchronous teams.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Recent Episode Log Snippet */}
                    <div className="p-5 bg-slate-900/30 border border-slate-900/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                            <span><strong className="text-white">Latest Micro-Log:</strong> "Building Defensively — Minimizing External Vendor Dependency in 2026."</span>
                        </div>
                        <span className="text-slate-600 text-[11px] self-start sm:self-center">Duration: 24 mins</span>
                    </div>

                </div>
            </section>
            {/* ========================================== */}
            {/* NEW: GOOGLE PLAY LIVE APPLICATIONS LAYER   */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-xl space-y-3">
                            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full inline-block">
                                Production Artifacts
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                                Live on Google Play
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                Explore our active native Android distributions. Engineered from a single TypeScript source, compiled for extreme performance, and deployed safely across global tracks.
                            </p>
                        </div>

                        {/* General Developer Track Link */}
                        <div className="font-mono text-xs self-start md:self-auto">
                            <a
                                href="https://play.google.com/console/u/1/developers/5305627726018173100/app-list?pli=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 border border-slate-800 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white font-bold rounded-xl flex items-center gap-2 transition-all group"
                            >
                                <span>View Google Developer Profile</span>
                                <ExternalLink size={12} className="opacity-50 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* 4 App Grid System */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {/* App 1: Toolbox */}
                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex flex-col justify-between h-56 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">TB</div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">Toolbox</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">High-efficiency technical configuration utilities and local asset processing managers.</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                                <span>Production Live</span>
                                <button className="text-emerald-400 group-hover:underline flex items-center gap-1 cursor-pointer">Get App &rarr;</button>
                            </div>
                        </div>

                        {/* App 2: D'roid One Mobile */}
                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex flex-col justify-between h-56 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-mono text-xs font-bold">D1</div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">D'roid One Mobile</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Mobile interface hub designed for secure real-time automation control and database streaming hooks.</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                                <span>Production Live</span>
                                <span className="text-purple-400 group-hover:underline flex items-center gap-1 cursor-pointer">Get App &rarr;</span>
                            </div>
                        </div>

                        {/* App 3: Knowledge City */}
                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex flex-col justify-between h-56 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold">KC</div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">Knowledge City</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Asynchronous learning ecosystem architecture featuring offline-first documentation modules.</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                                <span>Testing Phase</span>
                                {/* <span className="text-indigo-400 group-hover:underline flex items-center gap-1 cursor-pointer">Get App &rarr;</span> */}
                            </div>
                        </div>

                        {/* App 4: Ekenedilichukwu Mobile */}
                        <div className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl flex flex-col justify-between h-56 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-mono text-xs font-bold">EM</div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">Ekenedilichukwu Mobile</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Personal brand gateway vector housing live showcase portfolio data and asynchronous api access points.</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                                <span>Testing Phase</span>
                                {/* <span className="text-sky-400 group-hover:underline flex items-center gap-1 cursor-pointer">Get App &rarr;</span> */}
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="why-hire" className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900/40 relative overflow-hidden">
                {/* Subtle radial structural grid lines background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15" />

                <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                            Value Proposition
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Why I Build Differently
                        </h2>
                        <p className="text-slate-400 text-sm">
                            I don't write speculative code or chase hype cycles. I architect zero-waste digital systems designed explicitly for high availability, raw execution speed, and clear business leverage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Core Pillar 1: Enterprise-Grade Architecture */}
                        <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                <Cpu size={18} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase font-mono tracking-tight text-sm">
                                    01 // Production Ecosystem Depth
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    With over six years of full-stack engineering seniority, I deliver clean, production-hardened applications using <strong className="text-slate-200">React, TypeScript, Next.js, and Expo</strong>. I structure bulletproof type boundaries, optimize application life cycles, and scale headless real-time data backends on <strong className="text-slate-200">Firebase and Python</strong> environments.
                                </p>
                            </div>
                        </div>

                        {/* Core Pillar 2: High-Velocity AI Integration */}
                        <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                                <Terminal size={18} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase font-mono tracking-tight text-sm">
                                    02 // Deterministic AI Integration
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    I treat AI as complex system infrastructure rather than isolated chat wrappers. By wiring reasoning engines up to deterministic orchestration nodes like <strong className="text-slate-200">n8n</strong>, I build highly specialized multi-agent networks that read/write securely to operational pipelines with predictable execution and zero hallucination risk.
                                </p>
                            </div>
                        </div>

                        {/* Core Pillar 3: elite Investigative Speed */}
                        <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                                <Search size={18} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase font-mono tracking-tight text-sm">
                                    03 // Elite Investigative Velocity
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    My ultimate leverage is advanced technical research and targeted search mechanics. When complex stack breaks, dependency conflicts, or undocumented bugs occur, I systematically isolate variables and trace logs down to underlying repositories—solving architectural roadblocks in hours that typically freeze teams for days.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Quick Metrics Sub-Panel */}
                    <div className="p-8 bg-slate-900/30 border border-slate-900 rounded-2xl grid sm:grid-cols-3 gap-6 text-center font-mono relative overflow-hidden">
                        <div className="space-y-1">
                            <div className="text-2xl font-black text-white">6+ YEARS</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Production Engineering Seniority</div>
                        </div>
                        <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-slate-900 py-4 sm:py-0">
                            <div className="text-2xl font-black text-purple-400">100%</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Predictable AI Agent Execution</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-black text-white">ZERO</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Operational Code Waste</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* NEW: SPEAKING EVENTS & KNOWLEDGE NODES    */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6 space-y-16">

                    {/* Section Header with "See All" Action Element */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div className="space-y-3">
                            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                                Ecosystem Influence
                            </span>
                            <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                                Speaking Engagements & Technical Workshops
                            </h2>
                            <p className="text-slate-400 text-sm max-w-xl">
                                Driving digital literacy and technical excellence by presenting scalable architectures and practical AI blueprints to communities and developers.
                            </p>
                        </div>

                        {/* See All Interactive Button */}
                        <div className="font-mono text-xs self-start sm:self-auto">
                            <a
                                href="/speaking-events"
                                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white font-bold rounded-xl border border-slate-800 hover:border-slate-700 shadow-md transition-all group"
                            >
                                <span>See All Enguagements</span>
                                <ArrowRight size={12} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="grid gap-6">

                        {/* Event 1 */}
                        <div className="p-6 bg-slate-900/30 border border-slate-900 rounded-xl space-y-3 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900/60 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                        <MessageSquare size={14} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-white">Architecting Autonomous Workflows for Business Scaling</h3>
                                        <p className="text-xs text-slate-400">iLead Technical Deep Dive Series</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-md self-start sm:self-center">
                                    Keynote Speaker
                                </span>
                            </div>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Demonstrated how local businesses can integrate tools like n8n and OpenAI APIs to automate lead qualification pipelines. Covered the engineering principles behind minimizing token overhead, structuring deterministic fallbacks, and preventing AI hallucinations in live production.
                            </p>
                        </div>

                        {/* Event 2 */}
                        <div className="p-6 bg-slate-900/30 border border-slate-900 rounded-xl space-y-3 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900/60 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <GitBranch size={14} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-white">Full-Stack Efficiency with Expo, TypeScript, and Firebase</h3>
                                        <p className="text-xs text-slate-400">iShare Engineering Ecosystem Meetup</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-md self-start sm:self-center">
                                    Technical Panelist & Lead Host
                                </span>
                            </div>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Led an optimization workshop breaking down cross-platform application builds. Dissected common Expo compilation bottlenecks, performance tuning strategies for heavy UI layers, and how to maintain strict type boundaries between frontend states and backend database engines.
                            </p>
                        </div>

                        {/* Event 3 */}
                        <div className="p-6 bg-slate-900/30 border border-slate-900 rounded-xl space-y-3 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900/60 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                        <Award size={14} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-white">Navigating Seniority & Team Metrics in Remote Software Teams</h3>
                                        <p className="text-xs text-slate-400">iTrain Leadership Mentorship Initiative</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-md self-start sm:self-center">
                                    Guest Lecturer
                                </span>
                            </div>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Shared critical leadership frameworks gained from managing cross-border engineering teams and leading core platform rebuilds. Provided aspiring engineers with practical models for rigorous technical research, systematic problem isolation, and effective codebase collaboration across asynchronous work zones.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* NEW: MENTORSHIP & TALENT CULTIVATION LAYER */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40">
                <div className="max-w-4xl mx-auto px-6 space-y-12">

                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full inline-block">
                            iTrain Initiative
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Engineering Mentorship & Advisory
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            Through my flagship <strong className="text-white font-semibold">iTrain</strong> branch, I select a limited number of high-potential developers and university-bound technical candidates each quarter for rigorous, high-impact mentorship.
                        </p>
                    </div>

                    {/* Mentorship Value Pillars */}
                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                        <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-xl space-y-2">
                            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                Architectural Maturity
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Moving past basic tutorials to master deep systems thinking: state-driven optimization, clean type boundaries, asynchronous safety schemas, and robust error handling.
                            </p>
                        </div>

                        <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-xl space-y-2">
                            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                Strategic Problem Research
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Training mindsets in elite system analysis, technical documentation drilling, and advanced search patterns to debug breaking production pipelines instantly.
                            </p>
                        </div>
                    </div>

                    {/* Mentorship Application CTA Panel */}
                    <div className="p-8 bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-950/10 border border-slate-900 rounded-2xl text-center space-y-6 relative overflow-hidden">
                        <div className="space-y-2 relative z-10">
                            <h4 className="text-lg font-bold text-white">Apply for the Next Mentorship Cohort</h4>
                            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                                If you are a dedicated mid-level developer striving for true senior capability, or an academic candidate tracking towards top-tier technical program placement, apply below.
                            </p>
                        </div>

                        <div className="pt-2 relative z-10">
                            <a
                                href="mailto:ekenehq@gmail.com?subject=Mentorship%20Application%20-%20iTrain&body=Hi%20Kenny%2C%20%0D%0A%0D%0AI'm%20writing%20to%20apply%20for%20your%20iTrain%20engineering%20mentorship%20program.%20%0D%0A%0D%0A-%20Current%20Technical%20Stack%3A%20%0D%0A-%20Years%20of%20Experience%2FCurrent%20Study%3A%20%0D%0A-%20My%20Primary%20Growth%20Goal%3A%20"
                                className="inline-flex bg-slate-900 hover:bg-slate-800 text-emerald-400 font-mono text-xs font-bold py-3.5 px-8 rounded-xl border border-emerald-500/30 shadow-lg shadow-emerald-950/20 items-center justify-center gap-2.5 transition-all active:scale-[0.99] group"
                            >
                                <Award size={14} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
                                <span>Submit Mentorship Request</span>
                                <ArrowRight size={12} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <p className="text-[10px] text-slate-600 font-mono mt-3">
                                Managed securely via **iTrain** selection matrices
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* 3. CORE CORE PHILOSOPHIES                  */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900/30">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="max-w-2xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full inline-block">
                            Engineering Manifest
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Architectural Values
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            The fundamental execution rules built directly into every single interface and database schema I ship.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Philosophy 1 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <Layers size={18} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Strict Structural Cleanliness</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Code must be self-documenting, type-safe, and decoupled. I build highly testable component matrix setups that can change behavior patterns seamlessly as a company scales.
                            </p>
                        </div>

                        {/* Philosophy 2 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Zap size={18} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Extreme Resource Optimization</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Whether monitoring unnecessary re-renders in React Native or avoiding bloated loops inside an n8n webhook, logic must execute across the absolute minimal footprint needed.
                            </p>
                        </div>

                        {/* Philosophy 3 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                <ShieldCheck size={18} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Absolute Transparency</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                No complex technical jargon or hidden licensing markups. I deliver clear architectural updates, predictable flat build trajectories, and robust infrastructure transition parameters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* NEW: ENGINEERING MINDSET & GRID VECTOR     */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-900/10 via-slate-950 to-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    <div className="max-w-2xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                            Psychology of Execution
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            The Engineering Mindset
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            Code syntax can be looked up, but operational discipline cannot be automated. My work is anchored on three unyielding psychological vectors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Vector 1: Radical Consistency */}
                        <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/[0.01] rounded-bl-full pointer-events-none group-hover:bg-purple-500/[0.02] transition-colors" />
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-purple-500 font-black tracking-widest block uppercase">
                                    Vector // 01
                                </span>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                    Radical Consistency
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Great software isn't built in chaotic bursts of brief inspiration; it is compounding interest over long horizons. I bring a predictable, repeating rhythm to architecture, version control, and team deployment cycles—day in, day out, without variance.
                                </p>
                            </div>
                        </div>

                        {/* Vector 2: Unyielding Grit */}
                        <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/[0.01] rounded-bl-full pointer-events-none group-hover:bg-indigo-500/[0.02] transition-colors" />
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-indigo-500 font-black tracking-widest block uppercase">
                                    Vector // 02
                                </span>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                    Never Give Up
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    When edge-case bugs, system regressions, or breaking infrastructure updates compromise production timelines, my baseline default is relentless perseverance. I systematically isolate and break down complex problems until the system yields to standard design logic.
                                </p>
                            </div>
                        </div>

                        {/* Vector 3: Absolute Focus */}
                        <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.01] rounded-bl-full pointer-events-none group-hover:bg-sky-500/[0.02] transition-colors" />
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-sky-500 font-black tracking-widest block uppercase">
                                    Vector // 03
                                </span>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                    Laser Focus
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    I ruthlessly filter out operational noise, shiny object syndromes, and half-baked frameworks. I target my full cognitive focus onto the primary business bottleneck—building clean, lightning-fast solutions that move conversion needles immediately.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Micro-Quote Footer */}
                    <div className="pt-4 border-t border-slate-900/60 flex items-center gap-4 text-xs font-mono text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                        <span>Operational Standard: Persist until the application scales optimally.</span>
                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* NEW: LITERARY OUTPUT & PUBLISHING LAYER   */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    <div className="grid md:grid-cols-12 gap-12 items-center">

                        {/* Left Column: Narrative Feature */}
                        <div className="md:col-span-7 space-y-6">
                            <div className="space-y-3">
                                <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block">
                                    Published Works & Essays
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
                                    Long-Form Writing & <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                                        Philosophical Research
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                                <p>
                                    True engineering discipline doesn't stop at the code editor—it extends into deep narrative exploration. Alongside my technical architecture work, I invest rigorous focus into creative writing, structural outlining, and historical research.
                                </p>
                                <p>
                                    My literary projects examine complex historical frameworks, deep personal transformations, and the weight of human purpose. Writing books demands the exact same radical consistency as scaling database systems: laying down clean, intentional syntax page by page, refactoring structural plots, and holding a laser focus over long compounding horizons until the project crosses the publishing finish line.
                                </p>
                            </div>

                            {/* Two Interactive Content Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="/books"
                                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-amber-400 font-mono text-xs font-bold rounded-xl border border-amber-500/20 flex items-center gap-2 transition-all group"
                                >
                                    <span>View All Books</span>
                                    <ArrowRight size={12} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                                </a>

                                <a
                                    href="/blog"
                                    className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-slate-300 font-mono text-xs font-bold rounded-xl border border-slate-900 flex items-center gap-2 transition-all"
                                >
                                    <span>Read Posts & Essays</span>
                                    <ExternalLink size={12} className="opacity-50" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Featured Book Spotlight Module */}
                        <div className="md:col-span-5 bg-gradient-to-br from-slate-900/60 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.01] rounded-bl-full pointer-events-none group-hover:bg-amber-500/[0.02] transition-all" />

                            <div className="space-y-1">
                                <div className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-bold">
                                    Latest Book Title Status
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-tight">The Fire and The Lamp</h3>
                                <p className="text-xs font-mono text-slate-500">Historical Fiction & Transformation Matrix</p>
                            </div>

                            <div className="p-4 bg-slate-950/60 border border-slate-900/80 rounded-xl">
                                <p className="text-xs text-slate-400 italic leading-relaxed">
                                    "An exhaustive journey into the friction between external chaos and internal light, tracking the heavy psychological arcs of figures navigating systemic shifts."
                                </p>
                            </div>

                            <div className="pt-2 border-t border-slate-900/60 grid grid-cols-2 gap-4 text-[11px] font-mono">
                                <div>
                                    <span className="text-slate-500 block">Format:</span>
                                    <span className="text-slate-300 font-semibold">Hardcover / Digital</span>
                                </div>
                                <div>
                                    <span className="text-slate-500 block">Outlining Standard:</span>
                                    <span className="text-amber-400 font-semibold">Complete Alpha Node</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* 4. CONVERSION CHANNELS FOOTER              */}
            {/* ========================================== */}
            <section className="py-24 bg-slate-950 border-b border-slate-900 relative overflow-hidden">
                {/* Symmetric radial glow points backdrops */}
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/[0.015] rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/[0.015] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-12">

                    {/* Section Central Core Header */}
                    <div className="text-center space-y-3 max-w-2xl mx-auto">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
                            Next Actions
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                            Initiate Collaboration
                        </h2>
                        <p className="text-slate-400 text-sm max-w-lg mx-auto">
                            Whether you need elite full-stack infrastructure stood up or want to scale your technical leverage alongside a global ecosystem, select your pipeline.
                        </p>
                    </div>

                    {/* Balanced Split Action Grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-stretch pt-4">

                        {/* Column A: Direct Engineering Consultancy */}
                        <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-800 transition-colors relative group">
                            <div className="space-y-3">
                                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Terminal size={16} />
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase font-mono tracking-tight text-sm">
                                    01 // Hire Me Directly
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Have a complex web infrastructure challenge, an app store launch script to map, or a custom internal chatbot workflow pipeline to stand up? Reach out directly.
                                </p>
                            </div>

                            <div>
                                <a
                                    href="mailto:ekenehq@gmail.com?subject=Technical%20Consultancy%20Inquiry&body=Hi%20Kenny%2C%20I've%20reviewed%20your%20engineering%20manifest%20and%20architecture%20background.%20Let's%20discuss%20a%20project%20blueprint."
                                    className="w-full inline-flex bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-purple-950/20 items-center justify-center gap-2 hover:from-purple-500 hover:to-purple-600 transition-all active:scale-[0.99] group/btn"
                                >
                                    <span>Email me below</span>
                                    <ArrowRight size={14} className="opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
                                </a>
                                <p className="text-[10px] text-slate-500 font-mono mt-3 text-center">
                                    Direct wire: <span className="text-slate-400">ekenehq@gmail.com</span>
                                </p>
                            </div>
                        </div>

                        {/* Column B: Join iLead Platform Ecosystem */}
                        <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-800 transition-colors relative group">
                            <div className="space-y-3">
                                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <Globe size={16} />
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase font-mono tracking-tight text-sm">
                                    02 // Join iLead Platform
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Tap into a high-octane engineering community and technical talent incubator. Access iShare meetups, deploy open systems, and collaborate on advanced AI automation initiatives.
                                </p>
                            </div>

                            <div>
                                <a
                                    href="https://ilead.platform" /* Swap with your production domain route */
                                    className="w-full inline-flex bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold border border-slate-800 hover:border-slate-700 shadow-md items-center justify-center gap-2 transition-all active:scale-[0.99] group/btn"
                                >
                                    <span>Enter iLead Platform</span>
                                    <ArrowRight size={14} className="opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
                                </a>
                                <p className="text-[10px] text-slate-500 font-mono mt-3 text-center">
                                    Ecosystem and Community portal --- <span className="text-indigo-400">Active</span>
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