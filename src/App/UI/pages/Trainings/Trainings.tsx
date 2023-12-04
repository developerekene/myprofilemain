/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "../Trainings/Trainings.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Trainings: React.FunctionComponent = () => {
  const [place, setPlace] = useState<string>("My Stack is...");
  const [content, setContent] = useState<React.ReactNode>(
    <div>
      <p style={{ color: "#ffffff" }}>Hello There!</p>
      <p style={{ color: "#ffffff" }}>
        Kindly Pick a Stack above to view all reqirememts.
      </p>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="training-main">
        <div className="training-top">
          <p className="training-top-header">
            There is so much to learn, are you excited?
          </p>
          <p className="training-top-p">
            Welcome to the begining of your tech journey. I am Ekenedilichkw
            Okoli and i am exicited to help you accend to the level of a Tech
            Sage in a short time.
          </p>
          <p className="training-top-p">Let's begin!</p>
          <div className="training-top-inner">
            <div className="training-top-left">
              <p className="">Please choose your stack</p>
            </div>
            <div className="dropdown">
              <span className="dropdown-item">{place}</span>
              <div className="dropdown-content">
                <div
                  onClick={() => {
                    setPlace("Back-End Training -- JAVA");
                    setContent(
                      <div>
                        <p style={{ color: "#ffffff" }}>
                          Back-End Training -- JAVA
                        </p>
                      </div>
                    );
                  }}
                  style={{ marginBottom: 10 }}
                >
                  <p>Back-End Training -- JAVA</p>
                </div>
                <div
                  onClick={() => {
                    setPlace("Mobile Training -- React Native");
                  }}
                  style={{ marginBottom: 10 }}
                >
                  <p>Mobile Training -- React Native</p>
                </div>
                <div
                  onClick={() => {
                    setPlace("Web Training -- React Js");
                  }}
                  style={{ marginBottom: 10 }}
                >
                  <p>Web Training -- React Js</p>
                </div>
              </div>
            </div>
          </div>
          <div>{content}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trainings;
