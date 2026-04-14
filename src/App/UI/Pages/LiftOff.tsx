import React, { useState, useEffect } from "react";
import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaTicketAlt,
    FaCode,
    FaArrowRight,
    FaTimes,
    FaUser,
    FaMicrophone,
    FaHeart,
    FaChevronLeft,
    FaVideo,
    FaArrowLeft,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const PRIMARY_BLUE = "text-blue-900";
const PRIMARY_ORANGE = "bg-[#E64A19]";
const HOVER_ORANGE = "hover:bg-[#d84315]";

const backgroundImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
];

type RegistrationView = "selection" | "participant" | "speaker" | "volunteer";

const LiftOff: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalView, setModalView] = useState<RegistrationView>("selection");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form logic state (unchanged)
    const [formData, setFormData] = useState({
        fullName: "", email: "", phone: "", organization: "", expectations: "",
        cityState: "", ageRange: "18-24", volunteerDepartment: "Content & Speakers (Liaison)",
        hasVolunteerExp: false, volunteerExpDesc: "", availability: "Event Day Only",
        agreeToBriefing: false, hasSmartphone: false, jobTitle: "", linkedin: "",
        website: "", talkTitle: "", talkSummary: "", keyTakeaways: "",
        talkFormat: "Keynote Speech", availableInJune: false, accommodationRequired: false,
    });

    function calculateTimeLeft() {
        const difference = +new Date("2026-06-27") - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
        const slideTimer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => { clearTimeout(timer); clearInterval(slideTimer); };
    });

    const formatTime = (num: number) => (num < 10 ? `0${num}` : num);

    const openModal = (view: RegistrationView = "selection") => {
        if (/Android/i.test(navigator.userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.devekene.DroidOne";
            return;
        }
        setModalView(view);
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Firebase logic would go here
    };

    return (
        <div className="bg-white min-h-screen">
            <Toaster position="top-center" />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[85vh] md:h-[90vh] flex flex-col items-center justify-center overflow-hidden">

                {/* Background Slideshow */}
                {backgroundImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                ))}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-blue-900/75" />

                {/* Back Button - Positioned absolutely within the relative section */}
                <div className="absolute top-8 left-4 md:left-16 z-20">
                    <a href="/" className="flex items-center text-white/80 hover:text-white font-bold transition group">
                        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>
                </div>

                {/* Centered Content Wrapper */}
                <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

                    <span className="inline-block bg-orange-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-[0.2em] uppercase shadow-lg">
                        Eastern Tech Fest
                    </span>

                    <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
                        LIFT-OFF CONFERENCE
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl font-light leading-relaxed">
                        The Tech Trade Treasury: <br className="hidden md:block" />
                        <span className="text-orange-500 font-semibold italic">
                            Integrating Tech and Commercial Prowess
                        </span>
                    </p>

                    {/* Countdown - Centered via Flex */}
                    <div className="flex items-center justify-center gap-3 md:gap-6 mb-12">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-3 md:p-5 min-w-[75px] md:min-w-[100px] shadow-2xl">
                                <span className="text-2xl md:text-4xl font-bold text-white mb-1">{formatTime(value)}</span>
                                <span className="text-[9px] md:text-[11px] text-orange-400 uppercase font-black tracking-widest">{unit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons - Centered */}
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <button
                            onClick={() => openModal("selection")}
                            className={`flex items-center gap-2 ${PRIMARY_ORANGE} text-white px-10 py-4 rounded-lg font-bold ${HOVER_ORANGE} transition-all transform hover:scale-105 shadow-xl`}
                        >
                            <FaTicketAlt /> Register Now
                        </button>
                        <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all shadow-xl">
                            <FaCode /> Join Hackathon
                        </button>
                    </div>
                </div>
            </section>

            {/* --- REST OF PAGE (About, Features, etc.) --- */}
            <div className="px-4 md:px-16 py-20">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">About LiftOff</h2>
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                        LiftOff is a premier annual event dedicated to empowering individuals and helping
                        them stand on their own two feet through the power of technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Reusable Card Style */}
                    {[
                        { icon: <FaArrowRight />, title: "The Launchpad", text: "From keynote speeches to hands-on workshops, explore cutting-edge innovations." },
                        { icon: <FaHeart />, title: "Core Values", text: "We emphasize independence, resilience, and creativity within a community." },
                        { icon: <FaTicketAlt />, title: "Recognition", text: "Innovative solutions and developers receive awards and monetary prizes." }
                    ].map((feature, i) => (
                        <div key={i} className="border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all bg-white group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-12 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{feature.text}</p>
                        </div>
                    ))}
                </div>

                {/* Event Meta Bar */}
                <div className="mt-20 bg-blue-900 rounded-[2rem] p-10 flex flex-wrap items-center justify-around gap-10 text-white shadow-2xl">
                    <div className="flex flex-col items-center">
                        <FaCalendarAlt className="text-orange-500 text-3xl mb-3" />
                        <span className="text-xl font-bold tracking-tight">27th June, 2026</span>
                    </div>
                    <div className="w-[1px] h-16 bg-white/10 hidden md:block" />
                    <div className="flex flex-col items-center">
                        <FaMapMarkerAlt className="text-orange-500 text-3xl mb-3" />
                        <span className="text-xl font-bold tracking-tight">Hybrid Event</span>
                    </div>
                </div>
            </div>

            {/* --- MODAL (Simplified Styles to match sample) --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-blue-900/90 backdrop-blur-md">
                    <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
                        <div className="sticky top-0 bg-white px-8 py-6 border-b border-gray-50 flex items-center justify-between z-10">
                            <div className="flex items-center gap-4">
                                {modalView !== "selection" && (
                                    <button onClick={() => setModalView("selection")} className="text-blue-900 hover:text-orange-600 transition">
                                        <FaChevronLeft size={20} />
                                    </button>
                                )}
                                <h3 className="font-black text-blue-900 text-xl uppercase tracking-tighter">
                                    {modalView === "selection" ? "Select Path" : `${modalView}`}
                                </h3>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-300 hover:text-red-500 transition">
                                <FaTimes size={28} />
                            </button>
                        </div>

                        <div className="p-8">
                            {modalView === "selection" ? (
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {[
                                        { id: "participant", icon: <FaUser />, title: "Join", desc: "Attendee" },
                                        { id: "speaker", icon: <FaMicrophone />, title: "Talk", desc: "Speaker" },
                                        { id: "volunteer", icon: <FaHeart />, title: "Help", desc: "Volunteer" },
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setModalView(opt.id as RegistrationView)}
                                            className="flex flex-col items-center text-center p-8 border-2 border-gray-50 rounded-2xl hover:border-orange-500 hover:bg-orange-50/30 transition-all group"
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:scale-110 transition-all shadow-lg">
                                                {opt.icon}
                                            </div>
                                            <h4 className="font-bold text-blue-900">{opt.title}</h4>
                                            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{opt.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold text-blue-900 uppercase">Full Name</label>
                                            <input type="text" placeholder="John Doe" required className="bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold text-blue-900 uppercase">Email</label>
                                            <input type="email" placeholder="john@company.com" required className="bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
                                        </div>
                                    </div>
                                    <button className={`w-full py-5 ${PRIMARY_ORANGE} text-white font-black rounded-2xl ${HOVER_ORANGE} transition shadow-xl uppercase tracking-widest flex items-center justify-center gap-3`}>
                                        <FaVideo /> Register
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className="h-20" />
        </div>
    );
};

export default LiftOff;