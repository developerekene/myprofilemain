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
                  <Button
                    title="Schedule a call"
                    bgColor="#ffffff"
                    color="#000000"
                    mTop={10}
                    mBottom={10}
                    mLeft={0}
                    mRight={0}
                    //   icon={<FaBookReader className="style-home-icon" />}
                    onClickButton={() => console.log("Button clicked")}
                  />
                </div>
                <div className="btns_width">
                  <Button
                    title="Hire me"
                    bgColor="#ffffff"
                    color="#000000"
                    mTop={10}
                    mBottom={10}
                    mLeft={0}
                    mRight={0}
                    //   icon={<FaBookReader className="style-home-icon" />}
                    onClickButton={() => console.log("Button clicked")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="alchemist_right">
            <img src={Assets.images.face_photo} alt="face_image" />
            <img src={Assets.images.image_right} alt="face_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
