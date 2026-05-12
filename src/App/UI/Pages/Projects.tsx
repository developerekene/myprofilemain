import React, { useState } from "react";
import NavbarNew from "../Components/NavbarNew";
import { LuSearch, LuArrowLeft, LuExternalLink, LuLayers, LuLayoutGrid, LuCode2 } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { DATA } from "../../utils/constants/Data";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [search, setSearch] = useState<string>("");

  const dropdownMenu = [
    "All",
    "Front-End Projects",
    "Mobile App Projects",
    "NPM Projects",
  ];

  const filteredProjects = DATA.projectsHomePage.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      <NavbarNew />

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        {!selectedProject && (
          <header className="mb-16">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-purple-600 rounded-full"></div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9]">
              Selected <span className="text-purple-600">Works.</span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
              Engineering solutions across <span className="text-pink-500">Mobile</span>, 
              <span className="text-purple-600"> Web</span>, and <span className="text-gray-900 font-bold"> Open Source</span>.
            </p>
          </header>
        )}

        {/* Search & Filter - Redesigned to match Landing Page Buttons */}
        {!selectedProject && (
          <div className="flex flex-col md:flex-row gap-6 mb-20">
            <div className="relative flex-1 group">
              <LuSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors text-xl" />
              <input
                placeholder="Search projects..."
                className="w-full pl-14 pr-6 py-5 bg-gray-50 border-2 border-transparent rounded-[2rem] focus:outline-none focus:border-purple-600 focus:bg-white transition-all font-bold text-gray-900 shadow-sm"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="h-full flex items-center justify-between space-x-8 px-10 py-5 bg-gray-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl"
              >
                <span>{filter}</span>
                <FaChevronDown className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              {isFilterOpen && (
                <div className="absolute top-full right-0 mt-4 w-64 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  {dropdownMenu.map((item) => (
                    <button
                      key={item}
                      onClick={() => { setFilter(item); setIsFilterOpen(false); }}
                      className={`w-full text-left px-6 py-4 rounded-2xl text-sm font-black transition-all ${
                        filter === item ? 'bg-purple-50 text-purple-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Project View Logic */}
        {selectedProject ? (
          /* PROJECT DETAIL VIEW - Refined with Pink/Purple Accents */
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <button
              onClick={() => setSelectedProject(null)}
              className="inline-flex items-center space-x-3 text-gray-900 font-black text-sm uppercase tracking-widest hover:text-purple-600 transition-all mb-12"
            >
              <LuArrowLeft strokeWidth={3} />
              <span>Back to Gallery</span>
            </button>

            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 aspect-square bg-gray-50 rounded-[3rem] p-16 flex items-center justify-center border border-gray-100 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={selectedProject.icon}
                  alt={selectedProject.name}
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-7 space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
                    {selectedProject.name}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    {selectedProject.appDesc}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 bg-purple-50 rounded-[2rem] border border-purple-100">
                    <h3 className="flex items-center gap-2 font-black text-purple-900 text-xs uppercase tracking-widest mb-4">
                      <LuLayers className="text-purple-600" /> Key Impact
                    </h3>
                    <p className="text-purple-800 font-bold leading-relaxed text-sm">
                      {selectedProject.responsibility}
                    </p>
                  </div>

                  <div className="p-8 bg-gray-900 rounded-[2rem]">
                    <h3 className="flex items-center gap-2 font-black text-pink-500 text-xs uppercase tracking-widest mb-4">
                      <LuCode2 /> Stack
                    </h3>
                    <p className="text-gray-300 font-bold leading-relaxed text-sm">
                      {selectedProject.technologies}
                    </p>
                  </div>
                </div>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    className="inline-flex items-center space-x-4 bg-purple-600 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-900 hover:translate-y-[-4px] transition-all shadow-2xl shadow-purple-200"
                  >
                    <span>Launch Project</span>
                    <LuExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* PROJECT GRID VIEW - Bento Style */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(item)}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[4/5] bg-gray-50 rounded-[2.5rem] p-12 border-2 border-transparent group-hover:border-purple-600 group-hover:bg-white transition-all duration-500 flex flex-col items-center justify-between text-center overflow-hidden">
                  <div className="w-full h-2/3 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-40 h-40 object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 drop-shadow-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500">
                       {item.category.split(' ')[0]}
                    </p>
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-purple-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <LuLayoutGrid size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;