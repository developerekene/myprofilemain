import React, { useState } from "react";
import {
    FaCheckCircle,
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaArrowRight,
    FaRocket,
    FaShieldAlt,
    FaCalendarCheck
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

const PRIMARY_ORANGE = "bg-[#E64A19]";
const HOVER_ORANGE = "hover:bg-[#d84315]";

const PaymentConfirmation: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
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
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = "service_o1jbklr"
        const templateId = "template_p8h58ur"
        const publicKey = "hcj3DsJ8MfNfUrE8J"
        const referenceNumber = generateReferenceNumber();

        const templateParams = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            title: `Payment Confirmed: Your project "${formData.firstName}'s Digital Solution" is now active!`,

            // This body content is usually passed to your EmailJS/SendGrid template as a variable
            message_body: `
                Hello ${formData.firstName},
        
                Thank you for your payment. This email confirms that we have successfully received your order and your development project is now officially on our roadmap.
        
                Order Summary:
                --------------------------
                Project Type: Custom Web/Mobile Development
                Client Name: ${formData.firstName} ${formData.lastName}
                Transaction ID: ${referenceNumber}
                Contact Number: ${formData.phone}
        
                Project Goal:
                "Developing a high-performance solution to address: ${'Custom Development'}"
        
                What Happens Next?
                1. Onboarding: Our team is reviewing your details. You will receive a Project Kick-off document at ${formData.email} within the next 2 hours.
                3. Discovery Call: We will reach out via your provided phone number.
                4. Dashboard Access: Your credentials for the project tracking portal will be sent in a secure email.
        
                We are excited to bring your vision to life!
        
                Best regards,
                The Development Team
            `
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey)
            setTimeout(() => {
                toast.success("Message successfully sent!", {
                    style: { background: "#4BB543", color: "#fff" },
                })
                setIsSubmitting(false);
                // Redirect or show next steps
            }, 1500);

        } catch (error) {
            // console.error("Email send error:", error)
            toast.error("🚫 Error sending email", {
                style: { background: "#ff4d4f", color: "#fff" },
            })
        }

        // Simulate an API call

    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans pb-20">
            <Toaster position="top-center" />

            {/* --- TOP HEADER / PROGRESS --- */}
            <div className="bg-blue-900 py-12 text-center text-white">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4 shadow-xl animate-bounce">
                    <FaCheckCircle size={40} />
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Payment Successful!</h1>
                <p className="text-blue-200 mt-2 font-light">Let's finalize your project onboarding.</p>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* --- LEFT COLUMN: INFO --- */}
                    <div className="md:col-span-2 bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <FaUser className="text-orange-600" /> Confirm Your Details
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-blue-900 uppercase tracking-widest">First Name</label>
                                    <div className="relative">
                                        <input
                                            required
                                            type="text"
                                            placeholder="e.g. John"
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white p-4 rounded-xl outline-none transition-all"
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-blue-900 uppercase tracking-widest">Last Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Doe"
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white p-4 rounded-xl outline-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-blue-900 uppercase tracking-widest">Email Address</label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-5 text-gray-400" />
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white p-4 pl-12 rounded-xl outline-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-blue-900 uppercase tracking-widest">Phone Number</label>
                                <div className="relative">
                                    <FaPhoneAlt className="absolute left-4 top-5 text-gray-400" />
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+44 0000 000000"
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white p-4 pl-12 rounded-xl outline-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className={`w-full py-5 ${PRIMARY_ORANGE} text-white font-black rounded-2xl ${HOVER_ORANGE} transition-all shadow-xl uppercase tracking-widest flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-95`}
                            >
                                {isSubmitting ? "Processing..." : (
                                    <>Securely Confirm Booking <FaArrowRight /></>
                                )}
                            </button>
                        </form>

                        <p className="text-center text-gray-400 text-xs mt-6 flex items-center justify-center gap-2">
                            <FaShieldAlt className="text-green-500" /> Your data is encrypted and secure using Google encryption.
                        </p>
                    </div>

                    {/* --- RIGHT COLUMN: NEXT STEPS --- */}
                    <div className="space-y-6">
                        <div className="bg-blue-900 text-white rounded-[2rem] p-8 shadow-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <FaRocket className="text-orange-500" /> Next Steps
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">1</span>
                                    <p className="text-sm text-blue-100">Receive a formal project kick-off email within 2 hours.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">2</span>
                                    <p className="text-sm text-blue-100">Access to your dedicated project tracking dashboard.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">3</span>
                                    <p className="text-sm text-blue-100">Schedule your 1-on-1 discovery call with our team.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
                            <FaCalendarCheck className="mx-auto text-orange-600 text-3xl mb-3" />
                            <h4 className="text-blue-900 font-bold">Need Help?</h4>
                            <p className="text-gray-500 text-sm mb-4">Our support team is ready to assist you.</p>
                            <a href="tel:+447886386437" className="text-blue-900 font-black text-sm hover:text-orange-600 transition">
                                +44 7886 386437
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- FOOTER --- */}
            <footer className="mt-20 text-center">
                <div className="flex justify-center gap-4 mb-4">
                    <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
                    <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
                    <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">
                    Official Onboarding Portal &copy; {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
};

export default PaymentConfirmation;