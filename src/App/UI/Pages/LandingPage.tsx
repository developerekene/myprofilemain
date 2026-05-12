import NavbarNew from '../Components/NavbarNew';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Container from '../Components/Container';
import { Assets } from '../../utils/constants/Assets';
import { useState } from 'react';

const LandingPage: React.FC = () => {
    const [downloading, setDownloading] = useState(false);
    const [done, setDone] = useState(false);

    const handleDownload = () => {
        setDownloading(true);
        setTimeout(() => {
            setDownloading(false);
            setDone(true);
        }, 1500);
    };

    return (
        <Container children={
            <>
                <NavbarNew />

                {/* HERO SECTION */}
                <section className="pt-40 pb-32 px-4 flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-gray-900 mb-6">
                        Build skills <span className="text-purple-600">that matter.</span>
                        <br />
                        Share knowledge <span className="text-pink-500">that lasts.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
                        Senior Software Engineer and Tech Educator helping you grow faster,
                        think better, and become industry-ready through practical knowledge.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-5 w-full max-w-sm md:max-w-none justify-center">

                        {/* Primary */}
                        <a
                            href={Assets.files.cv}
                            download
                            onClick={handleDownload}
                            className="bg-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg
                            hover:translate-y-[-3px] hover:shadow-xl hover:bg-#1c0333-400 
                            active:translate-y-[1px] active:shadow-[0_2px_0px_#c2410c]
                            transition-all duration-300 text-center"
                        >
                            {downloading
                                ? "Downloading..."
                                : done
                                    ? "Resume Downloaded ✓"
                                    : "Download Resume"}
                        </a>

                        {/* Secondary */}
                        <a
                            href="/webinar-registration"
                            className="border-2 border-pink-900 text-black-900 px-10 py-4 rounded-full font-bold text-lg 
                            hover:bg-pink-900 hover:text-white transition-all text-center"
                        >
                            Join My Webinar
                        </a>

                    </div>
                </section>

                {/* SOCIAL + FOOTER */}
                <div className="flex flex-col items-center justify-center text-center px-4 pb-16 space-y-8">

                    {/* Social Icons */}
                    <div className="flex space-x-6 text-2xl">
                        <a href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/kenny.okoli1/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 transition">
                            <FaFacebook />
                        </a>
                        <a href="https://github.com/developerekene" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 transition">
                            <FaGithub />
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div className="text-sm text-gray-500 space-x-4">
                        <a href="/privacy-policy" className="hover:text-orange-500 transition">
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a href="/terms-and-conditions" className="hover:text-orange-500 transition">
                            Terms and Conditions
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Ekenedilichukwu. All rights reserved. Version: 4.2.7
                    </p>
                </div>
            </>
        } />
    );
};

export default LandingPage;