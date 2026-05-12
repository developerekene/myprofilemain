import React, { useState } from "react";
import { FaArrowLeft, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const PRIMARY_ORANGE = "bg-orange-600";
const PRIMARY_BLUE = "text-blue-900";

const ContactScreen: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [text, setText] = useState("Send Message");

    const EMAILJS_SERVICE_ID = "service_o1jbklr";
    const EMAILJS_TEMPLATE_ID = "template_p8h58ur";
    const EMAILJS_PUBLIC_KEY = "hcj3DsJ8MfNfUrE8J";

    const generateReferenceNumber = () => {
        const now = new Date();
        const pad = (n: number) => n.toString().padStart(2, "0");
        const date = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(
            now.getDate()
        )}`;
        const time = `${pad(now.getHours())}${pad(now.getMinutes())}${pad(
            now.getSeconds()
        )}`;
        const random = Math.floor(1000 + Math.random() * 9000);
        return `REF-${date}-${time}-${random}`;
    };

    const referenceNumber = generateReferenceNumber();

    const templateParams = {
        name: name,
        title: `
            Thanks for reaching out through my website. I’ve received your message.
            
            Here’s a quick summary of your enquiry:
            Reference: ${referenceNumber}
            
            Message:
            "${message}"
            
            I’ll review this and get back to you as soon as possible (usually within 2 days).
            `,
        email: email,
    };

    const handleSubmit = async () => {
        setText("Sending Message...");
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

            toast.success("Message successfully sent!", {
                style: { background: "#4BB543", color: "#fff" },
            });

            setEmail("");
            setMessage("");
            setName("");
            setText("Send Message")

        } catch (error) {
            // console.error("Email send error:", error);

            toast.error("Error sending email 🚫", {
                style: { background: "#ff4d4f", color: "#fff" },
            });

        }
    }


    return (
        <div className="bg-white min-h-screen px-4 md:px-20 py-10">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <a href="/" className="flex items-center text-blue-900 font-bold hover:text-blue-700 transition">
                    <FaArrowLeft className="mr-2" /> Back to Home
                </a>

            </div>

            {/* Intro */}
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Let’s Connect</h2>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    Have a project, collaboration, or idea in mind? Send a message and I’ll respond shortly.
                </p>
            </div>

            {/* Contact Info */}
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-12">
                <div className="flex items-center mb-4">
                    <FaEnvelope className="text-orange-600 mr-4" />
                    <span className="text-gray-700 font-semibold text-base">ekenehq@gmail.com</span>
                </div>
                {/* <div className="flex items-center mb-4">
                    <FaPhone className="text-orange-600 mr-4" />
                    <span className="text-gray-700 font-semibold text-base">+44 7778 745043</span>
                </div> */}
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-orange-600 mr-4" />
                    <span className="text-gray-700 font-semibold text-base">Lincoln • United Kingdom</span>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex flex-col">
                    <label className="text-gray-800 font-bold uppercase mb-2 text-sm">Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-800 font-bold uppercase mb-2 text-sm">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-800 font-bold uppercase mb-2 text-sm">Message</label>
                    <textarea
                        placeholder="Write your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        className="border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    />
                </div>

                <button onClick={handleSubmit} className="flex items-center justify-center space-x-3 w-full md:w-auto px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg transition">
                    <FaPaperPlane />
                    <span>{text}</span>
                </button>
            </div>

        </div>
    );
};

export default ContactScreen;