import { Bot, Calendar, Mail, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeChat, openChat } from "../../Redux/Slices/chatSlice";
import { RootState } from "../../Redux/Store";
import { GOOGLE_DATA_PIPELINE_URL } from "../../utils/constants/Data";

interface ContactLead {
    firstName?: string;
    lastName?: string;
    email?: string;
    company?: string;
    purpose?: string;
    message?: string;
}

type ChatMessage = {
    sender: "bot" | "user";
    text: string;
};

const ContactChatBot: React.FC = () => {

    const dispatch = useDispatch();

    const chatOpen = useSelector(
        (state: RootState) => state.chat.chatOpen
    );

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            sender: "bot",
            text:
                "👋 Welcome! I'm KENE, your AI Client Concierge. I'll collect a few details so our team can get back to you quickly.\n\nLet's begin.\n\nWhat's your first name?"
        }
    ]);

    const [input, setInput] = useState("");

    const [lead, setLead] = useState<ContactLead>({});

    /*
        0 = First Name
        1 = Last Name
        2 = Email
        3 = Company
        4 = Purpose
        5 = Message
        6 = Finished
    */

    const PURPOSES = [
        "🤖 AI Chatbot",
        "🌐 Website Development",
        "📱 Mobile App",
        "⚙️ Custom Software",
        "📊 Consultancy",
        "🤝 Partnership"
    ];

    const [step, setStep] = useState(0);

    const [typing, setTyping] = useState(false);

    const chatEndRef = useRef<HTMLDivElement>(null);

    const calendlyUrl = "https://calendly.com/droidtechint";

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages]);

    const sendLead = async (payload: ContactLead) => {
        try {

            await fetch(GOOGLE_DATA_PIPELINE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

        } catch (err) {

            console.error(err);

        }
    };

    const botReply = (text: string) => {

        setTyping(true);

        setTimeout(() => {

            setTyping(false);

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text
                }
            ]);

        }, 900);

    };



    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (!input.trim()) return;

        const value = input;

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: value
            }
        ]);

        setInput("");

        switch (step) {

            case 0:

                setLead(prev => ({
                    ...prev,
                    firstName: value
                }));

                setStep(1);

                botReply(
                    `Nice to meet you, ${value}! What's your last name?`
                );

                break;

            case 1:

                setLead(prev => ({
                    ...prev,
                    lastName: value
                }));

                setStep(2);

                botReply(
                    "Great. What's the best email address to reach you?"
                );

                break;

            case 2:

                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(value)) {

                    botReply(
                        "That doesn't look like a valid email address. Could you try again?"
                    );

                    return;

                }

                setLead(prev => ({

                    ...prev,
                    email: value

                }));

                setStep(3);

                botReply(
                    "Perfect! What's your company called? (Type 'None' if you don't have one.)"
                );

                break;

            case 3:

                setLead(prev => ({
                    ...prev,
                    company: value
                }));

                setStep(4);

                botReply(
                    "What can we help you with today?\n\nExamples:\n• AI Chatbot\n• Website\n• Mobile App\n• Consultancy"
                );

                break;

            case 4:

                setLead(prev => ({
                    ...prev,
                    purpose: value
                }));

                setStep(5);

                botReply(
                    "Excellent. Finally, tell us a little more about your project."
                );

                break;

            case 5:

                const completed = {
                    ...lead,
                    message: value
                };

                const reference: any =

                    "KENE-" + Math.floor(
                        100000 + Math.random() * 900000
                    );

                setLead(completed);


                sendLead(completed);

                setStep(6);

                botReply(

                    `✅ Thanks ${completed.firstName}!
                    
                    Your enquiry has been securely submitted.
                    
                    Reference ID
                    
                    ${reference}
                    
                    Our team usually replies within one business day.`

                );

                break;

        }

    };

    const progress = [
        "First Name",
        "Last Name",
        "Email",
        "Company",
        "Purpose",
        "Message"
    ]

    return (
        <div className="fixed bottom-6 right-6 z-50">

            {/* Floating Button */}

            {!chatOpen && (
                <button
                    onClick={() => dispatch(openChat())}
                    className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full px-5 py-4 shadow-2xl transition-all hover:scale-105"
                >
                    <div className="relative">
                        <Bot size={22} />

                        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
                    </div>

                    <div className="hidden sm:block text-left">
                        <p className="text-xs font-bold">
                            Chat with KENE
                        </p>

                        <p className="text-[10px] text-purple-200">
                            AI Client Concierge
                        </p>
                    </div>
                </button>
            )}

            {chatOpen && (

                <div className="w-[390px] h-[640px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-[0_20px_80px_rgba(0,0,0,.5)] flex flex-col">

                    {/* HEADER */}

                    <div className="bg-slate-900 border-b border-slate-800 p-5">

                        <div className="flex justify-between items-center">

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">

                                    <Bot
                                        size={22}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <h2 className="font-black text-white">
                                        KENE
                                    </h2>

                                    <p className="text-xs text-slate-400">
                                        AI Client Concierge
                                    </p>

                                    <div className="flex items-center gap-2 mt-1">

                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                                        <span className="text-[10px] text-emerald-400">
                                            Online
                                        </span>

                                    </div>

                                </div>

                            </div>

                            <button
                                onClick={() => dispatch(closeChat())}
                                className="text-slate-500 hover:text-white"
                            >
                                <X size={18} />
                            </button>

                        </div>

                    </div>

                    {/* PROGRESS */}

                    {step < 6 && (

                        <div className="px-5 py-4 border-b border-slate-900 bg-slate-950">

                            <div className="flex justify-between text-[10px] uppercase font-bold text-slate-500">

                                <span>
                                    Step {step + 1} of 6
                                </span>

                                <span>
                                    {progress[step]}
                                </span>

                            </div>

                            <div className="mt-3 h-2 rounded-full bg-slate-900 overflow-hidden">

                                <div
                                    style={{
                                        width: `${((step + 1) / 6) * 100}%`
                                    }}
                                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-700"
                                />

                            </div>

                        </div>

                    )}

                    {/* CHAT */}

                    <div className="flex-1 overflow-y-auto px-5 py-6 bg-slate-950 space-y-5">

                        {messages.map((message, index) => (

                            <div
                                key={index}
                                className={`flex ${message.sender === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >

                                <div
                                    className={`max-w-[82%] px-5 py-4 text-sm leading-relaxed shadow-lg ${message.sender === "user"
                                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl rounded-br-md"
                                        : "bg-slate-900 border border-slate-800 text-slate-200 rounded-3xl rounded-bl-md"
                                        }`}
                                >

                                    <div className="whitespace-pre-wrap">
                                        {message.text}
                                    </div>

                                    <div className="mt-2 text-[10px] opacity-50">
                                        {new Date().toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </div>

                                </div>

                            </div>

                        ))}

                        {typing && (

                            <div className="flex">

                                <div className="bg-slate-900 border border-slate-800 rounded-3xl rounded-bl-md px-5 py-4">

                                    <p className="text-xs text-slate-400 mb-3">

                                        KENE is typing...

                                    </p>

                                    <div className="flex gap-2">

                                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />

                                        <span
                                            className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                                            style={{ animationDelay: ".2s" }}
                                        />

                                        <span
                                            className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                                            style={{ animationDelay: ".4s" }}
                                        />

                                    </div>

                                </div>

                            </div>

                        )}

                        <div ref={chatEndRef} />

                    </div>
                    {
                        step === 4 && !typing && (

                            <div className="px-5 pb-4 flex flex-wrap gap-2">

                                {PURPOSES.map((item) => (

                                    <button
                                        key={item}
                                        onClick={() => {

                                            setMessages(prev => [
                                                ...prev,
                                                {
                                                    sender: "user",
                                                    text: item
                                                }
                                            ]);

                                            setLead(prev => ({
                                                ...prev,
                                                purpose: item
                                            }));

                                            setStep(5);

                                            botReply(
                                                "Great choice! Tell me a little about your project and what you'd like us to build."
                                            );

                                        }}
                                        className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900 hover:bg-purple-600 hover:border-purple-500 transition text-sm text-white"
                                    >
                                        {item}
                                    </button>

                                ))}

                            </div>

                        )
                    }

                    {/* FOOTER */}

                    <form
                        onSubmit={handleSubmit}
                        className="bg-slate-900 border-t border-slate-800 p-4"
                    >

                        {step < 6 ? (

                            <div className="flex gap-3">

                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                                    placeholder={
                                        step === 0
                                            ? "Your first name..."
                                            : step === 1
                                                ? "Your last name..."
                                                : step === 2
                                                    ? "Email address..."
                                                    : step === 3
                                                        ? "Company name..."
                                                        : step === 4
                                                            ? "Purpose of enquiry..."
                                                            : "Tell us about your project..."
                                    }
                                />

                                <button
                                    type="submit"
                                    className="px-5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all"
                                >
                                    <Send
                                        size={18}
                                        className="text-white"
                                    />
                                </button>

                            </div>

                        ) : (

                            <div className="space-y-3">

                                <a
                                    href={calendlyUrl}
                                    target="_blank"
                                    className="flex justify-center items-center gap-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl py-4 font-semibold text-white"
                                >
                                    <Calendar size={18} />

                                    Book Discovery Call
                                </a>

                                <a
                                    href="mailto:hello@ekenedilichukwu.com"
                                    className="flex justify-center items-center gap-2 w-full border border-slate-700 rounded-2xl py-4 text-slate-200 hover:bg-slate-900"
                                >
                                    <Mail size={18} />

                                    Send Direct Email
                                </a>

                            </div>

                        )}

                    </form>

                </div>

            )}

        </div>
    );
};

export default ContactChatBot;