import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, Terminal } from 'lucide-react';

const ErrorPage: React.FunctionComponent = () => {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans antialiased relative overflow-hidden">
            {/* Subtle background matrix glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/[0.01] pointer-events-none" />

            <div className="max-w-md w-full bg-slate-900 border border-slate-900 p-8 rounded-2xl text-center space-y-6 shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200">
                {/* Status Indicator Icon */}
                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mx-auto">
                    <ShieldAlert size={22} />
                </div>

                {/* Typography Coordinates */}
                <div className="space-y-2">
                    <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold">
                        <Terminal size={11} />
                        <span>Error Page</span>
                    </div>
                    <h1 className="text-xl font-black uppercase tracking-tight text-white">
                        Invalid Navigation Coordinates
                    </h1>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                        The requested system path does not target an active sector or valid profile interface parameter.
                    </p>
                </div>

                {/* Action Controls */}
                <div className="pt-2">
                    <button
                        onClick={() => navigate("/")}
                        className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-emerald-400 hover:border-emerald-500/20 bg-slate-950 px-5 py-3 rounded-xl border border-slate-800 transition-all cursor-pointer group"
                    >
                        <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span>Return to Home</span>
                    </button>
                </div>
            </div>

            {/* Bottom System Metadata Anchor */}
            <div className="absolute bottom-6 text-[10px] font-mono text-slate-700 hidden sm:block">
                WRONG NAVIGATION FOUND
            </div>
        </main>
    );
};

export default ErrorPage;