import React, { useState } from "react";
import {
    Bot,
    Zap,
    Calendar,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Globe,
    Cpu,
    MessageSquare,
    Smartphone,
    Database,
    Briefcase,
    Users,
    LayoutDashboard,
    MessageCircle,
    Sparkles,
    Star,
    ChevronDown,
    Headphones,
    Rocket,
    Code2,
    Brain,
    Clock3
} from "lucide-react";
import Footer from "../Components/Footer";
import NavbarNew from "../Components/NavbarNew";
import ChatBot from "../Components/ChatBot";

interface AgentModule {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const MODULES: AgentModule[] = [
    { id: "lead", title: "Lead Generation", description: "Proactively captures names, phone numbers, and emails.", icon: UserPlus },
    { id: "book", title: "Calendar Sync", description: "Direct integration with Google/Outlook calendars for bookings.", icon: Calendar },
    { id: "faq", title: "Instant Support", description: "Answers complex business queries using your custom data.", icon: MessageSquare },
    { id: "sms", title: "SMS Alerts", description: "Sends instant text notifications to your phone for new leads.", icon: Smartphone },
];

const SERVICES = [
    {
        title: "Web Development",
        description:
            "Fast, modern websites and web applications built with the latest technologies.",
        icon: Globe,
    },
    {
        title: "Mobile Development",
        description:
            "Native and cross-platform iOS & Android apps designed for performance and scalability.",
        icon: Smartphone,
    },
    {
        title: "Backend Development",
        description:
            "Robust APIs, databases, authentication and cloud infrastructure powering your applications.",
        icon: Database,
    },
    {
        title: "Project Management",
        description:
            "End-to-end project planning, agile delivery and technical leadership from start to finish.",
        icon: Briefcase,
    },
    {
        title: "Consultancy",
        description:
            "Technical strategy, architecture reviews and AI adoption consulting tailored to your business.",
        icon: Users,
    },
];

const PRICING = [
    {
        id: "starter",
        name: "Starter",
        badge: "Best for Small Businesses",
        setup: 500,
        monthly: 100,
        features: [
            "1 AI Agent",
            "Website Integration",
            "Lead Capture",
            "Email Support",
        ],
    },
    {
        id: "growth",
        name: "Growth",
        badge: "Most Popular",
        setup: 1200,
        monthly: 250,
        features: [
            "Everything in Starter",
            "Up to 3 AI Agents",
            "CRM Integration",
            "Lead Qualification",
            "Analytics Dashboard",
            "Priority Support",
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        badge: "Custom Solution",
        setup: 2500,
        monthly: 500,
        features: [
            "Everything in Growth",
            "Unlimited AI Agents",
            "Custom Integrations",
            "Knowledge Base Training",
            "Dedicated Account Manager",
            "24/7 Priority Support",
        ],
    },
];

const handlePlanSelection = async (plan: { name: any; }) => {
    await fetch("/api/pricing-enquiry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(plan),
    });

    alert(`You've selected the ${plan.name} plan.`);
};

const PRODUCTS = [
    {
        title: "AI Chat Agent",
        description:
            "A custom-trained AI assistant that answers customer questions, captures leads, and books appointments 24/7.",
        icon: Bot,
        badge: "Most Popular",
        href: "/products/ai-chat-agent",
    },
    {
        title: "Appointment Booking AI",
        description:
            "Automate bookings, reminders and customer enquiries without lifting a finger.",
        icon: Calendar,
        badge: "Automation",
        href: "/products/booking-ai",
    },
    {
        title: "CRM Dashboard",
        description:
            "Manage leads, conversations and customer insights from one powerful dashboard.",
        icon: LayoutDashboard,
        badge: "Business",
        href: "/products/crm",
    },
    {
        title: "WhatsApp AI",
        description:
            "Engage customers on WhatsApp with an AI that responds instantly and intelligently.",
        icon: MessageCircle,
        badge: "Messaging",
        href: "/products/whatsapp-ai",
    },
    {
        title: "Knowledge Base AI",
        description:
            "Train an AI on your documents so employees and customers can find answers in seconds.",
        icon: Database,
        badge: "Internal",
        href: "/products/knowledge-base",
    },
    {
        title: "Custom AI Solution",
        description:
            "Need something unique? We'll design, build and deploy a bespoke AI solution for your business.",
        icon: Sparkles,
        badge: "Enterprise",
        href: "/products/custom-ai",
    },
];

const TESTIMONIALS = [
    {
        name: "Sarah Mitchell",
        role: "Managing Director",
        company: "Lincoln Digital",
        initials: "SM",
        quote:
            "The AI assistant transformed how we handle enquiries. We're responding instantly, capturing more leads, and saving hours every week.",
    },
    {
        name: "James Carter",
        role: "Founder",
        company: "Carter Construction",
        initials: "JC",
        quote:
            "The team delivered exactly what they promised. The automation has reduced admin significantly and our customers love the instant responses.",
    },
    {
        name: "Emily Roberts",
        role: "Operations Manager",
        company: "Bright Health",
        initials: "ER",
        quote:
            "From planning to deployment, everything was seamless. Their expertise in AI and software development is second to none.",
    },
];

const FAQS = [
    {
        question: "How long does it take to build my AI solution?",
        answer:
            "Most AI agents are designed, trained and deployed within 48 hours. More advanced or custom projects may take longer depending on complexity.",
    },
    {
        question: "Can the AI be trained on my business data?",
        answer:
            "Absolutely. We can train your AI using your website, documentation, FAQs, PDFs, policies and other business knowledge to provide accurate responses.",
    },
    {
        question: "Will the AI integrate with my existing systems?",
        answer:
            "Yes. We can integrate with CRMs, booking systems, APIs, email platforms, WhatsApp, Slack and many other third-party services.",
    },
    {
        question: "Do you offer ongoing support?",
        answer:
            "Yes. Every plan includes ongoing maintenance, updates and monitoring. Premium plans also include priority support and additional optimisation.",
    },
    {
        question: "Can you build software other than AI?",
        answer:
            "Yes. We also develop websites, mobile apps, backend systems, custom software, automation solutions and provide technical consultancy.",
    },
    {
        question: "How do I get started?",
        answer:
            "Choose a package, tell us about your business and we'll arrange a discovery call before beginning development.",
    },
];

const WHY_US = [
    {
        title: "Fast Delivery",
        description:
            "We move quickly. Most AI solutions are designed, built and deployed in days—not months.",
        icon: Clock3,
    },
    {
        title: "AI Specialists",
        description:
            "We focus on practical AI that solves real business problems and delivers measurable value.",
        icon: Brain,
    },
    {
        title: "End-to-End Development",
        description:
            "From websites and mobile apps to cloud infrastructure and AI, everything is handled by one team.",
        icon: Code2,
    },
    {
        title: "Built to Scale",
        description:
            "Every solution is engineered with future growth in mind, so your technology grows with your business.",
        icon: Rocket,
    },
    {
        title: "Reliable Support",
        description:
            "Our relationship doesn't end after launch. We provide ongoing support, monitoring and improvements.",
        icon: Headphones,
    },
    {
        title: "Trusted & Secure",
        description:
            "We follow modern development practices and build systems with security, privacy and reliability at their core.",
        icon: ShieldCheck,
    },
];

export default function GetYourAgent() {
    const [selectedModules, setSelectedModules] = useState<string[]>(["lead"]);
    const [isSubmitted, setIsSuccess] = useState(false);
    const [open, setOpen] = useState(0);

    const toggleModule = (id: string) => {
        setSelectedModules(prev =>
            prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to route payload to hello@ekenedilichukwu.com
        setIsSuccess(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-slate-900 border border-purple-500/30 p-10 rounded-3xl text-center space-y-6 shadow-2xl">
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">Deployment Initialized</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Your system configuration has been received. Ekene will contact you within 12 hours to begin the architectural build of your AI Agent.
                    </p>
                    <button onClick={() => window.location.href = "/"} className="text-purple-400 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                        Return to Command Center
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-600">
            <NavbarNew />
            {/* Background Decor */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>



            <section className="flex flex-col items-center justify-center text-center py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none">
                        GROW YOUR BUSINESS WITH{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                            AI.
                        </span>
                    </h1>

                    <p className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We build intelligent AI agents that attract more customers,
                        automate conversations, and help your business scale.
                    </p>
                </div>
            </section>
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest">
                            Why Choose Us
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-white">
                            Why Businesses <span className="text-purple-400">Work With Us</span>
                        </h2>

                        <p className="mt-4 text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                            We don't just build software—we create solutions that help businesses
                            automate processes, improve customer experiences and unlock new
                            opportunities for growth.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {WHY_US.map((item) => (
                            <div
                                key={item.title}
                                className="group bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                                    <item.icon
                                        className="text-purple-400"
                                        size={28}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 p-10 text-center">
                        <h3 className="text-3xl font-black text-white">
                            Ready to build something amazing?
                        </h3>

                        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                            Whether you need an AI assistant, a custom web application, or a complete
                            digital transformation, we're ready to help turn your ideas into reality.
                        </p>
                        <br />
                        <br />
                        <a href="/" className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-8 py-4 rounded-xl font-black uppercase tracking-wider transition-all shadow-lg shadow-purple-500/20">
                            Talk with KENE
                        </a>
                    </div>

                </div>
            </section>

            <main className="max-w-6xl mx-auto px-6 py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LHS: Value Prop & Configurator */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] font-black text-purple-400 uppercase tracking-widest">
                                <Cpu size={12} /> System Configuration
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none">
                                CONFIGURE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">INTELLIGENCE.</span>
                            </h1>
                            <p className="text-slate-400 text-lg max-w-md">
                                Select the modules your business needs. We build, train, and deploy your custom agent in under 48 hours.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {MODULES.map((mod) => (
                                <button
                                    key={mod.id}
                                    onClick={() => toggleModule(mod.id)}
                                    className={`p-6 rounded-2xl border text-left transition-all duration-300 group ${selectedModules.includes(mod.id)
                                        ? "bg-purple-600/10 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                                        : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                                        }`}
                                >
                                    <mod.icon className={`mb-4 transition-colors ${selectedModules.includes(mod.id) ? "text-purple-400" : "text-slate-500 group-hover:text-slate-300"}`} size={24} />
                                    <h3 className="font-bold text-white text-sm mb-1">{mod.title}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">{mod.description}</p>
                                </button>
                            ))}
                        </div>

                        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Starting Price</h4>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-2xl font-black text-white">£500 <span className="text-xs text-slate-500 font-medium">Setup</span></p>
                                    <p className="text-sm text-slate-400">+ £100/mo management</p>
                                </div>
                                <div className="text-right text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                                    BASIC
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RHS: Intake Form */}
                    <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
                        <div className="absolute top-6 right-8 flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-slate-500 tracking-tighter uppercase">Link: Active</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Business Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Lincoln Digital Agency"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Work Email</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Current Website URL</label>
                                <div className="relative">
                                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                                    <input
                                        type="url"
                                        placeholder="https://yourwebsite.com"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Special Requirements</label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us about specific questions you want the AI to answer..."
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm uppercase tracking-widest py-5 rounded-xl transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-3 group"
                            >
                                Launch Intelligence Build
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-center text-[10px] text-slate-600 font-medium leading-relaxed">
                                By launching a build, you agree to our standard development terms. <br />
                                All data is processed under UK GDPR guidelines.
                            </p>
                        </form>
                    </div>

                </div>
            </main>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-white">
                            Choose Your <span className="text-purple-400">AI Package</span>
                        </h2>

                        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                            Every package includes setup, deployment and ongoing management.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {PRICING.map((plan) => (

                            <div
                                key={plan.id}
                                className={`rounded-3xl border p-8 transition-all duration-300 ${plan.name === "Growth"
                                    ? "border-purple-500 bg-purple-500/10 scale-105"
                                    : "border-slate-800 bg-slate-900/70"
                                    }`}
                            >

                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-black text-white">
                                        {plan.name}
                                    </h3>

                                    <span className="text-[10px] uppercase font-black bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                                        {plan.badge}
                                    </span>
                                </div>

                                <div className="mb-8">
                                    <p className="text-5xl font-black text-white">
                                        £{plan.setup}
                                    </p>

                                    <p className="text-slate-400 mt-2">
                                        Setup Fee
                                    </p>

                                    <p className="text-xl text-slate-300 mt-4">
                                        + £{plan.monthly}/month
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="text-slate-300 flex items-center gap-2"
                                        >
                                            ✓ {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handlePlanSelection(plan)}
                                    className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 py-4 font-bold uppercase tracking-wider transition-all"
                                >
                                    Choose {plan.name}
                                </button>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest">
                            Our Products
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-white">
                            See Our <span className="text-purple-400">Top Products</span>
                        </h2>

                        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                            Ready-to-deploy AI products designed to help your business
                            generate more leads, automate workflows and delight customers.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {PRODUCTS.map((product) => (
                            <div
                                key={product.title}
                                className="group relative bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300"
                            >

                                <span className="absolute top-6 right-6 text-[10px] uppercase font-black bg-purple-500/10 border border-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                                    {product.badge}
                                </span>

                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                                    <product.icon
                                        className="text-purple-400"
                                        size={26}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {product.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed mb-8">
                                    {product.description}
                                </p>

                                {/* <a
                        href={product.href}
                        className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all"
                    >
                        View Product
                        <ArrowRight size={18} />
                    </a> */}

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest">
                            Testimonials
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-white">
                            What Our <span className="text-purple-400">Top Clients Say</span>
                        </h2>

                        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                            We're proud to help businesses grow through intelligent software,
                            automation and AI.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">

                        {TESTIMONIALS.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="relative bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300"
                            >

                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-5xl font-black text-purple-500/10">
                                    "
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4">

                                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-black">
                                        {testimonial.initials}
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold">
                                            {testimonial.name}
                                        </h4>

                                        <p className="text-sm text-slate-400">
                                            {testimonial.role}
                                        </p>

                                        <p className="text-sm text-purple-400">
                                            {testimonial.company}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest">
                            Beyond AI
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-white">
                            Other Things <span className="text-purple-400">We Do</span>
                        </h2>

                        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                            From custom software to digital transformation, we build the
                            technology that helps businesses grow.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {SERVICES.map((service) => (
                            <div
                                key={service.title}
                                className="group bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                                    <service.icon
                                        className="text-purple-400"
                                        size={26}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <button className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                                    Learn More
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest">
                            FAQ
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
                            Frequently Asked <span className="text-purple-400">Questions</span>
                        </h2>

                        <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
                            Everything you need to know before getting started.
                        </p>
                    </div>

                    <div className="space-y-4">

                        {FAQS.map((faq, index) => (
                            <div
                                key={faq.question}
                                className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden"
                            >

                                <button
                                    onClick={() => setOpen(open === index ? -1 : index)}
                                    className="w-full flex justify-between items-center p-6 text-left"
                                >
                                    <span className="text-white font-semibold text-lg">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`text-purple-400 transition-transform duration-300 ${open === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${open === index
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            <Footer />

            <ChatBot />
        </div>
    );
}

// Sub-component for Module selection
function UserPlus(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" />
        </svg>
    );
}