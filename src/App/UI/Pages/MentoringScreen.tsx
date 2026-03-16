import React from "react";
import { FaCalendarAlt, FaUsers, FaClock, FaVideo, FaCommentDots, FaGraduationCap, FaArrowLeft } from "react-icons/fa";

const PRIMARY_BLUE = "text-blue-900";
const PRIMARY_ORANGE = "bg-orange-600";

const UPCOMING_SESSIONS = [
    { id: "1", topic: "Scaling AI Systems", date: "Oct 28", time: "6:00 PM", students: 32 },
    { id: "2", topic: "System Architecture Deep Dive", date: "Nov 02", time: "5:30 PM", students: 18 },
];

const PAST_SESSIONS = [
    { id: "3", topic: "Breaking into Tech", duration: "1hr 20min", students: 45 },
    { id: "4", topic: "React Native Mastery", duration: "2hr 05min", students: 27 },
];

const MENTORING_TRACKS = [
    { id: "t1", title: "AI Engineering Path", sessions: 12 },
    { id: "t2", title: "Fullstack Systems Track", sessions: 18 },
    { id: "t3", title: "Product & UX Strategy", sessions: 9 },
];

const MentoringScreen: React.FC = () => {
    return (
        <div className="bg-white min-h-screen px-4 md:px-16 py-10">

            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <a href="/" className="flex items-center text-blue-900 font-bold hover:text-blue-700 transition">
                    <FaArrowLeft className="mr-2" /> Back to Home
                </a>
                {/* <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">Mentoring</h1>
                <div className="w-6" /> */}
            </div>

            {/* Hero */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">Build with Clarity.</h2>
                <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    Join structured mentoring sessions focused on engineering depth,
                    systems thinking, and scalable innovation.
                </p>
            </div>

            {/* Upcoming Sessions */}
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Upcoming Sessions</h3>
            <div className="space-y-6">
                {UPCOMING_SESSIONS.map((session) => (
                    <div key={session.id} className="relative border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
                        <span className="absolute top-3 right-3 bg-orange-600/20 text-orange-600 font-bold text-xs px-2 py-1 rounded">LIVE</span>
                        <h4 className="text-lg font-bold mb-2">{session.topic}</h4>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                            <FaCalendarAlt className="mr-1" /> {session.date}
                            <FaClock className="ml-4 mr-1" /> {session.time}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-4">
                            <FaUsers className="mr-1" /> {session.students} Joined
                        </div>
                        <button className="flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-2 rounded font-semibold hover:bg-orange-500 transition">
                            <FaVideo /> Join Session
                        </button>
                    </div>
                ))}
            </div>

            {/* Mentoring Tracks */}
            <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Mentoring Tracks</h3>
            <div className="flex space-x-6 overflow-x-auto pb-4">
                {MENTORING_TRACKS.map((track) => (
                    <div key={track.id} className="bg-blue-900 text-white rounded-2xl p-6 min-w-[220px] shadow hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-6">
                            <FaGraduationCap />
                        </div>
                        <h4 className="font-bold text-lg">{track.title}</h4>
                        <p className="text-gray-300 mt-1">{track.sessions} Sessions</p>
                    </div>
                ))}
            </div>

            {/* Past Sessions */}
            <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Past Sessions</h3>
            <div className="space-y-4">
                {PAST_SESSIONS.map((session) => (
                    <div key={session.id} className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                            <FaVideo className="text-white" />
                        </div>
                        <div className="flex-1 ml-4">
                            <h4 className="font-bold text-black">{session.topic}</h4>
                            <p className="text-gray-600 text-sm">{session.duration} • {session.students} Participants</p>
                        </div>
                        <FaCommentDots className="text-gray-400 text-xl" />
                    </div>
                ))}
            </div>

            <div className="h-20" />
        </div>
    );
};

export default MentoringScreen;