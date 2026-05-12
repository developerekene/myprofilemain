import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaArrowLeft, FaGraduationCap, FaBriefcase, FaMicrochip, FaGlobe } from "react-icons/fa";

const AboutEkene: React.FC = () => {
  const [experienceVisible, setExperienceVisible] = useState(false);

  const experienceList = [
    { title: "Senior Software Engineer", company: "D’roid Technologies", period: "2023 - Current" },
    { title: "Senior Software Engineer", company: "Eco Bank", period: "2022 - 2023" },
    { title: "React Native Engineer", company: "Sanwo Pay Inc, Nigeria", period: "Feb 2022 – May 2022" },
    { title: "Mobile Engineer", company: "DrugStoc, Ibadan Nigeria", period: "Sep 2021 – Feb 2022" },
    { title: "Mobile Engineer", company: "Coaster Technologies, Ibadan Nigeria", period: "Mar 2021 – Aug 2021" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Space */}
      <div className="max-w-5xl mx-auto px-6 pt-12">
        <a
          href="/"
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-purple-600 font-bold transition-colors mb-12 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </a>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-4">
            About <span className="text-purple-600">Ekene.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl leading-relaxed">
            Lead Software Engineer, Tech Educator, and Founder
            building <span className="text-pink-500">intelligent systems</span> that scale.
          </p>

          {/* Socials */}
          <div className="flex space-x-6 mt-8">
            <a href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/" target="_blank" className="text-2xl text-gray-400 hover:text-purple-600 transition-colors"><FaLinkedin /></a>
            <a href="https://www.facebook.com/kenny.okoli1/" target="_blank" className="text-2xl text-gray-400 hover:text-purple-600 transition-colors"><FaFacebook /></a>
            <a href="https://studio.youtube.com/channel/UCSFULPR_Lqt1kJAi6m4iKrw" target="_blank" className="text-2xl text-gray-400 hover:text-purple-600 transition-colors"><FaYoutube /></a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 pb-24">

          {/* Main Story */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
                Who is Ekenedilichukwu?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Ekenedilichukwu is a Senior Software Engineer with 6+ years of experience building high-performance
                web and mobile applications focusing on <strong>React and React Native</strong>.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                He is the creator of <span className="text-purple-600 font-bold">Ogoo</span>, an AI-powered healthcare assistant designed to deliver proactive medical intelligence. He approaches every product as a living system—something that must evolve, adapt, and serve human needs with precision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
                Founder Journey
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ekene founded Ogoo to redesign how people interact with healthcare. Rather than reactive care,
                he envisions proactive, AI-assisted systems that anticipate needs.
                His journey is rooted in <span className="italic font-medium text-gray-900">systems thinking</span>—combining
                AI, behavioral psychology, and scalable infrastructure.
              </p>
            </section>

            <button
              onClick={() => setExperienceVisible(true)}
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-100 flex items-center gap-3"
            >
              <FaBriefcase /> View Full Experience
            </button>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <FaMicrochip className="text-purple-600 text-3xl mb-4" />
              <h3 className="font-black text-gray-900 mb-3">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React Native", "TypeScript", "Next.js", "Node.js", "AWS", "AI Integration", "System Design"].map(tech => (
                  <span key={tech} className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-600 border border-gray-200">
                    {tech}
                  </span>
                ))}
                <span className="text-purple-600 text-xs font-bold p-1">+ many more</span>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <FaGraduationCap className="text-pink-500 text-3xl mb-4" />
              <h3 className="font-black text-gray-900 mb-3">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-black text-gray-900">B.Sc Computer Science</p>
                  <p className="text-xs text-gray-500">National Open University</p>
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900">B.Ed Chemistry Education</p>
                  <p className="text-xs text-gray-500">Cross River University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      {experienceVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setExperienceVisible(false)}></div>
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setExperienceVisible(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 font-bold hover:bg-gray-200"
            >
              ✕
            </button>
            <h3 className="text-3xl font-black text-gray-900 mb-8">Professional Journey</h3>
            <div className="space-y-6">
              {experienceList.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                    {index !== experienceList.length - 1 && <div className="w-[2px] h-full bg-gray-100 my-1"></div>}
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900">{item.title}</h4>
                    <p className="text-purple-600 font-bold text-sm">{item.company}</p>
                    <p className="text-gray-400 text-xs font-medium">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutEkene;