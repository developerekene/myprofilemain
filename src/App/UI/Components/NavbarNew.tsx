import React, { useState } from "react";
import { FaBook, FaChalkboardTeacher, FaPodcast, FaLaptopCode, FaEnvelope, FaHome } from "react-icons/fa";
import { IconType } from "react-icons";

type NavItem = {
    label: string;
    href: string;
    icon: IconType;
};

const navItems: NavItem[] = [
    { label: "Home", href: "/", icon: FaHome },
    { label: "About Ekene", href: "/aboutme", icon: FaLaptopCode },
    { label: "Books", href: "/books", icon: FaBook },
    { label: "Mentoring", href: "/mentoring", icon: FaChalkboardTeacher },
    { label: "Podcast", href: "/podcasts", icon: FaPodcast },
    { label: "Courses", href: "/courses", icon: FaLaptopCode },
];

const NavbarNew: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">

                    {/* Left: Logo + Nav */}
                    <div className="flex items-center space-x-10">

                        {/* Logo */}
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-black">Ekenedilichukwu</span>
                            <span className="text-sm text-gray-500">Gratitudes to the Almighty</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex space-x-6 items-center">
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
                        </div>
                    </div>

                    {/* Right: "Let's Talk" Button */}
                    <div className="hidden md:flex">
                        <a
                            href="#contact"
                            className="flex items-center space-x-2 bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
                        >
                            <FaEnvelope />
                            <span>Let's Talk</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="md:hidden text-blue-900 text-2xl"
                        aria-label="Toggle navigation menu"
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
                                className="flex items-center space-x-2 text-blue-900 hover:text-blue-600 transition font-medium"
                            >
                                <Icon />
                                <span>{item.label}</span>
                            </a>
                        );
                    })}

                    {/* Mobile Let's Talk */}
                    <a
                        href={"/contact"}
                        className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-semibold mt-2"
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