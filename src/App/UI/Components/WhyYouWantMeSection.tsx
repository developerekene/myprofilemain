import {
    Rocket,
    BrainCircuit,
    Layers3,
    Users,
    ShieldCheck,
    Lightbulb,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const reasons = [
    {
        icon: Rocket,
        title: "I build, not just code",
        description:
            "I take ownership from the initial idea and architecture through implementation, deployment, and continuous improvement.",
    },
    {
        icon: BrainCircuit,
        title: "I solve complex problems",
        description:
            "From distributed systems and data pipelines to AI-powered applications, I enjoy turning difficult problems into practical solutions.",
    },
    {
        icon: Layers3,
        title: "I think in systems",
        description:
            "I care about architecture, scalability, maintainability, performance, security, and how every component fits together.",
    },
    {
        icon: Users,
        title: "I make teams stronger",
        description:
            "I collaborate openly, mentor engineers, share knowledge, and help teams make better technical decisions.",
    },
    {
        icon: ShieldCheck,
        title: "I care about quality",
        description:
            "Readable code, thoughtful architecture, testing, documentation, observability, and reliable delivery are part of my engineering process.",
    },
    {
        icon: Lightbulb,
        title: "I think beyond the ticket",
        description:
            "I look at the bigger picture — the user, the business, the product, and the technology — before deciding what should actually be built.",
    },
];

const WhyYouWantMeSection = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="absolute bottom-0 left-[-10%] h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                        <Users className="h-4 w-4" />
                        Why Work With Me
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Why you want me in your{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                            team
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
                        You&apos;re not just hiring someone to write code. You&apos;re
                        bringing in an engineer who can understand the problem, design the
                        solution, build it well, and help the team move forward.
                    </p>
                </div>

                {/* Main content */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <article
                                key={reason.title}
                                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-slate-900/80 sm:p-7"
                            >
                                {/* Number */}
                                <div className="absolute right-6 top-5 text-5xl font-bold text-slate-800/60 transition-colors group-hover:text-purple-500/10">
                                    0{index + 1}
                                </div>

                                {/* Icon */}
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:bg-purple-500/15 group-hover:text-purple-300">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="relative mt-6 text-lg font-semibold text-white">
                                    {reason.title}
                                </h3>

                                <p className="relative mt-3 text-sm leading-6 text-slate-400">
                                    {reason.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom value proposition */}
                <div className="mt-10 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-slate-900/70 to-indigo-500/10">
                    <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wider text-purple-400">
                                More than an engineer
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                                Bring me a problem. Let&apos;s build the right solution.
                            </h3>

                            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                                Whether you&apos;re building a new product, scaling an existing
                                platform, modernizing your infrastructure, or exploring AI, I
                                bring engineering experience, product thinking, and ownership
                                to the table.
                            </p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {[
                                    "6+ years of engineering experience",
                                    "Backend & distributed systems",
                                    "AI & intelligent applications",
                                    "Frontend & mobile development",
                                    "Cloud & infrastructure",
                                    "Technical leadership & mentoring",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2 text-sm text-slate-300"
                                    >
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-400" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="lg:pl-6">
                            <button
                                type="button"
                                //   onClick={() => toggleChat?.()}
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 sm:w-auto"
                            >
                                Let&apos;s work together
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyYouWantMeSection;