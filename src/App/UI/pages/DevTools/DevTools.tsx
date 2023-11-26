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
import { CiSearch } from "react-icons/ci";
import { RiFontSize } from "react-icons/ri";
import { COLORS, FONTS } from "../../../utils/constants/Data";

const DevTools: React.FC<any> = () => {
  const [firstNumber, setFirstNumber] = useState<any>(0);
  const [secondNumber, setSecondNumber] = useState<any>(0);
  const [thirdNumber, setThirdtNumber] = useState<any>(0);
  const [hexCode, setHexCode] = useState<string>();

  const [colorScheme, setColorScheme] = useState<boolean>(true);
  const [fontScheme, setFontScheme] = useState<boolean>(false);
  const [searchTitle, setSearchTitle] = useState<string>("Find your color");
  const [search, setSearch] = useState<string>("");

  console.log(search);
  const [contentRight, setContentRight] = useState<React.ReactNode>(
    <div>
      <p className="content-header">Awesome Colors</p>
      <p className="content-desc">
        Check out my list of over {COLORS.length} colors
      </p>
      <div>
        {COLORS.map((i, j) => (
          <div key={j}>
            <div className="color-map">
              {/* <div className="flex-div"> */}
              <div className="color-inner-map">{i.name}</div>
              <div className="color-inner-map">{i.hexCode}</div>
              <div className="color-inner-map">{i.rgb}</div>
              <div
                className="color-inner-map"
                style={{
                  backgroundColor: i.hexCode,
                  padding: 15,
                  cursor: "pointer",
                }}
              >
                {"Click to copy hex code"}
              </div>

              {/* <p className="colors-title">RGB</p> */}
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const navigate = useNavigate();

  const SIDENAVBAR = [
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

  console.log(windowHeight);

  return (
    <div>
      <div>
        <NavBar />

        <div className="dev-tools-main">
          <div className="left-bar">
            {/* Nav Bar */}
            <p className="dev-tools">Dev Tools</p>
            <div>
              <div
                onClick={() => {
                  setColorScheme(!colorScheme);
                  setContentRight(
                    <div>
                      <p className="content-header">Awesome Colors</p>
                      <p className="content-desc">
                        Check out my list of over {COLORS.length} colors
                      </p>
                      <div>
                        {COLORS.map((i, j) => (
                          <div key={j}>
                            <div className="color-map">
                              {/* <div className="flex-div"> */}
                              <div className="color-inner-map">{i.name}</div>
                              <div className="color-inner-map">{i.hexCode}</div>
                              <div className="color-inner-map">{i.rgb}</div>
                              <div
                                className="color-inner-map"
                                style={{
                                  backgroundColor: i.hexCode,
                                  padding: 15,
                                  cursor: "pointer",
                                }}
                              >
                                {"Click to copy hex code"}
                              </div>

                              {/* <p className="colors-title">RGB</p> */}
                              {/* </div> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                  setSearchTitle("Find your Color");
                  setFontScheme(false);
                  setColorScheme(true);
                }}
                className={colorScheme ? "dev-selected" : "dev-not-selected"}
              >
                <div>
                  <IoColorFill />
                </div>
                <div className="nav-bar-title">
                  <p>Color Scheme</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setColorScheme(!colorScheme);
                  setContentRight(
                    <div>
                      <p className="content-header">Amazing Fonts</p>
                      <p className="content-desc">
                        Check out my list of over {FONTS.length} fonts.
                      </p>
                      <div>
                        {FONTS.map((i, j) => (
                          <div key={j}>
                            <div className="font-map">
                              <p className="map-title">{i.title}</p>
                              <p className="map-about">{i.about}</p>
                              <p className="map-font">{i.font}</p>
                              <p className="map-by">{i.ownedBy}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                  setSearchTitle("Find your Fonts");
                  setFontScheme(true);
                  setColorScheme(false);
                }}
                className={fontScheme ? "dev-selected" : "dev-not-selected"}
              >
                <div>
                  <RiFontSize />
                </div>
                <div className="nav-bar-title">
                  <p>Fonts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-con">
            <div className="search">
              <CiSearch color="#000000" size={30} />
              <input
                placeholder={searchTitle}
                className="search-input"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {contentRight}
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DevTools;
