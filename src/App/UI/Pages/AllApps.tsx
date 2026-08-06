import React, { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Bot,
    Code,
    Cpu,
    Database,
    ExternalLink,
    Globe,
    Layers,
    Mail,
    MessageSquare,
    Search,
    Server,
    Smartphone,
    Sparkles,
    Terminal
} from "lucide-react";
import { store } from "../../Redux/Store";
import { toggleChat } from "../../Redux/Slices/chatSlice";

type Category = "All" | "Mobile" | "Web" | "AI Agents" | "Backend";

interface SoftwareArtifact {
    id: string;
    name: string;
    category: "Mobile" | "Web" | "AI Agents" | "Backend";
    badge: string;
    badgeColor: string; // Tailwind class
    icon: React.ElementType;
    iconColor: string;
    status: "Production Live" | "Internal Beta" | "Deployment Ready";
    description: string;
    techStack: string[];
    link?: string;
    isExternal?: boolean;
}

const ARTIFACTS: SoftwareArtifact[] = [
    // Mobile Apps
    {
        id: "app-toolbox",
        name: "Toolbox",
        category: "Mobile",
        badge: "Google Play",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        icon: Smartphone,
        iconColor: "text-emerald-400",
        status: "Production Live",
        description: "High-efficiency technical configuration utilities and local asset processing managers built for power users.",
        techStack: ["React Native", "TypeScript", "SQLite", "Android NDK"],
        link: "https://play.google.com/store/apps/details?id=com.devekene.ToolBox",
        isExternal: true
    },
    {
        id: "app-droidone",
        name: "D'roid One Mobile",
        category: "Mobile",
        badge: "Google Play",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        icon: Smartphone,
        iconColor: "text-purple-400",
        status: "Production Live",
        description: "Mobile interface hub designed for real-time system automation control and remote telemetry streaming.",
        techStack: ["React Native", "Redux Toolkit", "WebSockets"],
        link: "#",
        isExternal: true
    },
    {
        id: "app-knowledge-city",
        name: "Knowledge City",
        category: "Mobile",
        badge: "Android Track",
        badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        icon: Smartphone,
        iconColor: "text-indigo-400",
        status: "Internal Beta",
        description: "Asynchronous offline-first learning ecosystem housing dynamic engineering documentation and audio streams.",
        techStack: ["Expo", "WatermelonDB", "GraphQL"],
    },

    // Web Apps
    {
        id: "web-ecosystem-portal",
        name: "Ekenedilichukwu Architecture Hub",
        category: "Web",
        badge: "Web Platform",
        badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
        icon: Globe,
        iconColor: "text-sky-400",
        status: "Production Live",
        description: "High-throughput React/Tailwind web portal providing direct gateways into AI automation services and software tracks.",
        techStack: ["React 18", "Tailwind CSS", "Redux", "TypeScript"],
        link: "/",
    },
    {
        id: "web-clash-of-kings",
        name: "Clash of Kings Terminal",
        category: "Web",
        badge: "Engineering Evaluation",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        icon: Code,
        iconColor: "text-amber-400",
        status: "Production Live",
        description: "Interactive system tier evaluation platform measuring algorithmic performance and codebase integrity.",
        techStack: ["React", "Monaco Editor", "WebAssembly"],
        link: "/clash-of-kings",
    },

    // AI Agents
    {
        id: "ai-kene-assistant",
        name: "KENE Interactive Bot",
        category: "AI Agents",
        badge: "LLM Agent",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        icon: Bot,
        iconColor: "text-purple-400",
        status: "Production Live",
        description: "Context-aware automated chat assistant providing real-time system consultation and client onboarding.",
        techStack: ["LangChain", "OpenAI / Claude APIs", "Vector Store"],
        link: "chat-trigger",
    },
    {
        id: "ai-telemetry-sentinel",
        name: "Autonomous Telemetry Sentinel",
        category: "AI Agents",
        badge: "Autonomous Agent",
        badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
        icon: Cpu,
        iconColor: "text-teal-400",
        status: "Deployment Ready",
        description: "Background multi-agent orchestration service that monitors server logs, catches anomalies, and drafts post-mortems.",
        techStack: ["Python", "FastAPI", "AsyncIO", "Pinecone"],
    },

    // Backend Applications
    {
        id: "backend-core-engine",
        name: "Ecosystem Core API Pipeline",
        category: "Backend",
        badge: "Microservice",
        badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        icon: Server,
        iconColor: "text-indigo-400",
        status: "Production Live",
        description: "Distributed REST & WebSocket gateway managing authentication, subscription states, and cross-platform syncing.",
        techStack: ["Node.js", "Express", "PostgreSQL", "Redis"],
    },
    {
        id: "backend-stream-broker",
        name: "Event Stream Broker",
        category: "Backend",
        badge: "Distributed System",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        icon: Database,
        iconColor: "text-blue-400",
        status: "Deployment Ready",
        description: "Ultra-low latency event queuing pipeline handling telemetry payloads and agent dispatch signals.",
        techStack: ["Go", "Kafka", "Docker", "Kubernetes"],
    }
];

const AllApps: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/";
        }
    };

    const filteredArtifacts = ARTIFACTS.filter((art) => {
        const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
        const matchesSearch =
            art.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            art.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30">
            {/* Header Hero Section */}
            <header className="relative border-b border-slate-900 bg-slate-950/70 backdrop-blur-md py-16 px-6">

                {/* Navigation Back Button */}
                <div className="max-w-7xl mx-auto mb-6">
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center space-x-2 text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <ArrowLeft size={16} className="text-purple-400" />
                        <span>Back</span>
                    </button>
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 tracking-wide uppercase font-mono">
                        <Layers size={14} />
                        <span>Software Artifact Catalog</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                        Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400">Ecosystem</span>
                    </h1>

                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        A consolidated showcase of native mobile builds, web platforms, autonomous AI agent pipelines, and backend server infrastructure engineered under <strong className="text-white font-medium">devekene</strong>.
                    </p>

                    {/* <div className="pt-2 text-xs font-mono text-slate-500">
                        Total System Artifacts: <span className="text-purple-400 font-bold">{ARTIFACTS.length} Active Nodes</span>
                    </div> */}
                </div>
            </header>

            {/* Main Content Body */}
            <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">

                {/* Search & Filter Control Layer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-900">

                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto font-mono text-xs pb-2 md:pb-0">
                        {(["All", "Mobile", "Web", "AI Agents", "Backend"] as Category[]).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${selectedCategory === cat
                                        ? "bg-purple-600/20 border border-purple-500/40 text-purple-300"
                                        : "bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700"
                                    }`}
                            >
                                {cat === "All" ? "All Applications" : cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Field */}
                    <div className="relative w-full md:w-80">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search by app name, stack, or feature..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Grid Layout of Artifact Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArtifacts.length > 0 ? (
                        filteredArtifacts.map((art) => {
                            const IconComponent = art.icon;
                            return (
                                <div
                                    key={art.id}
                                    className="bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 backdrop-blur-md transition-all hover:translate-y-[-2px] hover:shadow-xl group relative overflow-hidden"
                                >
                                    <div className="space-y-4">

                                        {/* Card Top Row */}
                                        <div className="flex items-center justify-between">
                                            <div className={`p-2.5 bg-slate-900 border border-slate-800 rounded-xl ${art.iconColor}`}>
                                                <IconComponent size={20} />
                                            </div>
                                            <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${art.badgeColor}`}>
                                                {art.badge}
                                            </span>
                                        </div>

                                        {/* Title & Description */}
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold text-white tracking-tight flex items-center justify-between">
                                                <span>{art.name}</span>
                                            </h3>
                                            <p className="text-slate-400 text-xs leading-relaxed">
                                                {art.description}
                                            </p>
                                        </div>

                                        {/* Tech Stack Pills */}
                                        <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px]">
                                            {art.techStack.map((tech, idx) => (
                                                <span key={idx} className="bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card Footer Status & Action */}
                                    <div className="pt-4 border-t border-slate-900/80 flex items-center justify-between text-xs font-mono">
                                        <span className="text-slate-500 text-[11px] flex items-center gap-1.5">
                                            <span className={`w-1.5 h-1.5 rounded-full ${art.status === "Production Live" ? "bg-emerald-400 animate-pulse" : "bg-purple-400"}`} />
                                            {art.status}
                                        </span>

                                        {/* Dynamic Trigger Links */}
                                        {art.link === "chat-trigger" ? (
                                            <button
                                                onClick={() => store.dispatch(toggleChat())}
                                                className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 transition-colors"
                                            >
                                                <span>Launch KENE</span>
                                                <ArrowRight size={12} />
                                            </button>
                                        ) : art.link ? (
                                            <a
                                                href={art.link}
                                                target={art.isExternal ? "_blank" : "_self"}
                                                rel={art.isExternal ? "noopener noreferrer" : ""}
                                                className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 transition-colors"
                                            >
                                                <span>Access System</span>
                                                {art.isExternal ? <ExternalLink size={12} /> : <ArrowRight size={12} />}
                                            </a>
                                        ) : (
                                            <span className="text-slate-600 text-[11px]">Private Node</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-16 bg-slate-900/20 border border-slate-900 rounded-2xl text-slate-500 text-sm font-mono">
                            No system components match the current search or category filter.
                        </div>
                    )}
                </div>

                {/* Bottom Custom Build CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-purple-900/20 via-slate-900/50 to-indigo-900/20 border border-slate-800 rounded-2xl p-8 text-center space-y-4 backdrop-blur-md">
                    <div className="inline-flex p-3 bg-slate-900 border border-slate-800 rounded-xl text-purple-400">
                        <Terminal size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Need a Custom Software Solution Built?</h3>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
                        We engineer custom web applications, native Android tools, serverless backends, and autonomous AI agents designed to scale.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:seniordevekene@gmail.com?subject=Custom%20Software%20Development%20Inquiry"
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 font-semibold text-sm shadow-lg shadow-purple-900/20 hover:scale-[1.02]"
                        >
                            <Mail size={16} />
                            <span>Contact via Email</span>
                        </a>

                        <button
                            onClick={() => store.dispatch(toggleChat())}
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 text-slate-200 hover:text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all duration-300 font-semibold text-sm hover:scale-[1.02]"
                        >
                            <MessageSquare size={16} className="text-purple-400" />
                            <span>Start Project via KENE</span>
                        </button>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default AllApps;