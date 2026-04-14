import React, { useState } from "react";
import {
    FaCode,
    FaMobileAlt,
    FaRocket,
    FaCheckCircle,
    FaWhatsapp,
    FaPhoneAlt,
    FaArrowLeft,
    FaLaptopCode,
    FaLayerGroup,
    FaLightbulb,
    FaEye
} from "react-icons/fa";
import { Toaster } from "react-hot-toast";

const PRIMARY_BLUE = "text-blue-900";
const PRIMARY_ORANGE = "bg-[#E64A19]";
const HOVER_ORANGE = "hover:bg-[#d84315]";

const DevServices: React.FC = () => {
    const PHONE_NUMBER = "+447886386437";
    const WHATSAPP_LINK = `https://wa.me/447886386437?text=Hello, I am interested in your Web/Mobile development services.`;

    const SERVICES = [
        {
            title: "Enterprise-Grade Web Solutions",
            icon: <FaLaptopCode />,
            description: "I build high-speed, SEO-ready websites designed to dominate search results and turn visitors into paying customers. No templates—just custom, scalable architecture using React and Next.js.",
            features: [
                "Ultra-Fast Load Times (Core Web Vitals Optimized)",
                "Conversion-Focused Sales Funnels & Landing Pages",
                "Secure E-commerce & Custom SaaS Dashboards",
                "Full SEO Integration for Organic Growth",
                "30 Days Post-Launch Support",
                "Full Ownership of Source Code",
                "SEO & Mobile-Ready Guarantee"
            ]
        },
        {
            title: "High-Performance Mobile Apps",
            icon: <FaMobileAlt />,
            description: "Get your business into the pockets of your customers. I develop native-feel iOS and Android applications that are smooth, secure, and built to scale on the App Store and Google Play.",
            features: [
                "Single Codebase for iOS & Android (Saves 40% Cost)",
                "Offline Capability & Real-time Data Sync",
                "Seamless Third-Party API & Payment Integrations",
                "Biometric Security & Push Notification Systems",
                "30 Days Post-Launch Support",
                "Full Ownership of Source Code",
                "SEO & Mobile-Ready Guarantee"
            ]
        },
        {
            title: "Strategic UI/UX & Digital Growth",
            icon: <FaLayerGroup />,
            description: "A beautiful design is useless if it doesn't convert. I combine psychological triggers with modern aesthetics to create user journeys that reduce bounce rates and maximize user retention.",
            features: [
                "Data-Driven User Experience (UX) Audits",
                "High-Fidelity Interactive Prototypes",
                "Modern, 'App-First' Design Language",
                "Conversion Rate Optimization (CRO) Focused",
                "30 Days Post-Launch Support",
                "Full Ownership of Source Code",
                "SEO & Mobile-Ready Guarantee"
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <Toaster position="top-center" />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-blue-900 text-white">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}></div>

                {/* Back Button */}
                <div className="absolute top-8 left-4 md:left-16 z-20">
                    <a href="/" className="flex items-center text-white/80 hover:text-white font-bold transition group">
                        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back
                    </a>
                </div>

                <div className="relative z-10 w-full px-4 text-center max-w-5xl mx-auto">
                    <span className="inline-block bg-orange-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-[0.2em] uppercase shadow-lg">
                        Expert Development Services
                    </span>

                    <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                        Transforming Ideas Into <br />
                        <span className="text-orange-500">Digital Reality.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        Top-tier Web & Mobile applications designed for scalability,
                        speed, and exceptional user experience.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 ${PRIMARY_ORANGE} text-white px-8 py-4 rounded-lg font-bold ${HOVER_ORANGE} transition-all transform hover:scale-105 shadow-xl`}
                        >
                            <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                        </a>
                        <a
                            href={"/projects"}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all shadow-xl"
                        >
                            <FaEye /> See Projects
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-20 px-4 md:px-16 bg-white">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">How We Get You to Launch</h2>
                    <p className="text-gray-500">A streamlined process designed for speed and clarity.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
                    {[
                        { step: "01", title: "Strategy Call", desc: "We discuss your goals, target audience, and feature requirements." },
                        { step: "02", title: "Development", desc: "I build your product with weekly updates and a staging link for you to track progress." },
                        { step: "03", title: "Launch & Support", desc: "We go live on your domain or app stores, followed by 30 days of free support." }
                    ].map((item, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center">
                            <div className="text-6xl font-black text-gray-100 absolute -top-10 z-0">{item.step}</div>
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SERVICES GRID --- */}
            <div className="px-4 md:px-16 py-20 -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {SERVICES.map((service, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group flex flex-col">
                            <div className="w-16 h-16 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:bg-orange-600 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                                        <FaCheckCircle className="text-orange-500 mr-2" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Projects Delivered", value: "24+" },
                        { label: "Happy Clients", value: "24+" },
                        { label: "App Store Launches", value: "3" },
                        { label: "Average Rating", value: "4.2/5" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-blue-900">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>


            {/* --- WHY WORK WITH ME --- */}
            <div className="px-4 md:px-16 py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap items-center gap-12">
                        <div className="flex-1 min-w-[300px]">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Why Choose My Services?</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                I don't just write code; I build business solutions. Every project is handled
                                with complete focus on you and what you want. Ensuring your digital product is an asset, not just a cost.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="text-orange-600 text-2xl mt-1"><FaLightbulb /></div>
                                    <div>
                                        <h4 className="font-bold text-blue-900">Modern Tech Stack</h4>
                                        <p className="text-gray-600 text-sm">React, React Native, Next.js, Node.js, SEO's, ad's and Firebase.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-orange-600 text-2xl mt-1"><FaRocket /></div>
                                    <div>
                                        <h4 className="font-bold text-blue-900">Fast Turnaround</h4>
                                        <p className="text-gray-600 text-sm">Efficient development cycles to get your product to market faster.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 min-w-[300px] bg-blue-900 rounded-[2rem] p-10 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
                            <p className="text-blue-200 mb-8 font-light">
                                Ready to build something great? Get a free consultation and quote today.
                            </p>
                            <div className="space-y-4">
                                <a href={WHATSAPP_LINK} className="flex items-center justify-center gap-3 w-full py-4 bg-orange-600 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg">
                                    <FaWhatsapp /> Message via WhatsApp
                                </a>
                                <div className="text-center py-2 text-white/50 text-xs font-bold uppercase tracking-widest">or</div>
                                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-3 w-full py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                                    <FaPhoneAlt /> Call {PHONE_NUMBER}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FOOTER --- */}
            <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100">
                <p>&copy; {new Date().getFullYear()} Development Services. All rights reserved.</p>
                <div className="flex justify-center gap-6 mt-4">
                    <FaCode /> <FaMobileAlt /> <FaRocket />
                </div>
            </footer>

            <div className="h-20 md:h-0" />
        </div>
    );
};

export default DevServices;