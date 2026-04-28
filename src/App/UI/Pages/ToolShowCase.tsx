import React from "react";
import {
    FaShieldAlt,
    FaLock,
    FaRocket,
    FaChevronRight,
    FaStar,
    FaCrown,
    FaGem,
    FaArrowLeft
} from "react-icons/fa";
import { tools } from "../../utils/constants/Tools";

// Reusable Tier Badge Component
const TierBadge: React.FC<{ tier: string }> = ({ tier }) => {
    const styles: any = {
        Silver: "bg-gray-400 text-white",
        Gold: "bg-yellow-500 text-white",
        Platinum: "bg-blue-600 text-white",
    };
    const icons: any = {
        Silver: <FaStar className="mr-1" />,
        Gold: <FaCrown className="mr-1" />,
        Platinum: <FaGem className="mr-1" />,
    };

    return (
        <span className={`flex items-center text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full shadow-sm ${styles[tier]}`}>
            {icons[tier]} {tier}
        </span>
    );
};

const ToolShowcase: React.FC = () => {
    // Grouping tools by tier
    const tiers = ["Silver", "Gold", "Platinum"];

    return (
        <div className="bg-gray-50 min-h-screen font-sans pb-20">
            {/* --- HERO SECTION --- */}
            <section className="bg-blue-900 pt-20 pb-32 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <button onClick={() => window.history.back()} className="mb-6 flex items-center mx-auto text-blue-300 hover:text-white transition font-bold text-sm">
                        <FaArrowLeft className="mr-2" /> Back to Home
                    </button>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Professional <span className="text-orange-500">Toolkit</span>
                    </h1>
                    <p className="text-blue-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Access our suite of enterprise-grade utilities designed to accelerate your digital workflow.
                    </p>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
                {tiers.map((tierName) => (
                    <div key={tierName} className="mb-16">
                        {/* Tier Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl md:text-3xl font-black text-blue-900 uppercase tracking-tighter">
                                {tierName} <span className="text-gray-300">Tools</span>
                            </h2>
                            <div className="h-[2px] flex-grow bg-gray-200 rounded-full"></div>
                            <TierBadge tier={tierName} />
                        </div>

                        {/* Tools Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tools
                                .filter((t: { requiredTier: string; }) => t.requiredTier === tierName)
                                .map((tool: { id: React.Key | null | undefined; color: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; }) => (
                                    <div
                                        key={tool.id}
                                        className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform"
                                                style={{ backgroundColor: tool.color }}
                                            >
                                                {/* Note: In a real app, you'd map the icon string to a component */}
                                                <FaRocket />
                                            </div>
                                            <h3 className="text-xl font-bold text-blue-900 mb-2">{tool.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                                Professional utility designed for high-efficiency {tool.title?.toString().toLowerCase()} tasks.
                                            </p>
                                        </div>

                                        <button onClick={() => window.open("https://play.google.com/store/apps/details?id=com.devekene.ToolBox", "_blank", "noopener,noreferrer")} className="w-full py-3 bg-gray-50 hover:bg-blue-900 hover:text-white text-blue-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group/btn">
                                            Open Tool
                                            <FaChevronRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}

                {/* --- UPGRADE CTA --- */}
                {/* <div className="mt-20 bg-blue-900 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <FaShieldAlt size={200} />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Want Unlimited Access?</h2>
                        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto font-light">
                            Unlock Platinum tools and enjoy higher limits, faster processing, and premium support.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-4 bg-[#E64A19] hover:bg-[#d84315] text-white font-black rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center gap-2">
                                <FaRocket /> UPGRADE NOW
                            </button>
                            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black rounded-2xl transition-all flex items-center gap-2">
                                <FaLock /> VIEW PRICING
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* --- FOOTER --- */}
            <footer className="mt-20 py-10 text-center border-t border-gray-200">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Ekenedilichukwu. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default ToolShowcase;