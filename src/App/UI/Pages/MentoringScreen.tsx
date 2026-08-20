import React, { useState, useEffect, useRef } from "react";
import {
    User,
    Bot,
    ChevronDown,
    Rocket,
    Check,
    Phone,
    Mail,
    MapPin,
    Sparkles,
    Calendar,
    ArrowRight,
    Shield,
    BarChart2,
    GraduationCap,
    Terminal,
    Briefcase
} from "lucide-react";
import Footer from "../Components/Footer";
import NavbarNew from "../Components/NavbarNew";

interface Message {
    id: string;
    sender: "bot" | "user";
    text: string;
    timestamp: string;
    interactiveOptions?: string[];
    fieldToCapture?: "businessType" | "clientName" | "clientPhone" | "clientEmail" | "bookingTime" | "mentorGoal" | "currentSkills" | "studyHours" | null;
}

interface CapturedLead {
    businessType: string;
    clientName: string;
    clientPhone: string;
    clientEmail: string;
    bookingTime: string;
}

interface MentorLead {
    clientName: string;
    mentorGoal: string;
    currentSkills: string;
    studyHours: string;
    clientEmail: string;
    bookingTime: string;
}

const FAQ_ITEMS = [
    {
        question: "How does the assistant get installed on my website?",
        answer: "It is incredibly simple. I provide you with a single, lightweight line of code (a script tag). If you use WordPress, Wix, Squarespace, Shopify, or a custom React site, you just paste it in. I can also do this for you at no extra charge in under 10 minutes."
    },
    {
        question: "What exactly is included in the £100/month subscription?",
        answer: "This fee covers the premium secure cloud hosting, database encryption, AI model token costs, and 24/7 server monitoring. Most importantly, it includes unlimited updates—whenever your prices, services, or hours change, send me a text and I'll update your assistant within 24 hours."
    },
    {
        question: "Is this compliant with UK GDPR regulations?",
        answer: "Absolutely. Before collecting any customer details, the assistant displays a friendly privacy disclaimer. The data captured is stored securely and sent directly to your phone and email with full end-to-end encryption."
    },
    {
        question: "Do I need any technical knowledge to manage this?",
        answer: "Zero. I handle the setup, hosting, AI model fine-tuning, and monthly maintenance. You won't have to write, edit, or worry about a single line of code."
    }
];

const MENTOR_FAQ_ITEMS = [
    {
        question: "Is there support available between our scheduled sessions?",
        answer: "Yes! You get direct access to my private Teams channel for asynchronous support. Send your broken code snippets or conceptual blocks anytime, and I will jump in with video walk-throughs or written guidance."
    }
];

interface IconProps {
    name: string;
    className?: string;
    size?: number;
}

const Icon = ({ name, className = "", size = 20 }: IconProps): React.ReactElement | null => {
    // Directly maps name strings to official imported Lucide React icons
    const icons: any = {
        user: User,
        bot: Bot,
        chevronDown: ChevronDown,
        rocket: Rocket,
        check: Check,
        phone: Phone,
        mail: Mail,
        mapPin: MapPin,
        sparkles: Sparkles,
        calendar: Calendar,
        arrowRight: ArrowRight,
        shield: Shield,
        chart: BarChart2,
        graduation: GraduationCap,
        terminal: Terminal,
        briefcase: Briefcase
    };

    const LucideIcon = icons[name];
    if (!LucideIcon) return null;
    return <LucideIcon className={className} size={size} />;
};

const MentoringScreen: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<"b2b" | "mentorship">("mentorship");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // ROI Calculator states (B2B)
    const [monthlyVisitors, setMonthlyVisitors] = useState(1500);
    const [ticketValue, setTicketValue] = useState(120);
    const [captureRate, setCaptureRate] = useState(4);

    // Mentorship strategy planner state
    const [mentorGoal, setMentorGoal] = useState<"fullstack" | "automation" | "career">("fullstack");
    const [mentorExp, setMentorExp] = useState<"none" | "selftaught" | "csgrad">("none");
    const [mentorHours, setMentorHours] = useState(12);

    // Chat simulator states (B2B)
    const [simMessages, setSimMessages] = useState<Message[]>([
        {
            id: "init",
            sender: "bot",
            text: "Hello! 👋 I am your automated lead capturing assistant. Tap one of the common Lincolnshire industries below to see how I customize my flow immediately for your business!",
            timestamp: "Just now",
            interactiveOptions: ["Lincoln Hair Salon 💇‍♀️", "Local Lincoln Plumber 🔧", "Lincoln Dental Clinic 🦷"],
            fieldToCapture: "businessType"
        }
    ]);
    const [currentLeadStep, setCurrentLeadStep] = useState<keyof CapturedLead | "done">("businessType");
    const [leadData, setLeadData] = useState<CapturedLead>({
        businessType: "",
        clientName: "",
        clientPhone: "",
        clientEmail: "",
        bookingTime: ""
    });

    // Mentorship Chat Simulator states
    const [mentorMessages, setMentorMessages] = useState<Message[]>([
        {
            id: "init_mentor",
            sender: "bot",
            text: "Welcome to Elite Mentorship! 🎓 I am Ekene's digital student assistant. Ready to escape coding tutorial hell? Select your ultimate tech goal below to kick off your custom strategy proposal:",
            timestamp: "Just now",
            interactiveOptions: ["Career Transition (Web/Apps) 🚀", "Mastering AI & Automation 🤖", "Landing my first UK Dev role 🇬🇧"],
            fieldToCapture: "mentorGoal"
        }
    ]);
    const [currentMentorStep, setCurrentMentorStep] = useState<keyof MentorLead | "done">("mentorGoal");
    const [mentorData, setMentorData] = useState<MentorLead>({
        clientName: "",
        mentorGoal: "",
        currentSkills: "",
        studyHours: "",
        clientEmail: "",
        bookingTime: ""
    });

    const [customInput, setCustomInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement>(null);
    const mentorChatEndRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 20);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // useEffect(() => {
    //     if (currentTab === "b2b") {
    //         chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    //     } else {
    //         mentorChatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [simMessages, mentorMessages, currentTab]);

    const handleBotResponse = (userInput: string, nextStep: keyof CapturedLead | "done", updatedLead: CapturedLead) => {
        let nextMessageText = "";
        let options: string[] | undefined = undefined;

        switch (nextStep) {
            case "clientName":
                nextMessageText = `Awesome choice! A smart digital assistant for a "${userInput}" works wonders. To show you how I log qualified customer leads, what is your name?`;
                break;
            case "clientPhone":
                nextMessageText = `Nice to meet you, ${updatedLead.clientName}! What is a good UK mobile number to text booking alerts to? (e.g. 07778 745043)`;
                break;
            case "clientEmail":
                nextMessageText = `Perfect. And your email address so we can route the booking details?`;
                break;
            case "bookingTime":
                nextMessageText = `Got it! Let's schedule your 15-minute screen-share demonstration with Ekene to build a draft model. Please pick a preferred time frame below:`;
                options = ["Tomorrow morning", "Tomorrow afternoon", "Next Monday at 10:00 AM", "Next Tuesday at 2:00 PM"];
                break;
            case "done":
                nextMessageText = `🎉 All done! Look at the 'Owner Notification Panel' on this screen. You just saw how quickly client details are booked and logged 24/7. Shall we design one for your actual business?`;
                options = ["Yes, book my free mockup!", "Email me full details"];
                break;
        }

        setTimeout(() => {
            setSimMessages(prev => [
                ...prev,
                {
                    id: Date.now().toString() + "_bot",
                    sender: "bot",
                    text: nextMessageText,
                    timestamp: "Just now",
                    interactiveOptions: options,
                    fieldToCapture: nextStep === "done" ? null : nextStep
                }
            ]);
        }, 650);
    };

    const handleMentorBotResponse = (userInput: string, nextStep: keyof MentorLead | "done", updatedMentor: MentorLead) => {
        let nextMessageText = "";
        let options: string[] | undefined = undefined;

        switch (nextStep) {
            case "clientName":
                nextMessageText = `Exciting selection! Customizing for: "${userInput}". Let's craft your tailored curriculum. What is your name?`;
                break;
            case "currentSkills":
                nextMessageText = `Great to meet you, ${updatedMentor.clientName}! How would you define your current programming experience?`;
                options = ["Complete Beginner 🐣", "Know basic HTML/CSS/JS ⌨️", "Self-taught, struggling with large projects 🧱"];
                break;
            case "studyHours":
                nextMessageText = `Got it. Direct 1-on-1 pacing is key. How many hours a week can you comfortably set aside for programming exercises & code reviews?`;
                options = ["5 - 10 Hours/Wk", "10 - 20 Hours/Wk", "20+ Hours/Wk (Accelerated)"];
                break;
            case "clientEmail":
                nextMessageText = `Solid allocation. We can scale modules effectively. What is your primary email address to send your personalized curriculum blueprint?`;
                break;
            case "bookingTime":
                nextMessageText = `Fantastic. Let's arrange a free, friendly 20-minute Zoom career consultation with Ekene to audit your timeline. Select an slot option:`;
                options = ["This Wednesday Afternoon", "This Thursday Morning", "Next Monday at 11:00 AM", "Next Tuesday at 4:00 PM"];
                break;
            case "done":
                nextMessageText = `🎯 Strategy blueprint locked! Scroll up to review the Student Strategy Panel. Ekene will contact you soon over email to confirm the slot. Are you ready to take command of your technical future?`;
                options = ["Let's start the mentorship!", "Show FAQ overview"];
                break;
        }

        setTimeout(() => {
            setMentorMessages(prev => [
                ...prev,
                {
                    id: Date.now().toString() + "_mentor_bot",
                    sender: "bot",
                    text: nextMessageText,
                    timestamp: "Just now",
                    interactiveOptions: options,
                    fieldToCapture: nextStep === "done" ? null : nextStep
                }
            ]);
        }, 650);
    };

    const handleUserInput = (inputText: string) => {
        if (!inputText.trim()) return;

        if (currentTab === "b2b") {
            const userMsg: Message = {
                id: Date.now().toString(),
                sender: "user",
                text: inputText,
                timestamp: "Just now"
            };

            const nextStepMap: Record<keyof CapturedLead | "done", keyof CapturedLead | "done"> = {
                businessType: "clientName",
                clientName: "clientPhone",
                clientPhone: "clientEmail",
                clientEmail: "bookingTime",
                bookingTime: "done",
                done: "done"
            };

            const currentStep = currentLeadStep;
            const nextStep = currentStep === "done" ? "done" : nextStepMap[currentStep];

            const updatedLead = { ...leadData };
            if (currentStep !== "done") {
                updatedLead[currentStep] = inputText;
            }

            setLeadData(updatedLead);
            setCurrentLeadStep(nextStep);
            setSimMessages(prev => [...prev, userMsg]);
            setCustomInput("");

            handleBotResponse(inputText, nextStep, updatedLead);
        } else {
            // Mentorship tracking
            const userMsg: Message = {
                id: Date.now().toString() + "_mentor_user",
                sender: "user",
                text: inputText,
                timestamp: "Just now"
            };

            const nextStepMap: Record<keyof MentorLead | "done", keyof MentorLead | "done"> = {
                mentorGoal: "clientName",
                clientName: "currentSkills",
                currentSkills: "studyHours",
                studyHours: "clientEmail",
                clientEmail: "bookingTime",
                bookingTime: "done",
                done: "done"
            };

            const currentStep = currentMentorStep;
            const nextStep = currentStep === "done" ? "done" : nextStepMap[currentStep];

            const updatedMentor = { ...mentorData };
            if (currentStep !== "done") {
                updatedMentor[currentStep] = inputText;
            }

            setMentorData(updatedMentor);
            setCurrentMentorStep(nextStep);
            setMentorMessages(prev => [...prev, userMsg]);
            setCustomInput("");

            handleMentorBotResponse(inputText, nextStep, updatedMentor);
        }
    };

    const resetSimulator = () => {
        setLeadData({
            businessType: "",
            clientName: "",
            clientPhone: "",
            clientEmail: "",
            bookingTime: ""
        });
        setCurrentLeadStep("businessType");
        setSimMessages([
            {
                id: "init",
                sender: "bot",
                text: "Hello! 👋 I am your automated lead capturing assistant. Tap one of the common Lincolnshire industries below to see how I customize my flow immediately for your business!",
                timestamp: "Just now",
                interactiveOptions: ["Lincoln Hair Salon 💇‍♀️", "Local Lincoln Plumber 🔧", "Lincoln Dental Clinic 🦷"],
                fieldToCapture: "businessType"
            }
        ]);
    };

    const resetMentorSimulator = () => {
        setMentorData({
            clientName: "",
            mentorGoal: "",
            currentSkills: "",
            studyHours: "",
            clientEmail: "",
            bookingTime: ""
        });
        setCurrentMentorStep("mentorGoal");
        setMentorMessages([
            {
                id: "init_mentor",
                sender: "bot",
                text: "Welcome to Elite Mentorship! 🎓 I am Ekene's digital student assistant. Ready to escape coding tutorial hell? Select your ultimate tech goal below to kick off your custom strategy proposal:",
                timestamp: "Just now",
                interactiveOptions: ["Career Transition (Web/Apps) 🚀", "Mastering AI & Automation 🤖", "Landing my first UK Dev role 🇬🇧"],
                fieldToCapture: "mentorGoal"
            }
        ]);
    };

    const calculatedLeadsPerMonth = Math.round(monthlyVisitors * (captureRate / 100));
    const potentialNewRevenue = calculatedLeadsPerMonth * ticketValue;

    const calculateMentorshipRoadmap = () => {
        let timelineWeeks = 24;
        let focusModules = ["Intro to JS Engine", "Frontend Architecture", "GitHub Orchestration"];

        if (mentorGoal === "fullstack") {
            focusModules = ["Component Design (React)", "SQL Schema & REST APIs", "AWS Cloud Pipelines & CI/CD"];
            timelineWeeks = mentorExp === "none" ? 28 : mentorExp === "selftaught" ? 20 : 14;
        } else if (mentorGoal === "automation") {
            focusModules = ["Prompt Engineering & API Keys", "Serverless Workflows (Zapier/Make)", "Zustand & Node Endpoints"];
            timelineWeeks = mentorExp === "none" ? 24 : mentorExp === "selftaught" ? 16 : 12;
        } else {
            focusModules = ["Mock Tech Screen Audits", "Elite CV Rewrite Framework", "Dynamic Portfolio Case Studies"];
            timelineWeeks = mentorExp === "none" ? 20 : mentorExp === "selftaught" ? 12 : 8;
        }

        if (mentorHours < 10) {
            timelineWeeks = Math.round(timelineWeeks * 1.4);
        } else if (mentorHours > 20) {
            timelineWeeks = Math.round(timelineWeeks * 0.85);
        }

        return { timelineWeeks, focusModules };
    };

    const roadmapData = calculateMentorshipRoadmap();

    return (
        <div className="bg-slate-950 text-slate-100 font-sans min-h-screen selection:bg-purple-600 selection:text-white overflow-x-hidden">
            <NavbarNew />

            {currentTab === "b2b" ? (
                <>
                    {/* B2B Services Hero Section */}
                    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse" />

                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid md:grid-cols-12 gap-12 items-center">

                                <div className="md:col-span-7 text-left space-y-6">
                                    <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800/60 px-3.5 py-1.5 rounded-full">
                                        <span className="flex h-2 w-2 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">Launching in Lincoln & Lincolnshire</span>
                                    </div>

                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                                        We Build AI Assistants That Turn Your Website Traffic Into <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">Paying Customers.</span>
                                    </h1>

                                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-medium leading-relaxed">
                                        70% of potential local customers browse websites outside working hours. Our custom digital assistants engage, capture verified contact info, and book appointments right into your Google Calendar on complete autopilot.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <a
                                            href="#simulator"
                                            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all duration-300 shadow-xl shadow-purple-600/20 transform hover:-translate-y-0.5"
                                        >
                                            <span>Test Live Chatbot Simulator</span>
                                            <Icon name="arrowRight" size={18} />
                                        </a>
                                        <a
                                            href="#calculator"
                                            className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-200 px-8 py-4 rounded-xl font-bold text-base transition-all"
                                        >
                                            <Icon name="chart" size={18} />
                                            <span>Calculate Your ROI</span>
                                        </a>
                                    </div>

                                    <div className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-extrabold text-emerald-400">100%</span>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fully Managed Flow</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-extrabold text-purple-400">Under 24h</span>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lincoln Deployment</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-extrabold text-indigo-400">UK GDPR</span>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Secure Encryption</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-5 relative flex justify-center">
                                    <div className="relative w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500" />

                                        <div className="absolute top-4 right-4 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                                            <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping inline-block" /> Live Demo
                                        </div>

                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="bg-purple-600/20 p-2.5 rounded-2xl border border-purple-500/30">
                                                <Icon name="bot" className="text-purple-400" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-slate-200 text-sm">Automated Client Capture</h4>
                                                <p className="text-[11px] text-slate-500 font-medium">Bespoke Local Assistant</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-4 text-xs">
                                            <div className="bg-slate-950 p-3 rounded-2xl rounded-tl-none border border-slate-800 max-w-[85%]">
                                                <p className="text-slate-300 font-medium leading-relaxed">
                                                    "Hi! Welcome to Lincoln Aesthetic Clinic. Would you like to check our treatment prices or book a free consultation?"
                                                </p>
                                            </div>
                                            <div className="bg-purple-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-right">
                                                <p className="font-semibold">"Yes, book me a skin consultation tomorrow."</p>
                                            </div>
                                            <div className="bg-slate-950 p-3 rounded-2xl rounded-tl-none border border-slate-800 max-w-[85%]">
                                                <p className="text-slate-300 font-medium leading-relaxed">
                                                    "Great choice! 🌟 What is the best phone number to text booking alerts to?"
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-slate-950/80 border border-slate-800/60 rounded-2xl p-3 mt-4 space-y-1.5">
                                            <p className="text-[10px] uppercase tracking-widest font-extrabold text-purple-400">Captured Lead Asset</p>
                                            <div className="flex justify-between text-[11px]">
                                                <span className="text-slate-500 font-bold">Client:</span>
                                                <span className="text-slate-300 font-medium">Sarah Jenkins</span>
                                            </div>
                                            <div className="flex justify-between text-[11px]">
                                                <span className="text-slate-500 font-bold">Phone:</span>
                                                <span className="text-emerald-400 font-mono">07911 582049</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Advantages Section */}
                    <section id="advantages" className="py-20 border-t border-slate-900 bg-slate-900/10">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                                <h2 className="text-xs uppercase tracking-widest font-black text-purple-500">Unmatched Business Power</h2>
                                <p className="text-3xl md:text-4xl font-extrabold text-white">Massive Advantages Built For Lincolnshire Businesses</p>
                                <p className="text-slate-400 font-medium">
                                    We focus on absolute bottom-line metrics: saving your time, converting cold traffic, and establishing local dominance.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                                    <div className="bg-purple-950/50 border border-purple-800/40 w-10 h-10 rounded-xl flex items-center justify-center text-purple-400">
                                        <Icon name="calendar" size={20} />
                                    </div>
                                    <h4 className="text-lg font-extrabold text-slate-200">Reclaim 10+ Hours/Wk</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Repetitive questions about treatment lists, pricing guides, and slot availability are handled automatically. Stop wasting hours on administrative ping-pong.
                                    </p>
                                </div>

                                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                                    <div className="bg-emerald-950/50 border border-emerald-800/40 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-400">
                                        <Icon name="rocket" size={20} />
                                    </div>
                                    <h4 className="text-lg font-extrabold text-slate-200">Instant Competitive Edge</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Most UK businesses take 12 to 24 hours to reply to website forms. By delivering responses in 0.5 seconds, you win customers before they search for competitors.
                                    </p>
                                </div>

                                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                                    <div className="bg-indigo-950/50 border border-indigo-800/40 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400">
                                        <Icon name="chart" size={20} />
                                    </div>
                                    <h4 className="text-lg font-extrabold text-slate-200">Valuable Client CRM Asset</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Stop losing phone numbers to scratch pads and memory. Every contact, email, and booking intent is safely logged in a clean spreadsheets dashboard you own forever.
                                    </p>
                                </div>

                                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                                    <div className="bg-purple-950/50 border border-purple-800/40 w-10 h-10 rounded-xl flex items-center justify-center text-purple-400">
                                        <Icon name="shield" size={20} />
                                    </div>
                                    <h4 className="text-lg font-extrabold text-slate-200">Bespoke Local Support</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        We are based locally right here in Lincoln. Call or text directly to update your pricing menu, shift hours, or fine-tune chat conversations within 24 hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Calculator Section */}
                    <section id="calculator" className="py-20 bg-slate-950 border-t border-slate-900 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl -z-10" />

                        <div className="max-w-5xl mx-auto px-6">
                            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                                <h2 className="text-xs uppercase tracking-widest font-black text-emerald-400">Interactive Profit Calculator</h2>
                                <p className="text-3xl md:text-4xl font-extrabold text-white">How Much Revenue Are You Leaving Behind?</p>
                                <p className="text-slate-400 text-sm">
                                    Slide the metrics to match your Lincoln business and see what capturing just a fraction more traffic can generate.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl grid md:grid-cols-12 gap-8 items-center">

                                <div className="md:col-span-7 space-y-8">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <label className="text-slate-300 font-bold">Estimated Monthly Website Traffic</label>
                                            <span className="text-purple-400 font-mono font-bold bg-purple-950/50 px-2 py-1 rounded border border-purple-900">{monthlyVisitors.toLocaleString()} visitors</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="200"
                                            max="10000"
                                            step="100"
                                            value={monthlyVisitors}
                                            onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                                            className="w-full accent-purple-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <label className="text-slate-300 font-bold">Average Customer Ticket Value (£)</label>
                                            <span className="text-emerald-400 font-mono font-bold bg-emerald-950/50 px-2 py-1 rounded border border-emerald-900">£{ticketValue} GBP</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="20"
                                            max="1000"
                                            step="10"
                                            value={ticketValue}
                                            onChange={(e) => setTicketValue(Number(e.target.value))}
                                            className="w-full accent-emerald-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <label className="text-slate-300 font-bold">Target Bot Conversion Rate (%)</label>
                                            <span className="text-indigo-400 font-mono font-bold bg-indigo-950/50 px-2 py-1 rounded border border-indigo-900">{captureRate}% of traffic</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="1"
                                            max="15"
                                            step="1"
                                            value={captureRate}
                                            onChange={(e) => setCaptureRate(Number(e.target.value))}
                                            className="w-full accent-indigo-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 text-center relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500" />

                                    <div className="space-y-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Estimated Captured Leads</span>
                                        <p className="text-4xl font-black text-slate-100">{calculatedLeadsPerMonth} <span className="text-sm font-bold text-slate-400">/mo</span></p>
                                    </div>

                                    <div className="space-y-1 py-4 border-y border-slate-900">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Potential Monthly Added Revenue</span>
                                        <p className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                                            £{potentialNewRevenue.toLocaleString()} <span className="text-sm font-bold text-slate-400">GBP</span>
                                        </p>
                                    </div>

                                    <p className="text-xs text-slate-400 leading-relaxed italic">
                                        *Based on capturing idle web traffic outside typical working hours.
                                    </p>

                                    <a
                                        href="#simulator"
                                        className="block text-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                                    >
                                        Secure My Lincoln Setup Slot
                                    </a>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Simulator Section */}
                    <section id="simulator" className="py-20 bg-slate-950 border-t border-slate-900">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid lg:grid-cols-12 gap-12 items-start">

                                <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                                    <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-800/60 px-3 py-1 rounded-full">
                                        <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Interactive Proof of Concept</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                                        Try the Client Capture Simulator Right Now
                                    </h2>
                                    <p className="text-slate-400 font-medium leading-relaxed">
                                        Click a preset button below or write custom details in the simulated widget to preview how the digital assistant behaves.
                                    </p>

                                    {/* Owner Notification Panel */}
                                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                                        <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                                            <h4 className="text-xs font-black uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                                                <span className="h-2 w-2 bg-purple-500 rounded-full inline-block animate-pulse" />
                                                Owner Notification Dashboard (Alert Sample)
                                            </h4>
                                            <button onClick={resetSimulator} className="text-[10px] text-slate-400 hover:text-white font-extrabold underline uppercase tracking-wider">
                                                Reset Chat
                                            </button>
                                        </div>

                                        <div className="space-y-2 text-xs">
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Business Sector:</span>
                                                <span className="text-slate-200 font-medium">{leadData.businessType || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Lead Contact:</span>
                                                <span className="text-slate-200 font-medium">{leadData.clientName || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Phone Number:</span>
                                                <span className="text-emerald-400 font-mono font-medium">{leadData.clientPhone || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Email Address:</span>
                                                <span className="text-slate-200 font-medium">{leadData.clientEmail || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1">
                                                <span className="text-slate-500 font-bold">Booked Demo:</span>
                                                <span className="text-indigo-400 font-semibold">{leadData.bookingTime || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                        </div>

                                        {leadData.clientPhone && (
                                            <div className="bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-xl p-3 text-xs leading-relaxed animate-fade-in flex gap-2 items-start">
                                                <span className="text-base">🔔</span>
                                                <div>
                                                    <p className="font-extrabold">CRM Webhook Triggered!</p>
                                                    <p className="text-[11px] text-emerald-500 font-medium">This parsed payload was immediately sent to secure spreadsheets and scheduling platforms.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl h-[580px] flex flex-col">
                                    <div className="bg-slate-950 border-b border-slate-800 p-4 flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-purple-600/15 p-2 rounded-xl border border-purple-500/20">
                                                <Icon name="bot" className="text-purple-400" size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-extrabold text-sm text-slate-100">Bespoke Lead Agent</h3>
                                                <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                                                    <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping inline-block" />
                                                    Active Capture Simulation
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/40">
                                        {simMessages.map((msg) => (
                                            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}>
                                                <div className="space-y-2 max-w-[85%]">
                                                    <div className={`p-3.5 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                                        ? "bg-purple-600 text-white rounded-tr-none font-medium shadow-md shadow-purple-600/15"
                                                        : "bg-slate-900 text-slate-200 border border-slate-800/80 rounded-tl-none"
                                                        }`}>
                                                        {msg.text}
                                                    </div>

                                                    {msg.interactiveOptions && (
                                                        <div className="flex flex-wrap gap-2 pt-1">
                                                            {msg.interactiveOptions.map((opt) => (
                                                                <button
                                                                    key={opt}
                                                                    onClick={() => handleUserInput(opt)}
                                                                    className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-purple-500/30 px-3 py-2 rounded-xl text-xs font-bold transition-all text-left"
                                                                >
                                                                    {opt}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        <div ref={chatEndRef} />
                                    </div>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleUserInput(customInput);
                                        }}
                                        className="bg-slate-950 p-4 border-t border-slate-800 flex gap-2"
                                    >
                                        <input
                                            type="text"
                                            value={customInput}
                                            onChange={(e) => setCustomInput(e.target.value)}
                                            placeholder={
                                                currentLeadStep === "businessType"
                                                    ? "Choose an industry or type your own..."
                                                    : `Enter details for: ${currentLeadStep}...`
                                            }
                                            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-purple-600 hover:bg-purple-500 text-white px-5 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                                        >
                                            <span>Send</span>
                                            <Icon name="arrowRight" size={12} />
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <>
                    {/* Mentorship Hero Section */}
                    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-950 text-slate-100 font-sans">
                        {/* Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />

                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center max-w-3xl mx-auto">
                                <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800/60 px-3.5 py-1.5 rounded-full mb-6">
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                    </span>
                                    <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">
                                        Proven Mentorship Experience
                                    </span>
                                </div>

                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                                    Over <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">267</span> Developers Mentored
                                </h2>

                                <p className="mt-6 text-base sm:text-lg text-slate-400 font-medium leading-relaxed">
                                    Five years of helping aspiring and working developers build real-world skills,
                                    ship production-ready software, and accelerate their careers through focused,
                                    practical mentorship.
                                </p>

                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                        <span className="block text-3xl font-black text-purple-400">267+</span>
                                        <span className="mt-1 block text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Developers Mentored
                                        </span>
                                    </div>

                                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                        <span className="block text-3xl font-black text-indigo-400">5+</span>
                                        <span className="mt-1 block text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Years Experience
                                        </span>
                                    </div>

                                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                        <span className="block text-3xl font-black text-pink-400">1-on-1</span>
                                        <span className="mt-1 block text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Practical Guidance
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Advantages Section */}
                    <section id="advantages" className="py-24 border-t border-slate-900 bg-slate-950">
                        <div className="max-w-7xl mx-auto px-6">

                            {/* Header */}
                            <div className="max-w-3xl mb-16">
                                <div className="inline-flex items-center gap-2 mb-5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
                                        Why This Works
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                                    Don't just learn to code.
                                    <span className="block text-slate-500">
                                        Learn to build like an engineer.
                                    </span>
                                </h2>

                                <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
                                    You don't need another library of tutorials. You need someone
                                    who can challenge your decisions, review your work, and show
                                    you how real software gets designed, shipped, and maintained.
                                </p>
                            </div>

                            {/* Advantage Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/70 rounded-3xl overflow-hidden border border-slate-800">

                                {/* Card 1 */}
                                <div className="group bg-slate-950 p-8 hover:bg-slate-900/80 transition-colors">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Icon name="terminal" size={20} />
                                        </div>

                                        <span className="text-xs font-mono text-slate-600">
                                            01
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-extrabold text-white mb-3">
                                        Modern Engineering
                                    </h3>

                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Build with the tools and patterns modern teams actually
                                        use — React, Node, SQL, APIs, system design, testing,
                                        Git, CI/CD, and production workflows.
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-slate-800">
                                        <span className="text-xs font-semibold text-emerald-400">
                                            Build → Understand → Ship
                                        </span>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="group bg-slate-950 p-8 hover:bg-slate-900/80 transition-colors">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                            <Icon name="briefcase" size={20} />
                                        </div>

                                        <span className="text-xs font-mono text-slate-600">
                                            02
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-extrabold text-white mb-3">
                                        Serious Portfolio
                                    </h3>

                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Replace tutorial projects with software that demonstrates
                                        how you think. Build realistic B2B platforms, automation
                                        systems, dashboards, APIs, and deployment infrastructure.
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-slate-800">
                                        <span className="text-xs font-semibold text-purple-400">
                                            Projects → Proof of Skill
                                        </span>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="group bg-slate-950 p-8 hover:bg-slate-900/80 transition-colors">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <Icon name="chart" size={20} />
                                        </div>

                                        <span className="text-xs font-mono text-slate-600">
                                            03
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-extrabold text-white mb-3">
                                        Career Strategy
                                    </h3>

                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Stop guessing what employers want. Get practical guidance
                                        on technical interviews, system-design questions, CV
                                        positioning, applications, and communicating your
                                        engineering experience.
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-slate-800">
                                        <span className="text-xs font-semibold text-indigo-400">
                                            Prepare → Interview → Progress
                                        </span>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="group bg-slate-950 p-8 hover:bg-slate-900/80 transition-colors">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Icon name="shield" size={20} />
                                        </div>

                                        <span className="text-xs font-mono text-slate-600">
                                            04
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-extrabold text-white mb-3">
                                        Direct Mentorship
                                    </h3>

                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        No giant cohort. No disappearing into a Discord channel.
                                        Your work gets direct feedback, your blockers get solved,
                                        and your progress stays visible from week to week.
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-slate-800">
                                        <span className="text-xs font-semibold text-emerald-400">
                                            Feedback → Accountability → Growth
                                        </span>
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Statement */}
                            <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-2">
                                <p className="text-sm text-slate-500 max-w-xl">
                                    Limited to a small number of mentees so every project,
                                    technical decision, and career move gets meaningful attention.
                                </p>

                                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>Structured Paths</span>
                                </div>
                            </div>

                        </div>
                    </section>


                    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-slate-100 font-sans">
                        {/* Ambient Background */}
                        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="max-w-7xl mx-auto px-6 relative z-10">

                            {/* Header */}
                            <div className="max-w-3xl mb-16">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="h-px w-10 bg-purple-500" />
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-purple-400">
                                        Proven Growth
                                    </span>
                                </div>

                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white">
                                    Real People.
                                    <br />
                                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                                        Real Progress.
                                    </span>
                                </h2>

                                <p className="mt-6 text-base sm:text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
                                    A look at three mentorship journeys — from where they started
                                    to the skills and capabilities they have developed along the way.
                                </p>
                            </div>

                            {/* Mentee Cards */}
                            <div className="grid lg:grid-cols-3 gap-6">

                                {/* =====================================================
                RICHARD
            ====================================================== */}
                                <article className="group relative bg-slate-900/70 border border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/30">

                                    {/* Card Glow */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all" />

                                    <div className="relative p-7">

                                        {/* Top Row */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-5xl font-black text-slate-800 group-hover:text-purple-950 transition-colors">
                                                01
                                            </span>

                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                                                <Terminal size={13} className="text-purple-400" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-purple-300">
                                                    Developer
                                                </span>
                                            </div>
                                        </div>

                                        {/* Identity */}
                                        <div className="mt-8">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                                                <span className="text-lg font-black text-purple-400">
                                                    RG
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-black text-white leading-tight">
                                                Richard Godswill
                                                <br />
                                                Onyekachi
                                            </h3>

                                            <p className="mt-2 text-xs font-bold text-slate-500">
                                                Mentorship journey started in{" "}
                                                <span className="text-purple-400">2021</span>
                                            </p>
                                        </div>

                                        {/* Journey */}
                                        <div className="mt-8 relative">

                                            {/* Vertical Line */}
                                            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-slate-800" />

                                            {/* Starting Point */}
                                            <div className="relative pl-7 pb-7">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600" />

                                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                                                    Started With
                                                </p>

                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {["HTML", "CSS"].map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Current */}
                                            <div className="relative pl-7">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-purple-950 shadow-lg shadow-purple-500/30" />

                                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-purple-400">
                                                    Now Working With
                                                </p>

                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {[
                                                        "HTML",
                                                        "CSS",
                                                        "JavaScript",
                                                        "TypeScript",
                                                        "Firebase",
                                                        "AI",
                                                        "Mobile",
                                                    ].map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-300"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-8 pt-5 border-t border-slate-800">
                                            <p className="text-sm text-slate-400 leading-relaxed">
                                                From frontend fundamentals to modern web, mobile,
                                                and AI-powered development.
                                            </p>
                                        </div>
                                    </div>
                                </article>


                                {/* =====================================================
                STELLA
            ====================================================== */}
                                <article className="group relative bg-slate-900/70 border border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/30">

                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all" />

                                    <div className="relative p-7">

                                        <div className="flex items-center justify-between">
                                            <span className="text-5xl font-black text-slate-800 group-hover:text-indigo-950 transition-colors">
                                                02
                                            </span>

                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                                                <GraduationCap size={13} className="text-indigo-400" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">
                                                    Developer
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                                                <span className="text-lg font-black text-indigo-400">
                                                    SE
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-black text-white leading-tight">
                                                Stella Eneh
                                            </h3>

                                            <p className="mt-2 text-xs font-bold text-slate-500">
                                                Mentorship journey started in{" "}
                                                <span className="text-indigo-400">2022</span>
                                            </p>
                                        </div>

                                        <div className="mt-8 relative">
                                            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-slate-800" />

                                            <div className="relative pl-7 pb-7">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600" />

                                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                                                    Started With
                                                </p>

                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {["HTML", "CSS"].map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="relative pl-7">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-indigo-950 shadow-lg shadow-indigo-500/30" />

                                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400">
                                                    Now Woriking With
                                                </p>

                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {[
                                                        "HTML",
                                                        "CSS",
                                                        "JavaScript",
                                                        "TypeScript",
                                                        "Firebase",
                                                        "AI",
                                                        "Mobile",
                                                    ].map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-300"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-5 border-t border-slate-800">
                                            <p className="text-sm text-slate-400 leading-relaxed">
                                                From frontend foundations to modern development,
                                                mobile applications, and AI.
                                            </p>
                                        </div>
                                    </div>
                                </article>


                                {/* =====================================================
                PROMISE
            ====================================================== */}
                                <article className="group relative bg-slate-900/70 border border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-950/30">

                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl group-hover:bg-pink-600/20 transition-all" />

                                    <div className="relative p-7">

                                        <div className="flex items-center justify-between">
                                            <span className="text-5xl font-black text-slate-800 group-hover:text-pink-950 transition-colors">
                                                03
                                            </span>

                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20">
                                                <Briefcase size={13} className="text-pink-400" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-pink-300">
                                                    Business
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/10 border border-pink-500/20 flex items-center justify-center mb-5">
                                                <span className="text-lg font-black text-pink-400">
                                                    PJ
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-black text-white leading-tight">
                                                Promise Joshua
                                            </h3>

                                            <p className="mt-2 text-xs font-bold text-slate-500">
                                                Mentorship journey started in{" "}
                                                <span className="text-pink-400">2025</span>
                                            </p>
                                        </div>

                                        <div className="mt-8 relative">
                                            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-slate-800" />

                                            <div className="relative pl-7 pb-7">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600" />

                                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                                                    Started With
                                                </p>

                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300">
                                                        Marketing
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="relative pl-7">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-pink-500 border-4 border-pink-950 shadow-lg shadow-pink-500/30" />

                                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-pink-400">
                                                    Now Working With
                                                </p>

                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {[
                                                        "Marketing",
                                                        "Project Management",
                                                        "AI",
                                                    ].map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-xs font-bold text-pink-300"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-5 border-t border-slate-800">
                                            <p className="text-sm text-slate-400 leading-relaxed">
                                                From marketing fundamentals to project management
                                                and practical AI-powered business workflows.
                                            </p>
                                        </div>
                                    </div>
                                </article>

                            </div>

                            {/* Bottom Statement */}
                            <div className="mt-12 flex justify-center">
                                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/80 border border-slate-800">
                                    <div className="flex -space-x-2">
                                        <span className="w-7 h-7 rounded-full bg-purple-500/20 border-2 border-slate-950 flex items-center justify-center text-[9px] font-black text-purple-400">
                                            RG
                                        </span>
                                        <span className="w-7 h-7 rounded-full bg-indigo-500/20 border-2 border-slate-950 flex items-center justify-center text-[9px] font-black text-indigo-400">
                                            SE
                                        </span>
                                        <span className="w-7 h-7 rounded-full bg-pink-500/20 border-2 border-slate-950 flex items-center justify-center text-[9px] font-black text-pink-400">
                                            PJ
                                        </span>
                                    </div>

                                    <span className="text-xs font-bold text-slate-400">
                                        Different paths. One commitment to growth.
                                    </span>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Mentee Application Section */}
                    <section id="apply" className="py-24 border-t border-slate-900 bg-slate-950">
                        <div className="max-w-7xl mx-auto px-6">

                            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">

                                {/* Left — Positioning */}
                                <div className="lg:sticky lg:top-24">
                                    <div className="inline-flex items-center gap-2 mb-5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
                                            Apply for Mentorship
                                        </span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                                        Ready to build
                                        <span className="block text-slate-500">
                                            something serious?
                                        </span>
                                    </h2>

                                    <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
                                        I work with a small number of ambitious people who want to
                                        move beyond tutorials and start building real software,
                                        businesses, and products.
                                    </p>

                                    <div className="mt-10 space-y-5">
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                <Icon name="check" size={16} />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white">
                                                    Real projects
                                                </h4>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Learn by building products with practical,
                                                    production-focused guidance.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                <Icon name="check" size={16} />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white">
                                                    Direct feedback
                                                </h4>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Get direct input on your code, architecture,
                                                    product decisions, and career direction.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                <Icon name="check" size={16} />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white">
                                                    Limited places
                                                </h4>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    I deliberately keep the number of mentees
                                                    small so each person receives real attention.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right — Application Card */}
                                <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8">

                                    <div className="mb-8">
                                        <h3 className="text-2xl font-extrabold text-white">
                                            Become a Mentee
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-500">
                                            Tell me what you're working towards and where you want
                                            to go next.
                                        </p>
                                    </div>

                                    <form className="space-y-6">

                                        {/* Name / Email */}
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Your name"
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-emerald-500 transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-emerald-500 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Area of Focus */}
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                                                What do you want to develop?
                                            </label>

                                            <div className="grid sm:grid-cols-2 gap-3">

                                                {[
                                                    {
                                                        label: "Software Development",
                                                        icon: "terminal",
                                                    },
                                                    {
                                                        label: "Programming",
                                                        icon: "code",
                                                    },
                                                    {
                                                        label: "Business",
                                                        icon: "briefcase",
                                                    },
                                                    {
                                                        label: "Artificial Intelligence",
                                                        icon: "sparkles",
                                                    },
                                                    {
                                                        label: "Mobile Development",
                                                        icon: "smartphone",
                                                    },
                                                ].map((item) => (
                                                    <label
                                                        key={item.label}
                                                        className="group flex items-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-950 cursor-pointer hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            name="focus"
                                                            value={item.label}
                                                            className="sr-only peer"
                                                        />

                                                        <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 peer-checked:bg-emerald-500/10 peer-checked:border-emerald-500/30 peer-checked:text-emerald-400">
                                                            <Icon name={item.icon} size={17} />
                                                        </div>

                                                        <span className="text-sm font-semibold text-slate-300 peer-checked:text-white">
                                                            {item.label}
                                                        </span>

                                                        <div className="ml-auto w-4 h-4 rounded-full border border-slate-700 peer-checked:border-emerald-400 peer-checked:bg-emerald-400" />
                                                    </label>
                                                ))}

                                            </div>
                                        </div>

                                        {/* Experience */}
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                                                Where are you currently?
                                            </label>

                                            <div className="grid grid-cols-3 gap-3">
                                                {[
                                                    "Beginner",
                                                    "Intermediate",
                                                    "Advanced",
                                                ].map((level) => (
                                                    <label key={level} className="cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="level"
                                                            value={level}
                                                            className="sr-only peer"
                                                        />

                                                        <div className="text-center py-3.5 px-3 rounded-xl border border-slate-800 bg-slate-950 text-xs font-bold text-slate-500 peer-checked:border-emerald-500/50 peer-checked:bg-emerald-500/10 peer-checked:text-emerald-400 transition-all">
                                                            {level}
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Goal */}
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                                What are you trying to achieve?
                                            </label>

                                            <textarea
                                                rows={5}
                                                placeholder="Tell me what you're building, what you're struggling with, or where you want to be in the next 6–12 months..."
                                                className="w-full resize-none bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-emerald-500 transition-colors"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl px-6 py-4 transition-colors"
                                        >
                                            Apply for Mentorship
                                            <Icon name="arrow-right" size={18} />
                                        </button>

                                        <p className="text-center text-[11px] text-slate-600">
                                            Applications are reviewed personally. Places are
                                            limited and not everyone will be accepted.
                                        </p>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </>
            )}

            {/* Previous Training Gallery */}
            <section id="training" className="py-24 border-t border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 mb-5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                <span className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
                                    Previous Training
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                                Real people.
                                <span className="block text-slate-500">
                                    Real training.
                                </span>
                            </h2>

                            <p className="mt-5 text-base text-slate-400 leading-relaxed max-w-xl">
                                A look at some of the training sessions, workshops, and
                                practical development work I've delivered to developers,
                                teams, and aspiring engineers.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 shrink-0 px-5 py-3 rounded-xl border border-slate-700 bg-slate-900 text-sm font-bold text-white hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                        >
                            See All Training
                            <Icon name="arrow-right" size={16} />
                        </button>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* Featured */}
                        <div className="col-span-2 row-span-2 group relative min-h-[420px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4E22AQGw61RL4BmnEw/feedshare-shrink_1280/B4EZ6HvONpIwAM-/0/1780393763927?e=1788998400&v=beta&t=qk11qSl3VybTfEueVAQ41Vuz9WKARkqr5GOnmmX-jsE"
                                alt="Software development training session"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="inline-flex px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-3">
                                    Secondary School Trainings
                                </span>

                                <h3 className="text-xl md:text-2xl font-extrabold text-white">
                                    Preparing Young ones for a future in Tech
                                </h3>

                                <p className="mt-2 text-sm text-slate-300/80">
                                    Practical engineering training focused on building,
                                    debugging, and shipping real applications.
                                </p>
                            </div>
                        </div>

                        {/* Training 2 */}
                        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4E22AQE-as00jl6W6w/feedshare-shrink_800/B4EZ5Oneb.IwAc-/0/1779435431944?e=1788998400&v=beta&t=byxNzMMmid-_QyvfUzsyAJFlPr-NZzhwlUjuccV87SI"
                                alt="The Fear of Launching your first product"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                                    The Fear of Launching your first product
                                </span>
                                <h3 className="mt-1 text-sm font-bold text-white">
                                    Programming Phobia
                                </h3>
                            </div>
                        </div>

                        {/* Training 3 */}
                        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4E22AQEM30a9HS9X_Q/feedshare-shrink_800/B4EZ27pmh0JcAc-/0/1776969739087?e=1788998400&v=beta&t=MOkitNWICbx6wKRH2_l_6JWnZGvZQXY3hdbOu0vurKg"
                                alt="AI training session"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-purple-400">
                                    How I started in Tech
                                </span>
                                <h3 className="mt-1 text-sm font-bold text-white">
                                    Building Yourself step by step
                                </h3>
                            </div>
                        </div>

                        {/* Training 4 */}
                        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4E22AQETb-7LcaQNLw/feedshare-shrink_1280/B4EZ2SZe0mGYAQ-/0/1776277646931?e=1788998400&v=beta&t=qdDsInupJXsbbkIPf4Kc1Z1AnoRnp6_g1WwK1kSGuG0"
                                alt="Mobile development training"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-400">
                                    Gaining future paying skills
                                </span>
                                <h3 className="mt-1 text-sm font-bold text-white">
                                    Entreprenuership Training
                                </h3>
                            </div>
                        </div>

                        {/* Training 5 */}
                        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4E22AQG8ei-YXtFFxg/feedshare-shrink_800/B4EZzXyhdiHsAg-/0/1773146872002?e=1788998400&v=beta&t=toCTjHLxwn_bkrEm2j5rxrHQfRxB-WtbBIlOb6Cz7lM"
                                alt="Business technology training"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                                    A developer i mentored who kept going
                                </span>
                                <h3 className="mt-1 text-sm font-bold text-white">
                                    How Richard started
                                </h3>
                            </div>
                        </div>

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
                        <div>
                            <p className="text-sm font-bold text-white">
                                Want to see more of the work?
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Explore previous workshops, sessions, projects, and training.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            View Training Archive
                            <Icon name="arrow-right" size={16} />
                        </button>
                    </div>

                </div>
            </section>


            {/* About Section */}
            <section id="about" className="py-20 bg-slate-900/30 border-t border-slate-900 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-12 items-center">

                        <div className="md:col-span-5 space-y-6">
                            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-8 shadow-2xl space-y-6 text-center">
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500" />

                                <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full mx-auto flex items-center justify-center border border-purple-400/20 text-white font-black text-3xl shadow-xl shadow-purple-500/10">
                                    EO
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-xl font-extrabold text-slate-100">Ekene Okoli</h3>
                                    <p className="text-xs uppercase font-extrabold text-emerald-400 tracking-widest">Director & Lead Software Architect</p>
                                </div>

                                <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-slate-500 font-bold text-xs uppercase block">Experience</span>
                                        <span className="text-slate-200 font-extrabold text-sm">6+ Years</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 font-bold text-xs uppercase block">Location</span>
                                        <span className="text-slate-200 font-extrabold text-sm">Lincoln 🇬🇧</span>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-400 font-medium leading-relaxed italic">
                                    "Combining corporate engineering discipline with local Lincolnshire focus and prompt custom modifications."
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1 rounded-full">
                                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Local Architect</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                                Bespoke Software Design Engineered Locally in Lincoln
                            </h2>

                            <p className="text-slate-400 font-medium leading-relaxed">
                                Before focusing on supplementary health operations and direct local development in the UK, I engineered robust financial APIs, automated database workflows, and optimized consumer-facing web layouts in Nigeria.
                            </p>

                            <p className="text-slate-400 font-medium leading-relaxed">
                                With **Mentoring**, I deploy that exact enterprise architectural rigor for small business setups. We do not use bloated standard builders. We handcraft fast, React-driven digital experiences and robust automation lines.
                            </p>

                            <div className="pt-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="bg-purple-950/50 border border-purple-800/40 p-2 rounded-lg text-purple-400">
                                        <Icon name="check" size={16} />
                                    </div>
                                    <span className="text-sm text-slate-200 font-bold">Supplementary corporate engineering compliant with UK Home Office standards.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-emerald-950/50 border border-emerald-800/40 p-2 rounded-lg text-emerald-400">
                                        <Icon name="check" size={16} />
                                    </div>
                                    <span className="text-sm text-slate-200 font-bold">1-on-1 ongoing tech management and rapid system updates.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-slate-950 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    {/* {currentTab === "b2b" ? ( */}
                    {/* <>
                            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                                <h2 className="text-xs uppercase tracking-widest font-black text-purple-500">Transparent Pricing Plan</h2>
                                <p className="text-3xl md:text-4xl font-extrabold text-white">Simple, Premium High-Value Support</p>
                                <p className="text-slate-400 font-medium">
                                    A robust development and deployment setup model with no hidden catches.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative flex flex-col justify-between space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-extrabold text-slate-100">Custom Development Setup</h3>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">
                                            Bespoke assistant design tailored uniquely to your treatment prices, services, FAQs, and local color palette.
                                        </p>
                                        <div className="pt-2">
                                            <span className="text-3xl font-black text-white">£500</span>
                                            <span className="text-slate-400 text-xs font-semibold block mt-1">One-time development, installation & launch fee</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-800 pt-6 space-y-3 flex-1">
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Icon name="check" className="text-purple-400" size={14} />
                                            <span>Custom knowledge base training on your files</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Icon name="check" className="text-purple-400" size={14} />
                                            <span>Integrated calendar & messaging webhooks</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Icon name="check" className="text-purple-400" size={14} />
                                            <span>GDPR-compliant user-consent framework</span>
                                        </div>
                                    </div>

                                    <a
                                        href="#simulator"
                                        className="block text-center bg-purple-600 hover:bg-purple-500 text-white text-xs font-extrabold py-3.5 px-6 rounded-xl transition-all"
                                    >
                                        Secure Setup Slot
                                    </a>
                                </div>

                                <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-8 relative flex flex-col justify-between space-y-6">
                                    <div className="absolute top-4 right-4 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                                        Managed Hosting & Support
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-extrabold text-slate-100">Support Retainer</h3>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">
                                            Worry-free support subscription to handle continuous security monitoring, cloud resources, and model changes.
                                        </p>
                                        <div className="pt-2">
                                            <span className="text-3xl font-black text-white">£100</span>
                                            <span className="text-slate-400 text-xs font-semibold block mt-1">per month cloud and editing subscription</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-800 pt-6 space-y-3 flex-1">
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Icon name="check" className="text-emerald-400" size={14} />
                                            <span>Includes premium model tokens & cloud hosting fees</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Icon name="check" className="text-emerald-400" size={14} />
                                            <span>Unlimited updates (prices, business hours, etc.)</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Icon name="check" className="text-emerald-400" size={14} />
                                            <span>Local Grantham & Lincoln priority support phone line</span>
                                        </div>
                                    </div>

                                    <a
                                        href="#simulator"
                                        className="block text-center bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white text-xs font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/10"
                                    >
                                        Secure Monthly Retainer
                                    </a>
                                </div>
                            </div>
                        </> */}
                    {/* ) : ( */}
                    <>
                        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                            <h2 className="text-xs uppercase tracking-widest font-black text-emerald-400">Mentorship Cohort Options</h2>
                            <p className="text-3xl md:text-4xl font-extrabold text-white">Invest In Practical Software Skills</p>
                            <p className="text-slate-400 font-medium">
                                We structure weekly pairing calls and asynchronous code reviews around your availability. Strictly limited slots.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-extrabold text-slate-100">Standard Code Mentorship</h3>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                                        Perfect for self-taught developers or computer science students seeking real portfolio guidance and error support.
                                    </p>
                                    <div className="pt-2">
                                        <span className="text-3xl font-black text-white">£150</span>
                                        <span className="text-slate-400 text-xs font-semibold block mt-1">per month pacing subscription (Cancel anytime)</span>
                                    </div>
                                </div>

                                <div className="border-t border-slate-800 pt-6 space-y-3 flex-1">
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <Icon name="check" className="text-emerald-400" size={14} />
                                        <span>Two 1-on-1 scheduled pair programming calls/mo (45 mins)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <Icon name="check" className="text-emerald-400" size={14} />
                                        <span>Asynchronous PR review requests & Git assistance</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <Icon name="check" className="text-emerald-400" size={14} />
                                        <span>Private Teams channel priority support</span>
                                    </div>
                                </div>

                                <a
                                    href="#simulator"
                                    className="block text-center bg-purple-600 hover:bg-purple-500 text-white text-xs font-extrabold py-3.5 px-6 rounded-xl transition-all"
                                >
                                    Select Standard Mentoring
                                </a>
                            </div>

                            <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-8 relative flex flex-col justify-between space-y-6">
                                <div className="absolute top-4 right-4 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                                    Most Popular Track
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-extrabold text-slate-100">Elite Career Acceleration</h3>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                                        Complete personalized support track. We pair program weekly, construct full-scale B2B web applications, and optimize your CV.
                                    </p>
                                    <div className="pt-2">
                                        <span className="text-3xl font-black text-white">£350</span>
                                        <span className="text-slate-400 text-xs font-semibold block mt-1">per month intensive career cohort</span>
                                    </div>
                                </div>

                                <div className="border-t border-slate-800 pt-6 space-y-3 flex-1">
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <Icon name="check" className="text-emerald-400" size={14} />
                                        <span>Four weekly live 1-on-1 pair-programming calls (60 mins)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <Icon name="check" className="text-emerald-400" size={14} />
                                        <span>Direct resume redesign and portfolio case study architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <Icon name="check" className="text-emerald-400" size={14} />
                                        <span>Mock tech interview preparation & salary negotiation help</span>
                                    </div>
                                </div>

                                <a
                                    href="#simulator"
                                    className="block text-center bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white text-xs font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/10"
                                >
                                    Apply For Elite Cohort Slot
                                </a>
                            </div>
                        </div>
                    </>
                    {/* )} */}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-900/30 border-t border-slate-900">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-xs uppercase tracking-widest font-black text-indigo-400">Common Questions</h2>
                        <p className="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked Questions</p>
                    </div>

                    <div className="space-y-6">
                        {currentTab === "b2b" ? (
                            FAQ_ITEMS.map((item, idx) => (
                                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 animate-fade-in">
                                    <h4 className="font-extrabold text-slate-200 text-base flex gap-2 items-start">
                                        <span className="text-purple-400 font-bold">Q:</span>
                                        {item.question}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed pl-6">
                                        {item.answer}
                                    </p>
                                </div>
                            ))
                        ) : (
                            MENTOR_FAQ_ITEMS.map((item, idx) => (
                                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 animate-fade-in">
                                    <h4 className="font-extrabold text-slate-200 text-base flex gap-2 items-start">
                                        <span className="text-emerald-400 font-bold">Q:</span>
                                        {item.question}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed pl-6">
                                        {item.answer}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default MentoringScreen