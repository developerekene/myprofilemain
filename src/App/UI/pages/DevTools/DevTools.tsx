/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
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
import { ARTICLES, COLORS, FONTS } from "../../../utils/constants/Data";
import { PostAdd } from "@mui/icons-material";

const DevTools: React.FC<any> = () => {
  // usestates
  const [firstNumber, setFirstNumber] = useState<any>(0);
  const [secondNumber, setSecondNumber] = useState<any>(0);
  const [thirdNumber, setThirdtNumber] = useState<any>(0);
  const [hexCode, setHexCode] = useState<string>();

  const [colorScheme, setColorScheme] = useState<boolean>(true);
  const [fontScheme, setFontScheme] = useState<boolean>(false);
  const [searchTitle, setSearchTitle] = useState<string>("Find your color");
  const [searchMainFonts, setMainFontSearch] = useState<string>("");
  const [searchMainColor, setMainColorSearch] = useState<string>("");

  const [fontContent, setFontContent] = useState<any>();
  const [bttnText, setBttnText] = useState("Click to copy hex code");
  const [colorContent, setColorContent] = useState<any>(
    <div>
      <div className="search">
        <CiSearch color="#000000" size={30} />
        <input
          placeholder={searchTitle}
          className="search-input"
          onChange={(e) => setMainFontSearch(e.target.value)}
        />
      </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // function to filter fonts
  function searchFonts(query: any) {
    const searchTerm = query.toLowerCase();
    return FONTS.filter(
      (font) =>
        font.title.toLowerCase().includes(searchTerm) ||
        font.about.toLowerCase().includes(searchTerm) ||
        font.ownedBy.toLowerCase().includes(searchTerm)
    );
  }

  // function to filter colors
  function searchColors(query: any) {
    const searchTerm = query.toLowerCase();
    return COLORS.filter((color) =>
      color.name.toLowerCase().includes(searchTerm)
    );
  }

  // storing filtered fonts
  const searchResults = searchFonts(searchMainFonts);
  // storing filtered colors
  const searchResultsColor = searchColors(searchMainColor);

  // function to map through filtered font
  const mapFonts = searchResults.map((i, j) => (
    <div key={j}>
      <div className="font-map">
        <p className="map-title">{i.title}</p>
        <p className="map-about">{i.about}</p>
        <p className="map-font">{i.font}</p>
        <p className="map-by">{i.ownedBy}</p>
      </div>
    </div>
  ));

  // function to map through filtered color
  const mapColor = searchResultsColor.map((i, j) => (
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
      </div>
    </div>
  ));

  // useeffect to re-render individal right components
  useEffect(() => {
    setFontContent(
      <div>
        <div className="search">
          <CiSearch color="#000000" size={30} />
          <input
            placeholder={searchTitle}
            className="search-input"
            onChange={(e) => setMainFontSearch(e.target.value)}
          />
        </div>
        <p className="content-header">Amazing Fonts</p>
        <p className="content-desc">
          Check out my list of over {FONTS.length} fonts.
        </p>
        {searchMainFonts === "" ? (
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
        ) : (
          mapFonts
        )}
      </div>
    );
    setColorContent(
      <div>
        <div className="search">
          <CiSearch color="#000000" size={30} />
          <input
            placeholder={searchTitle}
            className="search-input"
            onChange={(e) => setMainColorSearch(e.target.value)}
          />
        </div>
        <p className="content-header">Awesome Colors</p>
        <p className="content-desc">
          Check out my list of over {COLORS.length} colors
        </p>
        {searchMainColor === "" ? (
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
                </div>
              </div>
            ))}
          </div>
        ) : (
          mapColor
        )}
      </div>
    );
  }, [mapFonts, searchMainFonts, searchTitle, mapColor, searchMainColor]);

  // const navigate = useNavigate();

  // const copyCode = () => {
  //   navigator.clipboard
  //     .writeText(post.coupon)
  //     .then(() => {
  //       setBttnText("COPIED");
  //       setTimeout(function () {
  //         setBttnText("COPY CODE");
  //       }, 3000);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  const couponRef = useRef();

  // const copyCode = () => {
  //   if (!couponRef.current) return;

  //   navigator.clipboard
  //     .writeText(couponRef.current.innerHTML)
  //     .then(() => {
  //       setBttnText("COPIED");
  //       setTimeout(function () {
  //         setBttnText("COPY CODE");
  //       }, 3000);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
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
                  setColorContent(
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
                                {bttnText}
                              </div>
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
                  setFontContent(
                    <div>
                      <div className="search">
                        <CiSearch color="#000000" size={30} />
                        <input
                          placeholder={searchTitle}
                          className="search-input"
                          onChange={(e) => setMainFontSearch(e.target.value)}
                        />
                      </div>
                      <p className="content-header">Amazing Fonts</p>
                      <p className="content-desc">
                        Check out my list of over {FONTS.length} fonts.
                      </p>
                      {searchMainFonts === "" ? (
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
                      ) : (
                        <div>
                          <p style={{ color: "#ffffff" }}>Not empty</p>
                        </div>
                      )}
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
            {searchTitle === "Find your Fonts" ? fontContent : null}
            {searchTitle === "Find your Color" ? colorContent : null}
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DevTools;
