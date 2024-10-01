import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "../UI/Pages/WelcomePage";
import About from "../UI/Pages/About";
import Projects from "../UI/Pages/Projects";
import SoftwareEng from "../UI/Pages/Software";
import Entreprener from "../UI/Pages/Entreprener";
import Tech from "../UI/Pages/Tech";

const Index: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/software-eng" element={<SoftwareEng />} />
        <Route path="/entrepreneur" element={<Entreprener />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/pricing" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
