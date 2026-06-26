import React, { useState } from "react";
import { BookOpen, Bot, ChevronDown, Code, GraduationCap, Mail, Menu, MessageSquare, Podcast, ShieldCheck, Smartphone, Sparkles, Terminal, Users, X } from "lucide-react";
import { store } from "../../Redux/Store";
import { openChat, toggleChat } from "../../Redux/Slices/chatSlice";

type NavItem = {
    label: string;
    href: string;
    icon: any;
};

const navItems: NavItem[] = [
    { label: "AI Assistants", href: "/AI-Assistant", icon: Bot },
    { label: "Mobile Solutions", href: "/mobile-solutions", icon: Smartphone },
    { label: "Web Solutions", href: "/web-solutions", icon: Code },
];

const ecosystemItems: NavItem[] = [
    { label: "About The Engineer", href: "/about-the-engineer", icon: ShieldCheck },
    { label: "Pricing", href: "#", icon: Terminal }, // Engineering terminal/tier evaluation
    { label: "Mentorship", href: "/mentoring", icon: Sparkles }, // Guiding, engineering acceleration, or growth
    { label: "Books", href: "#itrain", icon: BookOpen }, // Literary architectures & manuscripts
    { label: "Podcasts", href: "#itrain", icon: Podcast }, // Audio stream / dialogue broadcast channels
    { label: "Contact", href: "#itrain", icon: Mail }, // Inbound transit communications line
];

const NavbarNew: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <nav className="bg-slate-950/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-900 transition-all duration-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Group */}
                    <a href="/" className="flex flex-col">
                        <span className="text-xl font-black tracking-tight text-white leading-none">
                            Tech with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Ekenedilichukwu</span>
                        </span>
                        <span className="text-[9px] uppercase tracking-widest font-semibold text-purple-400 mt-1">
                            AI Automation & Systems Architecture
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors font-medium text-sm"
                                >
                                    <Icon className="text-purple-400" size={16} />
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}

                        {/* Ecosystem Hover Dropdown */}
                        <div className="relative group py-2">
                            <button className="flex items-center space-x-1 text-slate-400 group-hover:text-white transition-colors font-medium text-sm">
                                <span>Ecosystem</span>
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 text-slate-500 group-hover:text-purple-400" />
                            </button>

                            {/* Dropdown Menu Container */}
                            <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 backdrop-blur-xl">
                                {ecosystemItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-950 text-slate-400 hover:text-white transition-all font-medium text-xs"
                                        >
                                            <Icon className="text-purple-400" size={16} />
                                            <span>{item.label}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Action Conversion Trigger */}
                    <div className="hidden md:flex">
                        <button
                            onClick={() => store.dispatch(toggleChat())}
                            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 font-semibold text-sm shadow-lg shadow-purple-900/20 hover:shadow-purple-500/10 hover:scale-[1.02]"
                        >
                            <MessageSquare size={16} />
                            <span>Let's Build Your AI Chatbot</span>
                        </button>
                    </div>

                    {/* Responsive Mobile Trigger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-slate-400 hover:text-white text-xl p-2 transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE DROPDOWN BODY */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-950 border-t border-slate-900 px-6 py-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">

                    {/* Primary Links */}
                    <div className="flex flex-col space-y-3">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center space-x-3 text-base font-semibold text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-900/50 transition-colors"
                                >
                                    <Icon className="text-purple-400" size={18} />
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Secondary Ecosystem Section */}
                    <div className="pt-4 border-t border-slate-900">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 px-2">Initiatives & Ecosystem</p>
                        <div className="flex flex-col space-y-2">
                            {ecosystemItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center space-x-3 text-sm font-medium text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-900/40 transition-colors"
                                    >
                                        <Icon className="text-purple-400" size={16} />
                                        <span>{item.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Call To Action Block */}
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            store.dispatch(toggleChat())
                        }}
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-full py-3.5 rounded-xl font-bold text-sm shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-transform"
                    >
                        <MessageSquare size={16} />
                        <span>Chat with Emy</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavbarNew;