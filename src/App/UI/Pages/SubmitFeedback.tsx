import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, ArrowLeft, Send, CheckCircle2, ShieldAlert, Terminal, MessageSquareCode, Sliders } from "lucide-react";

interface FeedbackPayload {
    category: "bug" | "ecosystem" | "mentorship" | "general";
    experienceRating: number; // 1-5 Scale Matrix
    feedbackMessage: string;
    includeIdentity: boolean;
    identityEmail?: string;
}

const INITIAL_FEEDBACK: FeedbackPayload = {
    category: "ecosystem",
    experienceRating: 4,
    feedbackMessage: "",
    includeIdentity: false,
    identityEmail: ""
};

const SubmitFeedback: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FeedbackPayload>(INITIAL_FEEDBACK);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (field: keyof FeedbackPayload, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleFeedbackSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!formData.feedbackMessage.trim()) {
            setError("Validation Failure: Feedback payload stream cannot be empty.");
            return;
        }

        setIsSubmitting(true);

        try {
            // STEP 1: Route structural logs directly to your ingestion layer (e.g., Firebase Firestore / Realtime DB)
            // Example configuration mapping endpoint logic:
            // await databaseService.pushFeedbackMetric({ ...formData, timestamp: new Date().toISOString() });

            // STEP 2: Optional cloud/telemetry notification alert targeting your operations hub
            // await fetch("/api/v1/telemetry/notify-feedback", { method: "POST", body: JSON.stringify(formData) });

            // Simulating network pipeline delay parameter
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setIsSuccess(true);
            setFormData(INITIAL_FEEDBACK);
        } catch (err) {
            setError("Telemetry Ingestion Aborted: Feedback pipeline transmission fault.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans antialiased">
                <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                        <CheckCircle2 size={24} />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xl font-black uppercase tracking-tight text-white">Transmission Complete</h1>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Your experiential diagnostics data packets have been logged and routed to the development matrix.
                        </p>
                    </div>
                    <div className="pt-2">
                        <button
                            onClick={() => navigate("/about-the-engineer#learn-with-ekene")}
                            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-white bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 transition-colors cursor-pointer"
                        >
                            <ArrowLeft size={12} />
                            <span>Return to Ecosystem</span>
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 sm:p-12 font-sans antialiased relative overflow-x-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/[0.01] pointer-events-none" />

            {/* HEADER INTERACTION ANCHOR */}
            <div className="max-w-xl w-full mx-auto pt-4">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-emerald-400 transition-colors group cursor-pointer"
                >
                    <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span>ESC // ABORT FEEDBACK LOG</span>
                </button>
            </div>

            {/* CORE COMPONENT INTERFACE CONTAINER */}
            <div className="max-w-xl w-full bg-slate-900 border border-slate-900/60 p-6 sm:p-10 rounded-2xl shadow-2xl relative z-10 mx-auto my-8 space-y-6">

                <div className="border-b border-slate-950 pb-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                        <Terminal size={11} />
                        <span>Telemetry Channel // Outbound</span>
                    </div>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                        <MessageSquareCode size={18} className="text-emerald-400" />
                        System Ecosystem Feedback
                    </h2>
                    <p className="text-slate-400 text-xs leading-relaxed">
                        Log feature enhancements, platform performance bugs, or community-wide interface feedback metrics into our core tracking registry.
                    </p>
                </div>

                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                    {error && (
                        <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center space-x-3 text-rose-400 font-mono text-xs">
                            <ShieldAlert size={14} />
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Section Element 1: Stream Classification */}
                    <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Data Packet Type *</label>
                        <select
                            value={formData.category}
                            onChange={(e) => handleInputChange("category", e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors appearance-none cursor-pointer"
                        >
                            <option value="ecosystem">Ecosystem Platform Performance (Speeds, Interface Layouts)</option>
                            <option value="mentorship">Mentorship Pipeline Flow (Ingestion, Resource Access)</option>
                            <option value="bug">Structural Defect / Pipeline Error (Bug Report)</option>
                            <option value="general">General Narrative Thoughts / Observations</option>
                        </select>
                    </div>

                    {/* Section Element 2: Quantifiable Slider Analytics */}
                    <div className="space-y-2 bg-slate-950/40 border border-slate-950 p-4 rounded-xl">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                                <Sliders size={12} className="text-slate-500" /> Experience Coefficient
                            </label>
                            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                                {formData.experienceRating}.0 / 5.0
                            </span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            step="1"
                            value={formData.experienceRating}
                            onChange={(e) => handleInputChange("experienceRating", parseInt(e.target.value))}
                            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 mt-2"
                        />
                        <div className="flex justify-between text-[9px] font-mono text-slate-600 px-0.5 pt-1">
                            <span>CRITICAL FAULT (1)</span>
                            <span>OPTIMAL EXECUTION (5)</span>
                        </div>
                    </div>

                    {/* Section Element 3: Textarea Log Payload */}
                    <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Compilation Text log *</label>
                        <textarea
                            required
                            rows={4}
                            value={formData.feedbackMessage}
                            onChange={(e) => handleInputChange("feedbackMessage", e.target.value)}
                            placeholder="Construct raw architectural optimization thoughts, clear description parameters of unexpected bugs, or programmatic feedback updates..."
                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/30 rounded-xl p-4 text-xs text-white placeholder-slate-700 outline-none transition-colors resize-noneDoc leading-relaxed"
                        />
                    </div>

                    {/* Section Element 4: Identity Anonymity Toggles */}
                    <div className="space-y-4 pt-2 border-t border-slate-950">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={formData.includeIdentity}
                                onChange={(e) => handleInputChange("includeIdentity", e.target.checked)}
                                className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-emerald-500 focus:ring-0 focus:ring-offset-0 mt-0.5 accent-emerald-400"
                            />
                            <div className="space-y-0.5">
                                <span className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wide group-hover:text-slate-200 transition-colors">
                                    Append Identity Parameters
                                </span>
                                <span className="block text-[11px] text-slate-500 leading-normal">
                                    Leave unchecked to submit as an anonymous pipeline event packet, or check to link your email address for follow-up coordination loops.
                                </span>
                            </div>
                        </label>

                        {formData.includeIdentity && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wide">Verification Identity Email *</label>
                                <input
                                    type="email"
                                    required={formData.includeIdentity}
                                    value={formData.identityEmail || ""}
                                    onChange={(e) => handleInputChange("identityEmail", e.target.value)}
                                    placeholder="your-identity@domain.com"
                                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 outline-none transition-colors"
                                />
                            </div>
                        )}
                    </div>

                    {/* Form Submission Actions Container */}
                    <div className="pt-4 flex flex-col items-center justify-between gap-4 border-t border-slate-950 sm:flex-row">
                        <p className="text-[10px] font-mono text-slate-600">
                            * System feedback metrics use secure transit parameters.
                        </p>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 bg-slate-950 hover:border-emerald-500/40 px-6 py-3.5 rounded-xl border border-slate-800 transition-all cursor-pointer group disabled:opacity-40"
                        >
                            <MessageSquare size={14} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                            <span>{isSubmitting ? "Transmitting..." : "Stream Feedback"}</span>
                            <Send size={11} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </form>
            </div>

            {/* FOOTER SYSTEM STATS */}
            <div className="max-w-xl w-full mx-auto text-center text-[10px] font-mono text-slate-700 pb-4 hidden sm:block">
                FEEDBACK DATA BOUND BY PRIVATE INFRASTRUCTURE METRICS PROTOCOLS // CHANNEL READY
            </div>
        </main>
    );
};

export default SubmitFeedback;