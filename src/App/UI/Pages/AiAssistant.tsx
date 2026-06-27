import {
    Bot, ChevronDown, Code, GraduationCap, Menu, MessageSquare,
    ShieldCheck, Smartphone, Users, X, ArrowRight, CheckCircle2,
    Zap, Sparkles, Database, BarChart3, TrendingUp, HelpCircle, Calendar, Mail
} from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import ChatBot from '../Components/ChatBot';
import Footer from '../Components/Footer';
import NavbarNew from '../Components/NavbarNew';

const GOOGLE_DATA_PIPELINE_URL = "https://script.google.com/macros/s/AKfycbwpzkfy5n62NSP6BwS4LOSMEIoLYCkxsf28plJ-HTCYvvr-s5lc4sFDR0_E3SpQh0WbRA/exec";

export default function AiAssistant() {
    // UI Layout States
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    // Chatbot Conversational State Machine Engine
    const [chatStep, setChatStep] = useState(0);
    const [chatInput, setChatInput] = useState("");
    const [currentLeadForm, setCurrentLeadForm] = useState<{ name?: string; phone?: string; email?: string }>({});
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hey there! 👋 I am your automated lead conversion assistant. Ready to see how I instantly capture local business metrics?" }
    ]);

    const chatEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll chat window to latest response
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Asynchronous Network Webhook Trigger
    const transmitLeadToGoogleSheet = async (leadData: { name?: string; phone?: string; email?: string }) => {
        try {
            await fetch(GOOGLE_DATA_PIPELINE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(leadData),
            });
            console.log("Lead payload updated safely onto Google Sheets endpoint database execution row.");
        } catch (error) {
            console.error("Data tracking capture network pipeline timeout: ", error);
        }
    };

    // Chatbot Submit Message Handler
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        const userText = chatInput;
        setMessages((prev) => [...prev, { sender: "user", text: userText }]);
        setChatInput("");

        setTimeout(() => {
            if (chatStep === 0) {
                setMessages((prev) => [
                    ...prev,
                    { sender: "bot", text: "Awesome! Let's simulate a fast client discovery intake. What is your full name?" }
                ]);
                setChatStep(1);
            } else if (chatStep === 1) {
                setCurrentLeadForm(prev => ({ ...prev, name: userText }));
                setMessages((prev) => [
                    ...prev,
                    { sender: "bot", text: `Great to meet you, ${userText}! What is the best phone number for local business owners to reach you at?` }
                ]);
                setChatStep(2);
            } else if (chatStep === 2) {
                const updatedForm = { ...currentLeadForm, phone: userText, email: "seniordevekene@gmail.com" };
                setCurrentLeadForm(updatedForm);

                // Active trigger out to your seniordevekene@gmail.com sheet endpoint rows
                transmitLeadToGoogleSheet(updatedForm);

                setMessages((prev) => [
                    ...prev,
                    { sender: "bot", text: "Boom! Check your linked spreadsheet dashboard right now—your details were just captured securely into our database rows instantly." },
                    { sender: "bot", text: "Would you like to wrap up by booking a strategy call with Kenny Okoli to scale your operations?" }
                ]);
                setChatStep(3);
            } else {
                setMessages((prev) => [
                    ...prev,
                    { sender: "bot", text: "Thanks! Our live backend automation routers have queued your conversation files. We will be in touch shortly." }
                ]);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-white">

            {/* SECTION 1: GLASSMORPHIC B2B NAVBAR */}
            <NavbarNew />

            {/* SECTION 2: HIGH-CONVERSION AGENCY HERO */}
            <section className="relative pt-20 pb-24 overflow-hidden border-b border-slate-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                    <div className="absolute top-12 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
                    <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full inline-block font-bold">
                        Now Booking Local Digital Deployments in Lincoln
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                        Stop missing leads. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-indigo-400">
                            Automate your business capture.
                        </span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        We build intelligent custom AI chatbots, high-performance mobile software configurations, and automated data logging endpoints that work for you 24 hours a day.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button onClick={() => setChatOpen(true)} className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-purple-900/30 hover:scale-[1.02] transition-transform">
                            <span>Interact with System Demo</span>
                            <ArrowRight size={18} />
                        </button>
                        <a href="#projects" className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 text-slate-300 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-800/60 transition-colors">
                            <span>View Pro Deployments</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CORE CAPABILITIES MATRIX */}
            <section id="ai-services" className="py-24 border-b border-slate-900 bg-slate-900/10">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">Architectural Capabilities</h2>
                        <p className="text-slate-400 text-sm sm:text-base">Custom standalone software components built cleanly to handle traffic, scaling, and workflows.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400"><Bot size={24} /></div>
                            <h3 className="text-lg font-bold text-white">Conversational AI Systems</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Context-aware conversational interfaces customized to qualify traffic, book consumer consultation events, and capture critical incoming client details without manual oversight.</p>
                        </div>
                        <div id="mobile-services" className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400"><Smartphone size={24} /></div>
                            <h3 className="text-lg font-bold text-white">Cross-Platform Mobile Apps</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">High-efficiency native applications crafted via Expo and React Native. Engineered to deliver liquid 60FPS speeds, robust caching layers, and cross-device functionality.</p>
                        </div>
                        <div id="web-services" className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400"><Code size={24} /></div>
                            <h3 className="text-lg font-bold text-white">Automated Web Pipelines</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Responsive frontend environments backed by clean Serverless APIs, structural secure data transmission layers, and automated custom webhooks hooked straight to Google Sheets.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="bot-matrix" className="py-24 border-b border-slate-900 bg-slate-950 relative">
                {/* Soft background glow */}
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/[0.02] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 space-y-20">

                    {/* Grid Section 1: The Deliverables & Business Value */}
                    <div className="space-y-12">
                        <div className="text-left max-w-2xl space-y-3">
                            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                                Tailored Functional Blueprints
                            </span>
                            <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                                Production-Grade Automation Solutions
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                We don't build generic, rigid chat templates. We engineer specialized autonomous engines and custom software architectures designed to capture revenue, reclaim operational hours, and optimize data workflows.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Deliverable 1 */}
                            <div className="bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group relative overflow-hidden">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                                    <TrendingUp size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-base font-bold text-white uppercase tracking-wide">Inbound Lead Generation Engines</h3>
                                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">Impact: Conversion Optimization</span>
                                </div>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Active 24/7 qualifying environments that engage raw website traffic, evaluate user intent metrics via smart conversational loops, extract verified contact milestones, and route structured hot pipeline leads straight into your primary databases instantly.
                                </p>
                                <ul className="text-[11px] font-mono text-slate-500 space-y-1 list-none pl-0">
                                    <li>⚡ <span className="text-slate-300">What you get:</span> Instant CRM ingestion, high-intent lead parsing, 24/7 customer capture.</li>
                                </ul>
                            </div>

                            {/* Deliverable 2 */}
                            <div className="bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group relative overflow-hidden">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                                    <Database size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-base font-bold text-white uppercase tracking-wide">Internal Knowledge Base Systems</h3>
                                    <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider block">Impact: Overhead Reduction</span>
                                </div>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Retrieval-Augmented Generation (RAG) models trained securely and exclusively on your internal operational infrastructure—including technical handbooks, company documentation, and Google Drive directories—to serve up instant data answers with zero external hallucinations.
                                </p>
                                <ul className="text-[11px] font-mono text-slate-500 space-y-1 list-none pl-0">
                                    <li>⚡ <span className="text-slate-300">What you get:</span> Secure sandboxed context search, automated employee training layers, zero leaks.</li>
                                </ul>
                            </div>

                            {/* Deliverable 3 */}
                            <div className="bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group relative overflow-hidden">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                                    <Zap size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-base font-bold text-white uppercase tracking-wide">Asynchronous Workflow Routers</h3>
                                    <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider block">Impact: System Autonomy</span>
                                </div>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Event-driven background logic gates that intercept explicit business webhooks (such as purchase logs, email triggers, or custom app submissions) and programmatically carry out multi-layered data formatting transformations across web and native targets.
                                </p>
                                <ul className="text-[11px] font-mono text-slate-500 space-y-1 list-none pl-0">
                                    <li>⚡ <span className="text-slate-300">What you get:</span> Cross-platform API bridging via n8n, automated invoices, error-free logs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Grid Section 2: Engineered Core Stack */}
                    <div className="pt-12 border-t border-slate-900 space-y-12">
                        <div className="text-left max-w-2xl space-y-3">
                            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
                                The Engineering Sandbox
                            </span>
                            <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                                Systems & Tooling Frameworks
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                We select resilient, enterprise-grade logic infrastructure to ensure execution speed, strict data isolation, and total structural stability.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {/* Tool 1: Google AI Studio */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0 font-mono text-xs font-bold">AI</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Google AI Studio</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">High-speed prompt design and direct context-aware behavior tuning.</p>
                                </div>
                            </div>

                            {/* Tool 2: n8n Automation */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 font-mono text-xs font-bold">WF</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">n8n Automation</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Node-based orchestration engines for executing backend API calls safely.</p>
                                </div>
                            </div>

                            {/* Tool 3: Gemini Models */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0 font-mono text-xs font-bold">LLM</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Gemini Frameworks</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Frontier models for lightning-fast multi-step processing reasoning.</p>
                                </div>
                            </div>

                            {/* Tool 4: React / Next.js */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 font-mono text-xs font-bold">FE</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">React & Next.js</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Building blazing fast, highly dynamic, and responsive chat interfaces.</p>
                                </div>
                            </div>

                            {/* Tool 5: Tailwind CSS */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 font-mono text-xs font-bold">UI</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Tailwind CSS</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Crafting pixel-perfect, modern dashboard designs tailored to your brand layout.</p>
                                </div>
                            </div>

                            {/* Tool 6: Firebase */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 font-mono text-xs font-bold">DB</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Firebase / Firestore</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Real-time chat logging, user session states, and enterprise data security.</p>
                                </div>
                            </div>

                            {/* Tool 7: Apps Script */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 font-mono text-xs font-bold">BE</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Apps Script</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Custom serverless routing handlers linked directly to spreadsheet databases.</p>
                                </div>
                            </div>

                            {/* Tool 8: React Native & Expo */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0 font-mono text-xs font-bold">MB</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">React Native & Expo</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Deploying assistant widgets native to iOS and Android applications fluidly.</p>
                                </div>
                            </div>

                            {/* Tool 9: Agile Engineering Management */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 flex-shrink-0 font-mono text-xs font-bold">PM</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Agile Management</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Clear milestone tracking, structured handoffs, and transparent sprint delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NEW CUSTOMER ACTION CTA PORTAL */}
                    <div className="pt-10 flex flex-col items-center text-center max-w-xl mx-auto space-y-6">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                        <p className="text-xs font-mono text-slate-400 leading-relaxed">
                            Ready to deploy an autonomous intelligence structure or custom full-stack application tailored directly to your commercial operational bottlenecks? Let's initiate a system setup scoping track.
                        </p>
                        <a
                            href={`mailto:ekenehq@gmail.com?subject=${encodeURIComponent(
                                "Architecture Initiative Request // Scope Discovery Inquiry"
                            )}&body=${encodeURIComponent(
                                "Hi Kenny,\n\nI reviewed your system delivery frameworks and automation deliverables blueprint. I would like to initiate an exploratory scope discussion regarding a project development track for our business.\n\nProject Scope Framework:\n• Intent/Target: [e.g., Lead Gen Bot / Webapp Architecture / Custom Integration]\n• Current Bottleneck: [Detail your operational challenge]\n\nLet's coordinate a session to trace our technical requirements blueprint.\n\nBest regards,\n[Your Name]\n[Company]"
                            )}`}
                            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-purple-400 bg-slate-900/50 hover:bg-slate-900 text-purple-400 px-6 py-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.01] active:scale-[0.99]"
                        >
                            <Mail size={13} />
                            <span>Initiate Architecture Project</span>
                        </a>
                    </div>

                </div>
            </section>

            {/* SECTION 4: PRODUCTION RELEASES (PROJECTS) */}
            <section id="projects" className="py-24 border-b border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="text-left max-w-3xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">Engineered Ecosystems</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Production systems in the wild</h2>
                        <p className="text-slate-400 text-sm sm:text-base max-w-xl">A deep dive into custom full-stack solutions and AI-integrated engines deployed to optimize operations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-slate-900/40 border border-slate-900 hover:border-slate-800/60 p-8 rounded-2xl flex flex-col justify-between space-y-8 transition-all duration-300">
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400"><Bot size={20} /></div>
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
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">An intelligent lead acquisition and sales automation system running 24/7. It replaces standard contact forms with a multi-step conversational interface that captures customer metadata.</p>
                                <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 border border-slate-900 rounded-xl font-mono text-[11px]">
                                    <div>
                                        <p className="text-slate-500 uppercase text-[9px] font-bold tracking-wider">Pipeline Output</p>
                                        <p className="text-white mt-0.5 font-bold">Apps Script Webhook</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 uppercase text-[9px] font-bold tracking-wider">Conversion Lift</p>
                                        <p className="text-emerald-400 mt-0.5 font-bold">+28% Form Completion</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono">
                                <span className="text-slate-500">Status: Active</span>
                                <button onClick={() => setChatOpen(true)} className="text-purple-400 flex items-center gap-1 font-bold">
                                    <span>Test Interface Live</span><span>→</span>
                                </button>
                            </div>
                        </div>

                        <div className="group bg-slate-900/40 border border-slate-900 hover:border-slate-800/60 p-8 rounded-2xl flex flex-col justify-between space-y-8 transition-all duration-300">
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400"><Code size={20} /></div>
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
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Production-ready native applications built for modern performance and scale. Features deep local hardware security integration, offline data caching mechanics, and clean state modules.</p>
                                <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 border border-slate-900 rounded-xl font-mono text-[11px]">
                                    <div>
                                        <p className="text-slate-500 uppercase text-[9px] font-bold tracking-wider">Engine Structure</p>
                                        <p className="text-white mt-0.5 font-bold">Managed Workflow</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 uppercase text-[9px] font-bold tracking-wider">Performance Index</p>
                                        <p className="text-emerald-400 mt-0.5 font-bold">60FPS Fluid Render</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono">
                                <span className="text-slate-500">Status: Verified Ecosystems</span>
                                <span className="text-indigo-400 font-bold">Architected Assets</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: CLIENT TESTIMONIALS MATRIX */}
            <section id="testimonials" className="py-24 border-b border-slate-900 bg-slate-900/20">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
                        <div className="space-y-3 text-left">
                            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">Validated Business Impact</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Trusted by growth operators</h2>
                        </div>
                        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex items-center gap-4 flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">4.9</div>
                            <div className="text-left">
                                <p className="text-xs font-bold text-white">Average Client Rating</p>
                                <p className="text-[11px] text-slate-500 font-mono">Based on active platform deployments</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">Professional Services</span>
                                    <div className="flex text-purple-400 text-xs font-black">★★★★★</div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">"We used to miss structural query leads over weekends entirely. Kenny built an automated chatbot logic that hooks straight to our client assessment vectors. Truly brilliant workflow optimization."</p>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xs font-bold text-white">David Harrison</h4>
                                    <p className="text-[10px] text-slate-500">Managing Director</p>
                                </div>
                                <span className="text-xs font-mono font-bold text-emerald-400">+35% Lead Rate</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">E-Commerce & Retail</span>
                                    <div className="flex text-purple-400 text-xs font-black">★★★★★</div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">"The interactive dashboard element completely removed manual entry error. Customers self-qualify their orders directly inside the system, saving our support desk over 12 hours of administrative overhead."</p>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xs font-bold text-white">Sarah Jenkins</h4>
                                    <p className="text-[10px] text-slate-500">Operations Lead</p>
                                </div>
                                <span className="text-xs font-mono font-bold text-emerald-400">Saved 12h/wk</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">Consulting Agencies</span>
                                    <div className="flex text-purple-400 text-xs font-black">★★★★★</div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">"The direct calendar pipeline setup changed how we book strategy consultations. Zero platform friction. Local clients can lock in slots securely right inside the chat bubble interface in under a minute."</p>
                            </div>
                            <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xs font-bold text-white">Marcus Vance</h4>
                                    <p className="text-[10px] text-slate-500">Principal Partner</p>
                                </div>
                                <span className="text-xs font-mono font-bold text-emerald-400">Instant Sync</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="pricing"
                className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-900/10 via-slate-950 to-slate-950 relative overflow-hidden"
            >
                {/* Ambient glow */}
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/[0.03] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full inline-block">
                            Transparent Commitment
                        </span>

                        <h2 className="mt-6 text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Predictable, High-Value Investment
                        </h2>

                        <p className="mt-4 text-slate-400">
                            Choose the package that best fits your business. Every plan is
                            designed to deliver real value with no hidden costs.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid gap-8 lg:grid-cols-3">

                        {/* Starter */}
                        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">

                            <div className="text-center pb-8 border-b border-slate-800">
                                <p className="text-xs uppercase font-mono text-slate-500">
                                    Starter AI
                                </p>

                                <h3 className="mt-3 text-5xl font-black text-white">
                                    £500
                                </h3>

                                <p className="text-purple-400 mt-2 font-semibold">
                                    + £100/mo
                                </p>
                            </div>

                            <ul className="space-y-4 py-8 text-sm text-slate-300">
                                <li className="flex gap-3"><CheckCircle2 className="text-purple-400" size={18} />1 AI Chat Assistant</li>
                                <li className="flex gap-3"><CheckCircle2 className="text-purple-400" size={18} />Website Integration</li>
                                <li className="flex gap-3"><CheckCircle2 className="text-purple-400" size={18} />Google Sheets Leads</li>
                                <li className="flex gap-3"><CheckCircle2 className="text-purple-400" size={18} />Monthly Maintenance</li>
                            </ul>

                            <a
                                href="mailto:ekenehq@gmail.com?subject=Starter AI Package"
                                className="w-full flex justify-center bg-purple-600 hover:bg-purple-500 rounded-xl py-4 font-bold transition"
                            >
                                Choose Starter
                            </a>

                        </div>

                        {/* Growth */}
                        <div className="relative bg-gradient-to-b from-purple-600/10 to-slate-900/40 border-2 border-purple-500 rounded-3xl p-8 shadow-2xl shadow-purple-900/20 scale-105">

                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-xs font-black uppercase">
                                Most Popular
                            </div>

                            <div className="text-center pb-8 border-b border-slate-800">

                                <p className="text-xs uppercase font-mono text-purple-300">
                                    Growth AI
                                </p>

                                <h3 className="mt-3 text-5xl font-black text-white">
                                    £1200
                                </h3>

                                <p className="text-purple-300 mt-2 font-semibold">
                                    + £250/mo
                                </p>

                            </div>

                            <ul className="space-y-4 py-8 text-sm text-slate-300">

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-purple-400" />Everything in Starter</li>

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-purple-400" />CRM Integration</li>

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-purple-400" />Appointment Booking</li>

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-purple-400" />Analytics Dashboard</li>

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-purple-400" />Priority Support</li>

                            </ul>

                            <a
                                href="mailto:ekenehq@gmail.com?subject=Growth AI Package"
                                className="w-full flex justify-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl py-4 font-bold"
                            >
                                Choose Growth
                            </a>

                        </div>

                        {/* Enterprise */}
                        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">

                            <div className="text-center pb-8 border-b border-slate-800">

                                <p className="text-xs uppercase font-mono text-slate-500">
                                    Enterprise AI
                                </p>

                                <h3 className="mt-3 text-5xl font-black text-white">
                                    Custom
                                </h3>

                                <p className="text-emerald-400 mt-2 font-semibold">
                                    Contact Us
                                </p>

                            </div>

                            <ul className="space-y-4 py-8 text-sm text-slate-300">

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-emerald-400" />Unlimited AI Agents</li>

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-emerald-400" />Custom Integrations</li>

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-emerald-400" />Private Knowledge Base</li>

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-emerald-400" />Dedicated Support</li>

                                <li className="flex gap-3"><CheckCircle2 size={18} className="text-emerald-400" />Bespoke Development</li>

                            </ul>

                            <a
                                href="mailto:ekenehq@gmail.com?subject=Enterprise AI Solution"
                                className="w-full flex justify-center bg-emerald-600 hover:bg-emerald-500 rounded-xl py-4 font-bold transition"
                            >
                                Contact Sales
                            </a>

                        </div>

                    </div>

                </div>
            </section>

            {/* SECTION 6: FAQ ACCORDION MATRIX */}
            <section id="faq" className="py-24 border-b border-slate-900 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 space-y-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">Technical FAQ</h2>
                        <p className="text-slate-400 text-xs sm:text-sm">Clear insights on data processing, integration steps, and system architecture.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Where does the captured data travel to directly?", a: "Your data funnels immediately from the client container straight into your authorized secure Google Sheets rows using an asynchronous HTTPS POST webhook pipeline." },
                            { q: "Is a third-party server storing my company leads?", a: "No. The architecture is explicitly serverless and direct. The software triggers standard data execution scripts directly into your Google Drive sandbox." },
                            { q: "Can the conversational assistant function on mobile views?", a: "Yes. The chatbot script is built using responsive Tailwind structures, allowing fluid, high-speed transitions across any smartphone viewport." }
                        ].map((item, index) => (
                            <div key={index} className="bg-slate-900/50 border border-slate-900 rounded-xl overflow-hidden">
                                <button onClick={() => setFaqOpen(faqOpen === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left font-bold text-sm text-white hover:bg-slate-900 transition-colors">
                                    <span>{item.q}</span>
                                    <ChevronDown size={16} className={`text-purple-400 transition-transform duration-200 ${faqOpen === index ? 'rotate-180' : ''}`} />
                                </button>
                                {faqOpen === index && (
                                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed bg-slate-950/40 border-t border-slate-900/40 pt-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ChatBot />
            <Footer />
        </div>
    );
}