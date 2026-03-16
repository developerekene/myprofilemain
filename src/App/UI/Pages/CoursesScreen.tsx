import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const PRIMARY_BLUE = "text-blue-900";
const PRIMARY_ORANGE = "#E64A19";

const COURSES = [
    { id: "c1", title: "Advanced Systems Design", lessons: 14 },
    { id: "c2", title: "UX for Complex Networks", lessons: 8 },
    { id: "c3", title: "Fullstack Engineering", lessons: 22 },
    { id: "c4", title: "Distributed Intelligence", lessons: 17 },
];

const CoursesScreen: React.FC = () => {
    return (
        <div className="bg-white min-h-screen px-4 md:px-20 py-10">

            {/* Header */}
            <div className="mb-8">
                <a href="/" className="text-blue-900 font-bold">&larr; Back to Home</a>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
                    Structured Learning
                </h1>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    Deep technical courses designed for scalable thinking.
                </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {COURSES.map((course) => (
                    <div
                        key={course.id}
                        className="bg-black rounded-2xl p-8 hover:shadow-lg transition cursor-pointer"
                    >
                        {/* Icon */}
                        <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                            style={{ backgroundColor: PRIMARY_ORANGE }}
                        >
                            <FaGraduationCap className="text-white text-lg" />
                        </div>

                        {/* Course Info */}
                        <h2 className="text-white font-extrabold text-lg mb-2">{course.title}</h2>
                        <p className="text-gray-300 text-sm">{course.lessons} Lessons</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesScreen;