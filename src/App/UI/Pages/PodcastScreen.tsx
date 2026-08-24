import React, { useState } from "react";
import { 
    ArrowLeft, 
    Award, 
    Cpu, 
    Headphones, 
    Mail, 
    MessageSquare, 
    Mic, 
    Pause, 
    Play, 
    Radio, 
    Search, 
    Sparkles, 
    Terminal, 
    Clock, 
    Calendar,
    ExternalLink
} from "lucide-react";
import { store } from "../../Redux/Store";
import { toggleChat } from "../../Redux/Slices/chatSlice";
import Footer from "../Components/Footer";

interface Episode {
    id: string;
    title: string;
    category: "Full-Stack" | "AI-Automation" | "Mindset";
    duration: string;
    date: string;
    description: string;
    showNotes: string[];
    audioUrl?: string;
}

const EPISODES: Episode[] = [
    {
        id: "ep-042",
        title: "Building Defensively — Minimizing External Vendor Dependency in 2026",
        category: "Full-Stack",
        duration: "24 mins",
        date: "August 4, 2026",
        description: "An architectural teardown on protecting critical system pipelines against vendor lock-in, sudden API depreciation, and aggressive pricing shifts.",
        showNotes: [
            "Decoupling core business logic from third-party APIs",
            "Designing abstract provider adapters in TypeScript",
            "Self-hosting fallback inference layers"
        ]
    },
    {
        id: "ep-041",
        title: "Multi-Agent Orchestration & Real-Time Telemetry Plumbing",
        category: "AI-Automation",
        duration: "38 mins",
        date: "July 28, 2026",
        description: "Mapping out how businesses transition from single-prompt scripts to multi-agent autonomous loops while controlling token budgets.",
        showNotes: [
            "Managing state across asynchronous agent nodes",
            "Token cost optimization strategies",
            "Real-time logging with WebSocket streams"
        ]
    },
    {
        id: "ep-040",
        title: "Radical Consistency During Critical System Failures",
        category: "Mindset",
        duration: "19 mins",
        date: "July 14, 2026",
        description: "Audio log exploring the execution psychology needed when high-stakes outages hit production environments under tight SLAs.",
        showNotes: [
            "Managing stress responses during P0 incidents",
            "Post-mortem frameworks without blame culture",
            "Building mental endurance over a 10-year engineering run"
        ]
    },
    {
        id: "ep-039",
        title: "Optimizing React Native Lifecycle Mechanics at Scale",
        category: "Full-Stack",
        duration: "31 mins",
        date: "June 30, 2026",
        description: "Deep dive into thread isolation, memory profiling, and rendering efficiency across complex cross-platform mobile architectures.",
        showNotes: [
            "Native bridge bottlenecks vs New Architecture",
            "State persistence without UI lag",
            "Automated profiling scripts for CI pipelines"
        ]
    }
];

const Podcasts: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeEpisodeId, setActiveEpisodeId] = useState<string | null>("ep-042");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handleBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/";
        }
    };

    const filteredEpisodes = EPISODES.filter((ep) => {
        const matchesCategory = selectedCategory === "All" || ep.category === selectedCategory;
        const matchesSearch = ep.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              ep.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const activeEpisode = EPISODES.find((ep) => ep.id === activeEpisodeId) || EPISODES[0];

    const togglePlay = (id: string) => {
        if (activeEpisodeId === id) {
            setIsPlaying(!isPlaying);
        } else {
            setActiveEpisodeId(id);
            setIsPlaying(true);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30">
            {/* Header Hero Section */}
            <header className="relative border-b border-slate-900 bg-slate-950/70 backdrop-blur-md py-16 px-6">
                
                {/* Navigation Back Button */}
                <div className="max-w-7xl mx-auto mb-6">
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center space-x-2 text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <ArrowLeft size={16} className="text-sky-400" />
                        <span>Back</span>
                    </button>
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400 tracking-wide uppercase font-mono">
                        <Radio size={14} className="animate-pulse" />
                        <span>Audio Distribution Nodes</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                        Podcasts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Media Logs</span>
                    </h1>

                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Deconstructing complex software systems, advanced AI pipelines, and the relentless discipline required to survive and thrive in deep production cycles.
                    </p>

                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
                        <a
                            href="/contact"
                            className="px-5 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-sky-950/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
                        >
                            <Mic size={14} />
                            <span>Pitch a Topic</span>
                        </a>
                        <button
                            onClick={() => store.dispatch(toggleChat())}
                            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold rounded-xl border border-slate-800 flex items-center gap-2 transition-all"
                        >
                            <MessageSquare size={14} className="text-purple-400" />
                            <span>Discuss Episode via KENE</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                
                {/* Active Player Sticky Bar / Highlight Banner */}
                {activeEpisode && (
                    <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                            <div className="flex items-start gap-4">
                                <button
                                    onClick={() => togglePlay(activeEpisode.id)}
                                    className="w-14 h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-sky-900/40 transition-transform active:scale-95 shrink-0"
                                >
                                    {isPlaying && activeEpisodeId === activeEpisode.id ? (
                                        <Pause size={24} />
                                    ) : (
                                        <Play size={24} className="ml-1" />
                                    )}
                                </button>
                                
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3 text-xs font-mono">
                                        <span className="text-sky-400 font-bold uppercase">{activeEpisode.category}</span>
                                        <span className="text-slate-600">•</span>
                                        <span className="text-slate-400 flex items-center gap-1">
                                            <Clock size={12} /> {activeEpisode.duration}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white leading-snug">
                                        {activeEpisode.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs line-clamp-1">
                                        {activeEpisode.description}
                                    </p>
                                </div>
                            </div>

                            {/* Player Status / Indicator */}
                            <div className="flex items-center gap-4 self-end md:self-auto shrink-0 font-mono text-xs">
                                {isPlaying ? (
                                    <div className="flex items-center gap-1 text-sky-400 px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                                        <span>Playing Stream</span>
                                    </div>
                                ) : (
                                    <div className="text-slate-500 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg">
                                        <span>Stream Paused</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Focus Categories Grid (Derived from your layout) */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    
                    {/* Category 1 */}
                    <div 
                        onClick={() => setSelectedCategory("Full-Stack")}
                        className={`p-6 bg-slate-900/40 border rounded-2xl space-y-4 cursor-pointer transition-all ${
                            selectedCategory === "Full-Stack" ? "border-sky-500/60 bg-sky-950/20" : "border-slate-900 hover:border-slate-800"
                        }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                            <Terminal size={18} />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-500">Core Deep-Dives</span>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">The Full-Stack Blueprint</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Raw, unsalted teardowns of enterprise codebase challenges. Optimizing React Native rendering lifecycles and runtime engines.
                            </p>
                        </div>
                    </div>

                    {/* Category 2 */}
                    <div 
                        onClick={() => setSelectedCategory("AI-Automation")}
                        className={`p-6 bg-slate-900/40 border rounded-2xl space-y-4 cursor-pointer transition-all ${
                            selectedCategory === "AI-Automation" ? "border-purple-500/60 bg-purple-950/20" : "border-slate-900 hover:border-slate-800"
                        }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                            <Cpu size={18} />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">Automation Vectors</span>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">AI-Driven Operations</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Moving from manual bottlenecks to autonomous workflows. Multi-agent orchestrations, token budgets, and live telemetry.
                            </p>
                        </div>
                    </div>

                    {/* Category 3 */}
                    <div 
                        onClick={() => setSelectedCategory("Mindset")}
                        className={`p-6 bg-slate-900/40 border rounded-2xl space-y-4 cursor-pointer transition-all ${
                            selectedCategory === "Mindset" ? "border-indigo-500/60 bg-indigo-950/20" : "border-slate-900 hover:border-slate-800"
                        }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <Award size={18} />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">Execution Psychology</span>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">The Unyielding Mindset</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Dedicated audio logs mapping the mental frameworks required for long-term engineering and radical consistency under pressure.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900">
                    
                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto font-mono text-xs">
                        {["All", "Full-Stack", "AI-Automation", "Mindset"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                                    selectedCategory === cat
                                        ? "bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold"
                                        : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                                }`}
                            >
                                {cat === "All" ? "All Episodes" : cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Field */}
                    <div className="relative w-full sm:w-72">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search episode topics..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Episodes List */}
                <div className="space-y-4">
                    {filteredEpisodes.length > 0 ? (
                        filteredEpisodes.map((ep) => {
                            const isCurrent = activeEpisodeId === ep.id;
                            return (
                                <div
                                    key={ep.id}
                                    className={`p-6 bg-slate-900/30 border rounded-2xl transition-all backdrop-blur-sm space-y-4 ${
                                        isCurrent 
                                            ? "border-sky-500/40 bg-slate-900/60 shadow-lg shadow-sky-950/20" 
                                            : "border-slate-900 hover:border-slate-800"
                                    }`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3 text-xs font-mono">
                                                <span className="text-sky-400 font-bold">{ep.id}</span>
                                                <span className="text-slate-600">•</span>
                                                <span className="text-slate-400 flex items-center gap-1">
                                                    <Calendar size={12} /> {ep.date}
                                                </span>
                                                <span className="text-slate-600">•</span>
                                                <span className="text-slate-400 flex items-center gap-1">
                                                    <Clock size={12} /> {ep.duration}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white">{ep.title}</h3>
                                        </div>

                                        <button
                                            onClick={() => togglePlay(ep.id)}
                                            className={`px-4 py-2 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all shrink-0 self-start sm:self-center ${
                                                isCurrent && isPlaying
                                                    ? "bg-sky-500/10 border-sky-500/30 text-sky-400"
                                                    : "bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                                            }`}
                                        >
                                            {isCurrent && isPlaying ? (
                                                <>
                                                    <Pause size={14} /> <span>Pause</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Play size={14} /> <span>Listen Episode</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {ep.description}
                                    </p>

                                    {/* Show Notes Bullet List */}
                                    <div className="pt-2 border-t border-slate-900/80">
                                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                                            Episode Key Takeaways:
                                        </span>
                                        <ul className="grid sm:grid-cols-3 gap-2 text-xs text-slate-300 font-mono">
                                            {ep.showNotes.map((note, idx) => (
                                                <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-900">
                                                    <span className="text-sky-400 font-bold">›</span>
                                                    <span className="line-clamp-2">{note}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center py-12 bg-slate-900/20 border border-slate-900 rounded-2xl text-slate-500 text-sm">
                            No media logs matching your selected filter query.
                        </div>
                    )}
                </div>

                {/* Pitch CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-sky-950/20 via-slate-900/40 to-indigo-950/20 border border-slate-800 rounded-2xl p-8 text-center space-y-4 backdrop-blur-md">
                    <div className="inline-flex p-3 bg-slate-900 border border-slate-800 rounded-xl text-sky-400">
                        <Headphones size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Have a Technical Topic or Case Study to Share?</h3>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
                        We regularly feature senior engineers, system architects, and technical founders. Submit your topic pitch or production system teardown request.
                    </p>
                    
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/contact"
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-sky-500 hover:to-indigo-500 transition-all duration-300 font-semibold text-sm shadow-lg shadow-sky-900/20 hover:scale-[1.02]"
                        >
                            <Mail size={16} />
                            <span>Submit Pitch via Email</span>
                        </a>

                        <button
                            onClick={() => store.dispatch(toggleChat())}
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 text-slate-200 hover:text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all duration-300 font-semibold text-sm hover:scale-[1.02]"
                        >
                            <MessageSquare size={16} className="text-purple-400" />
                            <span>Pitch to KENE</span>
                        </button>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Podcasts;