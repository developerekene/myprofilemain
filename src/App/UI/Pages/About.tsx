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
    Search
} from "lucide-react";

// Clean, strict type for Lucide Icon properties
type NavItem = {
    label: string;
    href: string;
    icon: any;
};

const navItems: NavItem[] = [
    { label: "AI Assistants", href: "#features", icon: Bot },
    { label: "Web Solutions", href: "#web-services", icon: Code },
    { label: "About The Engineer", href: "#about", icon: ShieldCheck },
];

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ROI Calculator State
    const [monthlyTraffic, setMonthlyTraffic] = useState(500);
    const [leadConversion, setLeadConversion] = useState(2); // 2% default conversion without bot
    const [avgSaleValue, setAvgSaleValue] = useState(150);

    // Simulated Chatbot State
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi there! I'm the automated assistant for Tech with Ekenedilichukwu. Are you looking to turn your website visitors into paying customers?" }
    ]);
    const [chatInput, setChatInput] = useState("");
    const [capturedLeads, setCapturedLeads] = useState<Array<{ name?: string, phone?: string, email?: string }>>([]);
    const [currentLeadForm, setCurrentLeadForm] = useState<{ name?: string, phone?: string, email?: string }>({});
    const [chatStep, setChatStep] = useState(0); // 0: intro, 1: ask name, 2: ask phone, 3: calendar, 4: complete

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // ROI Calculator Computations
    const baselineLeads = Math.round(monthlyTraffic * (leadConversion / 100));
    const automatedLeads = Math.round(monthlyTraffic * ((leadConversion + 4) / 100)); // AI bots typically increase capture by 4-6%
    const extraLeads = automatedLeads - baselineLeads;
    const lostRevenue = extraLeads * avgSaleValue;

    // Simulator Logic
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        const userText = chatInput;
        setMessages((prev) => [...prev, { sender: "user", text: userText }]);
        setChatInput("");

        setTimeout(() => {
            if (chatStep === 0) {
                setMessages((prev) => [...prev, { sender: "bot", text: "Excellent! To show you how I instantly capture high-intent customers, what is your name?" }]);
                setChatStep(1);
            } else if (chatStep === 1) {
                setCurrentLeadForm(prev => ({ ...prev, name: userText }));
                setMessages((prev) => [...prev, { sender: "bot", text: `Great to meet you, ${userText}! What is the best phone number or email for local business owners to reach you at?` }]);
                setChatStep(2);
            } else if (chatStep === 2) {
                const updatedForm = { ...currentLeadForm, phone: userText };
                setCurrentLeadForm(updatedForm);
                setCapturedLeads(prev => [...prev, updatedForm]);
                setMessages((prev) => [
                    ...prev,
                    { sender: "bot", text: "Boom! Look at the top right dashboard box right now—your details were just captured securely into our database instantly." },
                    { sender: "bot", text: "Would you like to lock in a quick 15-minute consultation calendar slot with Ekene to discuss your business automation?" }
                ]);
                setChatStep(3);
            } else if (chatStep === 3) {
                setMessages((prev) => [...prev, { sender: "bot", text: "Perfect! Calendar placeholder logged. Our real client systems seamlessly link directly to Google Calendar or Cal.com hooks." }]);
                setChatStep(4);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200">

            {/* GLASSMORPHIC NAVBAR */}
            <nav className="bg-slate-950/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-900 transition-all duration-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo Group */}
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tight text-white leading-none">
                                Tech with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Ekenedilichukwu</span>
                            </span>
                            <span className="text-[9px] uppercase tracking-widest font-semibold text-purple-400 mt-1">
                                AI Automation & Software Development
                            </span>
                        </div>

                        {/* Desktop Navigation links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors font-medium text-sm"
                                    >
                                        <Icon className="text-purple-400" size={16} />
                                        <span>{item.label}</span>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Action Call Button */}
                        <div className="hidden md:flex">
                            <button
                                onClick={() => setChatOpen(true)}
                                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 font-semibold text-sm shadow-lg shadow-purple-900/20 hover:shadow-purple-500/10 hover:scale-[1.02]"
                            >
                                <MessageSquare size={16} />
                                <span>Test Live Assistant</span>
                            </button>
                        </div>

                        {/* Responsive Mobile Trigger toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-slate-400 hover:text-white text-xl p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Body */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-950 border-t border-slate-900 px-6 py-6 space-y-4 shadow-2xl">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center space-x-3 text-base font-semibold text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-900/50"
                                    >
                                        <Icon className="text-purple-400" size={18} />
                                        <span>{item.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => { setIsMenuOpen(false); setChatOpen(true); }}
                            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-full py-3.5 rounded-xl font-bold text-sm shadow-xl"
                        >
                            <MessageSquare size={16} />
                            <span>Launch Live Assistant</span>
                        </button>
                    </div>
                )}
            </nav>

            {/* HERO HERO CONTAINER */}
            <header className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-300 font-medium">
                            <Sparkles size={12} />
                            <span>Lincolnshire Local Digital Partner</span>
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
                                onClick={() => setChatOpen(true)}
                                className="flex items-center justify-center space-x-2 bg-white text-slate-950 px-8 py-4 rounded-xl hover:bg-slate-100 transition-all font-bold text-sm shadow-xl hover:scale-[1.01]"
                            >
                                <span>Interactive Live Demo</span>
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
            <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Tech with Ekenedilichukwu. All rights reserved. Registered Company Entity Framework, Lincoln, United Kingdom.</p>
            </footer>

            {/* FLOATING CHAT WIDGET EMULATION SYSTEM */}
            <div className="fixed bottom-6 right-6 z-50 font-sans">
                {!chatOpen && (
                    <button
                        onClick={() => setChatOpen(true)}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center animate-bounce"
                    >
                        <Bot size={24} />
                    </button>
                )}

                {chatOpen && (
                    <div className="bg-slate-900 border border-slate-800 w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300">

                        {/* Widget header bar */}
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <div>
                                    <h3 className="font-bold text-sm tracking-wide">Tech Assistant</h3>
                                    <p className="text-[10px] text-purple-200">System Demo Sandbox</p>
                                </div>
                            </div>
                            <button onClick={() => setChatOpen(false)} className="text-purple-200 hover:text-white text-lg font-bold p-1">&times;</button>
                        </div>

                        {/* Interactive Chat messages terminal window layout */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[85%] rounded-xl px-3.5 py-2 text-xs leading-relaxed ${msg.sender === "user"
                                            ? "bg-purple-600 text-white rounded-tr-none"
                                            : "bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700/50"
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input system forms pipeline block */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder={chatStep === 4 ? "Booking complete!..." : "Type your message response..."}
                                disabled={chatStep === 4}
                                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-purple-500 placeholder-slate-600"
                            />
                            <button
                                type="submit"
                                disabled={chatStep === 4}
                                className="bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 text-white px-4 rounded-xl text-xs font-semibold transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                )}
            </div>

        </div>
    );
}