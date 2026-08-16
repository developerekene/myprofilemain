import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../UI/Pages/About";
import ErrorPage from "../UI/Pages/Error";
import Podcast from "../UI/Pages/Podcast";
import ScrollToTop from "../UI/Components/ScrollToTop";
import LandingPage from "../UI/Pages/LandingPage";
import BookScreen from "../UI/Pages/BookScreen";
import MentoringScreen from "../UI/Pages/MentoringScreen";
import PodcastScreen from "../UI/Pages/PodcastScreen";
import CoursesScreen from "../UI/Pages/CoursesScreen";
import ContactScreen from "../UI/Pages/ContactScreen";
import ProjectsScreen from "../UI/Pages/ProjectsScreen";
import TermsConditions from "../UI/Pages/TermsConditions";
import PrivacyPolicy from "../UI/Pages/PrivacyPolicy";
import WebinarRegistration from "../UI/Pages/WebinarRegistration";
import ILeadScreen from "../UI/Pages/ILeadScreen";
import LiftOff from "../UI/Pages/LiftOff";
import DevServices from "../UI/Pages/DevServices";
import PaymentConfirmation from "../UI/Pages/PaymentConfirmation";
import ToolShowcase from "../UI/Pages/ToolShowCase";
import MenLearn from "../UI/Pages/landingSchool";
import AiAssistant from "../UI/Pages/AiAssistant";
import MobileSolutions from "../UI/Pages/MobileSolutions";
import WebSolutions from "../UI/Pages/WebSolutions";
import MentorshipApply from "../UI/Pages/MentorshipApply";
import GetYourAgent from "../UI/Pages/GetYourAgent";
import ClashOfKingsScreen from "../UI/Pages/ClashOfKingsScreen";
import PrivacyAndPolicy from "../UI/Pages/PrivacyAndPolicy";
import TermsAndConditions from "../UI/Pages/TermsAndCondition";
import AllApps from "../UI/Pages/AllApps";
import SystemsOneLandingPage from "../UI/Pages/SystemsOne/SystemsOne";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-the-engineer" element={<About />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/mentoring" element={<MentoringScreen />} />
        <Route path="/podcasts" element={<PodcastScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/clash-of-kings" element={<ClashOfKingsScreen />} />
        <Route path="/mentoring/learn" element={<MenLearn />} />
        <Route path="/books" element={<BookScreen />} />
        <Route path="/ilead" element={<ILeadScreen />} />
        <Route path="/tools" element={<ToolShowcase />} />
        <Route path="/get-your-agent" element={<GetYourAgent />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/askmehow" element={<DevServices />} />
        <Route path="/liftoff-tech-conference" element={<LiftOff />} />
        <Route path="/mentorship/application" element={<MentorshipApply />} />
        <Route path="/submit-feedback" element={<MentorshipApply />} />
        <Route path="/AI-Assistant" element={<AiAssistant />} />
        <Route path="/mobile-solutions" element={<MobileSolutions />} />
        <Route path="/web-solutions" element={<WebSolutions />} />
        <Route path="/webinar-registration" element={<WebinarRegistration />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
        <Route path="/apps/systems-one" element={<SystemsOneLandingPage />} />
        <Route path="/apps" element={<AllApps />} />
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
