import {
    Quote,
    Star,
    Plus,
    ArrowUpRight,
} from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        role: "CTO, Technology Company",
        initials: "JD",
        text: "Ekenedilichukwu is an exceptional engineer who consistently turns complex technical problems into simple, scalable solutions. His ability to understand both the technology and the business need is impressive.",
    },
    {
        name: "Sarah Williams",
        role: "Product Manager",
        initials: "SW",
        text: "Working with Ekenedilichukwu was a great experience. He brought strong technical leadership to the project, communicated clearly, and delivered a solution that exceeded our expectations.",
    },
    {
        name: "Michael Okafor",
        role: "Founder & Entrepreneur",
        initials: "MO",
        text: "What stands out most is his ability to take an idea from concept to a working product. He combines engineering depth with a strong understanding of what users actually need.",
    },
    {
        name: "David Anderson",
        role: "Engineering Manager",
        initials: "DA",
        text: "Ekenedilichukwu has a rare combination of backend expertise, problem-solving ability, and leadership. He is someone I would confidently trust with critical engineering projects.",
    },
    {
        name: "Grace Thompson",
        role: "Business Owner",
        initials: "GT",
        text: "He took the time to understand our challenges before proposing a solution. The result was a reliable system that improved our workflow significantly.",
    },
    {
        name: "Daniel Martins",
        role: "Software Engineer",
        initials: "DM",
        text: "Beyond his technical skills, Ekenedilichukwu is a great collaborator and mentor. He approaches engineering with curiosity, discipline, and a genuine desire to help others succeed.",
    },
];

const TestimoniesSection = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="absolute right-[-10%] bottom-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                        <Quote className="h-4 w-4" />
                        Testimonials
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        What people say about{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            working with me
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
                        Feedback from people I&apos;ve worked with across software
                        engineering, product development, technology, and entrepreneurship.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="group relative flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-slate-900/80 sm:p-7"
                        >
                            {/* Quote icon */}
                            <div className="absolute right-6 top-6 opacity-10 transition-opacity group-hover:opacity-20">
                                <Quote className="h-12 w-12 text-purple-400" />
                            </div>

                            {/* Rating */}
                            <div className="mb-6 flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="h-4 w-4 fill-purple-400 text-purple-400"
                                    />
                                ))}
                            </div>

                            {/* Testimony */}
                            <blockquote className="flex-1 text-sm leading-7 text-slate-300 sm:text-base">
                                &ldquo;{testimonial.text}&rdquo;
                            </blockquote>

                            {/* Person */}
                            <div className="mt-7 flex items-center gap-3 border-t border-slate-800 pt-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-bold text-white">
                                    {testimonial.initials}
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-white">
                                        {testimonial.name}
                                    </p>

                                    <p className="truncate text-xs text-slate-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Add testimony CTA */}
                <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 p-6 text-center sm:flex-row sm:text-left sm:p-8">
                    <div>
                        <div className="flex items-center justify-center gap-2 sm:justify-start">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/10">
                                <Quote className="h-4 w-4 text-purple-400" />
                            </div>

                            <p className="font-semibold text-white">
                                Worked with me before?
                            </p>
                        </div>

                        <p className="mt-2 text-sm text-slate-400">
                            Share your experience and help others learn what it&apos;s like
                            to work with me.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            // Open your testimony form/modal here
                            console.log("Add testimony");
                        }}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 sm:w-auto"
                    >
                        <Plus className="h-4 w-4" />
                        Add your testimony
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimoniesSection;