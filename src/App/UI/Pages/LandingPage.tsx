import NavbarNew from '../Components/NavbarNew';
import { FaLinkedin, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import Container from '../Components/Container';

const LandingPage = () => {
    return (
        <Container children={
            <>
                <NavbarNew />
                <div className="text-center px-4 md:px-0 my-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4">
                        Senior Software Engineer | Tech Educator
                    </h1>
                    <p className="text-lg md:text-2xl text-black font-medium leading-relaxed">
                        Always remember that no one is better than you, you just don't know what they know yet.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center px-4 md:px-0 my-10 space-y-6">

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-4">
                        <a href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 transition text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/kenny.okoli1/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 transition text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="https://github.com/developerekene" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 transition text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://studio.youtube.com/channel/UCSFULPR_Lqt1kJAi6m4iKrw" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 transition text-2xl">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </>
        } />
    )
}

export default LandingPage