import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import WelcomePage from "../UI/Pages/WelcomePage";
import About from "../UI/Pages/About";
import Projects from "../UI/Pages/Projects";
import SoftwareEng from "../UI/Pages/Software";
import Entreprener from "../UI/Pages/Entreprener";
import Tech from "../UI/Pages/Tech";
import ErrorPage from "../UI/Pages/Error";
import Articles from "../UI/Pages/Articles";
import Libary from "../UI/Pages/Library";
import Posts from "../UI/Pages/Posts";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Navbar from "../UI/Components/Navbar";
import FloatingTechLogos from "../UI/Components/FloatingTechLogos";
import Podcast from "../UI/Pages/Podcast";
import ScrollToTop from "../UI/Components/ScrollToTop";
import Contact from "../UI/Pages/Contact";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/software-eng" element={<SoftwareEng />} />
        <Route path="/entrepreneur" element={<Entreprener />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/pricing" element={<Tech />} />
        <Route path="/library/articles" element={<Articles />} />
        <Route path="/library" element={<Libary />} />
        <Route path="/library/articles/posts/:articleId" element={<Posts />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const Index: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      {/* <FloatingTechLogos /> */}
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default Index;
