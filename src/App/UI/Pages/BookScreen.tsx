import React, { useState } from "react";
import { FaBook } from "react-icons/fa";

const PRIMARY_BLUE = "text-blue-900";
const PRIMARY_ORANGE = "#E64A19";

const BOOKS = [
    { id: "b1", title: "The Silent Architect", category: "Philosophy", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400" },
    { id: "b2", title: "Cognitive Networks", category: "Technology", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400" },
    { id: "b3", title: "Beyond the Binary", category: "Logic", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400" },
    { id: "b4", title: "Human Intelligence", category: "Psychology", cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400" },
    { id: "b5", title: "Neural Architectures", category: "Technology", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=400" },
];

const categories = ["All", "Technology", "Philosophy", "Logic", "Psychology"];

const BookScreen: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredBooks =
        selectedCategory === "All"
            ? BOOKS
            : BOOKS.filter((book) => book.category === selectedCategory);

    return (
        <div className="bg-white min-h-screen px-4 md:px-20 py-10">

            {/* Header */}
            <div className="mb-8">
                <a href="/" className="text-blue-900 font-bold hover:underline">
                    &larr; Back to Home
                </a>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col items-center text-center mb-10">
                <FaBook className="text-5xl md:text-6xl text-orange-600" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-4">
                    My Written Work
                </h1>
                <p className="text-gray-700 text-base md:text-lg mt-2 max-w-3xl leading-relaxed">
                    A collection of my thinking across technology, systems, philosophy, and intelligence.
                </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2 rounded-full font-semibold transition
              ${selectedCategory === cat ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                    <div
                        key={book.id}
                        className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer bg-white"
                    >
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-lg md:text-xl font-bold text-black truncate">
                                {book.title}
                            </h2>
                            <p className="text-sm md:text-base text-gray-500 mt-1">
                                {book.category}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookScreen;