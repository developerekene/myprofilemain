import React, { useState } from "react";
import { FaArrowLeft, FaVideo, FaCheckCircle, FaBook, } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const WebinarRegistration: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        companyName: "",
        industry: "",
        challenge: "",
        referralSource: "",
        agreedToTerms: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: val,
        }));
    };

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
        const referenceNumber = generateReferenceNumber()
        // console.log("Registration Data Captured:", formData);


        const templateParams = {
            name: formData.firstName + " " + formData.lastName,
            title: `We have successfully received your registration for our upcoming Webiner. 
    
            Registration Details:
            --------------------------
            Event: Strengthen Thinking and Strengthen CashFlow.
            Attendee: ${formData.firstName} ${formData.lastName}
            Organization: ${formData.companyName}
            Registration ID: ${referenceNumber}
            
            Session Context:
            You noted that your primary challenge is: "${formData.challenge || 'General Interest'}"
            Our speakers will do their best to address this during the Q&A.
            
            Next Steps:
            1. A calendar invite has been sent to ${formData.email}.
            2. Ensure you have the latest version of Google Meet installed.
            3. Join the whatsapp group (https://chat.whatsapp.com/C17MntqembU6gAmRilhLyS?mode=gi_t) for better communication.
            4. Our team will send a final reminder with the access link 24 hours before we go live.
            
            We look forward to speaking with you!`,
            email: formData.email,
        }

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey)
            toast.success("Message successfully sent!", {
                style: { background: "#4BB543", color: "#fff" },
            })
        } catch (error) {
            console.error("Email send error:", error)
            toast.error("Error sending email 🚫", {
                style: { background: "#ff4d4f", color: "#fff" },
            })
        }
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
                <FaCheckCircle className="text-6xl text-green-500 mb-4" />
                <h2 className="text-3xl font-bold text-blue-900">You're on the list!</h2>
                <p className="text-gray-600 mt-2 max-w-md">
                    Check your email (**{formData.email}**) for the calendar invite and join link.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-blue-900 font-bold hover:underline"
                >
                    Back to Webinar Details
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Minimal Header */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <a href="/" className="inline-flex items-center text-gray-400 font-bold hover:text-purple-600 transition group">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </a>
            </div>

            <div className="max-w-4xl mx-auto px-6">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        <FaBook /> Live Session
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-6">
                        Strengthen Thinking <br /> and Strengthen <span className="text-purple-600">CashFlow.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Why individuals strggle to make financial progress.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.05)] relative overflow-hidden">
                    {/* Decorative Gradient Accent */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-black text-gray-900 uppercase tracking-wider">First Name</label>
                                <input
                                    required
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-600 focus:bg-white outline-none transition-all font-bold text-gray-900"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black text-gray-900 uppercase tracking-wider">Last Name</label>
                                <input
                                    required
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-600 focus:bg-white outline-none transition-all font-bold text-gray-900"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-black text-gray-900 uppercase tracking-wider">Work Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-600 focus:bg-white outline-none transition-all font-bold text-gray-900"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-black text-gray-900 uppercase tracking-wider">Job Title</label>
                                <input
                                    required
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-600 focus:bg-white outline-none transition-all font-bold text-gray-900"
                                    placeholder="Software Engineer"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black text-gray-900 uppercase tracking-wider">Company</label>
                                <input
                                    required
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-600 focus:bg-white outline-none transition-all font-bold text-gray-900"
                                    placeholder="Tech Innovations"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-black text-gray-900 uppercase tracking-wider">Your Primary Challenge</label>
                            <textarea
                                name="challenge"
                                value={formData.challenge}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-600 focus:bg-white outline-none transition-all font-bold text-gray-900"
                                placeholder="What would you like the speaker to address?"
                            />
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                            <input
                                required
                                type="checkbox"
                                name="agreedToTerms"
                                checked={formData.agreedToTerms}
                                onChange={handleChange}
                                className="mt-1 h-5 w-5 accent-purple-600 rounded cursor-pointer"
                            />
                            <label className="text-sm text-purple-900 font-medium leading-relaxed cursor-pointer">
                                I agree to receive communications regarding this webinar and future mentoring sessions.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:bg-purple-600 transition-all shadow-2xl hover:translate-y-[-2px] active:translate-y-[0]"
                        >
                            <FaVideo className="text-pink-500" /> Secure My Spot
                        </button>
                    </form>
                </div>

                <p className="text-center text-gray-400 font-bold text-xs mt-12 tracking-widest uppercase">
                    Limited Virtual Seats Available &bull; Enrolment Closes Soon
                </p>
            </div>
        </div>
    );
};

export default WebinarRegistration;