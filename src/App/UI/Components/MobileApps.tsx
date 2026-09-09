import {
    Smartphone,
    ExternalLink,
    ArrowUpRight,
    BriefcaseBusiness,
    HeartPulse,
    ShoppingBag,
    Brain,
} from "lucide-react";

const mobileApps = [
    {
        name: "Toolbox",
        category: "Productivity",
        description:
            "A collection of practical productivity tools designed to simplify everyday tasks and workflows.",
        icon: Smartphone,
        gradient: "from-violet-500 to-indigo-500",
    },
    {
        name: "D'roid One",
        category: "Company",
        description:
            "A mobile platform built around digital products, services, and technology solutions.",
        icon: BriefcaseBusiness,
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        name: "Ekenedilichukwu",
        category: "Mobile Portfolio",
        description:
            "My personal mobile portfolio — showcasing my engineering work, products, experience, and capabilities.",
        icon: Smartphone,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        name: "Ogoo",
        category: "AI Health Companion",
        description:
            "An AI-powered health companion designed to make health information and everyday wellness guidance more accessible.",
        icon: HeartPulse,
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        name: "Knowledge City",
        category: "E-commerce",
        description:
            "A digital commerce platform connecting users with educational resources, products, and knowledge.",
        icon: ShoppingBag,
        gradient: "from-orange-500 to-amber-500",
    },
];

const MobileAppsSection = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="absolute right-[-10%] bottom-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                        <Smartphone className="h-4 w-4" />
                        Mobile Apps
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Products I&apos;ve built for{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            mobile
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
                        From productivity tools to AI-powered experiences and commerce
                        platforms, I build mobile products that solve real problems and
                        turn ideas into usable software.
                    </p>
                </div>

                {/* Apps grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {mobileApps.map((app, index) => {
                        const Icon = app.icon;

                        return (
                            <article
                                key={app.name}
                                className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-slate-900 ${index === 0 ? "lg:col-span-2" : ""
                                    }`}
                            >
                                {/* Card glow */}
                                <div
                                    className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${app.gradient} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20`}
                                />

                                <div className="relative">
                                    {/* Top row */}
                                    <div className="flex items-start justify-between">
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${app.gradient} shadow-lg`}
                                        >
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>

                                        <a
                                            href="#"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-400 transition hover:border-purple-500/40 hover:text-white"
                                            aria-label={`View ${app.name}`}
                                        >
                                            <ArrowUpRight className="h-5 w-5" />
                                        </a>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-7">
                                        <div className="mb-2 text-sm font-medium text-purple-400">
                                            {app.category}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white">
                                            {app.name}
                                        </h3>

                                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                                            {app.description}
                                        </p>
                                    </div>

                                    {/* Google Play */}
                                    <div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-5">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Smartphone className="h-4 w-4" />
                                            Android
                                        </div>

                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
                                        >
                                            Google Play
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:flex-row sm:p-8">
                    <div>
                        <p className="text-lg font-semibold text-white">
                            More products are in the works.
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                            Explore my apps and see what I&apos;m building next.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 sm:w-auto"
                    >
                        View on Google Play
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MobileAppsSection;