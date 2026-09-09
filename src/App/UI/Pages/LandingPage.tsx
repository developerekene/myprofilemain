import { useState } from "react";
import {
    Bot,
    Code,
    MessageSquare,
    Calendar,
    CheckCircle2,
    Zap,
    ShieldCheck,
    Sparkles,
    Users,
    GraduationCap,
    Code2,
    Smartphone,
    ToolCaseIcon,
    CalendarPlus2Icon,
    Handshake,
    Globe,
    BrainCircuit,
    Cloud,
    Database,
    Server,
    Blocks,
    Palette,
    MonitorSmartphone,
    ArrowRight,
    Gauge,
    Icon,
    ArrowUpRight,
    Lightbulb,
    Layers3
} from "lucide-react";
import Footer from "../Components/Footer";
import NavbarNew from "../Components/NavbarNew";
import ChatBot from "../Components/ChatBot";
import { openChat, toggleChat } from "../../Redux/Slices/chatSlice";
import { Assets } from "../../utils/constants/Assets";
import { store } from "../../Redux/Store";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGoogle, FaReact } from "react-icons/fa";
import MobileAppsSection from "../Components/MobileApps";
import AICapabilitiesSection from "../Components/AICapabilitiesSection";
import TestimoniesSection from "../Components/Testimonials";
import WhyYouWantMeSection from "../Components/WhyYouWantMeSection";
import MentoringSection from "../Components/MentoringSection";

export default function App() {

    // ROI Calculator State
    const [monthlyTraffic, setMonthlyTraffic] = useState(500);
    const [leadConversion, setLeadConversion] = useState(2); // 2% default conversion without bot
    const [avgSaleValue, setAvgSaleValue] = useState(150);

    // Simulated Chatbot State
    const [chatOpen, setChatOpen] = useState(false);
    const [capturedLeads, setCapturedLeads] = useState<Array<{ name?: string, phone?: string, email?: string }>>([]);

    // ROI Calculator Computations
    const baselineLeads = Math.round(monthlyTraffic * (leadConversion / 100));
    const automatedLeads = Math.round(monthlyTraffic * ((leadConversion + 4) / 100)); // AI bots typically increase capture by 4-6%
    const extraLeads = automatedLeads - baselineLeads;
    const lostRevenue = extraLeads * avgSaleValue;
    const [pipelineState, setPipelineState] = useState("idle"); // idle, processing, querying, booking, success
    const [progress, setProgress] = useState(0);
    const [simulatedInbound, setSimulatedInbound] = useState("");
    const [latency, setLatency] = useState(0);

    const mockQueries = [
        "Hi, do you have any free slots for an appointment tomorrow afternoon? 💇‍♀️",
        "Hey! Need an emergency callout for a burst pipe in Grantham ASAP! 🔧",
        "Do you have pricing lists for teeth whitening treatments available? 🦷"
    ];

    const triggerSimulation = () => {
        if (pipelineState !== "idle") return;

        // Pick a random query
        const randomQuery = mockQueries[Math.floor(Math.random() * mockQueries.length)];
        setSimulatedInbound(randomQuery);
        setPipelineState("processing");
        setProgress(15);
        setLatency(120);

        // Timeline simulation steps
        setTimeout(() => {
            setPipelineState("querying");
            setProgress(45);
            setLatency(240);
        }, 1000);

        setTimeout(() => {
            setPipelineState("booking");
            setProgress(80);
            setLatency(380);
        }, 2200);

        setTimeout(() => {
            setPipelineState("success");
            setProgress(100);
            setLatency(420);
        }, 3400);
    };

    const resetSimulation = () => {
        setPipelineState("idle");
        setProgress(0);
        setSimulatedInbound("");
        setLatency(0);
    };


    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200">

            {/* GLASSMORPHIC NAVBAR */}
            {/* GLASSMORPHIC B2B AGENCY NAVBAR */}
            <NavbarNew />


            <header
                className="
        relative w-full
        min-h-[680px] sm:min-h-[620px] lg:h-[600px] lg:min-h-0
        overflow-hidden
        bg-slate-950
        text-slate-100
        font-sans
    "
                style={{
                    backgroundImage: `url("https://scontent.flhr12-1.fna.fbcdn.net/v/t1.6435-9/120539213_3606065416082178_6480253749634602750_n.jpg?stp=dst-jpg_tt6&cstp=mx1040x780&ctp=s1040x780&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hjXbMWcjF8UQ7kNvwGUnIa6&_nc_oc=AdqCR1xTb8UXdgG8fPCS6Ob2oNfqnaeY5nsrMbss_UN3-qAbglL6L--j553GA0Jv8Hk&_nc_zt=23&_nc_ht=scontent.flhr12-1.fna&_nc_gid=9Aw4Nt1Rueuy-k92k7K17Q&_nc_ss=7b2a8&oh=00_AQJbqlAlnIbXI4mblxJJAZO7JY2y113k8zHcbslmhytpqA&oe=6AC3DA0C")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-slate-950/60" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90 sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/65 sm:to-purple-950/30" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto min-h-[680px] sm:min-h-[620px] lg:h-full px-5 sm:px-6 flex items-center">

                    <div className="w-full max-w-3xl py-12 sm:py-16 lg:py-0">

                        {/* Identity */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/15 border border-purple-400/20">
                                <Sparkles
                                    size={13}
                                    className="text-purple-400"
                                />
                            </div>

                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-purple-300">
                                Ekenedilichukwu Okoli
                            </span>
                        </div>

                        {/* Main heading */}
                        <h1 className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                tracking-tight
                text-white
                leading-[1.08]
            ">
                            Lead Software Engineer

                            <span className="
                    block
                    mt-2
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-purple-400
                    via-indigo-300
                    to-purple-400
                ">
                                Building scalable software & intelligent systems.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="
                mt-5
                sm:mt-6
                text-sm
                sm:text-base
                lg:text-lg
                text-slate-300
                max-w-2xl
                leading-relaxed
            ">
                            I’m a software engineer with 6+ years of experience designing
                            and building scalable backend systems, data pipelines, APIs,
                            and high-performance web applications.
                        </p>

                        {/* Secondary description */}
                        <p className="
                hidden
                sm:block
                mt-3
                text-sm
                lg:text-base
                text-slate-400
                max-w-2xl
                leading-relaxed
            ">
                            I work across TypeScript, React Js, Next Js, Python, Cloud Technologies{"(AWS, Azure)"}, Data, and AI,
                            turning complex technical challenges into reliable,
                            production-ready software.
                        </p>

                        {/* Skills */}
                        <div className="
                flex
                flex-wrap
                gap-1.5
                sm:gap-2
                mt-5
                sm:mt-6
            ">
                            {[
                                "Python",
                                "Backend Engineering",
                                "APIs",
                                "Data Engineering",
                                "AI & Automation",
                                "Cloud Systems",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="
                            px-2.5
                            py-1
                            sm:px-3
                            sm:py-1.5
                            rounded-full
                            text-[10px]
                            sm:text-xs
                            font-medium
                            text-slate-200
                            bg-slate-900/70
                            border
                            border-slate-700/70
                            backdrop-blur-sm
                        "
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-7
                sm:mt-8
            ">

                            <button
                                onClick={() => store.dispatch(toggleChat())}
                                disabled={pipelineState !== "idle"}
                                className={`
                        w-full
                        sm:w-auto
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-6
                        py-3.5
                        rounded-xl
                        text-sm
                        font-bold
                        transition-all
                        ${pipelineState !== "idle"
                                        ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                                        : "bg-white text-slate-950 hover:bg-slate-100 hover:scale-[1.02] shadow-lg"
                                    }
                    `}
                            >
                                <Handshake size={16} />
                                <span>Collaborate with me</span>
                            </button>

                            <a
                                href="/get-your-agent"
                                className="
                        w-full
                        sm:w-auto
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-6
                        py-3.5
                        rounded-xl
                        text-sm
                        font-semibold
                        text-white
                        bg-purple-600/30
                        border
                        border-purple-300/40
                        backdrop-blur-sm
                        hover:bg-purple-600/50
                        transition-all
                    "
                            >
                                <CalendarPlus2Icon
                                    size={16}
                                    className="text-indigo-200"
                                />

                                <span>Schedule an Appointment</span>
                            </a>

                        </div>

                    </div>
                </div>
            </header>

            <section className="relative w-full bg-slate-950 text-slate-100 py-20 sm:py-24 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">

                    {/* Section heading */}
                    <div className="max-w-3xl mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-purple-500" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                                What I Do
                            </span>
                        </div>

                        <h2 className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-black
                tracking-tight
                text-white
                leading-tight
            ">
                            Engineering solutions built for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400">
                                scale, reliability & impact.
                            </span>
                        </h2>

                        <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                            I design and build software systems that are not only functional,
                            but maintainable, scalable, observable, and ready for real-world
                            production workloads.
                        </p>
                    </div>

                    {/* Expertise grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {/* Backend */}
                        <div className="
                group
                relative
                p-6
                sm:p-7
                rounded-2xl
                bg-slate-900/60
                border border-slate-800
                hover:border-purple-500/40
                transition-all
                duration-300
            ">
                            <div className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-400
                    mb-5
                    group-hover:bg-purple-500/20
                    transition-colors
                ">
                                <Server size={21} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">
                                Backend Engineering
                            </h3>

                            <p className="text-sm text-slate-400 leading-relaxed">
                                Designing robust backend services, APIs, microservices,
                                authentication systems, and business logic capable of
                                handling demanding workloads.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {["Python", "FastAPI", "Django", "REST APIs"].map((item) => (
                                    <span
                                        key={item}
                                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Data */}
                        <div className="
                group
                relative
                p-6
                sm:p-7
                rounded-2xl
                bg-slate-900/60
                border border-slate-800
                hover:border-indigo-500/40
                transition-all
                duration-300
            ">
                            <div className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-indigo-500/10
                    border border-indigo-500/20
                    text-indigo-400
                    mb-5
                    group-hover:bg-indigo-500/20
                    transition-colors
                ">
                                <Database size={21} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">
                                Data & Pipelines
                            </h3>

                            <p className="text-sm text-slate-400 leading-relaxed">
                                Building reliable data pipelines and processing systems
                                that transform large volumes of data into useful,
                                accessible information.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {["Data Pipelines", "ETL", "SQL", "Automation"].map((item) => (
                                    <span
                                        key={item}
                                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Cloud */}
                        <div className="
                group
                relative
                p-6
                sm:p-7
                rounded-2xl
                bg-slate-900/60
                border border-slate-800
                hover:border-purple-500/40
                transition-all
                duration-300
            ">
                            <div className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-400
                    mb-5
                    group-hover:bg-purple-500/20
                    transition-colors
                ">
                                <Cloud size={21} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">
                                Cloud & Infrastructure
                            </h3>

                            <p className="text-sm text-slate-400 leading-relaxed">
                                Deploying and operating production applications with
                                scalable infrastructure, monitoring, automation, and
                                reliable deployment workflows.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {["AWS", "Docker", "CI/CD", "Linux"].map((item) => (
                                    <span
                                        key={item}
                                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* AI */}
                        <div className="
                group
                relative
                p-6
                sm:p-7
                rounded-2xl
                bg-slate-900/60
                border border-slate-800
                hover:border-indigo-500/40
                transition-all
                duration-300
            ">
                            <div className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-indigo-500/10
                    border border-indigo-500/20
                    text-indigo-400
                    mb-5
                    group-hover:bg-indigo-500/20
                    transition-colors
                ">
                                <BrainCircuit size={21} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">
                                AI & Intelligent Systems
                            </h3>

                            <p className="text-sm text-slate-400 leading-relaxed">
                                Integrating AI into practical software products, automation
                                workflows, intelligent assistants, and systems that improve
                                how businesses operate.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {["AI Agents", "LLMs", "Automation", "AI APIs"].map((item) => (
                                    <span
                                        key={item}
                                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Web */}
                        <div className="
                group
                relative
                p-6
                sm:p-7
                rounded-2xl
                bg-slate-900/60
                border border-slate-800
                hover:border-purple-500/40
                transition-all
                duration-300
            ">
                            <div className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-400
                    mb-5
                    group-hover:bg-purple-500/20
                    transition-colors
                ">
                                <Globe size={21} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">
                                Web Applications
                            </h3>

                            <p className="text-sm text-slate-400 leading-relaxed">
                                Creating high-performance web applications with thoughtful
                                architecture, responsive interfaces, and seamless
                                integration between frontend and backend systems.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {["React", "Next.js", "TypeScript", "Tailwind"].map((item) => (
                                    <span
                                        key={item}
                                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Engineering */}
                        <div className="
                group
                relative
                p-6
                sm:p-7
                rounded-2xl
                bg-gradient-to-br
                from-purple-950/40
                to-slate-900/60
                border border-purple-500/20
                hover:border-purple-400/40
                transition-all
                duration-300
            ">
                            <div className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-400
                    mb-5
                ">
                                <Code2 size={21} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">
                                Engineering Leadership
                            </h3>

                            <p className="text-sm text-slate-400 leading-relaxed">
                                Helping teams turn ideas into production-ready systems
                                through technical direction, architecture, mentoring,
                                documentation, and engineering best practices.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {["Architecture", "Mentoring", "Code Quality", "Strategy"].map((item) => (
                                    <span
                                        key={item}
                                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative w-full bg-slate-950 text-slate-100 py-20 sm:py-24 overflow-hidden">

                {/* Ambient glow */}
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">

                    {/* Section intro */}
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">

                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-purple-500" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                                    Frontend Engineering
                                </span>
                            </div>

                            <h2 className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-black
                    tracking-tight
                    text-white
                    leading-tight
                ">
                                See my{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400">
                                    frontend capabilities.
                                </span>
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl lg:ml-auto">
                            I build modern interfaces that are responsive, accessible,
                            performant, and designed around real user experiences—not
                            just screens that look good.
                        </p>

                    </div>

                    {/* Main showcase */}
                    <div className="
            relative
            rounded-3xl
            overflow-hidden
            border border-slate-800
            bg-slate-900/70
            backdrop-blur-sm
        ">

                        {/* Browser chrome */}
                        <div className="h-11 sm:h-12 px-4 flex items-center gap-2 border-b border-slate-800 bg-slate-900/90">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />

                            <div className="hidden sm:flex ml-4 flex-1 max-w-md h-6 rounded-md bg-slate-800 items-center px-3">
                                <span className="text-[10px] text-slate-500">
                                    ekenedilichukwu.dev
                                </span>
                            </div>
                        </div>

                        {/* Showcase body */}
                        <div className="grid lg:grid-cols-5 min-h-[420px]">

                            {/* Visual / mock application */}
                            <div className="
                    lg:col-span-3
                    relative
                    p-5
                    sm:p-8
                    bg-gradient-to-br
                    from-slate-900
                    via-slate-900
                    to-purple-950/30
                ">

                                <div className="
                        h-full
                        min-h-[340px]
                        rounded-2xl
                        border border-slate-700/70
                        bg-slate-950/80
                        overflow-hidden
                        shadow-2xl
                    ">

                                    {/* Mock navigation */}
                                    <div className="h-14 px-5 flex items-center justify-between border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500" />
                                            <span className="text-xs font-bold text-white">
                                                Product
                                            </span>
                                        </div>

                                        <div className="hidden sm:flex gap-5 text-[10px] text-slate-500">
                                            <span>Overview</span>
                                            <span>Solutions</span>
                                            <span>Projects</span>
                                            <span>Contact</span>
                                        </div>
                                    </div>

                                    {/* Mock content */}
                                    <div className="p-6 sm:p-8">

                                        <div className="max-w-md">
                                            <div className="w-20 h-2 rounded-full bg-purple-500/40 mb-4" />

                                            <div className="h-6 sm:h-8 w-4/5 rounded-md bg-slate-700 mb-3" />
                                            <div className="h-6 sm:h-8 w-3/5 rounded-md bg-gradient-to-r from-purple-500/70 to-indigo-500/50 mb-5" />

                                            <div className="space-y-2 mb-6">
                                                <div className="h-2 w-full rounded-full bg-slate-800" />
                                                <div className="h-2 w-11/12 rounded-full bg-slate-800" />
                                                <div className="h-2 w-3/4 rounded-full bg-slate-800" />
                                            </div>

                                            <div className="flex gap-3">
                                                <div className="h-9 w-28 rounded-lg bg-white" />
                                                <div className="h-9 w-24 rounded-lg border border-slate-700 bg-slate-900" />
                                            </div>
                                        </div>

                                        {/* Cards */}
                                        <div className="grid grid-cols-3 gap-3 mt-10">
                                            <div className="h-20 rounded-xl bg-slate-900 border border-slate-800" />
                                            <div className="h-20 rounded-xl bg-purple-950/30 border border-purple-900/40" />
                                            <div className="h-20 rounded-xl bg-slate-900 border border-slate-800" />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Capabilities */}
                            <div className="
                    lg:col-span-2
                    p-6
                    sm:p-8
                    lg:p-10
                    border-t
                    lg:border-t-0
                    lg:border-l
                    border-slate-800
                    flex
                    flex-col
                    justify-center
                ">

                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                                    What I bring to the frontend
                                </span>

                                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                                    Interfaces engineered for people.
                                </h3>

                                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                                    From responsive landing pages to complex web
                                    applications, I care about the details that make
                                    software intuitive and enjoyable to use.
                                </p>

                                {/* Capability list */}
                                <div className="mt-7 space-y-4">

                                    {[
                                        {
                                            icon: MonitorSmartphone,
                                            title: "Responsive by default",
                                            text: "Interfaces that work beautifully across phones, tablets, and desktops.",
                                        },
                                        {
                                            icon: Gauge,
                                            title: "Performance focused",
                                            text: "Fast-loading interfaces with thoughtful rendering and optimized assets.",
                                        },
                                        {
                                            icon: Blocks,
                                            title: "Reusable architecture",
                                            text: "Component-driven systems that remain maintainable as products grow.",
                                        },
                                        {
                                            icon: Palette,
                                            title: "Modern UI & UX",
                                            text: "Clean interfaces with deliberate interaction, hierarchy, and visual polish.",
                                        },
                                    ].map(({ icon: Icon, title, text }) => (
                                        <div
                                            key={title}
                                            className="flex gap-4 group"
                                        >
                                            <div className="
                                    shrink-0
                                    w-9 h-9
                                    rounded-lg
                                    flex items-center justify-center
                                    bg-purple-500/10
                                    border border-purple-500/20
                                    text-purple-400
                                    group-hover:bg-purple-500/20
                                    transition-colors
                                ">
                                                <Icon size={17} />
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-white">
                                                    {title}
                                                </h4>

                                                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                                                    {text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                {/* Technologies */}
                                <div className="mt-8 pt-6 border-t border-slate-800">

                                    <span className="text-[10px] uppercase tracking-[0.15em] text-slate-600">
                                        Technologies
                                    </span>

                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {[
                                            "React",
                                            "Next.js",
                                            "TypeScript",
                                            "JavaScript",
                                            "Tailwind CSS",
                                            "HTML5",
                                            "CSS3",
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className="
                                        px-2.5
                                        py-1
                                        rounded-md
                                        text-[10px]
                                        font-medium
                                        text-slate-300
                                        bg-slate-800
                                        border border-slate-700
                                    "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Bottom statement */}
                    <div className="
            mt-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
            px-1
        ">
                        <p className="text-xs text-slate-500">
                            From concept → interface → production.
                        </p>

                        <a
                            href="/apps"
                            className="
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-purple-400
                    hover:text-purple-300
                    transition-colors
                "
                        >
                            Explore my projects
                            <ArrowRight size={14} />
                        </a>
                    </div>

                </div>
            </section>

            <MobileAppsSection />

            <AICapabilitiesSection />

            <WhyYouWantMeSection />

            <MentoringSection />

            {/* ========================================== */}
            {/* TOOLBOX — PRODUCT SHOWCASE                 */}
            {/* ========================================== */}
            <section
                id="download"
                className="relative py-24 border-t border-slate-900 bg-slate-950 overflow-hidden"
            >
                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                        {/* Toolbox Image */}
                        <div className="relative flex justify-center">

                            {/* Glow */}
                            <div className="absolute inset-10 bg-indigo-500/10 blur-3xl rounded-full" />

                            <div className="relative max-w-sm w-full">

                                <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-3 shadow-2xl">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D4E22AQGeiJMJVfEg-w/feedshare-shrink_1280/B4EZ_oDfdzHMAM-/0/1786304657593?e=1788998400&v=beta&t=YQQDyQ53FVMRlu50rk4h3PsW8Rgu5PttBVZkopll_co"
                                        alt="Toolbox mobile application"
                                        className="w-full rounded-[1.5rem] object-cover"
                                    />
                                </div>

                                {/* Floating Label */}
                                <div className="absolute -bottom-5 -right-4 sm:-right-8 bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <Smartphone name="smartphone" size={18} />
                                        </div>

                                        <div>
                                            <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500">
                                                Live on Google Play
                                            </span>

                                            <span className="text-sm font-extrabold text-white">
                                                Toolbox by Devekene
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-7">

                            <div>
                                <div className="inline-flex items-center gap-2 mb-5">
                                    <span className="w-2 h-2 rounded-full bg-indigo-400" />

                                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-400">
                                        A Project I am proud of
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                                    Meet
                                    <span className="text-indigo-400"> Toolbox.</span>
                                </h2>

                                <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                                    A mobile application designed to put useful tools,
                                    information, and workflows directly in your hands.
                                </p>
                            </div>

                            <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                                Toolbox is built around a simple idea: the tools you use
                                should be easy to access when you need them. It brings
                                practical functionality into one convenient mobile
                                experience.
                            </p>

                            {/* Features */}
                            <div className="grid sm:grid-cols-2 gap-3">

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <RiJavascriptFill name="RiJavascriptFill" size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        Typescript
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <FaReact name="FaReact" size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        React Native
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                        <FaGoogle name="FaGoogle" size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        Google API
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                        <ToolCaseIcon name="ToolCaseIcon" size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        30+ individual tools
                                    </span>
                                </div>

                            </div>

                            {/* Download CTA */}
                            <div className="pt-2">

                                <a
                                    href="https://play.google.com/store/apps/details?id=com.devekene.ToolBox"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white hover:bg-slate-200 text-slate-950 rounded-xl font-black text-sm transition-all hover:scale-[1.02]"
                                >
                                    <span>Get Toolbox on Google Play</span>

                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M3 20.05v-16c0-.52.28-1 .73-1.27l12.44 12.44-3.69 3.69c-.27.27-.63.43-1.01.43H4c-.55 0-1-.45-1-1zm16.51-2.91L16.27 13.9l2.74-2.74 3.51 3.51c.27.27.43.63.43 1.01 0 .38-.16.74-.43 1.01l-2.02 2.02zM17.02 3.99l-3.51 3.51-2.74-2.74 3.24-3.24c.27-.27.63-.43 1.01-.43.38 0 .74.16 1.01.43l.99.99zM2.27 3.23L11.75 12.7l-2.75 2.75L3 9.27c-.47-.47-.73-1.1-.73-1.77V4c0-.28.06-.55.19-.77z" />
                                    </svg>
                                </a>

                                <p className="mt-3 text-xs text-slate-600">
                                    Available now for Android devices.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* LinkedIn Posts */}
            <section
                id="linkedin"
                className="py-24 border-t border-slate-900 bg-slate-950"
            >
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 mb-5">
                                <span className="w-2 h-2 rounded-full bg-blue-400" />

                                <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400">
                                    LinkedIn
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                                What I&apos;m thinking.
                                <span className="block text-slate-500">
                                    What I&apos;m building.
                                </span>
                            </h2>

                            <p className="mt-5 text-base text-slate-400 leading-relaxed max-w-xl">
                                I share practical lessons from software engineering, AI,
                                entrepreneurship, leadership, career growth, and building
                                products in the real world.
                            </p>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/recent-activity/all/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 shrink-0 px-5 py-3 rounded-xl border border-slate-700 bg-slate-900 text-sm font-bold text-white hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                        >
                            Read My Posts
                            <ArrowUpRight name="arrow-up-right" size={16} />
                        </a>
                    </div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {/* Post 1 */}
                        <a
                            href="https://www.linkedin.com/posts/ekenedilichukwu-okoli-7615591b5_ai-artificialintelligence-jobsearch-activity-7500100301484396544-FxcF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIX4fkBuEu-TvvSe5Mhx0p51ggtLdjxY0g"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-950/20"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4E22AQEP9sJvmwIxxg/feedshare-image-high-res/B4EaBVDuKhGoAU-/0/1788133436255?e=1790812800&v=beta&t=WbBTMU2gEbpd_nrhKBoW6vqCTsIMa1T40q4uf_w5nKM"
                                    alt="I Built an AI Tool to Help You Stop Sending the Same CV to Every Job"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-blue-400">
                                    Software Engineering
                                </span>

                                <h3 className="mt-2 text-base font-bold leading-6 text-white group-hover:text-blue-300 transition-colors">
                                    I Built an AI Tool to Help You Stop Sending the Same CV to Every Job
                                </h3>

                                <p className="mt-3 text-xs leading-5 text-slate-500">
                                    Job hunting can be exhausting. You find a role you're genuinely interested in, read through the job description, update your CV, write a cover letter, prepare a personal statement, and then repeat the entire process for the next application.

                                    And the cycle continues....
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-600 group-hover:text-blue-400 transition-colors">
                                    Read post
                                    <ArrowUpRight name="arrow-up-right" size={14} />
                                </div>
                            </div>
                        </a>

                        {/* Post 2 */}
                        <a
                            href="https://www.linkedin.com/posts/ekenedilichukwu-okoli-7615591b5_ai-artificialintelligence-entrepreneurship-activity-7498001865549352960-UaGK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIX4fkBuEu-TvvSe5Mhx0p51ggtLdjxY0g"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-950/20"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4E22AQE72NprvPJ6aw/feedshare-image-high-res/B4EaA5A7g1H0AY-/0/1787662940481?e=1790812800&v=beta&t=CpCnJAoIJp6Nf5gISmcdKX8_LAaOAsHwOQcHH5joEqs"
                                    alt="Monetising and Automating Purpose-Driven Ventures with AI"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-purple-400">
                                    Artificial Intelligence
                                </span>

                                <h3 className="mt-2 text-base font-bold leading-6 text-white group-hover:text-purple-300 transition-colors">
                                    Monetising and Automating Purpose-Driven Ventures with AI
                                </h3>

                                <p className="mt-3 text-xs leading-5 text-slate-500">
                                    I’m excited to share that I’ll be speaking this coming Saturday, 29th August, on a topic I’m particularly passionate about:

                                    “Monetising and Automating Purpose-Driven Ventures with AI.”
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-600 group-hover:text-purple-400 transition-colors">
                                    Read post
                                    <ArrowUpRight name="arrow-up-right" size={14} />
                                </div>
                            </div>
                        </a>

                        {/* Post 3 */}
                        <a
                            href="https://www.linkedin.com/posts/ekenedilichukwu-okoli-7615591b5_artificialintelligence-ai-chatbots-activity-7477269694979223552-672b?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIX4fkBuEu-TvvSe5Mhx0p51ggtLdjxY0g"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-950/20"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4E22AQHHHmdNGKqpTw/feedshare-image-high-res/B4EZ8Qw3aoIsAU-/0/1782692674292?e=1790812800&v=beta&t=O5_zIp4UwsGMIRLiJHRoZ6dcGEYWioMauPyvzKrnm2o"
                                    alt="Why AI Chatbots Are Replacing Traditional Ways of Doing Business — And Why I Built KENE"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-400">
                                    Entrepreneurship
                                </span>

                                <h3 className="mt-2 text-base font-bold leading-6 text-white group-hover:text-indigo-300 transition-colors">
                                    Why AI Chatbots Are Replacing Traditional Ways of Doing Business — And Why I Built KENE
                                </h3>

                                <p className="mt-3 text-xs leading-5 text-slate-500">
                                    Not long ago, if you needed help from a business, your options were fairly limited. You could send an email and wait hours or even days for a response. You could call customer support and hope someone was available. Or you could visit a physical office just to get answers to simple questions.

                                    That model no longer meets the expectations of today's customers...
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-600 group-hover:text-indigo-400 transition-colors">
                                    Read post
                                    <ArrowUpRight name="arrow-up-right" size={14} />
                                </div>
                            </div>
                        </a>

                        {/* Post 4 */}
                        <a
                            href="https://www.linkedin.com/posts/ekenedilichukwu-okoli-7615591b5_artificialintelligence-softwareengineering-activity-7485617627030093824-fsk4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIX4fkBuEu-TvvSe5Mhx0p51ggtLdjxY0g"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-950/20"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4E22AQGR6dtkuNoYvQ/feedshare-image-high-res/B4EZ.JBj.8IkAc-/0/1784710316280?e=1790812800&v=beta&t=NaITbDgxCpuFkZJefCkM-t1TDXgRbwPYQzmOqN4LbVE"
                                    alt="The Biggest Downside of Using AI to Build Apps"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                                    Career Growth
                                </span>

                                <h3 className="mt-2 text-base font-bold leading-6 text-white group-hover:text-emerald-300 transition-colors">
                                    The Biggest Downside of Using AI to Build Apps
                                </h3>

                                <p className="mt-3 text-xs leading-5 text-slate-500">
                                    AI can generate code faster than ever before.

                                    It can build components, write APIs, create database models, and even scaffold entire applications in minutes. For developers, that's an incredible productivity boost, but there's a downside that doesn't get talked about enough.
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-600 group-hover:text-emerald-400 transition-colors">
                                    Read post
                                    <ArrowUpRight name="arrow-up-right" size={14} />
                                </div>
                            </div>
                        </a>

                        {/* Post 5 */}
                        <a
                            href="https://www.linkedin.com/posts/ekenedilichukwu-okoli-7615591b5_softwareengineering-developerjourney-careergrowth-activity-7451540239493378049--U0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIX4fkBuEu-TvvSe5Mhx0p51ggtLdjxY0g"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-950/20"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4E22AQHXfNh8paX_xg/feedshare-shrink_800/B4EZ2hIJ4VH0Ac-/0/1776524762913?e=1790812800&v=beta&t=MTyxcMe8PeXIAcLx3iUZVa-g20k1hRvpQ1ntYhyU_VQ"
                                    alt="LinkedIn post about engineering leadership"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                                    Engineering Leadership
                                </span>

                                <h3 className="mt-2 text-base font-bold leading-6 text-white group-hover:text-amber-300 transition-colors">
                                    The Real Cost of Becoming a Developer
                                </h3>

                                <p className="mt-3 text-xs leading-5 text-slate-500">
                                    There’s a version of tech that gets shared online, clean setups, powerful laptops, productivity tools, and success stories that make the journey look smooth and almost effortless. It’s easy to look at that and assume the path is straightforward.

                                    But there’s another side that doesn’t get talked about enough, the real cost...
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-600 group-hover:text-amber-400 transition-colors">
                                    Read post
                                    <ArrowUpRight name="arrow-up-right" size={14} />
                                </div>
                            </div>
                        </a>

                        {/* Post 6 */}
                        <a
                            href="https://www.linkedin.com/posts/ekenedilichukwu-okoli-7615591b5_mentorship-reactjs-webdevelopment-activity-7467512689745874949-C8PJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIX4fkBuEu-TvvSe5Mhx0p51ggtLdjxY0g"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-950/20"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4E22AQGw61RL4BmnEw/feedshare-shrink_1280/B4EZ6HvONpIwAM-/0/1780393763927?e=1790812800&v=beta&t=k1RvCOz2Isbz17BTpRmgtGTWe-w-mivjJJaP5uGMtWk"
                                    alt="LinkedIn post about learning technology"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-400">
                                    Tech Education
                                </span>

                                <h3 className="mt-2 text-base font-bold leading-6 text-white group-hover:text-cyan-300 transition-colors">
                                    Second Half of 2026 Mentorship Program — Applications Now Open (30 Slots Only)
                                </h3>

                                <p className="mt-3 text-xs leading-5 text-slate-500">
                                    One of the most rewarding parts of my journey in tech has been helping others grow. Over the years, I've had the opportunity to mentor aspiring developers, guide career transitions, review projects, and help people gain the confidence to move from learning to building...
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-600 group-hover:text-cyan-400 transition-colors">
                                    Read post
                                    <ArrowUpRight name="arrow-up-right" size={14} />
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:flex-row">
                        <div>
                            <p className="text-sm font-bold text-white">
                                Follow along on LinkedIn
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                I regularly share engineering lessons, AI insights,
                                product ideas, and things I&apos;m learning.
                            </p>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-900/30"
                        >
                            Follow Me on LinkedIn
                            <ArrowUpRight name="arrow-up-right" size={16} />
                        </a>
                    </div>

                </div>
            </section>

            <section
                id="about"
                className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
            >
                {/* Ambient background */}
                <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6">

                    {/* ================= HEADER ================= */}
                    <div className="mb-14 max-w-3xl">

                        <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                            I&apos;m an engineer who enjoys
                            <span className="block text-slate-500">
                                turning difficult problems into working products.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
                            I&apos;m Ekenedilichukwu Okoli — a Lead Software Engineer,
                            Tech Educator and Advocate, and Entrepreneur. I build software,
                            explore emerging technologies, mentor engineers, and turn ideas
                            into products that solve real problems.
                        </p>
                    </div>

                    {/* ================= MAIN PROFILE ================= */}
                    <div className="grid gap-6 lg:grid-cols-12">

                        {/* ================= INTRO CARD ================= */}
                        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-7 sm:p-9 lg:col-span-7">

                            {/* Decorative code */}
                            <div className="absolute right-0 top-0 select-none p-6 text-right font-mono text-[10px] leading-5 text-slate-800">
                                <div>const engineer = {"{"}</div>
                                <div className="pl-4">build: true,</div>
                                <div className="pl-4">learn: true,</div>
                                <div className="pl-4">teach: true,</div>
                                <div className="pl-4">impact: true</div>
                                <div>{"}"}</div>
                            </div>

                            <div className="relative">
                                <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-purple-400">
                                    The Engineer
                                </span>

                                <h3 className="mt-4 max-w-xl text-2xl font-black tracking-tight text-white sm:text-3xl">
                                    More than writing code.
                                    <span className="block text-slate-500">
                                        I build, lead, teach, and learn.
                                    </span>
                                </h3>

                                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400">
                                    <p>
                                        My engineering journey has taken me across backend
                                        systems, APIs, data pipelines, web applications,
                                        mobile products, cloud infrastructure, and AI.
                                    </p>

                                    <p>
                                        I enjoy working at the intersection of technology
                                        and real-world problems — understanding what needs
                                        to be solved, designing the system behind it, and
                                        taking it all the way to production.
                                    </p>

                                    <p>
                                        But engineering for me isn&apos;t only about the
                                        technology. I care about people, knowledge sharing,
                                        mentorship, and creating opportunities for other
                                        engineers to grow.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ================= QUICK PROFILE ================= */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">

                            {/* Experience */}
                            <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-7 transition-all duration-300 hover:border-purple-500/30 hover:bg-slate-900/80">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                                        </p>

                                        <p className="mt-3 text-3xl font-black text-white">
                                            6+
                                        </p>

                                        <p className="mt-1 text-sm text-slate-400">
                                            Years building software
                                        </p>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                        <Code2 name="code-2" size={19} />
                                    </div>
                                </div>
                            </div>

                            {/* Focus */}
                            <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-7 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900/80">
                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                                    Current Focus
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        "AI",
                                        "Backend",
                                        "Web",
                                        "Mobile",
                                        "Cloud",
                                        "Automation",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-[10px] font-semibold text-slate-400 transition-colors group-hover:border-indigo-500/20 group-hover:text-slate-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= THREE PILLARS ================= */}
                    <div className="mt-6 grid gap-6 md:grid-cols-3">

                        {/* Build */}
                        <div className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-slate-900/70">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                <Layers3 name="layers-3" size={20} />
                            </div>

                            <span className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-purple-400">
                                01 / Build
                            </span>

                            <h3 className="mt-2 text-lg font-bold text-white">
                                I build things that matter.
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                From APIs and distributed systems to AI applications,
                                web platforms, and mobile products, I enjoy taking ideas
                                from architecture to production.
                            </p>
                        </div>

                        {/* Teach */}
                        <div className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-slate-900/70">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                <GraduationCap name="graduation-cap" size={20} />
                            </div>

                            <span className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-400">
                                02 / Teach
                            </span>

                            <h3 className="mt-2 text-lg font-bold text-white">
                                I share what I learn.
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                Through mentoring, training, writing, and community
                                engagement, I help developers understand technology and
                                become more confident engineers.
                            </p>
                        </div>

                        {/* Think */}
                        <div className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-slate-900/70">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                <Lightbulb name="lightbulb" size={20} />
                            </div>

                            <span className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
                                03 / Think
                            </span>

                            <h3 className="mt-2 text-lg font-bold text-white">
                                I think beyond the ticket.
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                I look at the bigger picture — the users, the business,
                                the architecture, the team, and what the product needs to
                                become next.
                            </p>
                        </div>
                    </div>

                    {/* ================= BOTTOM STATEMENT ================= */}
                    <div className="mt-10 flex flex-col gap-6 rounded-3xl border border-slate-800 bg-gradient-to-r from-purple-500/5 via-slate-900/60 to-indigo-500/5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div>
                            <p className="text-lg font-bold text-white">
                                Engineering is my craft.
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                Building useful things and helping people grow is the
                                impact I want that craft to create.
                            </p>
                        </div>

                        <a
                            href="/contact"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-all hover:from-purple-500 hover:to-indigo-500"
                        >
                            Get to Know Me
                            <ArrowRight name="arrow-right" size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ABOUT THE ENGINEER COMPONENT SECTION */}
            <section id="about" className="py-20 border-t border-slate-900 bg-slate-950/40">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl shadow-purple-500/10 transform rotate-3">
                        <Code size={40} className="text-white" />
                    </div>

                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-2xl font-bold text-white tracking-tight">The Technical Backbone Behind Your Automation</h2>
                        <p className="text-sm text-slate-400 leading-relaxed font-normal">
                            Hi, I'm **Ekene Okoli**. I am a professional software engineer based locally right here in Lincoln, UK.
                            Before transitioning to establish local digital business systems, I accumulated over **6+ years of dense engineering tenure**
                            architecting critical application ecosystems within international banking setups, healthcare institutions, and fast-scaled enterprise e-commerce pipelines.
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed font-normal">
                            Through **Tech with Ekenedilichukwu**, I am stripping away the complex overhead of corporate technical stacks to deliver lightweight, bulletproof,
                            high-converting AI automation solutions directly onto the systems of local Lincolnshire retail lines, trade firms, and clinics.
                        </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-400">
                        <ShieldCheck size={14} className="text-green-400" />
                        <span>100% Secure, Insured & Localized Development Frameworks</span>
                    </div>
                </div>
            </section>

            {/* COMPACT CLEAN AGENCY FOOTER MAPS */}
            <ChatBot />
            <Footer />
        </div>
    );
}