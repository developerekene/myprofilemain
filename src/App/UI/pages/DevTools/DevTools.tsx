/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Assets } from "../../../utils/constants/Assets";
import Footer from "../../components/Footer/Footer";
import { windowHeight, windowWidth } from "../WelcomePage/WelcomePage";
import "../DevTools/DevTools.css";
import { IoColorFill } from "react-icons/io5";
import Colors from "../Colors/Colors";
import { Navigate, useNavigate } from "react-router-dom";
import { GrDocumentImage } from "react-icons/gr";

const DevTools: React.FC<any> = () => {
  const [firstNumber, setFirstNumber] = useState<any>(0);
  const [secondNumber, setSecondNumber] = useState<any>(0);
  const [thirdNumber, setThirdtNumber] = useState<any>(0);
  const [hexCode, setHexCode] = useState<string>();

  const [colorsDiv, setColorsDiv] = useState<boolean>(false);

  const navigate = useNavigate();

  const SIDENAVBAR = [
    {
      title: "Colors Scheme",
      icon: <IoColorFill />,
      path: <Colors />,
    },
    {
      title: "Css Fonts",
      icon: <IoColorFill />,
      path: <Colors />,
    },
    {
      title: "Image Converter",
      icon: <GrDocumentImage />,
      path: <Colors />,
    },
  ];

  const getNavBar = () => {
    return SIDENAVBAR.map((i, j) => {
      return (
        <div key={j}>
          <div className={"dev-selected"}>
            {i.icon}
            {i.title}
          </div>
        </div>
      );
    });
  };

  console.log(windowHeight);

  return (
    <div>
      <div>
        <NavBar />

        <div style={{ backgroundColor: "#0C0C0C" }}>
          <div
            style={{
              minHeight: windowHeight - 230,
              backgroundColor: "#131718",
              width: windowWidth / 4,
              paddingTop: 50,
            }}
          >
            {/* Nav Bar */}
            <p className="dev-tools">Dev Tools</p>
            <div>
              <div>{getNavBar()}</div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DevTools;
