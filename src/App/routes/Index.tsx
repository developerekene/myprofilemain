import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../UI/pages/Contact/Contact";
import About from "../UI/pages/About/About";
import WelcomePage from "../UI/pages/WelcomePage/WelcomePage";
import Home from "../UI/pages/Home/Home";
import Services from "../UI/pages/Services/Services";
import Projects from "../UI/pages/Projects/Projects";
import Courses from "../UI/pages/Courses/Courses";
import DevTools from "../UI/pages/DevTools/DevTools";
import More from "../UI/pages/More/More";
import Privacy from "../UI/pages/Privacy/Privacy";

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/tools" element={<DevTools/>} />
        <Route path="/more" element={<More/>}/>
        <Route path="/app-privacy" element={<Privacy/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
