/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../UI/pages/Contact/Contact";
import About from "../UI/pages/About/About";
import Home from "../UI/pages/Home/Home";
import Services from "../UI/pages/Services/Services";
import Projects from "../UI/pages/Projects/Projects";
import Courses from "../UI/pages/Courses/Courses";
import DevTools from "../UI/pages/DevTools/DevTools";
import More from "../UI/pages/More/More";
import Privacy from "../UI/pages/Privacy/Privacy";
import Trainings from "../UI/pages/Trainings/Trainings";
import ServicesPayment from "../UI/pages/ServicesPayment/ServicesPayment";
import CoursesPayment from "../UI/pages/CoursesPayment/CoursesPayment";

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tools" element={<DevTools />} />
        <Route path="/more" element={<More />} />
        <Route path="/app-privacy" element={<Privacy />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/serviceP" element={<ServicesPayment />} />
        <Route path="/courseP" element={<CoursesPayment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
