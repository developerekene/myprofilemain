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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (currentTab === "b2b") {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
            mentorChatEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [simMessages, mentorMessages, currentTab]);

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
                    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-slate-950 text-slate-100 font-sans">
                        {/* Premium Purple & Indigo Ambient Glow Spheres */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse" />

                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid md:grid-cols-12 gap-12 items-center">

                                {/* Left Column: Heading and Dynamic CTAs */}
                                <div className="md:col-span-7 text-left space-y-6">
                                    <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800/60 px-3.5 py-1.5 rounded-full">
                                        <span className="flex h-2 w-2 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                        </span>
                                        <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">Elite 1-on-1 Pacing Slots Open</span>
                                    </div>

                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                                        Accelerate Your Tech Journey With Direct <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Professional Mentorship.</span>
                                    </h1>

                                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-medium leading-relaxed">
                                        Escape tutorial hell. Learn real-world software design, database schemas, and AI application design directly from Ekene. We handcraft your personalized curriculum to help you land premium developer roles.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <a
                                            href="#simulator"
                                            // onClick={onOpenSimulator}
                                            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all duration-300 shadow-xl shadow-purple-600/20 transform hover:-translate-y-0.5 text-center"
                                        >
                                            <span>Try Mentorship Strategy Proposal Bot</span>
                                            <ArrowRight size={18} />
                                        </a>
                                        <a
                                            href="#calculator"
                                            // onClick={onOpenCalculator}
                                            className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-200 px-8 py-4 rounded-xl font-bold text-base transition-all text-center"
                                        >
                                            <GraduationCap size={18} className="text-purple-400" />
                                            <span>Configure Study Track</span>
                                        </a>
                                    </div>

                                    {/* Metrics Panel */}
                                    <div className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-extrabold text-purple-400">1-on-1</span>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Unshared Focus</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-extrabold text-purple-400">Real Code</span>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Production Apps</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-extrabold text-indigo-400">Teams Support</span>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Continuous Help</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Live Mentee Chat Interface Preview Card */}
                                <div className="md:col-span-5 relative flex justify-center">
                                    <div className="relative w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400" />

                                        <div className="absolute top-4 right-4 bg-purple-950/80 border border-purple-500/30 text-purple-400 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                                            <span className="h-1.5 w-1.5 bg-purple-400 rounded-full animate-ping inline-block" /> Mentee Portal
                                        </div>

                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="bg-purple-600/20 p-2.5 rounded-2xl border border-purple-500/30">
                                                <Terminal className="text-purple-400" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-slate-200 text-sm">Direct Teams pairing with Ekene</h4>
                                                <p className="text-[11px] text-slate-500 font-medium">Interactive Dev Roadmap</p>
                                            </div>
                                        </div>

                                        {/* Chat Simulation Bubble Stream */}
                                        <div className="space-y-3 mb-4 text-xs">
                                            <div className="bg-slate-950 p-3 rounded-2xl rounded-tl-none border border-slate-800 max-w-[85%]">
                                                <p className="text-slate-300 font-medium leading-relaxed">
                                                    "Ekene, the component state keeps shifting when rendering. Here is my git branch link."
                                                </p>
                                            </div>
                                            <div className="bg-purple-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-right shadow-md shadow-purple-600/10">
                                                <p className="font-semibold">"Fixed! You forgot to declare an explicit initial key list in the map wrapper. Check my PR review!"</p>
                                            </div>
                                        </div>

                                        {/* Live Session Calendar Event Status */}
                                        <div className="bg-slate-950/80 border border-slate-800/60 rounded-2xl p-3 mt-4 space-y-1.5">
                                            <p className="text-[10px] uppercase tracking-widest font-black text-purple-400">Next Live Call Session</p>
                                            <div className="flex justify-between text-[11px]">
                                                <span className="text-slate-500 font-bold">Agenda:</span>
                                                <span className="text-slate-300 font-medium">Database Schema Review</span>
                                            </div>
                                            <div className="flex justify-between text-[11px]">
                                                <span className="text-slate-500 font-bold">When:</span>
                                                <span className="text-purple-400 font-bold">Tomorrow at 4:30 PM (BST)</span>
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
                                <h2 className="text-xs uppercase tracking-widest font-black text-emerald-500">How I Accelerate Mentees</h2>
                                <p className="text-3xl md:text-4xl font-extrabold text-white">Stop Coding In Isolation. Get Direct Practical Training.</p>
                                <p className="text-slate-400 font-medium">
                                    Generic bootcamps dump videos on you and disappear. I build real software with you and hold you fully accountable.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                                    <div className="bg-emerald-950/50 border border-emerald-800/40 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-400">
                                        <Icon name="terminal" size={20} />
                                    </div>
                                    <h4 className="text-lg font-extrabold text-slate-200">Learn Modern Stacks</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Master fast functional React components, SQL architectures, Node web servers, system designs, and automated pipelines. No obsolete packages.
                                    </p>
                                </div>

                                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                                    <div className="bg-purple-950/50 border border-purple-800/40 w-10 h-10 rounded-xl flex items-center justify-center text-purple-400">
                                        <Icon name="briefcase" size={20} />
                                    </div>
                                    <h4 className="text-lg font-extrabold text-slate-200">Enterprise Portfolio</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Dump boring calculator and weather apps. We design full B2B automation engines and deployment platforms that secure senior recruiter attention.
                                    </p>
                                </div>

                                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                                    <div className="bg-indigo-950/50 border border-indigo-800/40 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400">
                                        <Icon name="chart" size={20} />
                                    </div>
                                    <h4 className="text-lg font-extrabold text-slate-200">The Hiring Playbook</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Gain direct structural advice on navigating UK and international remote technical screens, whiteboards, and systematic resume optimizations.
                                    </p>
                                </div>

                                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                                    <div className="bg-emerald-950/50 border border-emerald-800/40 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-400">
                                        <Icon name="shield" size={20} />
                                    </div>
                                    <h4 className="text-lg font-extrabold text-slate-200">100% Personal Attention</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        You are never part of a crowded room of 50 students. I work exclusively with a strict quota of 4 selected mentees at any given time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Calculator Section */}
                    <section id="calculator" className="py-20 bg-slate-950 border-t border-slate-900 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl -z-10" />

                        <div className="max-w-5xl mx-auto px-6">
                            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                                <h2 className="text-xs uppercase tracking-widest font-black text-emerald-400">Dynamic Strategy Planner</h2>
                                <p className="text-3xl md:text-4xl font-extrabold text-white">Map Your Technical Study Track</p>
                                <p className="text-slate-400 text-sm">
                                    Configure your starting experience level, primary target discipline, and study hours to visualize your tailored study roadmap timeline.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl grid md:grid-cols-12 gap-8 items-center">

                                <div className="md:col-span-7 space-y-8">
                                    {/* Select Career Goal */}
                                    <div className="space-y-3">
                                        <label className="text-slate-300 font-bold block text-sm">1. Choose Your Direction Track</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            <button
                                                onClick={() => setMentorGoal("fullstack")}
                                                className={`text-xs font-bold p-3 rounded-xl border text-center transition-all ${mentorGoal === "fullstack" ? "bg-emerald-950/60 border-emerald-500 text-emerald-400" : "bg-slate-950 border-slate-800 text-slate-400"
                                                    }`}
                                            >
                                                Full-Stack Web Dev 🌐
                                            </button>
                                            <button
                                                onClick={() => setMentorGoal("automation")}
                                                className={`text-xs font-bold p-3 rounded-xl border text-center transition-all ${mentorGoal === "automation" ? "bg-emerald-950/60 border-emerald-500 text-emerald-400" : "bg-slate-950 border-slate-800 text-slate-400"
                                                    }`}
                                            >
                                                AI & Automation Bot 🤖
                                            </button>
                                            <button
                                                onClick={() => setMentorGoal("career")}
                                                className={`text-xs font-bold p-3 rounded-xl border text-center transition-all ${mentorGoal === "career" ? "bg-emerald-950/60 border-emerald-500 text-emerald-400" : "bg-slate-950 border-slate-800 text-slate-400"
                                                    }`}
                                            >
                                                Dev Job Accelerator 🚀
                                            </button>
                                        </div>
                                    </div>

                                    {/* Select Starting Experience */}
                                    <div className="space-y-3">
                                        <label className="text-slate-300 font-bold block text-sm">2. Your Current Starting Skills</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            <button
                                                onClick={() => setMentorExp("none")}
                                                className={`text-xs font-bold p-3 rounded-xl border text-center transition-all ${mentorExp === "none" ? "bg-purple-950/60 border-purple-500 text-purple-400" : "bg-slate-950 border-slate-800 text-slate-400"
                                                    }`}
                                            >
                                                Absolute Beginner 🐣
                                            </button>
                                            <button
                                                onClick={() => setMentorExp("selftaught")}
                                                className={`text-xs font-bold p-3 rounded-xl border text-center transition-all ${mentorExp === "selftaught" ? "bg-purple-950/60 border-purple-500 text-purple-400" : "bg-slate-950 border-slate-800 text-slate-400"
                                                    }`}
                                            >
                                                Self-Taught / Basic JS ⌨️
                                            </button>
                                            <button
                                                onClick={() => setMentorExp("csgrad")}
                                                className={`text-xs font-bold p-3 rounded-xl border text-center transition-all ${mentorExp === "csgrad" ? "bg-purple-950/60 border-purple-500 text-purple-400" : "bg-slate-950 border-slate-800 text-slate-400"
                                                    }`}
                                            >
                                                CS Grad / Bootcamp Dev 🧱
                                            </button>
                                        </div>
                                    </div>

                                    {/* Study Hours per Week */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <label className="text-slate-300 font-bold">3. Weekly Dedicated Programming Hours</label>
                                            <span className="text-indigo-400 font-mono font-bold bg-indigo-950/50 px-2 py-1 rounded border border-indigo-900">{mentorHours} Hours/Wk</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="5"
                                            max="40"
                                            step="1"
                                            value={mentorHours}
                                            onChange={(e) => setMentorHours(Number(e.target.value))}
                                            className="w-full accent-indigo-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 text-center relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500" />

                                    <div className="space-y-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Estimated Target Duration</span>
                                        <p className="text-4xl font-black text-slate-100">{roadmapData.timelineWeeks} <span className="text-sm font-bold text-slate-400">Weeks</span></p>
                                    </div>

                                    <div className="space-y-1 py-4 border-y border-slate-900 text-left">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block text-center mb-3">Core Study Focus Points</span>
                                        <ul className="space-y-2 text-xs text-slate-300 font-medium">
                                            {roadmapData.focusModules.map((mod, i) => (
                                                <li key={i} className="flex gap-2 items-center">
                                                    <span className="text-emerald-400">✔</span>
                                                    <span>{mod}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className="text-xs text-slate-400 leading-relaxed italic">
                                        *Paced timeline assumes weekly scheduled pairing calls and async support.
                                    </p>

                                    <a
                                        href="#simulator"
                                        className="block text-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                                    >
                                        Lock My Strategy Blueprint
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
                                        <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Student Onboarding Trial</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                                        Try the Live Mentoring Strategy Bot
                                    </h2>
                                    <p className="text-slate-400 font-medium leading-relaxed">
                                        Test the simulator below to map your skill levels, design your learning path, and lock a alignment call with Ekene.
                                    </p>

                                    {/* Student Strategy Panel */}
                                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                                        <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                                            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                                                <span className="h-2 w-2 bg-emerald-500 rounded-full inline-block animate-pulse" />
                                                Mentee Proposal Blueprint
                                            </h4>
                                            <button onClick={resetMentorSimulator} className="text-[10px] text-slate-400 hover:text-white font-extrabold underline uppercase tracking-wider">
                                                Reset Chat
                                            </button>
                                        </div>

                                        <div className="space-y-2 text-xs">
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Mentee Name:</span>
                                                <span className="text-slate-200 font-medium">{mentorData.clientName || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Target Track:</span>
                                                <span className="text-slate-200 font-medium">{mentorData.mentorGoal || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Starting Experience:</span>
                                                <span className="text-slate-200 font-medium">{mentorData.currentSkills || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Hours Committed:</span>
                                                <span className="text-slate-200 font-medium">{mentorData.studyHours || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-slate-950">
                                                <span className="text-slate-500 font-bold">Email Address:</span>
                                                <span className="text-slate-200 font-medium">{mentorData.clientEmail || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                            <div className="flex justify-between py-1">
                                                <span className="text-slate-500 font-bold">Alignment Call slot:</span>
                                                <span className="text-emerald-400 font-semibold">{mentorData.bookingTime || <span className="text-slate-700 italic">Waiting...</span>}</span>
                                            </div>
                                        </div>

                                        {mentorData.clientEmail && (
                                            <div className="bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-xl p-3 text-xs leading-relaxed animate-fade-in flex gap-2 items-start">
                                                <span className="text-base">🎓</span>
                                                <div>
                                                    <p className="font-extrabold">Student Slot Pending Confirmation!</p>
                                                    <p className="text-[11px] text-emerald-500 font-medium">This parsed strategy proposal has been sent directly to Ekene Okoli for immediate review.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl h-[580px] flex flex-col">
                                    <div className="bg-slate-950 border-b border-slate-800 p-4 flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-emerald-600/15 p-2 rounded-xl border border-emerald-500/20">
                                                <Icon name="bot" className="text-emerald-400" size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-extrabold text-sm text-slate-100">Mentorship Onboarding Agent</h3>
                                                <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                                                    <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping inline-block" />
                                                    Onboarding Stream Active
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/40">
                                        {mentorMessages.map((msg) => (
                                            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}>
                                                <div className="space-y-2 max-w-[85%]">
                                                    <div className={`p-3.5 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                                        ? "bg-emerald-600 text-white rounded-tr-none font-medium shadow-md shadow-emerald-600/15"
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
                                                                    className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-emerald-500/30 px-3 py-2 rounded-xl text-xs font-bold transition-all text-left"
                                                                >
                                                                    {opt}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        <div ref={mentorChatEndRef} />
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
                                                currentMentorStep === "mentorGoal"
                                                    ? "Select an objective track above or type your own..."
                                                    : `Enter details for: ${currentMentorStep}...`
                                            }
                                            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
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
            )}

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