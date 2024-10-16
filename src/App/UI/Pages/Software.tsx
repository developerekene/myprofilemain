import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Software.css";
import { Assets } from "../../utils/constants/Assets";

const SoftwareEng: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="same_main">
        <h1 className="same_main_header">Unleash the power of Technology</h1>
        <p className="same_main_p">
          Welcome to my Services page, where I turn your digital visions into
          reality. As a skilled and dedicated software engineer, I offer a range
          of innovative and cutting-edge services that elevate your digital
          presence and drive business success. From crafting seamless mobile
          experiences to building robust web solutions, I am your partner in
          technological excellence. Explore my diverse services and let's embark
          on an extraordinary journey together.
        </p>
        {/* <div className="about_middle">
          <div className="about_toggle_btn">
            <div>
              <p>{"2024"}</p>
            </div>
            <div>
              <div>
                <img src={Assets.images.drop_down_b} alt="face_image" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="same_content">
          <div className="same_content_left">
            <p>
              Welcome to my Services page, where I turn your digital visions
              into reality. As a skilled and dedicated software engineer, I
              offer a range of innovative and cutting-edge services that elevate
              your digital presence and drive business success. From crafting
              seamless mobile experiences to building robust web solutions, I am
              your partner in technological excellence. Explore my diverse
              services and let's embark on an extraordinary journey together.
            </p>
          </div>
          <div className="same_content_right">
            <div>
              <img
                src={Assets.images.suit_pic}
                alt="face_image"
                className="same_content_img"
              />
            </div>
          </div>
        </div>
        <div className="same_content">
          <div className="same_content_left">
            <div>
              <img
                src={Assets.images.cap_pic}
                alt="face_image"
                className="same_content_img"
              />
            </div>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              Welcome to my Services page, where I turn your digital visions
              into reality. As a skilled and dedicated software engineer, I
              offer a range of innovative and cutting-edge services that elevate
              your digital presence and drive business success. From crafting
              seamless mobile experiences to building robust web solutions, I am
              your partner in technological excellence. Explore my diverse
              services and let's embark on an extraordinary journey together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareEng;
