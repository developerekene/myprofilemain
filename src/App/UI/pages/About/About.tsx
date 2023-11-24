import React from "react";
import { Assets } from "../../../utils/constants/Assets";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import GlobalButton from "../../components/GlobalButton/GlobalButton";

import "../About/About.css"
const About: React.FC<any> = ({}) => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "#0C0C0C",
          paddingLeft: 88,
          paddingRight: 88,
          paddingTop: 90,
        }}
      >
        <p className="about-header">I am Ekenedilichkwu Okoli</p>
        <div className="inner-div">
          <img src={Assets.images.aboutimage} alt="" />
          <div className="inner-text">
            <p className="inner-p">
              Hello! My name is Ekenedilichukwu Okoli. I am a passionate
              software engineer with a relentless drive to push the boundaries
              of technology and deliver solutions that leave a lasting impact. I
              am also an adventurer, an avid learner, and a believer in the
              power of technology to change lives.
            </p>
            <p className="inner-p">
              My love affair with technology started at a young age, and I am
              constantly seeking new opportunities to learn and grow. I am
              proficient in a variety of programming languages and technologies,
              including mobile and web development, front-end development, and
              emerging technologies.
            </p>
            <div className="inner-btn">
            <GlobalButton
              text={"Hire Me"}
              bgColor={Assets.colors.neat}
              textColor={Assets.colors.boldNeat}
              onPress={() => {}}
            />
            <GlobalButton
              text={"My Resume"}
              bgColor={Assets.colors.neat}
              textColor={Assets.colors.boldNeat}
              onPress={() => {}}
            />
            </div>
          </div>
        </div>
        <p className="inner-p">
          At the core of my development philosophy lies empathy. I am passionate
          about creating applications that resonate with users on a personal
          level and enrich their lives. I also believe in collaboration and
          innovation, and I thrive in team environments where diverse minds come
          together to create extraordinary solutions.
        </p>
        <p className="inner-p">
          I am excited to collaborate with others to build digital marvels that
          inspire, connect, and make a difference. If you are looking for a
          software engineer who is passionate about his work and committed to
          delivering excellence, please don't hesitate to contact me.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
