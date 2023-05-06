import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../UI/pages/Home/Home";
import Contact from "../UI/pages/Contact/Contact";
import About from "../UI/pages/About/About";
import SoftWareEng from "../UI/pages/SoftWareEng/SoftWareEng";
import Drone from "../UI/pages/Drone/Drone";
import ELearning from "../UI/pages/E-Learning/E-Learning";
import Mobile from "../UI/pages/Mobile/Mobile";
import AniMax from "../UI/pages/AniMax/AniMax";
import Portfolio from "../UI/pages/Portfolio/Portfolio";

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/softwareeng" element={<SoftWareEng />} />
        <Route path="/drone" element={<Drone/>} />
        <Route path="/elearning" element={<ELearning/>} />
        <Route path="/mobile" element={<Mobile/>} />
        <Route path="/animax" element={<AniMax/>} />
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
