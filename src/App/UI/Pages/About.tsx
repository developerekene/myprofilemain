import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const PRIMARY_ORANGE = "#E64A19";

const AboutEkene: React.FC = ({ navigation }: any) => {
  const [experienceVisible, setExperienceVisible] = useState(false);

  const experienceList = [
    "D’roid Technologies | Senior Software Engineer (2023 - Current)",
    "Eco Bank | Senior Software Engineer (2022 - 2023)",
    "React Native Engineer | Sanwo Pay Inc, Nigeria (Feb 2022 – May 2022)",
    "Mobile Engineer | DrugStoc, Ibadan Nigeria (Sep 2021 – Feb 2022)",
    "Mobile Engineer | Coaster Technologies, Ibadan Nigeria (Mar 2021 – Aug 2021)",
  ];

  return (
    <div className="bg-white min-h-screen px-4 md:px-20 py-10">
      {/* Header */}
      <div className="mb-8">
        <a
          href="/"
          className="text-blue-900 font-bold"
        >
          &larr; Back to Home
        </a>
      </div>

      {/* About */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
        About Ekene
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Lead Software Engineer | Tech Educator and Advocate | Founder and Entrepreneur
      </p>

      {/* Socials */}
      <div className="flex space-x-4 mb-10">
        <a
          href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:text-blue-600 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/kenny.okoli1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:text-blue-600 transition text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://studio.youtube.com/channel/UCSFULPR_Lqt1kJAi6m4iKrw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:text-blue-600 transition text-2xl"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Who He Is */}
      <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">Who is Ekenedilichukwu?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Ekenedilichukwu is a systems-focused software engineer and product founder building
        intelligent digital infrastructure at the intersection of AI, healthcare, and scalable cloud systems.
        He is the creator of Ogoo — an AI-powered healthcare assistant designed to deliver proactive,
        contextual, and accessible medical intelligence.
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed">
        His engineering philosophy prioritizes clarity, modularity, performance, and long-term scalability.
        He approaches every product as a living system — something that must evolve, adapt, and serve human needs with precision.
      </p>

      {/* Core Technologies */}
      <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">Core Technologies</h2>
      <div className="border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h3 className="text-orange-600 font-bold mb-2">Engineering Stack</h3>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          React Native, React.js, Next.js, TypeScript, JavaScript (ES6+), Node.js,
          Express, Firebase (Auth, Firestore, Functions), AWS (EC2, S3, Lambda),
          REST APIs, GraphQL, PostgreSQL, MongoDB, Redis, Docker,
          CI/CD pipelines, Cloud Architecture, System Design Patterns,
          State Management (Redux, Zustand), Performance Optimization,
          Secure Authentication Systems, Payment Integrations.
        </p>
      </div>

      {/* Specializations */}
      <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">Specializations</h2>
      <div className="border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h3 className="text-orange-600 font-bold mb-2">Advanced Focus Areas</h3>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
          • AI-integrated product systems{`\n`}
          • Scalable backend architecture for high-growth applications{`\n`}
          • Distributed and decentralized system design{`\n`}
          • Mobile-first performance engineering{`\n`}
          • Secure fintech & healthcare infrastructures{`\n`}
          • Cloud-native development and DevOps strategy{`\n`}
          • Human-centered UX for complex technical systems{`\n`}
          • Technical product strategy & long-term architecture planning
        </p>
      </div>

      {/* Experience Button */}
      <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">Professional Experience</h2>
      <button
        className="bg-orange-600 text-white font-bold px-6 py-3 rounded-lg mb-6 hover:bg-orange-500 transition"
        onClick={() => setExperienceVisible(true)}
      >
        View Full Experience
      </button>

      {/* Education */}
      <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">Education</h2>
      <div className="border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h3 className="text-orange-600 font-bold mb-2">Academic Background</h3>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          B.Sc Computer Science{"\n"}
          Institute National Open University (2014 - 2019)
          {"\n\n"}
          B.Ed Chemistry Education{"\n"}
          Cross River University (2013 - 2018)
        </p>
      </div>

      {/* Founder Journey */}
      <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">Founder Journey</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ekene founded Ogoo with a singular objective — to redesign how people interact
        with healthcare intelligence. Rather than reactive care, he envisions proactive,
        AI-assisted systems that anticipate needs, interpret data contextually, and
        empower users with clarity before uncertainty becomes crisis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        His founder journey is rooted in system thinking — combining medical workflows,
        artificial intelligence, behavioral psychology, and scalable infrastructure
        into one cohesive digital experience. Ogoo is not just an application;
        it is a long-term infrastructure play aimed at reshaping access to health insight globally.
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        From early architecture design to production-scale deployment,
        he leads product direction, AI system integration, backend scalability,
        and strategic growth planning.
      </p>

      {/* Experience Modal */}
      {experienceVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-end">
          <div className="bg-white w-full md:w-2/3 rounded-t-3xl p-8 max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-blue-900">Professional Experience</h3>
              <button onClick={() => setExperienceVisible(false)} className="text-black font-bold text-2xl">&times;</button>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {experienceList.map((item, index) => (
                <li key={index} className="text-gray-700 text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutEkene;