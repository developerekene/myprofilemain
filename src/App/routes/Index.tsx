import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../UI/Pages/About";
import ErrorPage from "../UI/Pages/Error";
import Podcast from "../UI/Pages/Podcast";
import ScrollToTop from "../UI/Components/ScrollToTop";
import Contact from "../UI/Pages/Contact";
import LandingPage from "../UI/Pages/LandingPage";
import BookScreen from "../UI/Pages/BookScreen";
import MentoringScreen from "../UI/Pages/MentoringScreen";
import PodcastScreen from "../UI/Pages/PodcastScreen";
import CoursesScreen from "../UI/Pages/CoursesScreen";
import ContactScreen from "../UI/Pages/ContactScreen";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/mentoring" element={<MentoringScreen />} />
        <Route path="/podcasts" element={<PodcastScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/books" element={<BookScreen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const Index: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default Index;
