import React, { useState } from "react";
import { FaArrowLeft, FaVideo, FaCheckCircle } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const PRIMARY_BLUE = "text-blue-900";
const PRIMARY_ORANGE = "bg-orange-600";
const HOVER_ORANGE = "hover:bg-orange-700";

const WebinarRegistration: React.FC = () => {
    // State to store user information
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
            Event: Maximising AI, Data and Dreams
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
        <div className="bg-white min-h-screen px-4 md:px-16 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <a href="/" className="flex items-center text-blue-900 font-bold hover:text-blue-700 transition">
                    <FaArrowLeft className="mr-2" /> Back to Mentoring
                </a>
            </div>

            <div className="max-w-3xl mx-auto">
                {/* Hero / Context */}
                <div className="text-center mb-10">
                    <span className="text-orange-600 font-bold text-sm tracking-widest uppercase">Registration</span>
                    <h2 className={`text-3xl md:text-4xl font-extrabold ${PRIMARY_BLUE} mt-2`}>
                        Maximising AI, Data and Dreams
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Fill out the details below to reserve your spot. We'll send the session link directly to your inbox.
                    </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">

                    {/* Basic Info Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                            <input
                                required
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                                placeholder="Ekene"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                            <input
                                required
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                                placeholder="Okoli"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email Address *</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                            placeholder="ekene@company.com"
                        />
                    </div>

                    {/* Professional Context Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title *</label>
                            <input
                                required
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                                placeholder="Lead Engineer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                            <input
                                required
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                                placeholder="TechCorp"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                        <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none bg-white"
                        >
                            <option value="">Select Industry</option>
                            <option value="software">Software & Tech</option>
                            <option value="fintech">Fintech</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                        </select>
                    </div>

                    {/* Engagement Fields */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            What is your biggest challenge with AI/Data?
                        </label>
                        <textarea
                            name="challenge"
                            value={formData.challenge}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none"
                            placeholder="Tell us what you'd like the speaker to address..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">How did you hear about us?</label>
                        <select
                            name="referralSource"
                            value={formData.referralSource}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none bg-white"
                        >
                            <option value="">Select an option</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="twitter">Twitter (X)</option>
                            <option value="email">Email Newsletter</option>
                            <option value="friend">A Friend</option>
                        </select>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3">
                        <input
                            required
                            type="checkbox"
                            name="agreedToTerms"
                            checked={formData.agreedToTerms}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <label className="text-sm text-gray-600">
                            I agree to receive communications regarding this webinar and future mentoring sessions. *
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full flex items-center justify-center gap-2 ${PRIMARY_ORANGE} text-white px-6 py-4 rounded-xl font-bold text-lg ${HOVER_ORANGE} transition shadow-md`}
                    >
                        <FaVideo /> Secure My Spot
                    </button>
                </form>

                <p className="text-center text-gray-400 text-xs mt-8">
                    By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default WebinarRegistration;