import React, { useState } from "react";
import {
    FaUser,
    FaCode,
    FaChevronDown,
    FaUserFriends,
    FaUsers,
    FaRocket,
    FaLightbulb,
    FaToolbox,
    FaEnvelope
} from "react-icons/fa";
import { IconType } from "react-icons";

type NavItem = {
    label: string;
    href: string;
    icon: IconType;
};

const navItems: NavItem[] = [
    { label: "About Ekene", href: "/aboutme", icon: FaUser },
    { label: "Projects", href: "/projects", icon: FaCode },
    { label: "Tools", href: "/tools", icon: FaToolbox },
];

const moreItems: NavItem[] = [
    { label: "Mentoring", href: "/mentoring", icon: FaUserFriends },
    { label: "Learn with Kenny", href: "/mentoring/learn", icon: FaUserFriends },
    { label: "iLead", href: "/ilead", icon: FaUsers },
    { label: "Lift Off", href: "/liftoff-tech-conference", icon: FaRocket },
    { label: "Ask Me How", href: "/askmehow", icon: FaLightbulb },
];

const NavbarNew: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [moreOpen, setMoreOpen] = useState<boolean>(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-24">

                    {/* Left: Logo */}
                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tighter text-gray-900 leading-none">
                            Ekenedilichukwu
                        </span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-purple-600 mt-1">
                            Gratitudes to the Almighty
                        </span>
                    </div>

                    {/* Center: Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-bold text-sm"
                                >
                                    <Icon className="text-purple-500" />
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}

                        {/* More Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setMoreOpen(true)}
                            onMouseLeave={() => setMoreOpen(false)}
                        >
                            <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-bold text-sm">
                                <span>More</span>
                                <FaChevronDown size={10} className={moreOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                            </button>

                            {moreOpen && (
                                <div className="absolute top-full -left-4 pt-4 w-56">
                                    <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 overflow-hidden">
                                        {moreItems.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-all font-medium text-sm"
                                                >
                                                    <Icon className="text-pink-500" />
                                                    <span>{item.label}</span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Action Button */}
                    <div className="hidden md:flex">
                        <a
                            href="/contact"
                            className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-purple-200"
                        >
                            <FaEnvelope />
                            <span>Let's Talk</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-gray-900 text-2xl"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-8 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-center space-x-3 text-lg font-bold text-gray-900"
                            >
                                <item.icon className="text-purple-500" />
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </div>

                    <div className="pt-6 border-t border-gray-100">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Discovery</p>
                        <div className="grid grid-cols-1 gap-4">
                            {moreItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center space-x-3 text-gray-700 font-semibold"
                                >
                                    <item.icon className="text-pink-500" />
                                    <span>{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="flex items-center justify-center space-x-2 bg-purple-600 text-white w-full py-4 rounded-2xl font-bold"
                    >
                        <FaEnvelope />
                        <span>Get in Touch</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavbarNew;