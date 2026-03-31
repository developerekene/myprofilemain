import React from "react";
import { FaCalendarAlt, FaUsers, FaClock, FaVideo, FaCommentDots, FaGraduationCap, FaArrowLeft } from "react-icons/fa";
import { Assets } from "../../utils/constants/Assets";

const PRIMARY_BLUE = "text-blue-900";
const PRIMARY_ORANGE = "bg-orange-600";

const UPCOMING_SESSIONS = [
    // {
    //     id: "s1",
    //     image: Assets.images.AIText,
    //     topic: "Maximising AI, Data and Dreams",
    //     description:
    //         "A deep dive into leveraging AI and data to turn ideas into scalable, real-world solutions while unlocking innovation and long-term impact.",
    //     date: "Mar 28, 2026",
    //     time: "4:00 PM WAT",
    //     duration: "1hr 30min",
    //     speakers: [
    //         "Ekenedilichukwu Okoli",
    //         "Guest: Stella Eneh @ D'roid Technologies",
    //     ],
    //     registered: 22,
    //     capacity: 50,
    //     level: "Advanced",
    //     tags: ["AI", "Data", "Innovation"],
    //     link: "/webinar-registration",
    // },
    {
        id: "s2",
        image: Assets.images.AIText,
        topic: "Exploring Tech in the African Continent",
        description:
            "A deep dive into Africa's Tech Regions",
        date: "April 22, 2026",
        time: "2:00 PM WAT",
        duration: "1hr 30min",
        speakers: [
            "Ekenedilichukwu Okoli",
            // "Guest: Stella Eneh @ D'roid Technologies",
        ],
        registered: 2,
        capacity: 50,
        level: "Beginner",
        tags: ["AI", "Data", "Innovation"],
        // link: "/webinar-registration",
        link: "#",
    },
];

const PAST_SESSIONS = [
    { id: "3", topic: "Maximising AI, Data and Dreams", duration: "3hr 30min", students: 22 },
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
                    <div
                        key={session.id}
                        className="relative border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <img
                            src={session.image}
                            alt={session.topic}
                            className="w-full h-48 object-cover"
                        />

                        {/* LIVE Tag */}
                        <span className="absolute top-3 right-3 bg-[#000000]/20 text-[#E64A19] font-bold text-xs px-2 py-1 rounded">
                            Incoming
                        </span>

                        <div className="p-6">
                            {/* Title */}
                            <h4 className="text-xl font-bold mb-2">{session.topic}</h4>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4">
                                {session.description}
                            </p>

                            {/* Date + Time + Duration */}
                            <div className="flex flex-wrap items-center text-gray-600 text-sm mb-3 gap-4">
                                <span className="flex items-center">
                                    <FaCalendarAlt className="mr-1" /> {session.date}
                                </span>
                                <span className="flex items-center">
                                    <FaClock className="mr-1" /> {session.time}
                                </span>
                                <span>{session.duration}</span>
                            </div>

                            {/* Speakers */}
                            <div className="text-sm text-gray-700 mb-3">
                                <span className="font-semibold">Speakers: </span>
                                {session.speakers.join(", ")}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {session.tags.map((tag: string, index: number) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-blue-100 text-blue-900 px-2 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Registration Progress */}
                            <div className="mb-4">
                                <div className="flex justify-between text-xs text-gray-600 mb-1">
                                    <span>{session.registered} Registered</span>
                                    <span>{session.capacity} Capacity</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div
                                        className="bg-[#E64A19] h-2 rounded"
                                        style={{
                                            width: `${(session.registered / session.capacity) * 100}%`,
                                        }}
                                    />
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href={session.link}
                                className="flex items-center justify-center gap-2 bg-[#E64A19] text-white px-4 py-2 rounded font-semibold hover:bg-[#d84315] transition"
                            >
                                <FaVideo /> Register Now
                            </a>
                        </div>
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