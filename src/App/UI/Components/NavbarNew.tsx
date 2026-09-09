import React, { useState } from "react";
import {
    BookOpen,
    Bot,
    ChevronDown,
    Code2,
    Crown,
    GraduationCap,
    Mail,
    Menu,
    MessageSquare,
    ShieldCheck,
    Smartphone,
    Sparkles,
    X,
} from "lucide-react";

import { store } from "../../Redux/Store";
import { toggleChat } from "../../Redux/Slices/chatSlice";

type NavItem = {
    label: string;
    href: string;
    icon: React.ElementType;
};

const navItems: NavItem[] = [
    {
        label: "AI",
        href: "/AI-Assistant",
        icon: Bot,
    },
    {
        label: "Mobile",
        href: "/mobile-solutions",
        icon: Smartphone,
    },
    {
        label: "Web",
        href: "/web-solutions",
        icon: Code2,
    },
];

const ecosystemItems: NavItem[] = [
    {
        label: "About Me",
        href: "/about-the-engineer",
        icon: ShieldCheck,
    },
    {
        label: "Projects",
        href: "/apps",
        icon: BookOpen,
    },
    {
        label: "Mentoring",
        href: "/mentoring",
        icon: GraduationCap,
    },
    {
        label: "Clash of Kings",
        href: "/clash-of-kings",
        icon: Crown,
    },
    {
        label: "Contact",
        href: "/contact",
        icon: Mail,
    },
];

const NavbarNew: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMoreOpen(false);
    };

    const handleChat = () => {
        closeMenu();
        store.dispatch(toggleChat());
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl">
            {/* ================= NAVBAR ================= */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-[72px] items-center justify-between">

                    {/* ================= BRAND ================= */}
                    <a
                        href="/"
                        onClick={closeMenu}
                        className="group flex min-w-0 items-center gap-3"
                    >
                        {/* Logo */}
                        {/* <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-900/20 transition-transform duration-300 group-hover:scale-105">
                            <span className="text-sm font-black text-white">
                                EK
                            </span>

                            <div className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-purple-400" />
                        </div> */}

                        {/* Brand text */}
                        <div className="min-w-0">
                            <div className="truncate text-sm font-bold tracking-tight text-white sm:text-base">
                                Ekenedilichukwu{" "}
                                <span className="text-purple-400">
                                    Okoli
                                </span>
                            </div>

                            <div className="mt-0.5 truncate text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[9px] sm:tracking-[0.18em]">
                                Lead Software Engineer
                            </div>
                        </div>
                    </a>

                    {/* ================= DESKTOP ================= */}
                    <div className="hidden items-center gap-4 md:flex">

                        {/* Primary navigation */}
                        <div className="flex items-center gap-1 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-800/70 hover:text-white"
                                    >
                                        <Icon
                                            size={15}
                                            className="text-purple-400 transition-colors group-hover:text-purple-300"
                                        />

                                        <span>{item.label}</span>
                                    </a>
                                );
                            })}

                            {/* More */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsMoreOpen(true)}
                                onMouseLeave={() => setIsMoreOpen(false)}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsMoreOpen(!isMoreOpen)
                                    }
                                    className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 transition-all hover:bg-slate-800/70 hover:text-white"
                                >
                                    More

                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${isMoreOpen
                                                ? "rotate-180 text-purple-400"
                                                : "text-slate-500"
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`absolute right-0 top-full pt-3 transition-all duration-200 ${isMoreOpen
                                            ? "visible translate-y-0 opacity-100"
                                            : "invisible translate-y-2 opacity-0"
                                        }`}
                                >
                                    <div className="w-60 rounded-2xl border border-slate-800 bg-slate-900/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                                        <div className="mb-2 px-3 pt-2">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                                                Explore
                                            </p>
                                        </div>

                                        {ecosystemItems.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-all hover:bg-slate-800/70 hover:text-white"
                                                >
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-purple-400 transition group-hover:bg-purple-500/10">
                                                        <Icon size={15} />
                                                    </div>

                                                    <span>
                                                        {item.label}
                                                    </span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            type="button"
                            onClick={() =>
                                store.dispatch(toggleChat())
                            }
                            className="group flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-2.5 text-sm font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/15 hover:text-white"
                        >
                            <MessageSquare
                                size={16}
                                className="transition-transform group-hover:scale-110"
                            />

                            <span>Let&apos;s Talk</span>
                        </button>
                    </div>

                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-400 transition-all hover:border-purple-500/30 hover:text-white md:hidden"
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>
            </div>

            {/* =====================================================
                MOBILE NAVIGATION
            ===================================================== */}
            {isMenuOpen && (
                <div className="border-t border-slate-800/70 bg-slate-950 md:hidden">
                    <div className="mx-auto max-w-7xl px-4 pb-6 pt-5 sm:px-6">

                        {/* ================= MOBILE IDENTITY ================= */}
                        <div className="mb-6 rounded-2xl border border-slate-800/70 bg-slate-900/50 p-4">
                            <div className="flex items-center gap-3">

                                {/* <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
                                    <span className="text-sm font-black text-white">
                                        EK
                                    </span>

                                    <div className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-slate-900 bg-purple-400" />
                                </div> */}

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-bold text-white">
                                        Ekenedilichukwu Okoli
                                    </p>

                                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-400">
                                        Lead Software Engineer
                                    </p>
                                </div>
                            </div>

                            <p className="mt-3 text-xs leading-5 text-slate-500">
                                AI · Web · Mobile · Engineering Leadership
                            </p>
                        </div>

                        {/* ================= PRIMARY NAV ================= */}
                        <div>
                            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                                Solutions
                            </p>

                            <div className="space-y-1">
                                {navItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-800 hover:bg-slate-900 hover:text-white"
                                        >
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                                <Icon size={17} />
                                            </div>

                                            <span>{item.label}</span>

                                            <span className="ml-auto text-xs text-slate-700">
                                                →
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ================= DIVIDER ================= */}
                        <div className="my-6 h-px bg-slate-900" />

                        {/* ================= EXPLORE ================= */}
                        <div>
                            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                                Explore
                            </p>

                            <div className="space-y-1">
                                {ecosystemItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm font-medium text-slate-400 transition-all hover:border-slate-800 hover:bg-slate-900 hover:text-white"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-purple-400">
                                                <Icon size={16} />
                                            </div>

                                            <span>{item.label}</span>

                                            <span className="ml-auto text-xs text-slate-700">
                                                →
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ================= CTA ================= */}
                        <button
                            type="button"
                            onClick={handleChat}
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-all hover:from-purple-500 hover:to-indigo-500 active:scale-[0.99]"
                        >
                            <MessageSquare size={17} />

                            <span>Let&apos;s Talk</span>
                        </button>

                        {/* ================= FOOTER NOTE ================= */}
                        <div className="mt-5 flex items-center justify-center gap-2">
                            <Sparkles
                                size={13}
                                className="shrink-0 text-purple-400"
                            />

                            <p className="text-center text-[9px] font-medium uppercase tracking-[0.15em] text-slate-600">
                                Building products · Solving problems ·
                                Growing engineers
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarNew;