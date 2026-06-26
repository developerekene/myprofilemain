import { Bot, Calendar, X, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeChat, openChat } from "../../Redux/Slices/chatSlice";
import { RootState } from "../../Redux/Store";
import { GOOGLE_DATA_PIPELINE_URL } from "../../utils/constants/Data";

// Define strict typing for the dialog memory engine
type ChoiceKey = "bot" | "webapp" | "mobile" | "contact";

interface LeadForm {
    choice?: ChoiceKey;
    choiceLabel?: string;
    name?: string;
    phone?: string;
    email?: string;
}

const ChatBot: React.FC = () => {
    // Requirement 2: Automatically open chat interface on initial run-time execution
    const chatOpen = useSelector((state: RootState) => state.chat.chatOpen);
    const dispatch = useDispatch();
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi there! I am Emy, the automated assistant for Tech with Ekenedilichukwu. Are you looking to build an AI chat bot like me, create a stunning webapp, build a magnificent mobile app or simply contact me? I can help you with any of the above you need.",
        },
    ]);
    const [chatInput, setChatInput] = useState("");
    const [currentLeadForm, setCurrentLeadForm] = useState<LeadForm>({});

    // Custom dialog routing step tracker
    // 0: Initial choice, 1: Full name input, 2: Phone number input, 3: Email input, 4: Next-action buttons
    const [chatStep, setChatStep] = useState(0);

    const chatEndRef = useRef<HTMLDivElement>(null);
    const calendlyUrl = "https://calendly.com/droidtechint";

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Network pipeline transmitter configuration
    const transmitLeadToGoogleSheet = async (leadData: LeadForm) => {
        try {
            await fetch(GOOGLE_DATA_PIPELINE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(leadData),
            });
            console.log("Lead payload updated safely onto Google Sheets.");
        } catch (error) {
            console.error("Data tracking capture network pipeline timeout: ", error);
        }
    };

    // Process manual textual chat entry frames
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        const userText = chatInput;
        setMessages((prev) => [...prev, { sender: "user", text: userText }]);
        setChatInput("");

        setTimeout(() => {
            if (chatStep === 1) {
                // Requirement 4: Capture Name -> Request Phone
                setCurrentLeadForm((prev) => ({ ...prev, name: userText }));
                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text: `Great to meet you, ${userText}! What is the best phone number to reach you at?`,
                    },
                ]);
                setChatStep(2);
            } else if (chatStep === 2) {
                // Requirement 4: Capture Phone -> Request Email
                setCurrentLeadForm((prev) => ({ ...prev, phone: userText }));
                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text: `Your phone number ${userText} is noted. What is the best email to reach you at?`,
                    },
                ]);
                setChatStep(3);
            } else if (chatStep === 3) {
                // Requirement 4 & 5: Capture Email -> Submit Packet -> Prompt Matrix
                const finalForm = { ...currentLeadForm, email: userText };
                setCurrentLeadForm(finalForm);

                // Transmit completed entity telemetry data onto sheet pipeline
                transmitLeadToGoogleSheet(finalForm);

                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text: "Boom! Your details were just captured securely into our database instantly. Ekene would give you a call within 24 hours.",
                    },
                    {
                        sender: "bot",
                        text: `Would you like to lock in a quick 15-minute consultation calendar slot with Ekene to discuss your ${finalForm.choiceLabel || "project requirements"
                            } or have me send a direct email to Ekene?`,
                    },
                ]);
                setChatStep(4);
            }
        }, 800);
    };

    // Quick Action Selection Chip intercept handler
    const handleChoiceSelection = (choice: ChoiceKey, label: string) => {
        setCurrentLeadForm({ choice, choiceLabel: label });
        setMessages((prev) => [...prev, { sender: "user", text: label }]);

        setTimeout(() => {
            // Transition out of Step 0 -> Request User Identity
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Understood. Let's catalog your pipeline. What is your full name?" },
            ]);
            setChatStep(1);
        }, 800);
    };

    // Generate a clean, production-ready mail link blueprint template
    const generateMailtoLink = () => {
        const targetEmail = "ekenehq@gmail.com";
        const clientName = currentLeadForm.name || "Enterprise Partner";
        const intentLabel = currentLeadForm.choiceLabel || "Technical Development Solutions";
        const clientPhone = currentLeadForm.phone || "Not Provided";
        const clientEmail = currentLeadForm.email || "Not Provided";

        const subject = `Technical Consultation Request: ${intentLabel} — ${clientName}`;

        const body = `Hi Ekene,

        I submitted an inquiry vector via Emy on your platform regarding the following track: "${intentLabel}".

        Here is our parsed diagnostic telemetry profile for your reference:
        -----------------------------------------------------------
        • Primary Representative: ${clientName}
        • Contact Line: ${clientPhone}
        • Back-up Digital Wire: ${clientEmail}
        -----------------------------------------------------------

        Let's discuss the underlying project scope, system boundaries, and an integration blueprint during our sync. I look forward to your reply or a call.

        Best regards,
        ${clientName}`;

        return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans antialiased">
            {/* Floating Action Launch Button */}
            {!chatOpen && (
                <button
                    onClick={() => dispatch(openChat())}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center relative group"
                >
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
                    <Bot size={24} />
                </button>
            )}

            {/* Expanded Chat Terminal Interface */}
            {chatOpen && (
                <div className="bg-slate-900 border border-slate-800 w-80 sm:w-[400px] h-[550px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300">

                    {/* Premium Header Architecture */}
                    <div className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Bot size={18} />
                                </div>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xs text-white tracking-wide uppercase">Emy</h3>
                                <p className="text-[10px] text-slate-500 font-mono font-medium">Automation Active Engine</p>
                            </div>
                        </div>
                        <button
                            onClick={() => dispatch(closeChat())}
                            className="text-slate-500 hover:text-white transition-colors text-xl font-light p-1"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Chat Body Streams Layout */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs leading-relaxed transition-all ${msg.sender === "user"
                                        ? "bg-purple-600 text-white rounded-tr-none font-medium shadow-md shadow-purple-950/20"
                                        : "bg-slate-900 text-slate-200 rounded-tl-none border border-slate-800/80 shadow-sm"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Requirement 3: INITIAL CHOICE OPTIONS CHIPS (Input locks when active) */}
                        {chatStep === 0 && (
                            <div className="flex flex-col gap-2 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[85%]">
                                <button
                                    onClick={() => handleChoiceSelection("bot", "Build an AI chatbot like me")}
                                    className="w-full text-left bg-slate-900 hover:bg-slate-850 text-purple-300 border border-purple-500/10 px-3 py-2.5 rounded-xl text-[11px] font-semibold transition-all hover:translate-x-0.5"
                                >
                                    🤖 Build an AI chatbot like me
                                </button>
                                <button
                                    onClick={() => handleChoiceSelection("webapp", "Create a stunning web-app")}
                                    className="w-full text-left bg-slate-900 hover:bg-slate-850 text-indigo-300 border border-indigo-500/10 px-3 py-2.5 rounded-xl text-[11px] font-semibold transition-all hover:translate-x-0.5"
                                >
                                    🌐 Create a stunning webapp
                                </button>
                                <button
                                    onClick={() => handleChoiceSelection("mobile", "Build a magnificent mobile app")}
                                    className="w-full text-left bg-slate-900 hover:bg-slate-850 text-sky-300 border border-sky-500/10 px-3 py-2.5 rounded-xl text-[11px] font-semibold transition-all hover:translate-x-0.5"
                                >
                                    📱 Build a magnificent mobile app
                                </button>
                                <button
                                    onClick={() => handleChoiceSelection("contact", "Simply contact Ekene")}
                                    className="w-full text-left bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 px-3 py-2.5 rounded-xl text-[11px] font-semibold transition-all hover:translate-x-0.5"
                                >
                                    ✉️ Simply contact Ekene
                                </button>
                            </div>
                        )}

                        {/* Requirement 6: POST-CAPTURE INTERACTIVE ACTION PORTS */}
                        {chatStep === 4 && (
                            <div className="flex flex-col gap-2 pt-2 animate-in zoom-in-95 duration-200">
                                {/* Action Link 1: Redirect to Calendly Pipeline */}
                                <a
                                    href={calendlyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-xl text-xs font-bold shadow-lg shadow-purple-950/40 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all text-center"
                                >
                                    <Calendar size={14} />
                                    <span>Schedule 15-Min Call</span>
                                </a>

                                {/* Action Link 2: Open Mail App with Detailed Blueprint Template */}
                                <a
                                    href={generateMailtoLink()}
                                    className="w-full bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white py-3 px-4 rounded-xl text-xs font-bold border border-slate-800 hover:border-slate-700 flex items-center justify-center gap-2 transition-all text-center"
                                >
                                    <Mail size={14} className="text-purple-400" />
                                    <span>Send Direct Email</span>
                                </a>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input System Pipeline Block Forms */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                        <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder={
                                chatStep === 0
                                    ? "Select an option above to unlock..."
                                    : chatStep === 1
                                        ? "Enter your full name..."
                                        : chatStep === 2
                                            ? "Enter your best phone number..."
                                            : chatStep === 3
                                                ? "Enter your email address..."
                                                : "All logs synced successfully."
                            }
                            // Disabled conditionally during initial selection or final link display
                            disabled={chatStep === 0 || chatStep === 4}
                            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-purple-500 placeholder-slate-600 transition-colors disabled:opacity-40"
                        />
                        <button
                            type="submit"
                            disabled={chatStep === 0 || chatStep === 4 || !chatInput.trim()}
                            className="bg-purple-600 hover:bg-purple-500 disabled:bg-slate-950 text-white px-4 rounded-xl text-xs font-bold transition-all disabled:text-slate-600 border border-transparent disabled:border-slate-800/60"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBot;