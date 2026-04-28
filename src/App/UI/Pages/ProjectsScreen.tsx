import React from "react";
import {
    FaArrowLeft,
    FaCode,
    FaExternalLinkAlt,
    FaGithub,
    FaServer,
    FaMobileAlt,
    FaBrain,
    FaWhatsapp,
    FaPhoneAlt
} from "react-icons/fa";
import { Assets } from "../../utils/constants/Assets";

const FEATURED_PROJECTS = [
    // {
    //     id: "p1",
    //     title: "Ogoo Backend",
    //     image: "/images/ogoo-backend.png",
    //     description:
    //         "A robust AI-driven healthcare backend system designed to deliver real-time, context-aware medical intelligence. Built for scalability, security, and intelligent data processing across distributed environments.",
    //     tech: ["Python", "Firebase", "Cloud Functions", "AI Integration"],
    //     role: "Lead Backend Engineer",
    //     features: [
    //         "AI-powered health recommendation engine",
    //         "Real-time patient data processing",
    //         "Secure authentication and user management",
    //         "Scalable cloud infrastructure using Firebase",
    //     ],
    //     link: "#",
    //     github: "https://github.com/developerekene/Ogo-backend",
    // },
    {
        id: "p2",
        title: "Ogoo - AI Health Care Companion",
        image: Assets.images.ogoo,
        description:
            "A mobile-first AI healthcare interface built with React Native, delivering seamless and intuitive user experiences for interacting with intelligent health systems.",
        tech: ["React Native", "TypeScript", "Redux", "Firebase"],
        role: "Lead Mobile Engineer",
        features: [
            "Intuitive AI chat-based interface",
            "Real-time sync with backend services",
            "Optimized performance across iOS and Android",
            "Clean and scalable component architecture",
        ],
        link: "#",
        github: "https://github.com/developerekene/Ogoo-Chat-bot-mobile.git",
    },
    {
        id: "p3",
        title: "Ekene Web Portfolio",
        image: Assets.images.ekeneweb,
        description:
            "A modern, responsive personal portfolio showcasing projects, mentoring, and thought leadership. Designed with performance, clarity, and personal branding in mind.",
        tech: ["React.js", "TypeScript", "Tailwind CSS"],
        role: "Senior Frontend Engineer",
        features: [
            "Responsive and accessible UI design",
            "Dynamic project and mentoring sections",
            "Optimized SEO and performance",
            "Modern component-driven architecture",
        ],
        link: "https://ekenedilichukwu.com",
        github: "https://github.com/developerekene/myprofilemain",
    },
    {
        id: "p4",
        title: "Knowledge City Mobile",
        image: Assets.images.kc,
        description:
            "A mobile learning platform built to deliver structured educational content, mentoring programs, and interactive learning experiences.",
        tech: ["React Native", "Firebase", "REST APIs"],
        role: "Mobile Engineer",
        features: [
            "Interactive learning modules",
            "User progress tracking",
            "Real-time content delivery",
            "Clean and engaging mobile UX",
        ],
        link: "#",
        github: "https://github.com/developerekene/kc-mobile",
    },
    {
        id: "p5",
        title: "D'roid One Portal",
        image: Assets.images.droidOne,
        description:
            "A productivity and operations platform designed to streamline internal workflows, team collaboration, and performance tracking within organizations.",
        tech: ["React.js", "Node.js", "PostgreSQL"],
        role: "Senior Software Engineer",
        features: [
            "Task and workflow management system",
            "Team collaboration tools",
            "Performance analytics dashboard",
            "Secure role-based access control",
        ],
        link: "https://droidtechhq.com/auth/organization-login",
        github: "https://github.com/D-roid-Technologies/D-roid-tech-App",
    },
    {
        id: "p6",
        title: "Toolbox",
        image: Assets.images.Toolbox,
        description:
            "A centralized productivity and operations platform designed to streamline workflows, enhance team collaboration, and provide actionable performance insights across organizations.",
        tech: ["React.js", "Node.js", "PostgreSQL"],
        role: "Senior Software Engineer",
        features: [
            "Modular task and workflow management system",
            "Real-time team collaboration and communication tools",
            "Advanced analytics and performance tracking dashboard",
            "Secure role-based access control and permissions system",
            "Scalable architecture for multi-organization support",
        ],
        link: "https://play.google.com/store/apps/details?id=com.devekene.ToolBox",
        github: "https://github.com/developerekene/ToolBox",
    },
    {
        id: "s7",
        title: "SystemsOne",
        image: Assets.images.SystemsOne,
        description:
            "A next-generation decentralized governance and decision-intelligence platform engineered to transform collective opinion into verified, actionable data through cryptographic integrity and reputation-weighted consensus.",
        tech: ["React 18", "TypeScript", "Node.js", "SHA-256 Auth"],
        role: "Lead Systems Architect",
        features: [
            "Cryptographic Audit Trail with SHA-256 integrity anchoring",
            "Reputation-weighted voting system for Individual, Org, and Gov entities",
            "Real-time sentiment analysis and dissent tracking on discussion threads",
            "High-density Bento UI dashboard for global decision monitoring",
            "Scalable blockchain-referenced ledger for immutable vote verification",
        ],
        link: "#",
        github: "https://github.com/developerekene/systemsone",
    }
];

const PROJECT_CATEGORIES = [
    { id: "c1", title: "AI Systems", icon: FaBrain },
    { id: "c2", title: "Backend Architecture", icon: FaServer },
    { id: "c3", title: "Mobile Apps", icon: FaMobileAlt },
];

const ALL_PROJECTS = [
    {
        id: "p1",
        title: "Knowledge City",
        desc: "A comprehensive EdTech ecosystem providing structured digital courses, expert mentoring, and a seamless learning UI.",
        link: "https://kcity-c8580.web.app",
        status: "On Production",
        year: "2022"
    },
    {
        id: "p2",
        title: "Access Bank Mobile",
        desc: "Integrated core banking features into the NextGen mobile platform, focusing on high-security transactions and modern UX.",
        link: "https://play.google.com/store/apps/details?id=com.accessbank.nextgen&pcampaignid=web_share",
        status: "On Production",
        year: "2020"
    },
    {
        id: "p3",
        title: "Coastline MFB",
        desc: "Digital banking storefront for a Microfinance Bank, enabling customers to access loans and savings accounts online.",
        link: "https://coastlinemfb.com/",
        status: "On Production",
        year: "2020"
    },
    {
        id: "p4",
        title: "E-Process Web",
        desc: "Enterprise-level workflow engine designed to automate complex business approvals and internal document routing.",
        link: "https://eprocessconsulting.com/",
        status: "On Production",
        year: "2023"
    },
    {
        id: "p5",
        title: "Ecobank Mobile",
        desc: "Contributed to the development of cross-border payment modules and secure wallet management for millions of users.",
        link: "https://play.google.com/store/apps/details?id=com.app.ecobank&hl=en_GB",
        status: "On Production",
        year: "2023"
    },
    {
        id: "p6",
        title: "D'roid One Portal",
        desc: "A centralized operational hub for tech communities to manage user onboarding, events, and analytics.",
        link: "https://droidtechhq.com/auth/join-our-community",
        status: "Ongoing Development",
        year: "2024"
    },
    {
        id: "p7",
        title: "GIG Motors",
        desc: "End-to-end logistics platform facilitating interstate travel bookings, real-time fleet tracking, and cargo management.",
        link: "https://gigm.com/",
        status: "On Production",
        year: "2021"
    },
    {
        id: "p8",
        title: "react-ts-droid-button",
        desc: "A high-performance, accessible, and customizable Button component library published on NPM for React & TypeScript.",
        link: "https://www.npmjs.com/package/react-ts-droid-button",
        status: "On Production",
        year: "2024"
    },
    {
        id: "p9",
        title: "react-ts-droid-card",
        desc: "A reusable UI card component library optimized for data-heavy dashboards and enterprise-grade layouts.",
        link: "https://www.npmjs.com/package/react-ts-droid-card",
        status: "On Production",
        year: "2024"
    },
    {
        id: "p10",
        title: "react-ts-droid-carousel",
        desc: "Touch-optimized, lightweight carousel component for React apps with native-feel sliding and hardware acceleration.",
        link: "https://www.npmjs.com/package/react-ts-droid-carousel",
        status: "On Production",
        year: "2024"
    }
];

const ProjectsScreen: React.FC = () => {
    const PHONE_NUMBER = "+447886386437";
    const WHATSAPP_LINK = `https://wa.me/447886386437?text=Hello, I am interested in your Web/Mobile development services.`;

    return (
        <div className="bg-white min-h-screen px-4 md:px-16 py-10">

            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <a
                    href="/"
                    className="flex items-center text-blue-900 font-bold hover:text-blue-700 transition"
                >
                    <FaArrowLeft className="mr-2" /> Back to Home
                </a>
            </div>

            {/* Hero */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-3">
                    Building Scalable Systems
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    A collection of products and systems engineered with performance,
                    scalability, and long-term impact in mind.
                </p>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                LIVE
            </span>

            {/* Featured Projects */}
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                {FEATURED_PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6">
                            {/* Title + Role */}
                            <h4 className="text-xl font-bold text-black">{project.title}</h4>
                            <p className="text-sm text-orange-600 font-semibold mb-2">
                                {project.role}
                            </p>

                            {/* Description */}
                            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Features */}
                            <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-blue-100 text-blue-900 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex space-x-4">
                                <a
                                    href={project.link}
                                    className="flex items-center space-x-1 text-blue-900 font-semibold hover:text-blue-600"
                                >
                                    <FaExternalLinkAlt />
                                    <span>Live</span>
                                </a>

                                <a
                                    href={project.github}
                                    className="flex items-center space-x-1 text-gray-700 hover:text-black"
                                >
                                    <FaGithub />
                                    <span>Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-y border-gray-100 py-8">
                {[
                    { label: "App Downloads", val: "1.5M+" },
                    { label: "Enterprise Projects", val: "15+" },
                    { label: "NPM Downloads", val: "1k+" },
                    { label: "Tech Leadership", val: "Lead" },
                ].map((stat, i) => (
                    <div key={i} className="text-center">
                        <div className="text-2xl font-black text-blue-900">{stat.val}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Categories */}
            <h3 className="text-2xl font-bold text-blue-900 mt-12 mb-7">
                Project Categories
            </h3>

            <div className="flex space-x-6 overflow-x-auto pb-4">
                {PROJECT_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <div
                            key={cat.id}
                            className="bg-blue-900 text-white rounded-2xl p-6 min-w-[220px] shadow hover:shadow-lg transition"
                        >
                            <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-6">
                                <Icon />
                            </div>
                            <h4 className="font-bold text-lg">{cat.title}</h4>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-y border-gray-100 py-10 bg-gray-50/50 rounded-2xl">
                {[
                    { label: "Engineering Experience", val: "6+ Years" },
                    { label: "Users Impacted", val: "10M+" },
                    { label: "Systems Architected", val: "20+" },
                    { label: "Performance Boost", val: "40% Avg." },
                ].map((stat, i) => (
                    <div key={i} className="text-center px-4 border-r last:border-0 border-gray-200">
                        <div className="text-2xl md:text-3xl font-black text-blue-900">{stat.val}</div>
                        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>


            {/* All Projects */}
            <h3 className="text-2xl font-bold text-blue-900 mt-12 mb-6">
                All Projects
            </h3>

            <div className="space-y-4">
                {ALL_PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition group border border-transparent hover:border-orange-200"
                    >
                        <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors">
                            <FaCode className="text-white text-xl" />
                        </div>

                        <div className="flex-1 ml-4">
                            <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-bold text-blue-900">{project.title}</h4>
                                {/* --- YEAR BADGE --- */}
                                <span className="text-[10px] font-black bg-blue-100 text-blue-900 px-2 py-0.5 rounded-md uppercase tracking-wider">
                                    {project.year}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-snug">{project.desc}</p>
                        </div>

                        {/* --- CLICKABLE BUTTON --- */}
                        <a
                            href={project.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 ml-2 rounded-xl bg-white hover:bg-orange-600 text-gray-400 hover:text-white shadow-sm transition-all group/btn border border-gray-100"
                            aria-label={`View ${project.title}`}
                        >
                            <FaExternalLinkAlt className="text-lg" />
                        </a>
                    </div>
                ))}
            </div>

            <div className="px-4 md:px-16 py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap items-center gap-12">

                        <div className="flex-1 min-w-[300px] bg-blue-900 rounded-[2rem] p-10 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">Contact</h3>
                            {/* <p className="text-blue-200 mb-8 font-light">
                                    Ready to build something great? Get a free consultation and quote today.
                                </p> */}
                            <div className="space-y-4">
                                <a href={WHATSAPP_LINK} className="flex items-center justify-center gap-3 w-full py-4 bg-orange-600 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg">
                                    <FaWhatsapp /> Message via WhatsApp
                                </a>
                                {/* <div className="text-center py-2 text-white/50 text-xs font-bold uppercase tracking-widest">or</div>
                                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-3 w-full py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                                    <FaPhoneAlt /> Call {PHONE_NUMBER}
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-20" />
        </div>
    );
};

export default ProjectsScreen;