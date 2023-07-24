import React from "react";
import "../WelcomePage/WelcomePage.css";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/constants/Assets";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  height: 680,
  width: 350,
  marginLeft: 120,
};
const slideImages = [
  {
    url: Assets.images.kc_home,
    caption: "",
  },
  {
    url: Assets.images.pass_gen,
    caption: "",
  },
  {
    url: Assets.images.cal,
    caption: "",
  },
];

export const windowWidth: number = window.screen.width;
export const windowHeight: number = window.screen.height;

const WelcomePage: React.FC<any> = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(checked);
  };
  return (
    <div className="containerHome">
      <MainContainer
        bg={checked ? Assets.theme.dark.bg : Assets.theme.light.bg}
        children={
          <div className="homeMain">
            <div className="homeInner">
              <div className="innerMain">
                <div style={{display: "flex", alignItems: "center"}}>
                  <div>
                    {checked ? (
                      <img
                        src={Assets.images.logo_nav_two}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <img
                        src={Assets.images.logo_nav}
                        width={60}
                        height={60}
                      />
                    )}
                  </div>
                  {/* <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  /> */}
                </div>

                <p
                  className="homePP"
                  style={{
                    color: checked
                      ? Assets.theme.light.bg
                      : Assets.theme.dark.bg,
                  }}
                >
                  I am
                </p>
                {/* <div className="innerP">
                <p className="homePP"></p> */}
                <p
                  className="homeP"
                  style={{
                    color: checked
                      ? Assets.theme.dark.textColor
                      : Assets.theme.light.textColor,
                  }}
                >
                  Ekenedilichukwu Okoli
                </p>
                {/* </div> */}
                <p
                  className="homePPP"
                  style={{
                    color: checked
                      ? Assets.theme.light.bg
                      : Assets.theme.dark.bg,
                  }}
                >
                  Nigeria's Number One Software Engineer - Mobile / Web
                </p>
                <div className="textContainer">
                  <p
                    className="text"
                    style={{
                      color: checked
                        ? Assets.theme.light.bg
                        : Assets.theme.dark.bg,
                    }}
                  >
                    Welcome, and thank you for stepping into my realm of
                    creativity and technical prowess! I'm thrilled to have you
                    explore my portfolio, where the virtual meets the
                    extraordinary, and where every line of code weaves a tale of
                    innovation and user-centric experiences.
                  </p>
                </div>
                <div>
                  <p
                    className="text"
                    style={{
                      color: checked
                        ? Assets.theme.light.bg
                        : Assets.theme.dark.bg,
                    }}
                  >
                    Driven by an insatiable curiosity and a deep love for all
                    things digital, my quest for perfection is unyielding. I
                    thrive on bringing visions to life, elevating ideas into
                    tangible, intuitive, and aesthetically captivating
                    applications that leave users in awe.
                  </p>
                </div>
                <button
                  onClick={() => navigate("/home")}
                  style={{
                    backgroundColor: checked
                      ? Assets.theme.dark.textColor
                      : Assets.theme.light.textColor,
                  }}
                  className="welcomeButton"
                >
                  <p
                    // href="/about"
                    style={{
                      color: checked
                        ? Assets.theme.dark.bg
                        : Assets.theme.light.bg,
                      textDecoration: "none",
                      letterSpacing: 2,
                      fontFamily: "monospace",
                      fontSize: 15,
                    }}
                  >
                    {"Let's Dive In >>>"}
                  </p>
                </button>
              </div>
              <div className="outerMain">
                <div className="slide-container">
                  <Slide>
                    {slideImages.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage.url})`,
                          }}
                        >
                          {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 10,
              }}
            >
              <p
                style={{
                  color: checked ? Assets.theme.light.bg : Assets.theme.dark.bg,
                  textAlign: "center",
                  fontFamily: "Courier New",
                }}
              >
                Copyright © 2023 - The_Ekenedilichukwu. All rights reserved.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default WelcomePage;
