import React from "react";
import { Shield, FileText, Scale, Cpu, AlertTriangle, RefreshCw, Mail, MessageSquare, ArrowLeft, Terminal } from "lucide-react";
import { store } from "../../Redux/Store";
import { toggleChat } from "../../Redux/Slices/chatSlice";

interface TermsSectionProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({ icon: Icon, title, children }) => (
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

const TermsAndConditions: React.FC = () => {
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
                        <FileText size={14} />
                        <span>System Agreements & Usage</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                        Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Conditions</span>
                    </h1>

                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        These terms establish the legal and operational framework governing your access to our web interfaces, AI automation pipelines, and mobile utilities published under <strong className="text-white font-medium">devekene</strong>.
                    </p>

                    <div className="text-xs text-slate-500 font-medium pt-2">
                        Last Updated: <span className="text-slate-400">August 6, 2026</span>
                    </div>
                </div>
            </header>

            {/* Content Body */}
            <main className="max-w-4xl mx-auto px-6 py-12 space-y-6">
                <TermsSection icon={Scale} title="Acceptance of Terms">
                    <p>
                        By accessing our web solutions, deploying our AI assistants, or downloading mobile applications (including <strong className="text-purple-400">Toolbox</strong> - <code className="text-xs bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">com.devekene.ToolBox</code>) from the Google Play Store, you agree to be bound by these Terms and Conditions.
                    </p>
                    <p>
                        If you do not agree with any portion of these provisions, you must immediately cease interaction with our web endpoints and uninstall all related mobile assets.
                    </p>
                </TermsSection>

                <TermsSection icon={Cpu} title="Intellectual Property & Code Ownership">
                    <p>
                        All content, systems architecture, design layouts, custom scripts, source code, and brand identifiers displayed across our platforms are the exclusive property of <strong className="text-white">devekene (Tech with Ekenedilichukwu)</strong>.
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                        <li><strong className="text-white">Mobile Utilities:</strong> Apps distributed via Google Play are licensed—not sold—for personal or authorized professional use. Reverse engineering, decompiling, or mirroring app binaries is prohibited.</li>
                        <li><strong className="text-white">Client Deliverables:</strong> Bespoke web architectures or custom AI automation workflows created for clients remain governed by individual service-level agreements (SLAs).</li>
                    </ul>
                </TermsSection>

                <TermsSection icon={Terminal} title="Acceptable Use & System Integrity">
                    <p>
                        Users must interact with our platforms and AI automation tools responsibly. The following behaviors constitute a direct violation of system terms:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                        <li>Attempting to breach, overload, or reverse-engineer our server infrastructures or API endpoints.</li>
                        <li>Injecting malicious prompts, payload exploits, or spam into our interactive AI assistant models (KENE).</li>
                        <li>Utilizing mobile tools or automation endpoints for illegal operations or unauthorized network probing.</li>
                    </ul>
                </TermsSection>

                <TermsSection icon={AlertTriangle} title="Limitation of Liability & Warranties">
                    <p>
                        Our platforms, mobile applications, and AI assistant responses are provided on an <strong className="text-white">"AS IS"</strong> and <strong className="text-white">"AS AVAILABLE"</strong> basis. 
                    </p>
                    <p>
                        While we strive for high operational uptime and precise utility output, we do not guarantee uninterrupted service or error-free outputs from generative AI models. Under no circumstances will <strong className="text-white">devekene</strong> be liable for indirect, incidental, or consequential damages resulting from app execution or platform reliance.
                    </p>
                </TermsSection>

                <TermsSection icon={RefreshCw} title="Modifications & System Updates">
                    <p>
                        We reserve the right to revise these terms or modify system features at any time to align with software upgrades, regulatory shifts, or Google Play policy updates. Continued usage of our applications or web services following updates constitutes full acceptance of the revised terms.
                    </p>
                </TermsSection>

                {/* Contact CTA Section with Dual Action Buttons */}
                <div className="mt-12 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-slate-800 rounded-2xl p-8 text-center space-y-4 backdrop-blur-md">
                    <div className="inline-flex p-3 bg-slate-900 border border-slate-800 rounded-xl text-purple-400">
                        <Shield size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Questions About Terms & SLA Contracts?</h3>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto">
                        For inquiries regarding custom engineering licensing, terms of service clarification, or enterprise SLA agreements, contact the engineering team directly.
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
        </div>
    );
};

export default TermsAndConditions;