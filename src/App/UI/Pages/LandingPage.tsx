import React, { useState, useRef, useEffect } from "react";
import {
    Bot,
    Code,
    MessageSquare,
    Calendar,
    ArrowRight,
    CheckCircle2,
    Zap,
    Menu,
    X,
    ChevronRight,
    TrendingUp,
    ShieldCheck,
    Sparkles,
    Search,
    Smartphone,
    Users,
    GraduationCap,
    ChevronDown,
    Code2
} from "lucide-react";
import Footer from "../Components/Footer";
import NavbarNew from "../Components/NavbarNew";
import ChatBot from "../Components/ChatBot";
import { store } from "../../Redux/Store";
import { openChat } from "../../Redux/Slices/chatSlice";

export default function App() {

    // ROI Calculator State
    const [monthlyTraffic, setMonthlyTraffic] = useState(500);
    const [leadConversion, setLeadConversion] = useState(2); // 2% default conversion without bot
    const [avgSaleValue, setAvgSaleValue] = useState(150);

    // Simulated Chatbot State
    const [chatOpen, setChatOpen] = useState(false);
    const [capturedLeads, setCapturedLeads] = useState<Array<{ name?: string, phone?: string, email?: string }>>([]);

    // ROI Calculator Computations
    const baselineLeads = Math.round(monthlyTraffic * (leadConversion / 100));
    const automatedLeads = Math.round(monthlyTraffic * ((leadConversion + 4) / 100)); // AI bots typically increase capture by 4-6%
    const extraLeads = automatedLeads - baselineLeads;
    const lostRevenue = extraLeads * avgSaleValue;


    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200">

            {/* GLASSMORPHIC NAVBAR */}
            {/* GLASSMORPHIC B2B AGENCY NAVBAR */}
            <NavbarNew />
            {/* HERO HERO CONTAINER */}
            <header className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-300 font-medium">
                            <Sparkles size={12} />
                            <span>Global Digital Partner</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                            We build AI assistants that turn web traffic into{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400 bg-300% animate-gradient">
                                paying customers.
                            </span>
                        </h1>
                        <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                            No generic static submission forms. No missing leads on evenings or busy weekends.
                            Get customized smart 24/7 client booking and phone number capture systems deployed straight onto your existing website.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button
                                onClick={() => store.dispatch(openChat())}
                                className="flex items-center justify-center space-x-2 bg-white text-slate-950 px-8 py-4 rounded-xl hover:bg-slate-100 transition-all font-bold text-sm shadow-xl hover:scale-[1.01]"
                            >
                                <span>Start a Live Chat</span>
                                <ArrowRight size={16} />
                            </button>
                            <a
                                href="#roi-calculator"
                                className="flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 text-slate-300 px-8 py-4 rounded-xl hover:bg-slate-800 hover:text-white transition-all font-semibold text-sm"
                            >
                                <TrendingUp size={16} className="text-indigo-400" />
                                <span>Calculate Your Hidden Losses</span>
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-900 max-w-lg">
                            <div>
                                <p className="text-2xl font-bold text-white">24/7</p>
                                <p className="text-xs text-slate-500">Automated Booking</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">100%</p>
                                <p className="text-xs text-slate-500">GDPR Compliant Data</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">&lt; 1 sec</p>
                                <p className="text-xs text-slate-500">Response Latency</p>
                            </div>
                        </div>
                    </div>

                    {/* DYNAMIC HUD VIEWPORTS AND LIVE LEADS CAPTURE VIEW */}
                    <div className="md:col-span-5 relative">
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                                </div>
                                <span className="text-xs font-mono text-slate-500">live_leads_dashboard.json</span>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl">
                                    <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                                        <span>Recent Client Capture Logs</span>
                                        <span className="text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-ping"></span>Active</span>
                                    </div>
                                    {capturedLeads.length === 0 ? (
                                        <p className="text-sm text-slate-600 italic py-4 text-center">
                                            Interact with the live widget demo to watch data log instantly here...
                                        </p>
                                    ) : (
                                        <div className="space-y-2 max-h-36 overflow-y-auto">
                                            {capturedLeads.map((lead, idx) => (
                                                <div key={idx} className="bg-purple-950/20 border border-purple-900/30 p-2.5 rounded-lg flex items-center justify-between text-xs animate-in fade-in zoom-in-95 duration-200">
                                                    <div>
                                                        <p className="font-bold text-slate-200">{lead.name || "Anonymous"}</p>
                                                        <p className="text-slate-400 text-[11px]">{lead.phone || "No contact info"}</p>
                                                    </div>
                                                    <span className="bg-purple-500/20 border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded text-[10px] font-mono">Captured</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl space-y-2">
                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                        <span>Engine Capability Matrix</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        <span className="bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-lg text-xs font-mono">React 18 / TS</span>
                                        <span className="bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-lg text-xs font-mono">Google AI Studio</span>
                                        <span className="bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-lg text-xs font-mono">n8n Automation</span>
                                        <span className="bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-lg text-xs font-mono">Tailwind Ecosystem</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* CORE FEATURES WORKOUT */}
            <section id="features" className="border-t border-slate-900 bg-slate-950/40 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                    <div className="max-w-3xl mx-auto space-y-3">
                        <h2 className="text-xs uppercase font-bold tracking-widest text-purple-400">Tailored Automation Architectures</h2>
                        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Everything required to convert cold traffic</p>
                        <p className="text-slate-400">We construct conversational AI engines tailored precisely to your internal workflows and localized UK compliance metrics.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-900/60 border border-slate-900 p-8 rounded-2xl space-y-4 text-left hover:border-slate-800 transition-all duration-300">
                            <div className="bg-purple-500/10 border border-purple-500/20 text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center">
                                <MessageSquare size={22} />
                            </div>
                            <h3 className="text-lg font-bold text-white">Smart FAQ Engineering</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                We ingest your operational documents, price tables, and opening guidelines directly into the neural knowledge base. Zero hallucinations. Just accurate answers.
                            </p>
                        </div>

                        <div className="bg-slate-900/60 border border-slate-900 p-8 rounded-2xl space-y-4 text-left hover:border-slate-800 transition-all duration-300">
                            <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-12 h-12 rounded-xl flex items-center justify-center">
                                <Zap size={22} />
                            </div>
                            <h3 className="text-lg font-bold text-white">Instant Contact Capture</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                As soon as high intent is identified, the engine securely secures customer names, phone tracks, and request metadata, sending push updates straight to your mobile devices.
                            </p>
                        </div>

                        <div className="bg-slate-900/60 border border-slate-900 p-8 rounded-2xl space-y-4 text-left hover:border-slate-800 transition-all duration-300">
                            <div className="bg-purple-500/10 border border-purple-500/20 text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center">
                                <Calendar size={22} />
                            </div>
                            <h3 className="text-lg font-bold text-white">Direct Calendar Pipeline</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Synchronize seamlessly with Google Calendar or custom system schedulers. Allow clients to lock in physical or virtual review consultations directly from within the chat dialogue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust highlights styled to match the hero header layout */}
            <div className="mx-auto max-w-xl pt-8 border-t border-slate-900">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center divide-x divide-slate-900">
                    <div className="px-2">
                        <p className="text-2xl sm:text-3xl font-black tracking-tight text-white">100%</p>
                        <p className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1 leading-tight">No-Risk Free Demo</p>
                    </div>
                    <div className="px-2">
                        <p className="text-2xl sm:text-3xl font-black tracking-tight text-white">24h</p>
                        <p className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1 leading-tight">Lincoln Deployment</p>
                    </div>
                    <div className="px-2">
                        <p className="text-2xl sm:text-3xl font-black tracking-tight text-white">UK GDPR</p>
                        <p className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1 leading-tight">Fully Compliant</p>
                    </div>
                </div>
            </div>

            {/* ROI DYNAMIC LOSS CALCULATOR */}
            <section id="roi-calculator" className="py-20 border-t border-slate-900 bg-slate-950">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
                        <div className="space-y-2 text-center md:text-left">
                            <span className="text-xs uppercase font-mono tracking-widest text-indigo-400">Interactive Business Valuation Tool</span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">Calculate your hidden leaks</h2>
                            <p className="text-sm text-slate-400">Slide the metrics below to estimate how many high-intent clients leave your landing pages due to static friction or long reply lag.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 pt-4">
                            <div className="space-y-6">
                                {/* Metric 1 */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-semibold">
                                        <label className="text-slate-300">Estimated Monthly Web Traffic</label>
                                        <span className="text-purple-400 font-mono font-bold">{monthlyTraffic} visitors</span>
                                    </div>
                                    <input
                                        type="range" min="100" max="5000" step="50"
                                        value={monthlyTraffic} onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                                        className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                    />
                                </div>

                                {/* Metric 2 */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-semibold">
                                        <label className="text-slate-300">Baseline Conversion Rate</label>
                                        <span className="text-purple-400 font-mono font-bold">{leadConversion}%</span>
                                    </div>
                                    <input
                                        type="range" min="1" max="10" step="1"
                                        value={leadConversion} onChange={(e) => setLeadConversion(Number(e.target.value))}
                                        className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                    />
                                </div>

                                {/* Metric 3 */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-semibold">
                                        <label className="text-slate-300">Average Customer Lifetime Value</label>
                                        <span className="text-purple-400 font-mono font-bold">£{avgSaleValue}</span>
                                    </div>
                                    <input
                                        type="range" min="50" max="1500" step="25"
                                        value={avgSaleValue} onChange={(e) => setAvgSaleValue(Number(e.target.value))}
                                        className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                    />
                                </div>
                            </div>

                            {/* Readouts display */}
                            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                                        <span>Baseline Leads Captured</span>
                                        <span className="font-mono text-slate-300">{baselineLeads} / mo</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                                        <span>With AI Automated Assistants</span>
                                        <span className="font-mono text-purple-400 font-bold">{automatedLeads} / mo</span>
                                    </div>
                                    <div className="border-t border-slate-900 pt-3 flex justify-between items-center text-sm font-bold text-slate-200">
                                        <span>Missed Client Pipeline</span>
                                        <span className="text-indigo-400">+{extraLeads} customers / mo</span>
                                    </div>
                                </div>

                                <div className="bg-indigo-950/30 border border-indigo-900/40 p-4 rounded-xl text-center">
                                    <p className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold">Estimated Monthly Revenue Leaked</p>
                                    <p className="text-3xl font-black text-white mt-1">£{lostRevenue.toLocaleString()}</p>
                                    <p className="text-[11px] text-slate-500 mt-1">Based on baseline industry integration indexes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ai-advantages" className="border-t border-slate-900 bg-slate-950 py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">

                        {/* Left Side: Premium Feature Matrix */}
                        <div className="lg:col-span-6 space-y-8">
                            <div className="space-y-3">
                                <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                                    Intelligent Core Infrastructure
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                                    Why static contact forms are draining your local pipeline
                                </h2>
                                <p className="text-slate-400 text-base leading-relaxed">
                                    Modern customers expect responses within minutes, not business days. Our custom AI agents act as an elite, tier-one client specialist working 24 hours a day, 7 days a week.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Advantage 1 */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-900/40 transition-colors">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                        <CheckCircle2 size={12} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white">Dynamic Qualification Logic</h4>
                                        <p className="text-xs text-slate-400 mt-1">Filters out casual browsers from high-value commercial leads automatically based on budget and timing filters.</p>
                                    </div>
                                </div>

                                {/* Advantage 2 */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-900/40 transition-colors">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                                        <CheckCircle2 size={12} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white">Zero Maintenance Engineering</h4>
                                        <p className="text-xs text-slate-400 mt-1">Fully hosted on cloud clusters. No servers to maintain or operational overhead to manage on your side.</p>
                                    </div>
                                </div>

                                {/* Advantage 3 */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-900/40 transition-colors">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                                        <CheckCircle2 size={12} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white">State-of-the-Art Guardrails</h4>
                                        <p className="text-xs text-slate-400 mt-1">Strict algorithmic prompts stop system hallucinations. Your agent only says exactly what matches your business reality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Performance Blueprint Card */}
                        <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl relative">
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-slate-600">v2.4_stable</div>
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Zap size={18} className="text-purple-400" />
                                Automated Conversational Flow Blueprint
                            </h3>

                            <div className="space-y-6 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[1px] before:bg-slate-800">
                                {/* Step 1 */}
                                <div className="flex items-start space-x-4 relative">
                                    <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-xs flex items-center justify-center z-10 font-bold backdrop-blur-sm">1</div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-200">Visitor Engagement Trigger</p>
                                        <p className="text-[11px] text-slate-400 mt-0.5">Launches dynamically within 3 seconds of a user viewing premium commercial pages.</p>
                                    </div>
                                </div>
                                {/* Step 2 */}
                                <div className="flex items-start space-x-4 relative">
                                    <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-xs flex items-center justify-center z-10 font-bold backdrop-blur-sm">2</div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-200">Contextual Intent Parsing</p>
                                        <p className="text-[11px] text-slate-400 mt-0.5">Identifies what specific local service or booking target the customer is tracking.</p>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="flex items-start space-x-4 relative">
                                    <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs flex items-center justify-center z-10 font-bold backdrop-blur-sm">3</div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-200">Webhook Sync Pipeline</p>
                                        <p className="text-[11px] text-slate-400 mt-0.5">Instantly fires lead payloads into database records and triggers localized phone alert pings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* NEW SECTION: MOBILE SOLUTIONS ENGINEERING */}
            {/* ========================================== */}
            <section id="mobile-services" className="border-t border-slate-900 bg-slate-950/40 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column: Visual Mockup Container */}
                        <div className="lg:col-span-5 order-last lg:order-first">
                            <div className="relative mx-auto max-w-[280px] bg-slate-950 border-[6px] border-slate-900 rounded-[2.5rem] shadow-2xl p-4 min-h-[520px] flex flex-col justify-between overflow-hidden ring-1 ring-slate-800">
                                {/* Speaker notch */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-20" />

                                <div className="pt-6 space-y-4">
                                    <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Native Engine</span>
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                    </div>

                                    <div className="p-3 bg-slate-900 rounded-xl space-y-2 border border-slate-800/60">
                                        <p className="text-[11px] font-bold text-white">Enterprise Architecture</p>
                                        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[88%]" />
                                        </div>
                                        <p className="text-[9px] text-slate-500">Cross-Platform Sync: Active</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-2.5 bg-slate-900/40 border border-slate-900 rounded-lg text-center">
                                            <p className="text-xs font-black text-white">60 FPS</p>
                                            <p className="text-[8px] text-slate-500 font-mono">Fluid Interactivity</p>
                                        </div>
                                        <div className="p-2.5 bg-slate-900/40 border border-slate-900 rounded-lg text-center">
                                            <p className="text-xs font-black text-white">Offline</p>
                                            <p className="text-[8px] text-slate-500 font-mono">Local Storage Sync</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-purple-950/20 border border-purple-900/40 p-3 rounded-xl text-center">
                                    <p className="text-[10px] font-semibold text-purple-300">Expo Custom Development</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Text & Features Description */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-3">
                                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">Cross-Platform Development</span>
                                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">High-performance custom mobile applications</h2>
                                <p className="text-slate-400 text-base leading-relaxed">
                                    We build clean, rapid-loading native experiences for iOS and Android utilizing world-class foundations like **React Native** and the **Expo framework**. From robust local utility systems to highly tailored client portals.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-2">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Single Codebase Velocity
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">Launch onto the Apple App Store and Google Play Store simultaneously with zero component duplication.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Firebase Engine Ties
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">Instant offline capabilities, encrypted secure authentication systems, and ultra-fast transactional queries.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Push Delivery Systems
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">Re-engage clients instantly with target-specific push triggers sent direct to customer phone drop-downs.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Native SDK Access
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">Deep integration with biometric security modules, map systems, and local camera arrays.</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-mono font-medium">React Native</span>
                                <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-mono font-medium">TypeScript</span>
                                <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-mono font-medium">Expo EAS</span>
                                <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-mono font-medium">Firebase Firestore</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ========================================== */}
            {/* NEW SECTION: MENTORSHIP & ECOSYSTEM MATRIX */}
            {/* ========================================== */}
            <section id="mentorship" className="border-t border-slate-900 bg-slate-950 py-24 relative overflow-hidden">
                {/* Radial gradient backing for structural depth */}
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    {/* Section Typography Header */}
                    <div className="max-w-3xl text-left space-y-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
                            Ecosystem & Knowledge Layer
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                            Building world-class talent, <br className="hidden sm:inline" />
                            empowering local tech ecosystems
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                            Through structured digital literacy programs and technical engineering guidance, I actively mentor upcoming developers—incubating the next generation of full-stack talent equipped for the modern AI economy.
                        </p>
                    </div>

                    {/* Core Architectural Pillars */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Pillar 1: iLead Talent Incubation */}
                        <div className="bg-slate-900/30 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-8 hover:bg-slate-900/50 hover:border-slate-800/60 transition-all duration-300 group">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 transition-colors group-hover:bg-purple-600 group-hover:text-white duration-300">
                                    <Users size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                    iLead Global Initiative
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                    Co-founded to spread critical digital literacy and technical frameworks. We run structural knowledge-sharing pipelines that take driven individuals and turn them into job-ready engineering talent.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider">Focus Architecture</span>
                                <span className="text-xs font-mono text-purple-400 font-bold">Talent Incubator</span>
                            </div>
                        </div>

                        {/* Pillar 2: iTrain Practical Consulting */}
                        <div className="bg-slate-900/30 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-8 hover:bg-slate-900/50 hover:border-slate-800/60 transition-all duration-300 group">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 transition-colors group-hover:bg-indigo-600 group-hover:text-white duration-300">
                                    <GraduationCap size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                    iTrain Advisory Track
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                    Hands-on academic coaching, university preparation frameworks, and strict peer-to-peer programming review cycles. Helping students scale past entry-level paradigms into clean architecture patterns.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider">Methodology</span>
                                <span className="text-xs font-mono text-indigo-400 font-bold">Academic Prep</span>
                            </div>
                        </div>



                        {/* Pillar 3: Advanced Stack Mastery */}
                        <div className="bg-slate-900/30 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-8 hover:bg-slate-900/50 hover:border-slate-800/60 transition-all duration-300 group">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 transition-colors group-hover:bg-emerald-600 group-hover:text-white duration-300">
                                    <Code2 size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                    Modern Stack Sprints
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                    Deep-dive micro-cohort mentorship covering enterprise application scale: production TypeScript patterns, cross-platform Expo compilation, robust Firebase architectures, and custom AI webhook setups.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider">Tech Stack Layer</span>
                                <span className="text-xs font-mono text-emerald-400 font-bold">TypeScript / Expo</span>
                            </div>
                        </div>

                    </div>

                    {/* Inline Stats Ribbon Callout */}
                    <div className="bg-gradient-to-r from-slate-950 via-slate-900/30 to-slate-950 border border-slate-900 rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-center sm:text-left">
                        <div className="space-y-1 sm:border-r sm:border-slate-900 pr-4">
                            <p className="text-2xl font-black text-white font-mono tracking-tight">6+ Years</p>
                            <p className="text-[11px] text-slate-500 tracking-wide uppercase font-medium">Production Experience</p>
                        </div>
                        <div className="space-y-1 sm:border-r sm:border-slate-900 sm:pl-6 pr-4">
                            <p className="text-2xl font-black text-purple-400 font-mono tracking-tight">100% Remote</p>
                            <p className="text-[11px] text-slate-500 tracking-wide uppercase font-medium">Global Team Management</p>
                        </div>
                        <div className="space-y-1 sm:pl-6">
                            <p className="text-2xl font-black text-emerald-400 font-mono tracking-tight">AI Driven</p>
                            <p className="text-[11px] text-slate-500 tracking-wide uppercase font-medium">Future-Proof Curriculum</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* ========================================== */}
            {/* NEW SECTION: PROJECTS & SYSTEM DEPLOYMENTS */}
            {/* ========================================== */}
            <section id="projects" className="border-t border-slate-900 bg-slate-950 py-24 relative overflow-hidden">
                {/* Radial gradient backing for a structured tech accent vibe */}
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/[0.02] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    {/* Header Layout */}
                    <div className="text-left max-w-3xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
                            Engineered Ecosystems
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Production systems in the wild
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                            A deep dive into custom full-stack solutions and AI-integrated engines deployed to optimize operations, capture conversions, and eliminate administrative lag.
                        </p>
                    </div>

                    {/* Projects Grid Container */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Project Card 1: D'roid Companion / Business AI Engine */}
                        <div className="group bg-slate-900/40 border border-slate-900 hover:border-slate-800/60 p-8 rounded-2xl flex flex-col justify-between space-y-8 backdrop-blur-sm transition-all duration-300">
                            <div className="space-y-6">
                                {/* Header / Stack Row */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                            <Bot size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-white tracking-wide uppercase">D'roid Companion</h3>
                                            <p className="text-[10px] text-slate-500 font-mono">Conversational Automation Engine</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 border border-slate-800 rounded">React</span>
                                        <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 border border-slate-800 rounded">Firebase</span>
                                        <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 border border-slate-800 rounded">Tailwind</span>
                                    </div>
                                </div>

                                {/* Project Description Content */}
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    An intelligent lead acquisition and sales automation system running 24/7. It replaces standard contact forms with a multi-step conversational interface that captures customer metadata, filters low-intent traffic, and automatically dumps high-value leads directly into client sheets.
                                </p>

                                {/* Technical Case Metrics */}
                                <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 border border-slate-900 rounded-xl font-mono text-[11px]">
                                    <div>
                                        <p className="text-slate-500 uppercase text-[9px] font-bold tracking-wider">Pipeline Output</p>
                                        <p className="text-white mt-0.5 font-bold">Google Apps Script Webhook</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 uppercase text-[9px] font-bold tracking-wider">Conversion Lift</p>
                                        <p className="text-emerald-400 mt-0.5 font-bold">+28% Form Completion</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Link Elements */}
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono">
                                <span className="text-slate-500">Status: Active Deployment</span>
                                <div className="text-purple-400 flex items-center gap-1 group-hover:text-purple-300 transition-colors font-bold">
                                    <span>Explore System Architecture</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2: Mobile Infrastructure / Apps */}
                        <div className="group bg-slate-900/40 border border-slate-900 hover:border-slate-800/60 p-8 rounded-2xl flex flex-col justify-between space-y-8 backdrop-blur-sm transition-all duration-300">
                            <div className="space-y-6">
                                {/* Header / Stack Row */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <Code size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-white tracking-wide uppercase">Cross-Platform Mobile Suites</h3>
                                            <p className="text-[10px] text-slate-500 font-mono">High-Performance Utility Apps</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 border border-slate-800 rounded">React Native</span>
                                        <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 border border-slate-800 rounded">Expo</span>
                                        <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 border border-slate-800 rounded">TypeScript</span>
                                    </div>
                                </div>

                                {/* Project Description Content */}
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    Production-ready native applications built for modern performance and scale. These architectures feature lightning-fast initialization speeds, deep local hardware security integration, offline data caching mechanics, and beautifully structured user experiences optimized across iOS and Android.
                                </p>

                                {/* Technical Case Metrics */}
                                <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 border border-slate-900 rounded-xl font-mono text-[11px]">
                                    <div>
                                        <p className="text-slate-500 uppercase text-[9px] font-bold tracking-wider">Engine Structure</p>
                                        <p className="text-white mt-0.5 font-bold">Expo Managed Workflow</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 uppercase text-[9px] font-bold tracking-wider">Performance Index</p>
                                        <p className="text-emerald-400 mt-0.5 font-bold">60FPS Fluid Render</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Link Elements */}
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono">
                                <span className="text-slate-500">Status: Verified Ecosystems</span>
                                <div className="text-indigo-400 flex items-center gap-1 group-hover:text-indigo-300 transition-colors font-bold">
                                    <span>Review Code Infrastructures</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id="web-services" className="border-t border-slate-900 bg-slate-950 py-24">
                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    {/* Centered Heading */}
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">Full Stack Web Architecture</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Enterprise web environments engineered for performance</h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            We develop responsive web interfaces, complex customer management dashboards, and modern APIs structured for security and infinite scaling.
                        </p>
                    </div>

                    {/* Three-Column Web Focus Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Box 1 */}
                        <div className="bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="text-xs font-mono text-purple-400 font-bold tracking-widest uppercase">01 / Frontend Core</div>
                            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Responsive Next.js & React Frameworks</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Gorgeous client interfaces configured with Tailwind CSS framework styles. Fast paint times, fully responsive formatting across mobile screens, and SEO metadata indexing.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="text-xs font-mono text-indigo-400 font-bold tracking-widest uppercase">02 / Automation</div>
                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">Serverless Cloud Webhooks & n8n Integration</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Connect client interactions directly into internal databases or automation matrices. Sync lead distribution directly to email workflows and team Slack or CRM pipelines.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800 transition-all group">
                            <div className="text-xs font-mono text-purple-400 font-bold tracking-widest uppercase">03 / Security</div>
                            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Robust UK GDPR Identity Protocols</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Fully integrated cloud storage configurations built with row-level security parameters. Encrypted database operations that match top UK corporate validation steps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="border-t border-slate-900 bg-slate-950/60 py-24 relative overflow-hidden">
                {/* Accent ambient lighting glow */}
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    {/* Header Group */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
                        <div className="space-y-3 text-left">
                            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                                Validated Business Impact
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                                Trusted by local growth operators
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                                See how businesses are dropping legacy static capture forms to unlock automated backend client discovery round-the-clock.
                            </p>
                        </div>

                        {/* High-level conversion stat callout box */}
                        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex items-center gap-4 flex-shrink-0 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                                4.9
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold text-white">Average Client Rating</p>
                                <p className="text-[11px] text-slate-500 font-mono">Based on active local platform deployments</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials 3-Column Grid */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Testimonial Card 1 */}
                        <div className="bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-950 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-800/80 transition-all duration-300">
                            <div className="space-y-4">
                                {/* Trust verification rating strip */}
                                <div className="flex items-center justify-between">
                                    <span className="bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                                        Professional Services
                                    </span>
                                    <div className="flex text-purple-400 text-xs font-black">★★★★★</div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                                    "We used to miss structural query leads over weekends entirely. Ekene built an automated chatbot logic that hooks straight to our client assessment vectors. Truly brilliant workflow optimization."
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xs font-bold text-white">David Harrison</h4>
                                    <p className="text-[10px] text-slate-500">Managing Director</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-mono font-bold text-emerald-400">+35% Lead Rate</span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Card 2 */}
                        <div className="bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-950 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-800/80 transition-all duration-300">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                                        E-Commerce & Retail
                                    </span>
                                    <div className="flex text-purple-400 text-xs font-black">★★★★★</div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                                    "The interactive dashboard element completely removed manual entry error. Customers self-qualify their orders directly inside the system, saving our support desk over 12 hours of administrative overhead every single week."
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xs font-bold text-white">Sarah Jenkins</h4>
                                    <p className="text-[10px] text-slate-500">Operations Lead</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-mono font-bold text-emerald-400">Saved 12h/wk</span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Card 3 */}
                        <div className="bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-950 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-800/80 transition-all duration-300">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                                        Consulting Agencies
                                    </span>
                                    <div className="flex text-purple-400 text-xs font-black">★★★★★</div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                                    "The direct calendar pipeline setup changed how we book strategy consultations. Zero platform friction. Local clients can lock in slots securely right inside the chat bubble interface in under a minute."
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xs font-bold text-white">Marcus Vance</h4>
                                    <p className="text-[10px] text-slate-500">Principal Partner</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-mono font-bold text-emerald-400">Instant Calendar Sync</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ABOUT THE ENGINEER COMPONENT SECTION */}
            <section id="about" className="py-20 border-t border-slate-900 bg-slate-950/40">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl shadow-purple-500/10 transform rotate-3">
                        <Code size={40} className="text-white" />
                    </div>

                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-2xl font-bold text-white tracking-tight">The Technical Backbone Behind Your Automation</h2>
                        <p className="text-sm text-slate-400 leading-relaxed font-normal">
                            Hi, I'm **Ekene Okoli**. I am a professional software engineer based locally right here in Lincoln, UK.
                            Before transitioning to establish local digital business systems, I accumulated over **6+ years of dense engineering tenure**
                            architecting critical application ecosystems within international banking setups, healthcare institutions, and fast-scaled enterprise e-commerce pipelines.
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed font-normal">
                            Through **Tech with Ekenedilichukwu**, I am stripping away the complex overhead of corporate technical stacks to deliver lightweight, bulletproof,
                            high-converting AI automation solutions directly onto the systems of local Lincolnshire retail lines, trade firms, and clinics.
                        </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-400">
                        <ShieldCheck size={14} className="text-green-400" />
                        <span>100% Secure, Insured & Localized Development Frameworks</span>
                    </div>
                </div>
            </section>

            {/* COMPACT CLEAN AGENCY FOOTER MAPS */}
            <ChatBot />
            <Footer />
        </div>
    );
}