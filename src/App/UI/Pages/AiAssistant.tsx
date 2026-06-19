import {
    Bot, ChevronDown, Code, GraduationCap, Menu, MessageSquare,
    ShieldCheck, Smartphone, Users, X, ArrowRight, CheckCircle2,
    Zap, Sparkles, Database, BarChart3, TrendingUp, HelpCircle, Calendar
} from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
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
                <div className="max-w-7xl mx-auto px-6 space-y-20">

                    {/* Grid Section 1: The Systems We Deploy */}
                    <div className="space-y-12">
                        <div className="text-left max-w-2xl space-y-3">
                            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                                Tailored Functional Blueprints
                            </span>
                            <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                                Specialized Bot Systems
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                We don't build generic, rigid chat templates. We engineer specialized autonomous engines tuned to perform distinct operational goals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                                    <TrendingUp size={20} />
                                </div>
                                <h3 className="text-base font-bold text-white">Inbound Lead Generation Agents</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Active 24/7 client qualifying engines that engage website traffic, evaluate intent metrics, capture contact details, and route structural hot leads into your CRM instantly.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                                    <Database size={20} />
                                </div>
                                <h3 className="text-base font-bold text-white">Internal Knowledge Base Bots</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Retrieval-Augmented Generation (RAG) helpers trained directly on your internal company PDFs, policy handbooks, or Google Drive files to provide instant, precise support data answers.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                                    <Zap size={20} />
                                </div>
                                <h3 className="text-base font-bold text-white">Asynchronous Workflow Router Bots</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Event-driven background scripts that listen for trigger parameters (like an incoming email or purchase event) and execute multi-step database transformations dynamically.
                                </p>
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

                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {/* ========================================== */}
                            {/* AI & AUTOMATION LAYER                      */}
                            {/* ========================================== */}

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

                            {/* ========================================== */}
                            {/* FRONTEND LAYER                             */}
                            {/* ========================================== */}

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

                            {/* ========================================== */}
                            {/* BACKEND & DATA LAYER                       */}
                            {/* ========================================== */}

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

                            {/* ========================================== */}
                            {/* MOBILE LAYER                               */}
                            {/* ========================================== */}

                            {/* Tool 8: React Native & Expo */}
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex items-center space-x-4 hover:border-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0 font-mono text-xs font-bold">MB</div>
                                <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">React Native & Expo</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Deploying assistant widgets native to iOS and Android applications fluidly.</p>
                                </div>
                            </div>

                            {/* ========================================== */}
                            {/* LEADERSHIP & ORCHESTRATION LAYER           */}
                            {/* ========================================== */}

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

            {/* ========================================== */}
            {/* NEW SECTION: FLAT-RATE PRICING ENGINE      */}
            {/* ========================================== */}
            <section id="pricing" className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-900/10 via-slate-950 to-slate-950 relative overflow-hidden">
                {/* Radial ambient lighting accent */}
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/[0.03] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    {/* Header Layout */}
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full inline-block">
                            Transparent Commitment
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Predictable, high-value investment
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            No hidden operational surprises, scaling markups, or hourly billing fluff. Just enterprise-ready logic tailored to your exact business metrics.
                        </p>
                    </div>

                    {/* Central Pricing Matrix Card */}
                    <div className="max-w-xl mx-auto bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12 relative backdrop-blur-sm shadow-2xl shadow-purple-950/10">
                        {/* Premium 'Most Popular / Verified' Ribbon */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg border border-purple-400/20">
                            Fixed Blueprint Agreement
                        </div>

                        {/* Financial Header Blocks */}
                        <div className="text-center space-y-4 pb-8 border-b border-slate-800">
                            <p className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500">Autonomous Assistant Buildout</p>

                            <div className="space-y-1">
                                <div className="text-5xl font-black text-white tracking-tight flex items-center justify-center font-mono">
                                    £500
                                    <span className="text-xs text-slate-500 font-sans tracking-normal font-medium ml-2">Flat Build Rate</span>
                                </div>
                                <div className="text-lg font-bold text-purple-400 flex items-center justify-center gap-1.5 font-mono pt-1">
                                    + £100
                                    <span className="text-xs text-slate-400 font-sans font-medium tracking-normal">/ month comprehensive maintenance</span>
                                </div>
                            </div>
                        </div>

                        {/* Included Deliverables Architecture Layer */}
                        <div className="py-8 space-y-4">
                            <p className="text-[11px] uppercase font-mono font-bold tracking-widest text-slate-400 text-left">What's Engineered inside the Ecosystem:</p>

                            <ul className="space-y-3.5 text-left text-xs sm:text-sm text-slate-300">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                                    <span>Custom context-aware conversational conversational logic routing matching your specific brand behavior patterns.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                                    <span>Direct production integration webhook link to **your standalone Google Sheets tracking database**.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                                    <span>Fluid, responsive UI container matching your theme, fully optimized across all desktop and smartphone browsers.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span>**Maintenance Coverage Includes:** Full hosting runtime support, script protection optimization, layout fine-tuning changes, and ongoing API connection stability tracking checks.</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA Direct Communication Funnel */}
                        <div className="pt-4">
                            <a
                                href="mailto:ekenehq@gmail.com?subject=Inquiry%20regarding%20AI%20Assistant%20Deployment&body=Hi%20Ekene%2C%20I'm%20interested%20in%20deploying%20an%20AI%20Assistant%20for%20my%20business%20at%20your%20flat%20rate%20blueprint.%20Let's%20connect."
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl text-sm font-bold shadow-xl shadow-purple-900/30 flex items-center justify-center gap-2 hover:from-purple-500 hover:to-indigo-500 active:scale-[0.99] transform transition-all group"
                            >
                                <MessageSquare size={16} className="text-purple-200" />
                                <span>Email me below</span>
                                <ArrowRight size={14} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <p className="text-[10px] text-slate-500 font-mono text-center mt-3">
                                Directly opens a secure communication thread to **ekenehq@gmail.com**
                            </p>
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

            <Footer />

            {/* ========================================== */}
            {/* FLOATING INTERACTIVE CHAT WIDGET INTERFACE */}
            {/* ========================================== */}
            <div className="fixed bottom-6 right-6 z-50 font-sans antialiased">

                {/* Floating Action Launch Button */}
                {!chatOpen && (
                    <button
                        onClick={() => setChatOpen(true)}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center relative group"
                    >
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
                        <Bot size={24} />
                    </button>
                )}

                {/* Expanded Chat Terminal Interface */}
                {chatOpen && (
                    <div className="bg-slate-900 border border-slate-800 w-80 sm:w-[400px] h-[550px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300">

                        {/* Premium Header Architecture */}
                        <div className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                        <Bot size={18} />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xs text-white tracking-wide uppercase">AI Assistant</h3>
                                    <p className="text-[10px] text-slate-500 font-mono font-medium">Automation Active Engine</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setChatOpen(false)}
                                className="text-slate-500 hover:text-white transition-colors text-xl font-light p-1"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Body Streams Layout */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs leading-relaxed transition-all ${msg.sender === "user"
                                        ? "bg-purple-600 text-white rounded-tr-none font-medium shadow-md shadow-purple-950/20"
                                        : "bg-slate-900 text-slate-200 rounded-tl-none border border-slate-800/80 shadow-sm"
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {/* DYNAMIC SMART CONVERSION QUICK CHIPS */}
                            {chatStep === 0 && (
                                <div className="flex flex-wrap gap-2 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <button
                                        onClick={() => {
                                            setChatInput("Yes, show me how it works!");
                                            // Allows immediate micro-delay submit execution triggers
                                            setTimeout(() => document.getElementById("chat-submit-btn")?.click(), 50);
                                        }}
                                        className="bg-slate-900 hover:bg-slate-800 text-purple-300 border border-purple-500/20 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all hover:scale-[1.02]"
                                    >
                                        Yes, show me how it works! 🚀
                                    </button>
                                    <button
                                        onClick={() => {
                                            setChatInput("Just checking pricing structures.");
                                            setTimeout(() => document.getElementById("chat-submit-btn")?.click(), 50);
                                        }}
                                        className="bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all"
                                    >
                                        Just viewing features
                                    </button>
                                </div>
                            )}

                            {/* CALENDAR EMBED SCHEDULER CHIP */}
                            {chatStep === 3 && (
                                <div className="pt-2 animate-in zoom-in-95 duration-200">
                                    <button
                                        onClick={() => {
                                            setChatInput("Confirming 15-Minute Sync");
                                            setTimeout(() => document.getElementById("chat-submit-btn")?.click(), 50);
                                        }}
                                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-xl text-xs font-bold shadow-lg shadow-purple-950/40 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-transform"
                                    >
                                        <Calendar size={14} />
                                        <span>Lock In Calendar Consultation</span>
                                    </button>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input System Pipeline Block Forms */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder={
                                    chatStep === 4
                                        ? "Data synchronized safely with Sheet!"
                                        : chatStep === 1
                                            ? "Enter your name..."
                                            : chatStep === 2
                                                ? "Enter contact phone number..."
                                                : "Type your message response..."
                                }
                                disabled={chatStep === 4}
                                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-purple-500 placeholder-slate-600 transition-colors disabled:opacity-50"
                            />
                            <button
                                id="chat-submit-btn"
                                type="submit"
                                disabled={chatStep === 4 || !chatInput.trim()}
                                className="bg-purple-600 hover:bg-purple-500 disabled:bg-slate-950 text-white px-4 rounded-xl text-xs font-bold transition-all disabled:text-slate-600 border border-transparent disabled:border-slate-800/60"
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