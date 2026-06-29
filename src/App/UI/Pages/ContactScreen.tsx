import { ArrowRight } from 'lucide-react'
import ContactChatBot from '../Components/ContactBot'
import Footer from '../Components/Footer'
import NavbarNew from '../Components/NavbarNew'

const ContactScreen = () => {
    return (
        <div>
            <NavbarNew />
            <br />
            <br />
            <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">

                <span className="inline-block text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full font-bold">
                    Let's Build Something Amazing Together
                </span>

                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                    Get in <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-indigo-400">
                        Touch With Our Team
                    </span>
                </h1>

                <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
                    Whether you're looking to build an AI assistant, develop a website,
                    create a mobile application, or discuss a custom software project,
                    we're here to help. Chat with KENE or contact us directly to get started.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">

                    <button
                        // onClick={() => setChatOpen(true)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-purple-900/30 hover:scale-[1.02] transition-all"
                    >
                        <span>Chat with KENE</span>
                        <ArrowRight size={18} />
                    </button>

                    <a
                        href="mailto:hello@ekenedilichukwu.com"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                    >
                        <span>Email Our Team</span>
                    </a>

                </div>

                {/* Quick Contact Info */}

                <div className="pt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-400">

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Typically replies within 24 hours</span>
                    </div>

                    <div>
                        💬 AI Concierge Available 24/7
                    </div>

                    <div>
                        📍 Serving Clients Worldwide
                    </div>

                </div>

            </div>
            <ContactChatBot />
            <Footer />
        </div>
    )
}

export default ContactScreen