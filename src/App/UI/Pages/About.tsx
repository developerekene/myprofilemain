import React, { useEffect } from 'react';
import {
    Code2,
    Terminal,
    Cpu,
    GitBranch,
    Layers,
    Award,
    ExternalLink,
    MessageSquare,
    ArrowRight,
    ShieldCheck,
    Zap,
    Globe2,
    ArrowDown,
    Search,
    Globe,
    FileText,
    Code,
    Sparkle,
    User2,
    Briefcase,
    Heart,
    Users2,
    Check,
    GraduationCap,
    TrendingUp,
    CloudAlert,
    ArrowUpRight,
} from 'lucide-react';
import NavbarNew from '../Components/NavbarNew';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import { Assets } from '../../utils/constants/Assets';

export default function AboutEngineer() {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Give the DOM a tiny fraction of a second to render completely first
            setTimeout(() => {
                const targetElement = document.getElementById(hash.replace('#', ''));
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [hash]);
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-white">
            <NavbarNew />

            {/* ========================================== */}
            {/* ABOUT HERO — WHO IS EKENE?                */}
            {/* ========================================== */}
            <header className="relative overflow-hidden bg-[#08090b] text-slate-100 border-b border-white/[0.06]">

                {/* Ambient Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.035] blur-[120px]" />
                    <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.035] blur-[120px]" />

                    <div
                        className="absolute inset-0 opacity-[0.018]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                            backgroundSize: "80px 80px",
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Main Content */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 py-20 sm:py-28 lg:py-32">

                        {/* ==========================================
                INTRODUCTION
            ========================================== */}
                        <div className="lg:col-span-8">

                            <div className="max-w-4xl">

                                <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black tracking-[-0.045em] leading-[0.98] text-white">

                                    I'm Ekene.

                                    <span className="block mt-2 text-slate-600">
                                        I build, teach, and solve
                                    </span>

                                    <span className="block mt-2">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-400">
                                            with technology.
                                        </span>
                                    </span>

                                </h1>

                                {/* Decorative Line */}
                                <div className="flex items-center gap-4 mt-10 mb-8">
                                    <div className="h-px w-16 bg-emerald-400/60" />
                                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-600">
                                        Engineering with purpose
                                    </span>
                                </div>

                                {/* Existing Text */}
                                <div className="max-w-2xl space-y-5 text-base sm:text-lg text-slate-400 leading-[1.8]">

                                    <p>
                                        I'm a software engineer, developer, mentor, and
                                        technology enthusiast. I enjoy taking ideas and
                                        turning them into useful, working software.
                                    </p>

                                    <p>
                                        My work sits across <strong className="text-slate-200">
                                            software development, programming, AI, mobile,
                                            automation, and technology for business</strong>.
                                        I also enjoy helping other people develop the skills
                                        and confidence to build things themselves.
                                    </p>

                                    <p>
                                        Whether I'm writing software, working on a business
                                        idea, teaching someone how to code, or figuring out
                                        a difficult technical problem, I care about one thing:
                                        <span className="text-white font-semibold">
                                            {" "}making technology useful.
                                        </span>
                                    </p>

                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3 mt-10">

                                    <a
                                        href="#work"
                                        className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-slate-950 text-sm font-bold hover:bg-emerald-400 transition-all"
                                    >
                                        See What I Do

                                        <ArrowDown
                                            size={15}
                                            className="group-hover:translate-y-0.5 transition-transform"
                                        />
                                    </a>

                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.025] text-slate-300 text-sm font-semibold hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all"
                                    >
                                        Get In Touch

                                        <ArrowRight
                                            size={15}
                                            className="group-hover:translate-x-0.5 transition-transform"
                                        />
                                    </a>

                                </div>

                            </div>

                        </div>

                        {/* ==========================================
                IDENTITY / PROFILE PANEL
            ========================================== */}
                        <div className="lg:col-span-4 flex items-end">

                            <div className="w-full">

                                {/* Profile Header */}
                                <div className="flex items-center gap-5 pb-7 border-b border-white/[0.08]">

                                    <div className="relative">

                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 via-indigo-500 to-purple-600 p-[1px]">

                                            <div className="w-full h-full rounded-full bg-[#0b0c0f] flex items-center justify-center text-white text-lg font-black">
                                                EO
                                            </div>

                                        </div>

                                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-[3px] border-[#08090b]" />

                                    </div>

                                    <div>
                                        <h2 className="text-xl font-black text-white">
                                            Ekene Okoli
                                        </h2>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Software Engineer & Mentor
                                        </p>
                                    </div>

                                </div>

                                {/* Identity Items */}
                                <div className="divide-y divide-white/[0.06]">

                                    {/* Build */}
                                    <div className="py-5 group">

                                        <div className="flex items-start justify-between gap-5">

                                            <div>
                                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                                    I Build
                                                </span>

                                                <span className="block mt-1.5 text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                                                    Software & Digital Products
                                                </span>
                                            </div>

                                            <Code
                                                size={16}
                                                className="text-emerald-400 mt-1"
                                            />

                                        </div>

                                    </div>

                                    {/* Explore */}
                                    <div className="py-5 group">

                                        <div className="flex items-start justify-between gap-5">

                                            <div>
                                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                                    I Explore
                                                </span>

                                                <span className="block mt-1.5 text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                                                    AI & Emerging Technology
                                                </span>
                                            </div>

                                            <Sparkle
                                                size={16}
                                                className="text-indigo-400 mt-1"
                                            />

                                        </div>

                                    </div>

                                    {/* Teach */}
                                    <div className="py-5 group">

                                        <div className="flex items-start justify-between gap-5">

                                            <div>
                                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                                    I Teach
                                                </span>

                                                <span className="block mt-1.5 text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                                                    Programming & Software Development
                                                </span>
                                            </div>

                                            <User2
                                                size={16}
                                                className="text-purple-400 mt-1"
                                            />

                                        </div>

                                    </div>

                                    {/* Help */}
                                    <div className="py-5 group">

                                        <div className="flex items-start justify-between gap-5">

                                            <div>
                                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                                    I Help
                                                </span>

                                                <span className="block mt-1.5 text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                                                    People & Businesses Use Technology
                                                </span>
                                            </div>

                                            <Briefcase
                                                size={16}
                                                className="text-amber-400 mt-1"
                                            />

                                        </div>

                                    </div>

                                </div>

                                {/* Location */}
                                <div className="flex items-center justify-between pt-6">

                                    <span className="text-xs text-slate-600">
                                        Based in the UK
                                    </span>

                                    <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        Working Worldwide
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ==========================================
            IDENTITY STRIP
        ========================================== */}
                    <div className="border-t border-white/[0.06]">

                        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/[0.06]">

                            <div className="py-7 pr-6">
                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                    Role
                                </span>

                                <span className="block mt-2 text-sm font-semibold text-slate-300">
                                    Software Engineer
                                </span>
                            </div>

                            <div className="py-7 px-6">
                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                    Focus
                                </span>

                                <span className="block mt-2 text-sm font-semibold text-slate-300">
                                    Building Software
                                </span>
                            </div>

                            <div className="py-7 px-6">
                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                    Interests
                                </span>

                                <span className="block mt-2 text-sm font-semibold text-slate-300">
                                    AI & Technology
                                </span>
                            </div>

                            <div className="py-7 px-6">
                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                    Mentoring
                                </span>

                                <span className="block mt-2 text-sm font-semibold text-slate-300">
                                    1-to-1 & Groups
                                </span>
                            </div>

                            <div className="py-7 pl-6">
                                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
                                    Location
                                </span>

                                <span className="block mt-2 text-sm font-semibold text-slate-300">
                                    United Kingdom
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </header>


            {/* ========================================== */}
            {/* PERSONAL STORY / JOURNEY                   */}
            {/* ========================================== */}
            <section
                id="personal-roadmap"
                className="py-24 bg-slate-950 border-b border-slate-900 relative overflow-hidden"
            >
                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="max-w-3xl mb-16">

                        <div className="inline-flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 rounded-full bg-indigo-400" />

                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-400">
                                My Journey
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                            A little bit about
                            <span className="block text-slate-500">
                                how I got here.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
                            My journey has taken me from learning and experimenting with
                            technology to building software professionally, teaching
                            others, exploring AI, and creating things of my own.
                        </p>

                    </div>

                    {/* Timeline */}
                    <div className="relative">

                        {/* Timeline Line */}
                        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-800" />

                        <div className="space-y-12">

                            {/* Early Years */}
                            <div className="relative pl-12">

                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                                </div>

                                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                                    Early Years
                                </span>

                                <h3 className="mt-2 text-xl font-extrabold text-white">
                                    Curiosity came first
                                </h3>

                                <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                                    I've always been curious about how things work. That
                                    curiosity eventually led me towards computers and
                                    technology, where I found a space where I could
                                    constantly learn, experiment, and create.
                                </p>

                            </div>

                            {/* Education */}
                            <div className="relative pl-12">

                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                                </div>

                                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                                    Education
                                </span>

                                <h3 className="mt-2 text-xl font-extrabold text-white">
                                    Learning the foundations
                                </h3>

                                <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                                    Studying Computer Science gave me a stronger
                                    foundation for understanding technology and solving
                                    problems. More importantly, it taught me how to think,
                                    learn independently, and approach difficult problems
                                    systematically.
                                </p>

                            </div>

                            {/* Career */}
                            <div className="relative pl-12">

                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                </div>

                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                                    Professional Career
                                </span>

                                <h3 className="mt-2 text-xl font-extrabold text-white">
                                    Turning knowledge into real software
                                </h3>

                                <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                                    I moved from learning about software to actually
                                    building and maintaining it. Working on real projects
                                    taught me lessons that no tutorial could — how to
                                    work with people, deal with uncertainty, understand
                                    users, fix problems, and deliver something that
                                    actually works.
                                </p>

                            </div>

                            {/* Expanding Interests */}
                            <div className="relative pl-12">

                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                                </div>

                                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                                    Exploring More
                                </span>

                                <h3 className="mt-2 text-xl font-extrabold text-white">
                                    Software became more than just a career
                                </h3>

                                <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                                    Over time, my interests expanded beyond writing code.
                                    I became increasingly interested in AI, automation,
                                    mobile technology, business, teaching, writing, and
                                    the ways technology can solve everyday problems.
                                </p>

                            </div>

                            {/* UK */}
                            <div className="relative pl-12">

                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                                </div>

                                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                                    A New Chapter
                                </span>

                                <h3 className="mt-2 text-xl font-extrabold text-white">
                                    Building a life and career in the UK
                                </h3>

                                <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                                    Moving to the UK opened a new chapter for me. It
                                    brought new experiences, new people, new opportunities,
                                    and a different perspective on both technology and
                                    life.
                                </p>

                            </div>

                            {/* Today */}
                            <div className="relative pl-12">

                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                </div>

                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                                    Today
                                </span>

                                <h3 className="mt-2 text-xl font-extrabold text-white">
                                    Building, teaching, and helping others grow
                                </h3>

                                <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                                    Today I work across software development, AI,
                                    technology, business, and education. I build products,
                                    help businesses with technology, teach people how to
                                    develop their skills, and continue exploring what is
                                    possible with modern technology.
                                </p>

                            </div>

                        </div>
                    </div>

                    {/* What Matters To Me */}
                    <div className="mt-20 grid md:grid-cols-3 gap-px bg-slate-800 rounded-3xl overflow-hidden border border-slate-800">

                        <div className="bg-slate-950 p-7">
                            <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">
                                Build
                            </span>

                            <h3 className="mt-3 text-lg font-extrabold text-white">
                                Make useful things
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                I enjoy turning ideas and problems into software that
                                people can actually use.
                            </p>
                        </div>

                        <div className="bg-slate-950 p-7">
                            <span className="text-xs uppercase tracking-wider font-bold text-purple-400">
                                Learn
                            </span>

                            <h3 className="mt-3 text-lg font-extrabold text-white">
                                Always stay curious
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                Technology changes constantly. I enjoy learning new
                                things and figuring out how they can be applied.
                            </p>
                        </div>

                        <div className="bg-slate-950 p-7">
                            <span className="text-xs uppercase tracking-wider font-bold text-indigo-400">
                                Give Back
                            </span>

                            <h3 className="mt-3 text-lg font-extrabold text-white">
                                Help other people grow
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                One of the most rewarding parts of what I do is helping
                                someone else go from confused to confident.
                            </p>
                        </div>

                    </div>

                    {/* Closing Statement */}
                    <div className="mt-14 text-center max-w-2xl mx-auto">

                        <p className="text-xl md:text-2xl font-bold text-slate-200 leading-relaxed">
                            "I'm still learning, still building, and still figuring
                            things out — just like everyone else."
                        </p>

                        <p className="mt-4 text-sm text-slate-500">
                            And that's probably what keeps the work interesting.
                        </p>

                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* TECHNICAL MILESTONES TIMELINE              */}
            {/* ========================================== */}
            <section className="relative py-24 sm:py-32 border-b border-slate-900 bg-slate-950 overflow-hidden">

                {/* Ambient Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-indigo-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-sky-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">

                    {/* Section Header */}
                    <div className="max-w-3xl">

                        <div className="inline-flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 rounded-full bg-indigo-400" />

                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-400">
                                Experience & Milestones
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08]">
                            Building technology
                            <span className="block text-slate-500">
                                that works beyond
                            </span>
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                                the screen.
                            </span>
                        </h2>

                        <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                            A selection of projects, products, and technical initiatives
                            spanning mobile applications, digital communities, and
                            business automation.
                        </p>

                    </div>

                    {/* Timeline */}
                    <div className="relative mt-16 ml-3 sm:ml-5">

                        {/* Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800" />

                        <div className="space-y-14">

                            {/* ========================================== */}
                            {/* MILESTONE 01                               */}
                            {/* ========================================== */}
                            <div className="relative pl-8 sm:pl-12">

                                {/* Timeline Node */}
                                <div className="absolute -left-[13px] top-0 w-7 h-7 rounded-full bg-slate-950 border border-purple-500/60 flex items-center justify-center shadow-lg shadow-purple-500/10">
                                    <Code2 size={13} className="text-purple-400" />
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 hover:border-purple-500/30 transition-colors">

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                                        <div>
                                            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-purple-400">
                                                Mobile Application
                                            </span>

                                            <h3 className="mt-2 text-xl font-black text-white">
                                                Ecobank Mobile Application
                                            </h3>
                                        </div>

                                        <span className="w-fit text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Mobile Systems
                                        </span>

                                    </div>

                                    <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-3xl">
                                        Contributed to the engineering and architecture of
                                        a large-scale mobile banking application, working
                                        across development, platform structure, and
                                        performance to deliver a reliable experience for
                                        users across mobile devices.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Architecture
                                        </span>

                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Mobile Development
                                        </span>

                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Team Leadership
                                        </span>
                                    </div>

                                </div>
                            </div>


                            {/* ========================================== */}
                            {/* MILESTONE 02                               */}
                            {/* ========================================== */}
                            <div className="relative pl-8 sm:pl-12">

                                {/* Timeline Node */}
                                <div className="absolute -left-[13px] top-0 w-7 h-7 rounded-full bg-slate-950 border border-indigo-500/60 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                                    <Globe2 size={13} className="text-indigo-400" />
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 hover:border-indigo-500/30 transition-colors">

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                                        <div>
                                            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-indigo-400">
                                                Digital Community
                                            </span>

                                            <h3 className="mt-2 text-xl font-black text-white">
                                                Founder, iLead Talent Incubator
                                            </h3>
                                        </div>

                                        <span className="w-fit text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Education & Technology
                                        </span>

                                    </div>

                                    <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-3xl">
                                        Built a digital ecosystem focused on improving
                                        access to technology education and practical
                                        digital skills. The initiative included structured
                                        learning resources, training systems, and an
                                        open-access community designed to help people
                                        develop useful technology skills.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Product Development
                                        </span>

                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Digital Education
                                        </span>

                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Community Building
                                        </span>
                                    </div>

                                </div>
                            </div>


                            {/* ========================================== */}
                            {/* MILESTONE 03                               */}
                            {/* ========================================== */}
                            <div className="relative pl-8 sm:pl-12">

                                {/* Timeline Node */}
                                <div className="absolute -left-[13px] top-0 w-7 h-7 rounded-full bg-slate-950 border border-sky-500/60 flex items-center justify-center shadow-lg shadow-sky-500/10">
                                    <Cpu size={13} className="text-sky-400" />
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 hover:border-sky-500/30 transition-colors">

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                                        <div>
                                            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-sky-400">
                                                Business Automation
                                            </span>

                                            <h3 className="mt-2 text-xl font-black text-white">
                                                AI & Digital Business Automation
                                            </h3>
                                        </div>

                                        <span className="w-fit text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            AI & Automation
                                        </span>

                                    </div>

                                    <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-3xl">
                                        Helping businesses identify repetitive processes
                                        that can be improved with software and AI.
                                        Solutions range from intelligent assistants and
                                        workflow automation to systems that connect
                                        business data with the tools teams already use.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            AI Integration
                                        </span>

                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Workflow Automation
                                        </span>

                                        <span className="text-[10px] font-semibold text-slate-500 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                                            Business Systems
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                        <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
                            Different projects, same principle: understand the problem
                            first, then build technology that solves it properly.
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Focused on practical outcomes</span>
                        </div>

                    </div>

                </div>
            </section>
            {/* ========================================== */}
            {/* NEW: PODCASTS & MEDIA BROADCASTING LAYER   */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-xl space-y-3">
                            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full inline-block">
                                Audio Distribution Nodes
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                                Podcasts & Media Logs
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                Deconstructing complex software systems, advanced AI pipelines, and the relentless discipline required to survive and thrive in deep production cycles.
                            </p>
                        </div>

                        {/* Broadcast Action Buttons */}
                        <div className="flex items-center gap-3 self-start md:self-auto font-mono text-xs">
                            <a
                                href="/podcasts"
                                className="px-5 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-sky-950/30 flex items-center gap-2 transition-all group"
                            >
                                <span>Listen to Episodes</span>
                                <ArrowRight size={12} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <a
                                href="mailto:ekenehq@gmail.com?subject=Podcast%20Guest%20/%20Topic%20Pitch&body=Hi%20Kenny%2C%20%0D%0A%0D%0AI%20have%20a%20podcast%20collaboration%20proposal%20or%20a%20specific%20technical%20topic%20pitch%20for%20your%20show%3A"
                                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold rounded-xl border border-slate-800 flex items-center gap-2 transition-all"
                            >
                                <span>Pitch a Topic</span>
                            </a>
                        </div>
                    </div>

                    {/* Podcast Focus Categories Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {/* Show Category 1 */}
                        <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-2xl space-y-4 relative group hover:border-slate-800 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                <Terminal size={18} />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-500">Core Deep-Dives</span>
                                <h3 className="text-base font-bold text-white uppercase tracking-wide">The Full-Stack Blueprint</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Raw, unsalted teardowns of enterprise codebase challenges. I discuss optimizing heavy React Native rendering lifecycles, isolating runtime state engines, and setting up bulletproof deployment scripts.
                                </p>
                            </div>
                        </div>

                        {/* Show Category 2 */}
                        <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-2xl space-y-4 relative group hover:border-slate-800 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <Cpu size={18} />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">Automation Vectors</span>
                                <h3 className="text-base font-bold text-white uppercase tracking-wide">AI-Driven Operations</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Mapping out how businesses go from manual bottlenecks to autonomous workflows. Episodes cover the plumbing behind multi-agent orchestrations, token budgets, and connecting LLMs to live telemetry.
                                </p>
                            </div>
                        </div>

                        {/* Show Category 3 */}
                        <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-2xl space-y-4 relative group hover:border-slate-800 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Award size={18} />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">Execution Psychology</span>
                                <h3 className="text-base font-bold text-white uppercase tracking-wide">The Unyielding Mindset</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Dedicated audio logs mapping the mental frameworks required for long-term engineering. We dive into radical consistency, grit during critical system crashes, and managing elite asynchronous teams.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Recent Episode Log Snippet */}
                    <div className="p-5 bg-slate-900/30 border border-slate-900/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                            <span><strong className="text-white">Latest Micro-Log:</strong> "Building Defensively — Minimizing External Vendor Dependency in 2026."</span>
                        </div>
                        <span className="text-slate-600 text-[11px] self-start sm:self-center">Duration: 24 mins</span>
                    </div>

                </div>
            </section>
            {/* ========================================== */}
            {/* LIVE APPLICATIONS                         */}
            {/* ========================================== */}
            <section className="relative py-28 border-b border-white/[0.06] bg-[#08090b] overflow-hidden">

                {/* Ambient Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.035] blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.035] blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* ==========================================
        SECTION HEADER
    ========================================== */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">

                        <div className="max-w-2xl">

                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />

                                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-400 font-bold">
                                    Production Artifacts
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.035em] text-white leading-tight">
                                Live on
                                <span className="text-slate-600"> Google Play.</span>
                            </h2>

                            <p className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                                Explore our active native Android distributions. Engineered
                                from a single TypeScript source, compiled for extreme
                                performance, and deployed safely across global tracks.
                            </p>

                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">

                            <a
                                href="/apps"
                                className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-white text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-all"
                            >
                                See All My Apps

                                <ArrowRight
                                    size={13}
                                    className="group-hover:translate-x-0.5 transition-transform"
                                />
                            </a>

                            <a
                                href="https://play.google.com/console/u/1/developers/5305627726018173100/app-list?pli=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-400 text-xs font-semibold hover:text-white hover:border-white/[0.16] transition-all"
                            >
                                Developer Profile

                                <ExternalLink
                                    size={12}
                                    className="opacity-50 group-hover:translate-x-0.5 transition-transform"
                                />
                            </a>

                        </div>

                    </div>

                    {/* ==========================================
        APPLICATION GRID
    ========================================== */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-white/[0.07] rounded-2xl overflow-hidden">

                        {/* ==========================================
            TOOLBOX
        ========================================== */}
                        <div className="group relative p-7 bg-white/[0.015] border-b sm:border-r lg:border-b-0 border-white/[0.07] hover:bg-white/[0.025] transition-all">

                            <div className="flex items-start justify-between">

                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                                    TB
                                </div>

                                <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Live
                                </span>

                            </div>

                            <div className="mt-8">

                                <h3 className="text-lg font-black text-white">
                                    Toolbox
                                </h3>

                                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                                    A professional suite of high-performance technical
                                    utilities for device configuration, diagnostics,
                                    automation, and local asset management.
                                </p>

                            </div>

                            <div className="mt-10 pt-5 border-t border-white/[0.06]">

                                <a
                                    href="https://play.google.com/store/apps/details?id=com.devekene.ToolBox"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-emerald-400 transition-colors"
                                >
                                    View on Google Play
                                    <ArrowUpRight size={12} />
                                </a>

                            </div>

                        </div>

                        {/* ==========================================
            SYSTEMS ONE
        ========================================== */}
                        <div className="group relative p-7 bg-white/[0.015] border-b lg:border-b-0 lg:border-r border-white/[0.07] hover:bg-white/[0.025] transition-all">

                            <div className="flex items-start justify-between">

                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/[0.08] border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold">
                                    S1
                                </div>

                                <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Live
                                </span>

                            </div>

                            <div className="mt-8">

                                <h3 className="text-lg font-black text-white">
                                    Systems One
                                </h3>

                                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                                    A high-performance distributed backend system built for
                                    low-latency event processing, telemetry ingestion,
                                    service coordination, and reliable message delivery.
                                </p>

                            </div>

                            <div className="mt-10 pt-5 border-t border-white/[0.06]">

                                <a
                                    href="https://ekenedilichukwu.com/apps/systems-one"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-indigo-400 transition-colors"
                                >
                                    View Application
                                    <ArrowUpRight size={12} />
                                </a>

                            </div>

                        </div>

                        {/* ==========================================
            OGOO
        ========================================== */}
                        <div className="group relative p-7 bg-white/[0.015] border-b sm:border-b-0 sm:border-r lg:border-r border-white/[0.07] hover:bg-white/[0.025] transition-all">

                            <div className="flex items-start justify-between">

                                <div className="w-12 h-12 rounded-2xl bg-purple-500/[0.08] border border-purple-500/20 flex items-center justify-center text-purple-400 font-mono text-xs font-bold">
                                    OG
                                </div>

                                <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Live
                                </span>

                            </div>

                            <div className="mt-8">

                                <h3 className="text-lg font-black text-white">
                                    Ogoo
                                </h3>

                                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                                    A mobile-first AI healthcare assistant providing
                                    accessible health information, symptom guidance,
                                    wellness support, and personalized conversational
                                    assistance.
                                </p>

                            </div>

                            <div className="mt-10 pt-5 border-t border-white/[0.06]">

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-purple-400 transition-colors"
                                >
                                    View on Google Play
                                    <ArrowUpRight size={12} />
                                </a>

                            </div>

                        </div>

                        {/* ==========================================
            KNOWLEDGE CITY
        ========================================== */}
                        <div className="group relative p-7 bg-white/[0.015] hover:bg-white/[0.025] transition-all">

                            <div className="flex items-start justify-between">

                                <div className="w-12 h-12 rounded-2xl bg-sky-500/[0.08] border border-sky-500/20 flex items-center justify-center text-sky-400 font-mono text-xs font-bold">
                                    KC
                                </div>

                                <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Live
                                </span>

                            </div>

                            <div className="mt-8">

                                <h3 className="text-lg font-black text-white">
                                    Knowledge City
                                </h3>

                                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                                    An offline-first mobile learning platform for technical
                                    knowledge, engineering documentation, educational
                                    content, and on-demand audio resources.
                                </p>

                            </div>

                            <div className="mt-10 pt-5 border-t border-white/[0.06]">

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-sky-400 transition-colors"
                                >
                                    View on Google Play
                                    <ArrowUpRight size={12} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* ==========================================
                        BOTTOM STATUS BAR
                    ========================================== */}
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-wider text-slate-600">

                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Production applications
                        </div>

                        <span>
                            Android · TypeScript · React Native
                        </span>

                    </div>

                </div>
            </section>

            <section id="why-hire" className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900/40 relative overflow-hidden">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15" />

                <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">

                    {/* Header */}
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                            Why Work With Me
                        </span>

                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Technology That Solves Real Problems
                        </h2>

                        <p className="text-slate-400 text-sm leading-relaxed">
                            I focus on building software that is useful, reliable, and
                            easy to maintain. The goal is simple: understand the problem,
                            choose the right technology, and build a solution that works.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Pillar 1 */}
                        <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">

                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                <Cpu size={18} />
                            </div>

                            <div className="space-y-2">

                                <h3 className="text-lg font-bold text-white uppercase font-mono tracking-tight text-sm">
                                    01 - Experienced Engineering
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed">
                                    I have more than six years of experience building
                                    real-world software. I use technologies such as
                                    <strong className="text-slate-200"> React, TypeScript, Next.js, and Expo </strong>
                                    to create applications that are fast, reliable, and
                                    easy to grow.
                                </p>

                                <p className="text-slate-500 text-xs leading-relaxed">
                                    From the user interface to the database and backend,
                                    I think about how the whole system works together.
                                </p>

                            </div>
                        </div>


                        {/* Pillar 2 */}
                        <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">

                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                                <Terminal size={18} />
                            </div>

                            <div className="space-y-2">

                                <h3 className="text-lg font-bold text-white uppercase font-mono tracking-tight text-sm">
                                    02 - AI That Does Useful Work
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed">
                                    I don't add AI simply because it is popular. I look
                                    for tasks where AI can genuinely save time, improve
                                    a process, or help a business serve its customers.
                                </p>

                                <p className="text-slate-500 text-xs leading-relaxed">
                                    I can connect AI with tools, databases, and business
                                    workflows using technologies such as
                                    <strong className="text-slate-300"> n8n </strong>
                                    and custom integrations.
                                </p>

                            </div>
                        </div>


                        {/* Pillar 3 */}
                        <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800/80 transition-all group">

                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                                <Search size={18} />
                            </div>

                            <div className="space-y-2">

                                <h3 className="text-lg font-bold text-white uppercase font-mono tracking-tight text-sm">
                                    03 - I Find Solutions
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed">
                                    When something doesn't work, I don't just keep trying
                                    random fixes. I investigate the problem, understand
                                    what is causing it, and work towards a solution.
                                </p>

                                <p className="text-slate-500 text-xs leading-relaxed">
                                    This means researching documentation, testing ideas,
                                    reading technical resources, and tracing problems
                                    back to their source.
                                </p>

                            </div>
                        </div>

                    </div>


                    {/* Quick Metrics */}
                    <div className="p-8 bg-slate-900/30 border border-slate-900 rounded-2xl grid sm:grid-cols-3 gap-6 text-center font-mono relative overflow-hidden">

                        <div className="space-y-1">
                            <div className="text-2xl font-black text-white">
                                6+ YEARS
                            </div>

                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                                Building Real Software
                            </div>
                        </div>

                        <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-slate-900 py-4 sm:py-0">
                            <div className="text-2xl font-black text-purple-400">
                                AI + AUTOMATION
                            </div>

                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                                When It Creates Real Value
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-2xl font-black text-white">
                                PROBLEM FIRST
                            </div>

                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                                Technology Comes Second
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* DIGITAL CV / EXPERIENCE SECTION            */}
            {/* ========================================== */}
            <section
                id="digital-cv"
                className="py-24 border-b border-slate-900 bg-slate-950"
            >
                <div className="max-w-6xl mx-auto px-6 space-y-14">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="max-w-2xl space-y-4">

                            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-sky-400">
                                <span className="w-2 h-2 rounded-full bg-sky-400" />
                                My Experience
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                                My Career & Experience
                            </h2>

                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                                I am a software engineer and technical leader with experience
                                building mobile apps, web applications, business systems,
                                and digital products.
                            </p>

                            <p className="text-slate-500 text-sm leading-relaxed">
                                Here is a quick look at my professional journey, the projects
                                I have worked on, and the skills I use to build useful
                                technology.
                            </p>

                        </div>

                        {/* CV Downloads */}
                        <div className="flex flex-col sm:flex-row gap-3">

                            <a
                                href={Assets.files.cv}
                                download
                                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-bold transition-colors"
                            >
                                <FileText size={15} />
                                Download CV
                            </a>

                            {/* <a
                                href="/assets/kenny-okoli-resume.docx"
                                download
                                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-sm font-bold border border-slate-800 transition-colors"
                            >
                                <FileText size={15} />
                                Word Version
                            </a> */}

                        </div>
                    </div>


                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* ========================================== */}
                        {/* CAREER JOURNEY                             */}
                        {/* ========================================== */}
                        <div className="lg:col-span-2 space-y-6">

                            <div>
                                <h3 className="text-lg font-bold text-white">
                                    My Career Journey
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    A simple overview of my professional experience.
                                </p>
                            </div>


                            <div className="space-y-4">

                                {/* Senior Software Engineer — D'roid Technologies */}
                                <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                                                2023 — Present
                                            </div>

                                            <h4 className="mt-2 text-lg font-bold text-white">
                                                Senior Software Engineer (Team Lead – Web/Mobile)
                                            </h4>

                                            <p className="mt-1 text-sm text-slate-500">
                                                D’roid Technologies
                                            </p>
                                        </div>

                                        <span className="self-start px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                                            Current
                                        </span>

                                    </div>

                                    <ul className="mt-5 space-y-3 text-sm text-slate-400 leading-relaxed list-disc list-inside">
                                        <li>
                                            Led the development of web and mobile applications using
                                            React JS and React Native with TypeScript, from planning
                                            through to production.
                                        </li>

                                        <li>
                                            Built reusable components and application features using
                                            React, Redux Toolkit, and Tailwind CSS, with a focus on
                                            performance, accessibility, and reliability.
                                        </li>

                                        <li>
                                            Monitored application performance and fixed issues using
                                            tools such as React DevTools, Lighthouse, and crash
                                            analytics.
                                        </li>

                                        <li>
                                            Worked closely with product and backend teams to connect
                                            applications to REST APIs and WebSockets.
                                        </li>
                                    </ul>

                                </div>


                                {/* Senior Software Engineer — E-Process / Ecobank */}
                                <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">

                                    <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                                        2021 — 2023
                                    </div>

                                    <h4 className="mt-2 text-lg font-bold text-white">
                                        Senior Software Engineer
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-500">
                                        E-Process (Ecobank)
                                    </p>

                                    <ul className="mt-5 space-y-3 text-sm text-slate-400 leading-relaxed list-disc list-inside">
                                        <li>
                                            Built web dashboards and mobile applications using React
                                            JS and React Native for large-scale enterprise users.
                                        </li>

                                        <li>
                                            Improved older interfaces by turning them into faster,
                                            more responsive experiences across desktop and mobile.
                                        </li>

                                        <li>
                                            Connected applications to REST and WebSocket APIs to
                                            provide real-time data and reliable state management.
                                        </li>

                                        <li>
                                            Improved application performance and code reuse through
                                            better React components, hooks, state management, and
                                            React Native optimisation.
                                        </li>
                                    </ul>

                                </div>


                                {/* Mobile Engineer — Coaster Technologies */}
                                <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">

                                    <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                                        2021
                                    </div>

                                    <h4 className="mt-2 text-lg font-bold text-white">
                                        Mobile Engineer (React Native)
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Coaster Technologies
                                    </p>

                                    <p className="mt-5 text-sm text-slate-400 leading-relaxed">
                                        Developed and maintained cross-platform mobile applications
                                        using React Native, creating consistent experiences across
                                        iOS and Android while improving usability and engagement.
                                    </p>

                                </div>


                                {/* Frontend Engineer — G&T Limited */}
                                <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">

                                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        2020 — 2021
                                    </div>

                                    <h4 className="mt-2 text-lg font-bold text-white">
                                        Frontend Engineer
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-500">
                                        G&T Limited
                                    </p>

                                    <p className="mt-5 text-sm text-slate-400 leading-relaxed">
                                        Developed and maintained responsive web applications using
                                        React, focusing on clean code, reliable performance, and
                                        easy-to-use internal dashboards and business applications.
                                    </p>

                                </div>


                                {/* Frontend Engineer — Harney Project */}
                                <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">

                                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        2018 — 2019
                                    </div>

                                    <h4 className="mt-2 text-lg font-bold text-white">
                                        Frontend Engineer (React JS)
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Harney Project Limited
                                    </p>

                                    <p className="mt-5 text-sm text-slate-400 leading-relaxed">
                                        Turned complex web dashboards into clean and easy-to-use
                                        interfaces, helping improve usability, adoption, and the
                                        efficiency of everyday workflows.
                                    </p>

                                </div>

                            </div>
                        </div>


                        {/* ========================================== */}
                        {/* QUICK FACTS                                */}
                        {/* ========================================== */}
                        <div className="space-y-6">

                            <div>
                                <h3 className="text-lg font-bold text-white">
                                    Quick Facts
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    A few things you should know about me.
                                </p>
                            </div>


                            {/* Education */}
                            <div className="relative pl-12">

                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                                </div>

                                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                                    Education
                                </span>

                                <div className="mt-3 space-y-4">

                                    <div>
                                        <h3 className="text-lg font-extrabold text-white">
                                            B.Sc Computer Science
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-400">
                                            National Open University <span className="text-slate-600">·</span> 2014–2019
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-extrabold text-white">
                                            B.Ed Chemistry Education
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Cross River University <span className="text-slate-600">·</span> 2013–2018
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-6">
                                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                                        Certifications
                                    </span>

                                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                                        <li className="flex gap-3">
                                            <span className="text-purple-400">•</span>
                                            AWS Certified Cloud Practitioner
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-purple-400">•</span>
                                            Microsoft Azure Certification
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-purple-400">•</span>
                                            Scrum Study Agile Certification
                                        </li>
                                    </ul>
                                </div>

                            </div>


                            {/* Skills */}
                            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">

                                <div className="text-xs uppercase tracking-wider font-bold text-slate-500">
                                    Technical Skills
                                </div>

                                <div className="mt-5 space-y-4">

                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Languages
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["JavaScript (ES6+)", "TypeScript"].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Frontend
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["React.js", "React Native", "Redux"].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Backend & Services
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["Firebase", "REST APIs"].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Styling
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["Tailwind CSS", "Vanilla CSS3", "Material UI"].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Databases
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["SQL", "Firebase"].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Tools & DevOps
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["Git", "GitHub", "Jira", "CI/CD"].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* Projects */}
                            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">

                                <div className="text-xs uppercase tracking-wider font-bold text-slate-500">
                                    Projects & Work
                                </div>

                                <ul className="mt-4 space-y-6 text-sm text-slate-400">

                                    <li>
                                        <div className="font-semibold text-slate-200">
                                            ToolBox Mobile App
                                        </div>
                                        <div className="text-xs text-sky-400 mt-1">
                                            React Native, Redux, Firebase · View on Google Play Store
                                        </div>
                                        <ul className="mt-2 space-y-1.5">
                                            <li>• Engineered a high-performance productivity application using React Native and Redux, implementing a modular architecture that reduced feature deployment time by 25%.</li>
                                            <li>• Optimized rendering cycles and asset loading, achieving a 40% reduction in app load time and significantly increasing user retention during the initial launch phase.</li>
                                            <li>• Scaled the application to support 100+ active users within the first month using a robust Firebase backend for real-time data synchronization and persistent storage.</li>
                                            <li>• Developed reusable UI components to ensure design consistency and facilitate rapid scaling for future feature expansions.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <div className="font-semibold text-slate-200">
                                            D’roid One Mobile App
                                        </div>
                                        <div className="text-xs text-sky-400 mt-1">
                                            React Native, Firebase, Redux · View on Google Play Store
                                        </div>
                                        <ul className="mt-2 space-y-1.5">
                                            <li>• Designed a service-delivery mobile platform that streamlined connections between users and technical service providers, reducing booking friction by 30%.</li>
                                            <li>• Integrated complex RESTful APIs for real-time service discovery, ensuring low-latency data delivery and high application responsiveness across diverse network conditions.</li>
                                            <li>• Refined the user journey using user-centric UI/UX principles, increasing session duration and user engagement.</li>
                                            <li>• Leveraged Tailwind CSS and NativeWind to build a responsive cross-platform interface with consistent visual integrity across iOS and Android.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <div className="font-semibold text-slate-200">
                                            Personal Portfolio Website
                                        </div>
                                        <div className="text-xs text-sky-400 mt-1">
                                            React.js, TypeScript, Redux · View Website
                                        </div>
                                        <ul className="mt-2 space-y-1.5">
                                            <li>• Developed a professional portfolio using Next.js and TypeScript, demonstrating expertise in Server-Side Rendering (SSR) and type-safe frontend development.</li>
                                            <li>• Deployed and managed the site using AWS, leveraging S3 and CloudFront for global availability and optimized content delivery.</li>
                                            <li>• Implemented fully responsive design patterns and modern accessibility standards (WCAG), demonstrating a commitment to inclusive and performant web development.</li>
                                        </ul>
                                    </li>

                                </ul>

                            </div>

                            {/* Personal */}
                            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">

                                <div className="text-xs uppercase tracking-wider font-bold text-slate-500">
                                    Outside of Technology
                                </div>

                                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                                    When I am not building software, I enjoy creative writing,
                                    historical fiction, audio and media projects, and helping
                                    other people learn technology.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Bottom CTA */}
                    <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-sky-500/10 via-slate-900/40 to-purple-500/10 border border-slate-800 text-center">

                        <h3 className="text-xl sm:text-2xl font-black text-white">
                            Want to know more about my work?
                        </h3>

                        <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
                            Download my CV for a complete overview of my experience,
                            education, projects, and professional background.
                        </p>

                        <div className="mt-6">
                            <a
                                href={Assets.files.cv}
                                download
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 text-sm font-bold transition-colors"
                            >
                                <FileText size={15} />
                                Download My CV
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* SPEAKING EVENTS & KNOWLEDGE SHARING       */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6 space-y-16">

                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div className="space-y-3">
                            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                                Knowledge & Community
                            </span>

                            <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                                Technical Workshops & Knowledge Sharing
                            </h2>

                            <p className="text-slate-400 text-sm max-w-xl">
                                Sharing practical knowledge around modern frontend development,
                                mobile application engineering, cloud technologies, and building
                                scalable digital solutions.
                            </p>
                        </div>

                        <div className="font-mono text-xs self-start sm:self-auto">
                            <a
                                href="/speaking-events"
                                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white font-bold rounded-xl border border-slate-800 hover:border-slate-700 shadow-md transition-all group"
                            >
                                <span>View All</span>
                                <ArrowRight
                                    size={12}
                                    className="opacity-60 group-hover:translate-x-0.5 transition-transform"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="grid gap-6">

                        {/* Topic 1 */}
                        <div className="p-6 bg-slate-900/30 border border-slate-900 rounded-xl space-y-3 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900/60 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                        <Code2 size={14} />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-white">
                                            Modern React & React Native Development
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            Frontend & Mobile Engineering
                                        </p>
                                    </div>
                                </div>

                                <span className="text-xs font-mono px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-md self-start sm:self-center">
                                    Technical Workshop
                                </span>
                            </div>

                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Practical sessions covering React.js, React Native, TypeScript,
                                Redux, reusable component architecture, responsive interfaces,
                                and performance-focused application development across web and
                                mobile platforms.
                            </p>
                        </div>

                        {/* Topic 2 */}
                        <div className="p-6 bg-slate-900/30 border border-slate-900 rounded-xl space-y-3 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900/60 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <Layers size={14} />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-white">
                                            Building Scalable Mobile Applications
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            React Native, Firebase & REST APIs
                                        </p>
                                    </div>
                                </div>

                                <span className="text-xs font-mono px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-md self-start sm:self-center">
                                    Knowledge Sharing
                                </span>
                            </div>

                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Exploring the engineering principles behind production-ready
                                mobile applications, including API integration, Firebase
                                architecture, real-time data synchronization, application
                                performance, reusable UI systems, and cross-platform development.
                            </p>
                        </div>

                        {/* Topic 3 */}
                        <div className="p-6 bg-slate-900/30 border border-slate-900 rounded-xl space-y-3 relative overflow-hidden group hover:border-slate-800 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900/60 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                        <CloudAlert size={14} />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-white">
                                            Cloud & Modern Development Practices
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            AWS, Azure, Git & CI/CD
                                        </p>
                                    </div>
                                </div>

                                <span className="text-xs font-mono px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-md self-start sm:self-center">
                                    Developer Session
                                </span>
                            </div>

                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Sharing practical approaches to cloud deployment, version control,
                                CI/CD workflows, collaborative development, and using platforms
                                such as AWS and Microsoft Azure to deliver reliable and scalable
                                applications.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* MENTORSHIP & LEARNING                     */}
            {/* ========================================== */}
            <section
                id="learn-with-ekene"
                className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40 relative"
            >
                {/* Subtle Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-slate-800 to-transparent" />

                <div className="max-w-5xl mx-auto px-6 space-y-16">

                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto space-y-4">

                        <div className="inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />

                            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold">
                                Learn With Ekene
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Learn. Build. Grow.
                        </h2>

                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            I help developers and aspiring technology professionals become
                            better at building real software, solving problems, and
                            growing their careers.
                        </p>

                    </div>


                    {/* What You'll Learn */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Software Development */}
                        <div className="bg-slate-900/30 border border-slate-800 p-7 sm:p-8 rounded-2xl hover:border-emerald-500/20 transition-colors">

                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <Code2 size={18} />
                            </div>

                            <h3 className="mt-6 text-xl font-black text-white">
                                Become a Better Developer
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                Go beyond tutorials and learn how to build software that
                                works in the real world.
                            </p>

                            <ul className="mt-6 space-y-3">

                                <li className="flex gap-3 text-sm text-slate-400">
                                    <Check size={15} className="mt-0.5 text-emerald-400 shrink-0" />
                                    Write cleaner and easier-to-maintain code
                                </li>

                                <li className="flex gap-3 text-sm text-slate-400">
                                    <Check size={15} className="mt-0.5 text-emerald-400 shrink-0" />
                                    Understand how applications work from end to end
                                </li>

                                <li className="flex gap-3 text-sm text-slate-400">
                                    <Check size={15} className="mt-0.5 text-emerald-400 shrink-0" />
                                    Learn how to find and fix difficult problems
                                </li>

                                <li className="flex gap-3 text-sm text-slate-400">
                                    <Check size={15} className="mt-0.5 text-emerald-400 shrink-0" />
                                    Build projects that you can be proud of
                                </li>

                            </ul>

                        </div>


                        {/* Career & Leadership */}
                        <div className="bg-slate-900/30 border border-slate-800 p-7 sm:p-8 rounded-2xl hover:border-purple-500/20 transition-colors">

                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <TrendingUp size={18} />
                            </div>

                            <h3 className="mt-6 text-xl font-black text-white">
                                Grow Your Career
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                Technical skills are only part of becoming a great
                                professional. I'll also help you understand how to work
                                effectively and take on bigger responsibilities.
                            </p>

                            <ul className="mt-6 space-y-3">

                                <li className="flex gap-3 text-sm text-slate-400">
                                    <Check size={15} className="mt-0.5 text-purple-400 shrink-0" />
                                    Turn ideas into clear project plans
                                </li>

                                <li className="flex gap-3 text-sm text-slate-400">
                                    <Check size={15} className="mt-0.5 text-purple-400 shrink-0" />
                                    Work better with other developers and teams
                                </li>

                                <li className="flex gap-3 text-sm text-slate-400">
                                    <Check size={15} className="mt-0.5 text-purple-400 shrink-0" />
                                    Understand what it takes to lead technical projects
                                </li>

                                <li className="flex gap-3 text-sm text-slate-400">
                                    <Check size={15} className="mt-0.5 text-purple-400 shrink-0" />
                                    Prepare for your next career opportunity
                                </li>

                            </ul>

                        </div>

                    </div>


                    {/* Who Is It For? */}
                    <div className="bg-slate-900/20 border border-slate-800 rounded-2xl p-7 sm:p-8">

                        <div className="grid md:grid-cols-3 gap-8 items-center">

                            <div className="md:col-span-2">

                                <span className="text-xs uppercase tracking-[0.18em] font-bold text-slate-500">
                                    Who Is This For?
                                </span>

                                <h3 className="mt-3 text-xl font-black text-white">
                                    For people who want to get better at technology.
                                </h3>

                                <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-2xl">
                                    Whether you're just starting out, already working as
                                    a developer, studying technology, or trying to move
                                    into a better role, mentorship can help you make
                                    progress with the right guidance.
                                </p>

                            </div>

                            <div className="flex flex-wrap md:flex-col gap-2">

                                <span className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-400">
                                    Students
                                </span>

                                <span className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-400">
                                    New Developers
                                </span>

                                <span className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-400">
                                    Working Developers
                                </span>

                                <span className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-400">
                                    Career Changers
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* CTA */}
                    <div className="p-8 bg-gradient-to-b from-slate-900/40 to-slate-950 border border-slate-800 rounded-2xl text-center space-y-6">

                        <div className="w-11 h-11 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <GraduationCap size={19} />
                        </div>

                        <div className="space-y-2">

                            <h3 className="text-xl font-black text-white">
                                Want to Learn With Me?
                            </h3>

                            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                                If you're serious about improving your technical skills
                                and building a better career in technology, get in touch
                                and tell me where you are and what you want to achieve.
                            </p>

                        </div>

                        <a
                            href="/mentoring"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-black transition-colors"
                        >
                            Go To Mentorship
                            <ArrowRight size={15} />
                        </a>

                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* 3. CORE CORE PHILOSOPHIES                  */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900/30">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="max-w-2xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full inline-block">
                            Engineering Manifest
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            Architectural Values
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            The fundamental execution rules built directly into every single interface and database schema I ship.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Philosophy 1 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <Layers size={18} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Strict Structural Cleanliness</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Code must be self-documenting, type-safe, and decoupled. I build highly testable component matrix setups that can change behavior patterns seamlessly as a company scales.
                            </p>
                        </div>

                        {/* Philosophy 2 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Zap size={18} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Extreme Resource Optimization</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Whether monitoring unnecessary re-renders in React Native or avoiding bloated loops inside an n8n webhook, logic must execute across the absolute minimal footprint needed.
                            </p>
                        </div>

                        {/* Philosophy 3 */}
                        <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                <ShieldCheck size={18} />
                            </div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wide">Absolute Transparency</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                No complex technical jargon or hidden licensing markups. I deliver clear architectural updates, predictable flat build trajectories, and robust infrastructure transition parameters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* NEW: ENGINEERING MINDSET & GRID VECTOR     */}
            {/* ========================================== */}
            <section className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-900/10 via-slate-950 to-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-16">

                    <div className="max-w-2xl space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block">
                            Psychology of Execution
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                            The Engineering Mindset
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            Code syntax can be looked up, but operational discipline cannot be automated. My work is anchored on three unyielding psychological vectors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Vector 1: Radical Consistency */}
                        <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/[0.01] rounded-bl-full pointer-events-none group-hover:bg-purple-500/[0.02] transition-colors" />
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-purple-500 font-black tracking-widest block uppercase">
                                    01
                                </span>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                    Radical Consistency
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    Great software isn't built in chaotic bursts of brief inspiration; it is compounding interest over long horizons. I bring a predictable, repeating rhythm to architecture, version control, and team deployment cycles—day in, day out, without variance.
                                </p>
                            </div>
                        </div>

                        {/* Vector 2: Unyielding Grit */}
                        <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/[0.01] rounded-bl-full pointer-events-none group-hover:bg-indigo-500/[0.02] transition-colors" />
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-indigo-500 font-black tracking-widest block uppercase">
                                    02
                                </span>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                    Never Give Up
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    When edge-case bugs, system regressions, or breaking infrastructure updates compromise production timelines, my baseline default is relentless perseverance. I systematically isolate and break down complex problems until the system yields to standard design logic.
                                </p>
                            </div>
                        </div>

                        {/* Vector 3: Absolute Focus */}
                        <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.01] rounded-bl-full pointer-events-none group-hover:bg-sky-500/[0.02] transition-colors" />
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-sky-500 font-black tracking-widest block uppercase">
                                    03
                                </span>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                    Laser Focus
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    I ruthlessly filter out operational noise, shiny object syndromes, and half-baked frameworks. I target my full cognitive focus onto the primary business bottleneck—building clean, lightning-fast solutions that move conversion needles immediately.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Micro-Quote Footer */}
                    <div className="pt-4 border-t border-slate-900/60 flex items-center gap-4 text-xs font-mono text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                        <span>Operational Standard: Persist until the application scales optimally.</span>
                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* TESTIMONIALS & KIND WORDS                  */}
            {/* ========================================== */}
            <section
                id="feedback-matrix"
                className="py-24 border-b border-slate-900 bg-gradient-to-b from-slate-900/20 via-slate-950 to-slate-950"
            >
                <div className="max-w-4xl mx-auto px-6 space-y-12">

                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto space-y-4">

                        <div className="inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-400" />

                            <span className="text-xs uppercase tracking-[0.2em] text-purple-400 font-bold">
                                A Few Kind Words
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            What Do You Think About Ekene?
                        </h2>

                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            If you've worked with Ekene, learned from him, built something
                            with him, or simply want to wish him well, he'd love to hear
                            from you.
                        </p>

                        <p className="text-slate-500 text-sm leading-relaxed">
                            Share a testimonial, a compliment, something you appreciate,
                            a lesson you learned, or a message of encouragement.
                        </p>

                    </div>


                    {/* Message Form */}
                    <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">

                        {/* Decorative Glow */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                const formData = new FormData(e.currentTarget);

                                const name =
                                    formData.get('peerName') || 'Someone';
                                const role =
                                    formData.get('peerRole') || 'Friend / Supporter';
                                const message =
                                    formData.get('impactLog') || '';

                                const subject = encodeURIComponent(
                                    `A Message for Ekene from ${name}`
                                );

                                const body = encodeURIComponent(
                                    `A Message for Ekene\n\n` +
                                    `Name: ${name}\n` +
                                    `Relationship / Role: ${role}\n\n` +
                                    `Message:\n${message}\n`
                                );

                                window.location.href =
                                    `mailto:ekenehq@gmail.com?subject=${subject}&body=${body}`;
                            }}
                            className="relative space-y-6"
                        >

                            {/* Name + Relationship */}
                            <div className="grid sm:grid-cols-2 gap-6">

                                <div className="space-y-2">

                                    <label
                                        htmlFor="peerName"
                                        className="text-xs text-slate-400 uppercase font-bold tracking-wider block"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        id="peerName"
                                        name="peerName"
                                        required
                                        placeholder="e.g. John Smith"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                                    />

                                </div>


                                <div className="space-y-2">

                                    <label
                                        htmlFor="peerRole"
                                        className="text-xs text-slate-400 uppercase font-bold tracking-wider block"
                                    >
                                        How Do You Know Ekene?
                                    </label>

                                    <input
                                        type="text"
                                        id="peerRole"
                                        name="peerRole"
                                        placeholder="e.g. Friend, Client, Colleague"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                                    />

                                </div>

                            </div>


                            {/* Message */}
                            <div className="space-y-2">

                                <label
                                    htmlFor="impactLog"
                                    className="text-xs text-slate-400 uppercase font-bold tracking-wider block"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="impactLog"
                                    name="impactLog"
                                    rows={6}
                                    required
                                    placeholder="Tell Ekene what you appreciate about him, share your experience working with him, leave a testimonial, or simply wish him well..."
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none leading-relaxed"
                                />

                            </div>


                            {/* Submit */}
                            <div className="pt-4 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-5">

                                <div className="flex items-center gap-3 text-slate-500">

                                    <div className="w-9 h-9 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                        <Heart
                                            size={15}
                                            className="text-purple-400"
                                        />
                                    </div>

                                    <p className="text-xs leading-relaxed max-w-xs">
                                        Your message will be sent directly to Ekene.
                                        Thank you for taking the time to write.
                                    </p>

                                </div>


                                <button
                                    type="submit"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-xl shadow-lg shadow-purple-500/10 transition-all active:scale-[0.99] cursor-pointer group"
                                >
                                    <Heart
                                        size={14}
                                        className="group-hover:scale-110 transition-transform"
                                    />

                                    <span>Leave a Message</span>

                                    <ArrowRight
                                        size={13}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>

                            </div>

                        </form>

                    </div>


                    {/* Small Closing Message */}
                    <div className="text-center">

                        <p className="text-xs text-slate-600 leading-relaxed">
                            Every kind word, piece of advice, and bit of encouragement
                            means more than you might think.
                        </p>

                    </div>

                </div>
            </section>

            {/* ========================================== */}
            {/* FINAL CALL TO ACTION                       */}
            {/* ========================================== */}
            <section className="py-24 bg-slate-950 border-b border-slate-900 relative overflow-hidden">

                {/* Ambient Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto">

                        <div className="inline-flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 rounded-full bg-indigo-400" />

                            <span className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-bold">
                                Let's Work Together
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Have an idea or project?
                        </h2>

                        <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                            Whether you need a mobile app, website, business automation,
                            or simply want to talk through an idea, I'd be happy to hear
                            from you.
                        </p>

                    </div>


                    {/* Action Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mt-12">

                        {/* Hire / Project */}
                        <div className="p-7 sm:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-purple-500/30 transition-colors flex flex-col">

                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <Briefcase size={18} />
                            </div>

                            <h3 className="mt-6 text-xl font-black text-white">
                                I Have a Project
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">
                                Tell me what you're trying to build. We can discuss your
                                idea, what you need, and the best way to bring it to life.
                            </p>

                            <a
                                href="mailto:ekenehq@gmail.com?subject=Project%20Inquiry"
                                className="mt-7 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white text-sm font-bold transition-colors"
                            >
                                Tell Me About Your Project
                                <ArrowRight size={15} />
                            </a>

                        </div>


                        {/* Connect */}
                        <div className="p-7 sm:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col">

                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Users2 size={18} />
                            </div>

                            <h3 className="mt-6 text-xl font-black text-white">
                                I Just Want to Connect
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">
                                Interested in technology, learning, collaboration, or
                                the work I do? You're welcome to reach out and say hello.
                            </p>

                            <a
                                href="mailto:ekenehq@gmail.com?subject=Hello%20Ekene"
                                className="mt-7 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-bold transition-colors"
                            >
                                Say Hello
                                <ArrowRight size={15} />
                            </a>

                        </div>

                    </div>


                    {/* Closing */}
                    <div className="mt-10 text-center">

                        <p className="text-xs text-slate-600">
                            No complicated forms. Just send a message and let's start a conversation.
                        </p>

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
}