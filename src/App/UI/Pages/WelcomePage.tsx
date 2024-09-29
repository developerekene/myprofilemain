import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/WelcomePage.css";
import { Assets } from "../../utils/constants/Assets";
import Button from "@droid-tech/react-ts-button/dist/Button";

const WelcomePage: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="welcome_home">
        <div className="alchemist">
          <div className="alchemist_left">
            <div className="alchemist_left_inner">
              <h1 className="w_header">Mobile & </h1>
              <h1 className="w_header">Web Alchemist</h1>
              <p className="w_para">
                Creating beautiful, scalable and award winning applications
                since 2018
              </p>
              <div className="btns">
                <div className="btns_width">
                  <button className="btnMain">Schedule an Appiontment</button>
                </div>
                <div className="btns_width">
                  <button className="btnMain">Download Resume</button>
                </div>
              </div>
            </div>
          </div>
          <div className="alchemist_right">
            <div className="alchemist_right_photo">
              <img src={Assets.images.face_photo} alt="face_image" />
            </div>
          </div>
        </div>
      </div>
      <div className="who_is_ekene">
        <h1 className="who_is_ekene_header">WHO IS EKENEDILICHUKWU</h1>
        <div className="who_is_ekene_content">
          <div className="who_is_ekene_content_left">
            <p>
              I craft fluid and responsive mobile apps for Android and iOS, with
              sleek UI and groundbreaking functionalities that set new standards
              in UX and performance.
            </p>
            <p>
              I weave the threads of HTML, CSS, and JavaScript into
              awe-inspiring web experiences. My solutions transcend the
              ordinary, offering seamless interactions, captivating visuals, and
              pixel-perfect designs that captivate users and leave a lasting
              impression
            </p>
            <div className="btns_width">
              <button onClick={() => {}} className="btnMain">
                Read More About Me
              </button>
            </div>
          </div>
          <div className="who_is_ekene_content_right">
            <div>
              <img src={Assets.images.who_is} alt="face_image" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.mobile} alt="mobile_img" />
          </div>
          <p className="banner_content_p">Mobile App Development</p>
        </div>
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.web} alt="face_image" />
          </div>
          <p className="banner_content_p">Web Development</p>
        </div>
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.layout} alt="face_image" />
          </div>
          <p className="banner_content_p">Front- End Tools & Libraries</p>
        </div>
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.version_control} alt="face_image" />
          </div>
          <p className="banner_content_p">Version Control & Collaboration</p>
        </div>
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.back_end} alt="face_image" />
          </div>
          <p className="banner_content_p">Backend Development</p>
        </div>
      </div>
      <div className="projects">
        <h1 className="projects_header">Latest Projects</h1>
      </div>
    </div>
  );
};

export default WelcomePage;
