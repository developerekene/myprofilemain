import React from "react";
import { FaPlay, FaMicrophone } from "react-icons/fa";

const PRIMARY_ORANGE = "bg-orange-600";
const PRIMARY_BLUE = "text-blue-900";

const PODCASTS = [
    { id: "p1", title: "The Future of Neural Link", duration: "24 mins", series: "Tech Talk" },
    { id: "p2", title: "Building Nerve Systems", duration: "18 mins", series: "Architecture" },
    { id: "p3", title: "Cognitive Interfaces", duration: "32 mins", series: "AI Systems" },
    { id: "p4", title: "Human-Machine Thinking", duration: "27 mins", series: "Philosophy & Tech" },
];

const PodcastScreen: React.FC = () => {
    return (
        <div className="bg-white min-h-screen px-4 md:px-20 py-10">

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <a href="/" className="text-blue-900 font-bold">&larr; Back to Home</a>
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Podcast</h2>
                <div className="w-6" />
            </div>

            {/* Hero Section */}
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900">Voice & Vision</h3>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto leading-relaxed">
                    Conversations on systems, intelligence, and future technology.
                </p>
            </div>

            {/* Podcast List */}
            <div className="space-y-6">
                {PODCASTS.map((pod) => (
                    <div
                        key={pod.id}
                        className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        {/* Play Icon */}
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${PRIMARY_ORANGE} text-white`}>
                            <FaPlay className="text-lg" />
                        </div>

                        {/* Title & Subtitle */}
                        <div className="flex-1 ml-4">
                            <h4 className="text-lg font-bold text-black truncate">{pod.title}</h4>
                            <p className="text-gray-500 text-sm mt-1">{pod.duration} • {pod.series}</p>
                        </div>

                        {/* Microphone Icon */}
                        <FaMicrophone className="text-gray-400 text-xl" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PodcastScreen;