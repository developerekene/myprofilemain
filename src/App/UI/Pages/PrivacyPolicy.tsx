import React from "react";
import { FaArrowLeft, FaShieldAlt, FaLock, FaUserShield, FaWhatsapp, FaPhoneAlt, FaRocket, FaLightbulb } from "react-icons/fa";

const PrivacyPolicy: React.FC = () => {
    const lastUpdated = "April 2026"; // Update to current date

    const PHONE_NUMBER = "+447886386437";
    const WHATSAPP_LINK = `https://wa.me/447886386437?text=Hello, I am interested in your Web/Mobile development services.`;

    return (
        <div className="bg-white min-h-screen px-6 md:px-24 py-12 font-sans">
            {/* Header / Navigation */}
            <div className="mb-12">
                <a
                    href="/"
                    className="group flex items-center text-blue-900 font-bold hover:text-orange-600 transition-colors"
                >
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </a>
            </div>

            {/* Title Section */}
            <div className="max-w-4xl border-b border-gray-100 pb-10 mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-900 text-white rounded-xl shadow-lg">
                        <FaShieldAlt size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tighter uppercase italic">
                        Privacy <span className="text-orange-600">Policy</span>
                    </h1>
                </div>
                <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                    This policy governs the data collection and usage for the
                    <span className="font-bold text-blue-900"> Toolbox</span> and
                    <span className="font-bold text-blue-900"> Knowledge City</span> mobile applications.
                </p>
                <p className="mt-4 text-xs font-black text-gray-400 uppercase tracking-widest">
                    Last Updated: {lastUpdated}
                </p>
            </div>

            {/* Content Sections */}
            <div className="max-w-4xl space-y-12 text-gray-700 leading-relaxed">

                <section>
                    <h2 className="flex items-center gap-2 text-xl font-black text-blue-900 mb-4 uppercase tracking-tight">
                        <div className="w-1.5 h-6 bg-orange-600 rounded-full" />
                        1. Information Collection & Financial Data
                    </h2>
                    <p className="mb-4">
                        For both <strong>Toolbox</strong> and <strong>Knowledge City</strong>, we collect information necessary to provide a personalized experience and process transactions:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 text-sm font-medium">
                        <li><strong>Personal Identity:</strong> Name, email address, and profile photo for account creation.</li>
                        <li><strong>Financial Information:</strong> For membership upgrades and course purchases, we collect payment details.
                            <span className="text-orange-700"> Note: All financial transactions are processed through secure, PCI-compliant third-party gateways (e.g., Stripe, Google Play Billing, Paystack). We do not store full credit card numbers on our local servers.</span>
                        </li>
                        <li><strong>Usage Data:</strong> Course progress, tool usage statistics, and device information to optimize performance.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="flex items-center gap-2 text-xl font-black text-blue-900 mb-4 uppercase tracking-tight">
                        <div className="w-1.5 h-6 bg-orange-600 rounded-full" />
                        2. How We Use Your Data
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-blue-900 mb-2 underline">Knowledge City</h4>
                            <p className="text-xs">To track learning milestones, issue certifications, and provide access to paid premium educational content.</p>
                        </div>
                        <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-blue-900 mb-2 underline">Toolbox</h4>
                            <p className="text-xs">To manage membership tiers, unlock pro-utility features, and sync tools across multiple devices.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="flex items-center gap-2 text-xl font-black text-blue-900 mb-4 uppercase tracking-tight">
                        <div className="w-1.5 h-6 bg-orange-600 rounded-full" />
                        3. Security & Data Retention
                    </h2>
                    <p className="flex items-start gap-3 bg-blue-50 p-6 rounded-2xl border border-blue-100 italic">
                        <FaLock className="text-blue-900 mt-1" />
                        We use industry-standard encryption (AES-256) to protect your personal and financial data. We retain your information only as long as your account is active or as needed to provide you with our services.
                    </p>
                </section>

                <section>
                    <h2 className="flex items-center gap-2 text-xl font-black text-blue-900 mb-4 uppercase tracking-tight">
                        <div className="w-1.5 h-6 bg-orange-600 rounded-full" />
                        4. Your Rights & Account Deletion
                    </h2>
                    <p className="mb-4">
                        In compliance with Google Play's <strong>Data Safety</strong> requirements, you have full control over your data:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 text-sm font-medium">
                        <li><strong>Access:</strong> You can request a copy of all data we hold about you.</li>
                        <li><strong>Deletion:</strong> You may delete your account at any time via the "Settings" menu in the app. Deleting your account will permanently remove your personal info, course history, and tool preferences from our active databases.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="flex items-center gap-2 text-xl font-black text-blue-900 mb-4 uppercase tracking-tight">
                        <div className="w-1.5 h-6 bg-orange-600 rounded-full" />
                        5. Third-Party Services
                    </h2>
                    <p className="text-sm">
                        We utilize Google Play Services, Firebase Analytics, and secure payment processors. These third parties have their own privacy policies regarding how they handle your data for functional purposes.
                    </p>
                </section>

                {/* --- WHY WORK WITH ME --- */}
                <div className="px-4 md:px-16 py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-wrap items-center gap-12">

                            <div className="flex-1 min-w-[300px] bg-blue-900 rounded-[2rem] p-10 text-white shadow-2xl">
                                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                                {/* <p className="text-blue-200 mb-8 font-light">
                                    Ready to build something great? Get a free consultation and quote today.
                                </p> */}
                                <div className="space-y-4">
                                    <a href={WHATSAPP_LINK} className="flex items-center justify-center gap-3 w-full py-4 bg-orange-600 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg">
                                        <FaWhatsapp /> Message via WhatsApp
                                    </a>
                                    <div className="text-center py-2 text-white/50 text-xs font-bold uppercase tracking-widest">or</div>
                                    <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-3 w-full py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                                        <FaPhoneAlt /> Call {PHONE_NUMBER}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="h-24" />
        </div>
    );
};

export default PrivacyPolicy;