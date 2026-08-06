import React from "react";
import { Shield, Eye, Lock, Database, Globe, Bell, Mail, Smartphone, MessageSquare, ArrowLeft } from "lucide-react";
import { store } from "../../Redux/Store";
import { toggleChat } from "../../Redux/Slices/chatSlice";
import Footer from "../Components/Footer";

interface PolicySectionProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
}

const PolicySection: React.FC<PolicySectionProps> = ({ icon: Icon, title, children }) => (
    <div className="bg-slate-900/50 border border-slate-900 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl hover:border-slate-800 transition-colors">
        <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-purple-400">
                <Icon size={20} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
        </div>
        <div className="text-slate-400 leading-relaxed text-sm md:text-base space-y-3">
            {children}
        </div>
    </div>
);

const PrivacyAndPolicy: React.FC = () => {
    const handleBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/";
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30">
            {/* Header Hero Section */}
            <header className="relative border-b border-slate-900 bg-slate-950/70 backdrop-blur-md py-16 px-6">

                {/* Navigation Back Button */}
                <div className="max-w-4xl mx-auto mb-6">
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center space-x-2 text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <ArrowLeft size={16} className="text-purple-400" />
                        <span>Back</span>
                    </button>
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 tracking-wide uppercase">
                        <Shield size={14} />
                        <span>Data Protection & Privacy</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Policy</span>
                    </h1>

                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Your privacy is critical to our architecture. This policy outlines data governance across our web platforms, backend systems, and mobile applications published under <strong className="text-white font-medium">devekene</strong>.
                    </p>

                    <div className="text-xs text-slate-500 font-medium pt-2">
                        Last Updated: <span className="text-slate-400">October 24, 2026</span>
                    </div>
                </div>
            </header>

            {/* Content Body */}
            <main className="max-w-4xl mx-auto px-6 py-12 space-y-6">
                {/* Mobile App Specific Section */}
                <PolicySection icon={Smartphone} title="Google Play & Toolbox Mobile App Governance">
                    <p>
                        This policy specifically governs our mobile applications published on the Google Play Store, including <strong className="text-purple-400">Toolbox</strong> (<code className="text-xs bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">com.devekene.ToolBox</code>) and all related apps authored under the publisher identity <strong className="text-white">devekene</strong>.
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                        <li><strong className="text-white">On-Device Processing:</strong> Features within Toolbox utilize local system parameters to deliver developer tools and diagnostic utilities directly on your hardware without external extraction.</li>
                        <li><strong className="text-white">Permissions:</strong> Requested device permissions (such as storage, network access, or system status) are enforced strictly to enable functional utility execution. We do not harvest, trade, or sell device metadata.</li>
                        <li><strong className="text-white">Application Telemetry:</strong> Anonymized crash reports and execution diagnostics may be collected via standard Google Play Services solely to repair platform instability and improve user experience.</li>
                    </ul>
                </PolicySection>

                <PolicySection icon={Eye} title="Information Collection">
                    <p>
                        We collect minimal user parameters necessary to provide functional AI automation services, web systems, and mobile applications:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                        <li><strong className="text-white">Direct Inquiries:</strong> Contact information provided when reaching out via direct email or assistant channels.</li>
                        <li><strong className="text-white">System Telemetry:</strong> Log metrics detailing feature usage across endpoints to ensure maximum platform operational integrity.</li>
                        <li><strong className="text-white">AI Assistant Inputs:</strong> Context data supplied to interactive assistant interfaces strictly for active payload generation and context retrieval.</li>
                    </ul>
                </PolicySection>

                <PolicySection icon={Database} title="Data Usage & Processing">
                    <p>
                        Data retrieved through our mobile applications and web infrastructure is applied strictly toward service performance and maintenance:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                        <li>Provision, maintenance, and enhancement of mobile utilities and customized AI architectures.</li>
                        <li>Communications regarding technical support, application upgrades, and system inquiries.</li>
                        <li>Automated analytical tracking to detect runtime performance anomalies and secure app logic.</li>
                    </ul>
                </PolicySection>

                <PolicySection icon={Lock} title="Security & Isolation">
                    <p>
                        Security is engineered directly into our applications and cloud backends. We enforce strict transport layer encryption, tokenized authentication parameters, and isolated storage instances to block unauthorized transit or data retrieval.
                    </p>
                </PolicySection>

                <PolicySection icon={Globe} title="Third-Party Mobile Integrations">
                    <p>
                        Our mobile apps and backend systems interact with established third-party services (including Google Play Services, hosting infrastructure, and AI model providers). These entities process parameters strictly under regulated compliance standards and do not extract your data for secondary purposes.
                    </p>
                </PolicySection>

                <PolicySection icon={Bell} title="Your Data Rights">
                    <p>
                        You retain full control over your personal data across both web and mobile environments. You hold the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                        <li>Request disclosure or access to stored records tied to your interactions.</li>
                        <li>Request immediate purging or deletion of personal telemetry.</li>
                        <li>Revoke app-level permissions directly through your Android device system settings at any time.</li>
                    </ul>
                </PolicySection>

                {/* Contact CTA Section with Dual Action Buttons */}
                <div className="mt-12 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-slate-800 rounded-2xl p-8 text-center space-y-4 backdrop-blur-md">
                    <div className="inline-flex p-3 bg-slate-900 border border-slate-800 rounded-xl text-purple-400">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Questions Regarding Data Governance?</h3>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto">
                        If you have questions regarding data privacy for Toolbox, our Google Play applications, or want to submit a complete system data deletion request, reach out directly.
                    </p>

                    {/* CTA Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:seniordevekene@gmail.com"
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 font-semibold text-sm shadow-lg shadow-purple-900/20 hover:scale-[1.02]"
                        >
                            <Mail size={16} />
                            <span>Contact via Email</span>
                        </a>

                        <button
                            onClick={() => store.dispatch(toggleChat())}
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 text-slate-200 hover:text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all duration-300 font-semibold text-sm hover:scale-[1.02]"
                        >
                            <MessageSquare size={16} className="text-purple-400" />
                            <span>Contact via KENE</span>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyAndPolicy;