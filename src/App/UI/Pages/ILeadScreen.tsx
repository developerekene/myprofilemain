import React, { useState } from "react";
import { FaArrowLeft, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const ILeadScreen: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<"mentee" | "mentor">("mentee");
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        experience: "",
        goals: "",
    });

    const generateReferenceNumber: any = () => {
        const now = new Date()
        const pad = (n: number) => n.toString().padStart(2, "0")
        const date = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`
        const time = `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`
        const random = Math.floor(1000 + Math.random() * 9000)
        return `REF-${date}-${time}-${random}`
    }

    const handleSubmit = async (e: React.FormEvent) => {
        const serviceId = "service_o1jbklr"
        const templateId = "template_p8h58ur"
        const publicKey = "hcj3DsJ8MfNfUrE8J"
        e.preventDefault();
        setSubmitted(true);

        const referenceNumber = generateReferenceNumber();

        const templateParams = {
            name: form.name,
            title: `We’ve successfully received your iLead registration 🎉
        
        Registration Details:
        --------------------------
        Name: ${form.name}
        Role: ${type === "mentor" ? "Mentor" : "Mentee"}
        Email: ${form.email}
        Registration ID: ${referenceNumber}
        
        About Your Journey:
        ${type === "mentor"
                    ? `You indicated your experience as: "${form.experience || "Not specified"}"
        Your focus areas: "${form.goals || "General mentorship support"}"`
                    : `Your current level: "${form.experience || "Not specified"}"
        Your goals: "${form.goals || "General growth"}"`
                }
        
        What Happens Next:
        1. You’ll be added to the iLead WhatsApp community for updates and discussions.
        2. Our team will review your profile and connect you with relevant mentors/mentees.
        3. You’ll receive updates about upcoming mentoring sessions and activities.
        4. Stay active and engaged — growth here is driven by consistency and participation.
        
        Join the Community:
        https://chat.whatsapp.com/C17MntqembU6gAmRilhLyS?mode=gi_t
        
        We’re excited to have you onboard and look forward to supporting your journey.
        
        — iLead Initiative`,
            email: form.email,
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey)
            toast.success("Registration successfully!", {
                style: { background: "#4BB543", color: "#fff" },
            })
        } catch (error) {
            console.error("Email send error:", error)
            toast.error("Registration failed! 🚫", {
                style: { background: "#ff4d4f", color: "#fff" },
            })
        }
    };

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
            <div className="text-center mb-14">
                <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
                    iLead Initiative
                </h1>
                <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    Empowering the next generation of tech professionals through mentorship,
                    guidance, and real-world learning.
                </p>
            </div>

            {/* About Section */}
            <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    About iLead
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    The iLead Initiative is a mentorship-driven platform created to support
                    aspiring and growing professionals in technology by bridging the gap
                    between learning and real-world guidance.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Founded by Ekenedilichukwu Okoli and Promis Joshua, iLead was built from the realization
                    that while resources are abundant, direction and mentorship are often
                    missing. The platform connects learners with mentors who provide clarity,
                    guidance, and practical insight.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    It focuses on helping individuals think like engineers, not just follow
                    tutorials, enabling real growth and long-term success.
                </p>
            </div>

            {/* Pillars */}
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Core Pillars
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-blue-900 text-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-6">
                        <FaUsers />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Mentorship</h3>
                    <p className="text-sm leading-relaxed">
                        Direct access to experienced professionals who provide guidance,
                        feedback, and career direction tailored to individual growth paths.
                    </p>
                </div>

                <div className="bg-blue-900 text-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-6">
                        <FaLightbulb />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Knowledge Sharing</h3>
                    <p className="text-sm leading-relaxed">
                        Real-world insights, best practices, and lessons learned shared openly
                        to help learners understand practical engineering concepts.
                    </p>
                </div>

                <div className="bg-blue-900 text-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-6">
                        <FaChartLine />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Growth Support</h3>
                    <p className="text-sm leading-relaxed">
                        Focused on building confidence, problem-solving ability, and career
                        awareness beyond just technical skills.
                    </p>
                </div>
            </div>

            {/* How It Works */}
            <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    How iLead Works
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Through structured and informal mentoring sessions, iLead helps
                    individuals navigate challenges such as confusion with foundational
                    concepts, lack of direction, and uncertainty about career growth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    The initiative emphasizes consistency, clarity, and community as key
                    drivers of meaningful progress.
                </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    To make mentorship accessible and empower the next generation of
                    developers and tech professionals to grow with confidence, purpose, and
                    support.
                </p>
            </div>

            {/* CTA */}
            <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Join the iLead Initiative
                </h3>
                <p className="text-gray-600 mb-6">
                    Be part of a growing community focused on learning, mentorship, and real
                    impact.
                </p>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
                >
                    Get Started
                </button>
            </div>

            {/* ───── MODAL ───── */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative shadow-xl">

                        {/* Close */}
                        <button
                            onClick={() => {
                                setOpen(false);
                                setSubmitted(false);
                            }}
                            className="absolute top-3 right-4 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        {!submitted ? (
                            <>
                                <h2 className="text-xl font-bold text-blue-900 mb-4">
                                    Join iLead as a {type === "mentee" ? "Mentee" : "Mentor"}
                                </h2>

                                {/* Toggle */}
                                <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => setType("mentee")}
                                        className={`flex-1 py-2 rounded-lg text-sm font-semibold ${type === "mentee"
                                            ? "bg-orange-600 text-white"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        Mentee
                                    </button>
                                    <button
                                        onClick={() => setType("mentor")}
                                        className={`flex-1 py-2 rounded-lg text-sm font-semibold ${type === "mentor"
                                            ? "bg-orange-600 text-white"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        Mentor
                                    </button>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        className="w-full border rounded-lg p-3 text-sm"
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full border rounded-lg p-3 text-sm"
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                    />

                                    <input
                                        type="text"
                                        placeholder={
                                            type === "mentor"
                                                ? "Years of Experience"
                                                : "Current Skill Level"
                                        }
                                        className="w-full border rounded-lg p-3 text-sm"
                                        onChange={(e) =>
                                            setForm({ ...form, experience: e.target.value })
                                        }
                                    />

                                    <textarea
                                        placeholder={
                                            type === "mentor"
                                                ? "What can you help mentees with?"
                                                : "What are your goals?"
                                        }
                                        className="w-full border rounded-lg p-3 text-sm"
                                        rows={3}
                                        onChange={(e) =>
                                            setForm({ ...form, goals: e.target.value })
                                        }
                                    />

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center">
                                <h2 className="text-xl font-bold text-green-600 mb-4">
                                    🎉 Registration Successful
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    You can now join the iLead WhatsApp community below:
                                </p>

                                <a
                                    href="https://chat.whatsapp.com/C17MntqembU6gAmRilhLyS?mode=gi_t"
                                    target="_blank"
                                    className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold inline-block"
                                >
                                    Join WhatsApp Group
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="h-20" />
        </div>
    );
};

export default ILeadScreen;