import React from "react";
import {
    FaArrowLeft,
    FaCode,
    FaExternalLinkAlt,
    FaGithub,
    FaServer,
    FaMobileAlt,
    FaBrain
} from "react-icons/fa";
import { Assets } from "../../utils/constants/Assets";

const FEATURED_PROJECTS = [
    {
        id: "p1",
        title: "Ogoo Backend",
        image: "/images/ogoo-backend.png",
        description:
            "A robust AI-driven healthcare backend system designed to deliver real-time, context-aware medical intelligence. Built for scalability, security, and intelligent data processing across distributed environments.",
        tech: ["Python", "Firebase", "Cloud Functions", "AI Integration"],
        role: "Lead Backend Engineer",
        features: [
            "AI-powered health recommendation engine",
            "Real-time patient data processing",
            "Secure authentication and user management",
            "Scalable cloud infrastructure using Firebase",
        ],
        link: "#",
        github: "#",
    },
    {
        id: "p2",
        title: "Ogoo - Mobile",
        image: "/images/ogoo-frontend.png",
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
        github: "#",
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
        image: "/images/knowledge-city.png",
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
        image: "#",
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
        link: "#",
        github: "https://github.com/developerekene/ToolBox",
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
        title: "Knowledge City Mobile",
        desc: "Mobile learning platform delivering structured courses, mentoring, and interactive educational experiences.",
        link: "#",
        status: "On Production",
    },
    {
        id: "p2",
        title: "Knowledge City Web",
        desc: "Web-based learning management system for delivering educational content and tracking user progress.",
        link: "#",
        status: "Ongoing Development",
    },
    {
        id: "p3",
        title: "E-Process Web",
        desc: "Enterprise workflow automation platform for managing internal business processes and approvals.",
        link: "#",
        status: "On Production",
    },
    {
        id: "p4",
        title: "Ecobank Mobile",
        desc: "Mobile banking application supporting secure transactions, account management, and financial services.",
        link: "#",
        status: "On Production",
    },
    {
        id: "p5",
        title: "SMA App",
        desc: "Smart management application for handling operations, analytics, and user engagement workflows.",
        link: "#",
        status: "Ongoing Development",
    },
    {
        id: "p6",
        title: "GIG Motors",
        desc: "Transport and logistics platform enabling booking, tracking, and fleet management systems.",
        link: "#",
        status: "On Production",
    },
    {
        id: "p7",
        title: "Cash Basket",
        desc: "Financial platform designed for managing payments, wallets, and transactional services.",
        link: "#",
        status: "On Production",
    },
    {
        id: "p8",
        title: "Nerves",
        desc: "AI-driven system focused on intelligent automation and decision-making processes.",
        link: "#",
        status: "Architectural Design",
    },
    {
        id: "p9",
        title: "Tickle My Fancy",
        desc: "Creative digital platform focused on personalized user experiences and engagement.",
        link: "#",
        status: "Ongoing Development",
    },
    {
        id: "p10",
        title: "Systems One",
        desc: "Integrated enterprise system for managing operations, analytics, and business workflows.",
        link: "#",
        status: "Architectural Design",
    },
    {
        id: "p11",
        title: "Chatta",
        desc: "Real-time communication platform enabling instant messaging and collaboration.",
        link: "#",
        status: "Ongoing Development",
    },
];

const ProjectsScreen: React.FC = () => {
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
                    Building Scalable Systems.
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    A collection of products and systems engineered with performance,
                    scalability, and long-term impact in mind.
                </p>
            </div>

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

            {/* Categories */}
            <h3 className="text-2xl font-bold text-blue-900 mt-12 mb-6">
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

            {/* All Projects */}
            <h3 className="text-2xl font-bold text-blue-900 mt-12 mb-6">
                All Projects
            </h3>

            <div className="space-y-4">
                {ALL_PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
                    >
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                            <FaCode className="text-white" />
                        </div>

                        <div className="flex-1 ml-4">
                            <h4 className="font-bold text-black">{project.title}</h4>
                            <p className="text-gray-600 text-sm">{project.desc}</p>
                        </div>

                        <FaExternalLinkAlt className="text-gray-400 text-lg" />
                    </div>
                ))}
            </div>

            <div className="h-20" />
        </div>
    );
};

export default ProjectsScreen;