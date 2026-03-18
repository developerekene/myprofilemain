import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen px-4 md:px-16 py-10">

            {/* Header */}
            <div className="mb-10">
                <a
                    href="/"
                    className="flex items-center text-blue-900 font-bold hover:text-blue-700 transition"
                >
                    <FaArrowLeft className="mr-2" /> Back to Home
                </a>
            </div>

            {/* Title */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
                    Privacy Policy
                </h1>
                <p className="text-gray-600">
                    Your privacy is important to us. This policy explains how we collect,
                    use, and protect your information.
                </p>
            </div>

            {/* Sections */}
            <div className="space-y-8 text-gray-700 leading-relaxed">

                <section>
                    <h2 className="text-xl font-bold text-black mb-2">
                        1. Information We Collect
                    </h2>
                    <p>
                        We may collect personal information such as your name, email address,
                        and any details you provide through contact forms or interactions on
                        this website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-black mb-2">
                        2. How We Use Your Information
                    </h2>
                    <p>
                        Your information is used to respond to inquiries, improve user
                        experience, and provide relevant updates or services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-black mb-2">
                        3. Data Protection
                    </h2>
                    <p>
                        We implement appropriate security measures to protect your data from
                        unauthorized access, disclosure, or misuse.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-black mb-2">
                        4. Third-Party Services
                    </h2>
                    <p>
                        We may use third-party tools or services (e.g., analytics, hosting)
                        that may collect limited data in accordance with their own privacy
                        policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-black mb-2">
                        5. Your Rights
                    </h2>
                    <p>
                        You have the right to request access, correction, or deletion of your
                        personal data at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-black mb-2">
                        6. Updates to This Policy
                    </h2>
                    <p>
                        This policy may be updated periodically. Continued use of the website
                        implies acceptance of any changes.
                    </p>
                </section>

            </div>

            <div className="h-20" />
        </div>
    );
};

export default PrivacyPolicy;