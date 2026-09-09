import {
    BrainCircuit,
    Bot,
    Workflow,
    Database,
    Sparkles,
    Zap,
    ArrowRight,
} from "lucide-react";

const AICapabilitiesSection = () => {
    const capabilities = [
        {
            icon: Bot,
            title: "AI Agents & Assistants",
            description:
                "Building intelligent agents that can reason, use tools, retrieve information, and complete real-world tasks.",
        },
        {
            icon: Workflow,
            title: "AI Automation",
            description:
                "Connecting AI with business workflows to automate repetitive processes and improve operational efficiency.",
        },
        {
            icon: Database,
            title: "RAG & Knowledge Systems",
            description:
                "Designing retrieval-augmented systems that connect LLMs to private documents, databases, and domain knowledge.",
        },
        {
            icon: Sparkles,
            title: "LLM Applications",
            description:
                "Developing practical applications around modern language models, structured outputs, prompting, and AI APIs.",
        },
    ];

    const technologies = [
        "OpenAI",
        "LLMs",
        "RAG",
        "AI Agents",
        "LangChain",
        "Vector Databases",
        "Python",
        "FastAPI",
    ];

    return (
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-15%] top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="absolute right-[-15%] bottom-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                        <BrainCircuit className="h-4 w-4" />
                        Artificial Intelligence
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        See my{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                            AI capabilities
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
                        I build practical AI systems that go beyond chat interfaces —
                        connecting intelligent models with data, APIs, tools, and
                        real-world workflows.
                    </p>
                </div>

                {/* Main visual + capabilities */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* AI visual */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-sm sm:p-7">
                            {/* Header */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
                                        <BrainCircuit className="h-5 w-5 text-white" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Intelligent System
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            AI workflow
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    Active
                                </div>
                            </div>

                            {/* AI workflow */}
                            <div className="space-y-3">
                                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10">
                                            <Sparkles className="h-4 w-4 text-purple-400" />
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-slate-200">
                                                User Request
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Natural language input
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-auto h-5 w-px bg-gradient-to-b from-purple-500/60 to-indigo-500/60" />

                                <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10">
                                            <BrainCircuit className="h-4 w-4 text-purple-400" />
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-slate-200">
                                                AI Reasoning
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Understand • Reason • Decide
                                            </p>
                                        </div>

                                        <div className="flex gap-1">
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400 [animation-delay:150ms]" />
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 [animation-delay:300ms]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-auto h-5 w-px bg-gradient-to-b from-indigo-500/60 to-blue-500/60" />

                                {/* Tools */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                                        <Workflow className="mb-3 h-4 w-4 text-indigo-400" />
                                        <p className="text-xs font-medium text-slate-300">
                                            Tools & APIs
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                                        <Database className="mb-3 h-4 w-4 text-blue-400" />
                                        <p className="text-xs font-medium text-slate-300">
                                            Knowledge
                                        </p>
                                    </div>
                                </div>

                                <div className="mx-auto h-5 w-px bg-gradient-to-b from-blue-500/60 to-purple-500/60" />

                                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                                            <Zap className="h-4 w-4 text-emerald-400" />
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-slate-200">
                                                Automated Outcome
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Execute • Respond • Improve
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating decoration */}
                        <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-purple-500/20 bg-slate-900 px-4 py-3 shadow-xl sm:block">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-purple-500/10 p-2">
                                    <Bot className="h-4 w-4 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-white">
                                        AI-powered
                                    </p>
                                    <p className="text-[11px] text-slate-500">
                                        Real-world automation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Capabilities */}
                    <div>
                        <div className="space-y-5">
                            {capabilities.map((capability) => {
                                const Icon = capability.icon;

                                return (
                                    <div
                                        key={capability.title}
                                        className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-slate-900/70 sm:p-6"
                                    >
                                        <div className="flex gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500/15">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-white">
                                                    {capability.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                                    {capability.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Technologies */}
                        <div className="mt-8">
                            <p className="mb-3 text-sm font-medium text-slate-500">
                                AI technologies & tools
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom statement */}
                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-lg font-semibold text-white">
                            From idea → intelligence → production.
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                            Building AI systems that are useful, scalable, and production
                            ready.
                        </p>
                    </div>

                    <a
                        href="/apps"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:text-purple-300"
                    >
                        Explore my AI projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AICapabilitiesSection;