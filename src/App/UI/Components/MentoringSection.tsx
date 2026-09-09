import {
    GraduationCap,
    Users,
    MessageCircle,
    Target,
    Code2,
    Lightbulb,
    ArrowRight,
    CheckCircle2,
  } from "lucide-react";
  
  const mentoringAreas = [
    {
      icon: Code2,
      title: "Software Engineering",
      description:
        "Helping engineers improve their coding practices, problem-solving skills, architecture decisions, and understanding of software engineering fundamentals.",
    },
    {
      icon: Target,
      title: "Career Growth",
      description:
        "Supporting developers as they navigate career decisions, prepare for senior roles, build confidence, and identify the skills they need to grow.",
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description:
        "Helping engineers develop the mindset required to take ownership, make technical decisions, communicate effectively, and lead projects.",
    },
    {
      icon: Lightbulb,
      title: "Building Real Products",
      description:
        "Guiding developers beyond tutorials by helping them understand how to design, build, deploy, and maintain software used by real people.",
    },
  ];
  
  const MentoringSection = () => {
    return (
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-10 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        </div>
  
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
              <GraduationCap className="h-4 w-4" />
              Mentoring &amp; Teaching
            </div>
  
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Helping the next generation of{" "}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                engineers grow
              </span>
            </h2>
  
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              I believe great engineers are built through continuous learning,
              practical experience, and having the right people to learn from.
              I share what I know to help developers become better engineers and
              stronger problem solvers.
            </p>
          </div>
  
          {/* Main mentoring card */}
          <div className="grid overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 lg:grid-cols-2">
            {/* Left */}
            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
  
              <div className="relative">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-900/20">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
  
                <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">
                  Learn from experience.
                  <br />
                  Build with confidence.
                </h3>
  
                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  Whether you&apos;re just starting your engineering journey or
                  preparing to take the next step in your career, mentoring is
                  about giving you practical guidance you can actually apply.
                </p>
  
                {/* Principles */}
                <div className="mt-7 space-y-3">
                  {[
                    "Practical, real-world engineering advice",
                    "Architecture and problem-solving guidance",
                    "Code and project reviews",
                    "Career and technical growth",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-400" />
                      {item}
                    </div>
                  ))}
                </div>
  
                <button
                  type="button"
                //   onClick={() => toggleChat?.()}
                  className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 sm:w-auto"
                >
                  Talk about mentoring
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
  
            {/* Right - mentoring areas */}
            <div className="border-t border-slate-800 bg-slate-950/40 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="mb-6 text-sm font-medium uppercase tracking-wider text-purple-400">
                What I can help with
              </p>
  
              <div className="space-y-4">
                {mentoringAreas.map((area) => {
                  const Icon = area.icon;
  
                  return (
                    <div
                      key={area.title}
                      className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-slate-900"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                          <Icon className="h-5 w-5" />
                        </div>
  
                        <div>
                          <h4 className="font-semibold text-white">
                            {area.title}
                          </h4>
  
                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
  
          {/* Bottom quote / statement */}
          <div className="mt-10 flex flex-col items-center justify-center text-center">
            <MessageCircle className="mb-4 h-6 w-6 text-purple-400" />
  
            <p className="max-w-2xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
              &ldquo;The goal isn&apos;t to give you all the answers. It&apos;s
              to help you become confident enough to find the answers
              yourself.&rdquo;
            </p>
  
            <p className="mt-4 text-sm font-medium text-slate-500">
              — Ekenedilichukwu Okoli
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default MentoringSection;