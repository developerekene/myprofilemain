import React, { useState } from 'react';
import {
    FaCode, FaChalkboardTeacher, FaShieldAlt, FaGithub,
    FaPython, FaJsSquare, FaArrowRight, FaCheckCircle,
    FaTerminal, FaChartLine, FaEnvelope, FaLinkedin,
    FaWhatsapp, FaFilePdf, FaTimes, FaSearch, FaArrowLeft
} from 'react-icons/fa';

const MenLearn: React.FC = () => {
    const [showSyllabus, setShowSyllabus] = useState(false);
    const WHATSAPP_LINK = "https://wa.me/447886386437?text=Hello, I am interested in your School Engineering Workshops.";
    const GITHUB_LINK = "https://github.com/developerekene";
    const LINKEDIN_LINK = "https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/";

    const SYLLABUS_DATA = [
        { week: "Module 1", title: "Professional Python", topics: ["PEP 8 Standards", "Virtual Environments", "API Integration with Requests"] },
        { week: "Module 2", title: "TypeScript & React", topics: ["Static Typing", "Component Architecture", "State Management Concepts"] },
        { week: "Module 3", title: "The DevOps Loop", topics: ["Git Workflows", "CI/CD Introduction", "Automated Testing (Jest/PyTest)"] },
        { week: "Module 4", title: "Career Architecture", topics: ["Degree Apprenticeship Portfolios", "Technical Interview Prep"] }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-orange-100 overflow-x-hidden">

            {/* --- NAVIGATION (DevServices Style) --- */}
            <div className="absolute top-8 left-4 md:left-16 z-20">
                <a href="/" className="flex items-center text-white/80 hover:text-white font-bold transition group">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </a>
            </div>

            {/* --- HERO SECTION (DevServices Style) --- */}
            <header className="relative h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-blue-900 text-white text-center px-4">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}></div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <span className="inline-block bg-orange-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-[0.2em] uppercase shadow-lg">
                        Industry-to-Classroom Expert
                    </span>
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                        Bringing Senior Engineering <br />
                        <span className="text-orange-500">to the Classroom.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        Workshops designed to bridge the gap between GCSE/A-Level theory and professional practice using Python and TypeScript.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <button
                            onClick={() => setShowSyllabus(true)}
                            className="flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-xl"
                        >
                            <FaSearch /> View Sample Syllabus
                        </button>
                        <a
                            href={WHATSAPP_LINK}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all shadow-xl"
                        >
                            <FaEnvelope /> Book Discovery Call
                        </a>
                    </div>
                </div>
            </header>

            {/* --- THE BRIDGE SECTION --- */}
            <section id="bridge" className="py-24 px-6 md:px-16 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Textbooks Explain Logic.<br /><span className="text-orange-600">Engineers Explain Scale.</span></h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6">"Standard curriculums focus on syntax. I teach the <strong>Professional Workflow</strong>: Clean Code, Git, and System Architecture—the tools that win Degree Apprenticeships."</p>
                        <div className="space-y-4">
                            {["Clean, Maintainable Python/TS", "Git & Collaboration Workflows", "Architecting Scalable Systems"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 font-bold text-blue-900">
                                    <FaCheckCircle className="text-orange-500" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center shadow-sm group hover:bg-blue-900 transition-all duration-500">
                            <FaPython size={50} className="text-blue-900 group-hover:text-orange-500 mb-4 transition-colors" />
                            <span className="font-black text-blue-900 group-hover:text-white uppercase text-xs tracking-widest">Python Mastery</span>
                        </div>
                        <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center shadow-sm group hover:bg-blue-900 transition-all duration-500">
                            <FaJsSquare size={50} className="text-orange-600 mb-4 transition-colors" />
                            <span className="font-black text-blue-900 group-hover:text-white uppercase text-xs tracking-widest">TypeScript Dev</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- WORKSHOP MODULES (Dark Theme) --- */}
            <section id="workshops" className="py-20 px-4 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Python Masterclass", desc: "Moving basic syntax to APIs and advanced Data Structures.", icon: <FaTerminal /> },
                        { title: "Modern Web Dev", desc: "Building full-stack apps with React, Node, and TypeScript.", icon: <FaCode /> },
                        { title: "Careers Deep-Dive", desc: "Pathways to Degree Apprenticeships and Senior Roles.", icon: <FaChartLine /> }
                    ].map((box, i) => (
                        <div key={i} className="bg-blue-900 text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                {box.icon}
                            </div>
                            <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg">
                                {box.icon}
                            </div>
                            <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{box.title}</h4>
                            <p className="text-blue-100 leading-relaxed font-light">{box.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- TRUST & COMPLIANCE --- */}
            <section id="trust" className="py-20 px-6 md:px-16 bg-gray-50">
                <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-10 md:p-16 rounded-[3rem] shadow-xl flex flex-col md:flex-row items-center gap-12">
                    <div className="w-24 h-24 bg-blue-900 text-white rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
                        <FaShieldAlt size={48} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-black text-blue-900 mb-6 uppercase tracking-tighter">Safeguarding & Trust</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {[
                                "Enhanced DBS Checked",
                                "Public Liability Insured",
                                "GDPR Compliant",
                                "AQA/OCR Spec Aligned"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                                    <FaCheckCircle className="text-green-500" /> {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER CTA --- */}
            <footer id="contact" className="bg-white py-24 px-6 md:px-16 border-t border-gray-100">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-8 uppercase tracking-tighter italic">Ready to Bridge the Gap?</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href={WHATSAPP_LINK} className="flex items-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-orange-700 transition shadow-2xl uppercase tracking-widest text-sm">
                            <FaWhatsapp size={20} /> Message WhatsApp
                        </a>
                        <a href={LINKEDIN_LINK} target="_blank" className="flex items-center gap-3 bg-blue-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition shadow-2xl uppercase tracking-widest text-sm">
                            <FaLinkedin size={20} /> LinkedIn Profile
                        </a>
                    </div>
                    {/* <p className="mt-16 text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px]">
                        © {new Date().getFullYear()} Senior Engineer School Partnerships
                    </p> */}
                </div>
            </footer>

            {/* --- SYLLABUS MODAL (Viewer) --- */}
            {showSyllabus && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-blue-900/95 backdrop-blur-md" onClick={() => setShowSyllabus(false)}></div>
                    <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="bg-orange-600 p-8 text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tight">Workshop Syllabus</h3>
                                <p className="text-orange-100 text-sm">Sample 4-Module Professional Transition Program</p>
                            </div>
                            <button onClick={() => setShowSyllabus(false)} className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                            {SYLLABUS_DATA.map((module, i) => (
                                <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                                    <span className="text-orange-600 font-black text-xs uppercase tracking-widest">{module.week}</span>
                                    <h4 className="text-xl font-bold text-blue-900 mb-3">{module.title}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {module.topics.map((t, idx) => (
                                            <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="p-8 bg-gray-50 flex justify-end">
                            <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition">
                                <FaFilePdf /> Download Full PDF
                            </button>
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenLearn;