import React, { useState } from "react";
import {
    FaHome,
    FaUser,
    FaCode,
    FaGraduationCap,
    FaBookOpen,
    FaUserFriends,
    FaMicrophone,
    FaEnvelope,
    FaChevronDown
} from "react-icons/fa";
import { IconType } from "react-icons";

type NavItem = {
    label: string;
    href: string;
    icon: IconType;
};

const navItems: NavItem[] = [
    // { label: "Home", href: "/", icon: FaHome },
    { label: "About Ekene", href: "/aboutme", icon: FaUser },
    { label: "Projects", href: "/projects", icon: FaCode },
    { label: "Courses", href: "/courses", icon: FaGraduationCap },
];

const moreItems: NavItem[] = [
    { label: "Books", href: "/books", icon: FaBookOpen },
    { label: "Mentoring", href: "/mentoring", icon: FaUserFriends },
    { label: "Podcast", href: "/podcasts", icon: FaMicrophone },
    { label: "iLead", href: "/ilead", icon: FaUser },
    { label: "Lift Off", href: "/liftoff-tech-conference", icon: FaUser },
];

const NavbarNew: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [moreOpen, setMoreOpen] = useState<boolean>(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">

                    {/* Left: Logo + Nav */}
                    <div className="flex items-center space-x-10">

                        {/* Logo */}
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-black">
                                Ekenedilichukwu
                            </span>
                            <span className="text-sm text-gray-500">
                                Gratitudes to the Almighty
                            </span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-6">

                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center space-x-1 text-blue-900 hover:text-blue-600 transition font-medium"
                                    >
                                        <Icon />
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
                                <button className="flex items-center space-x-1 text-blue-900 hover:text-blue-600 font-medium">
                                    <span>More</span>
                                    <FaChevronDown size={12} />
                                </button>

                                {moreOpen && (
                                    <div className="absolute top-8 left-0 bg-white border border-gray-200 shadow-lg rounded-lg p-3 w-48">
                                        {moreItems.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 text-blue-900"
                                                >
                                                    <Icon />
                                                    <span>{item.label}</span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Right: Let's Talk */}
                    <div className="hidden md:flex">
                        <a
                            href="/contact"
                            className="flex items-center space-x-2 bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
                        >
                            <FaEnvelope />
                            <span>Let's Talk</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-blue-900 text-2xl"
                    >
                        ☰
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-lg">

                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-center space-x-2 text-blue-900 hover:text-blue-600"
                            >
                                <Icon />
                                <span>{item.label}</span>
                            </a>
                        );
                    })}

                    {/* Mobile More */}
                    <div className="border-t pt-3">
                        <span className="text-gray-500 font-semibold">More</span>

                        {moreItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center space-x-2 mt-2 text-blue-900"
                                >
                                    <Icon />
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Let's Talk */}
                    <a
                        href="/contact"
                        className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-semibold mt-4"
                    >
                        <FaEnvelope />
                        <span>Let's Talk</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavbarNew;