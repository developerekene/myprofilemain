import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Assets } from "../../../utils/constants/Assets";
import Footer from "../../components/Footer/Footer";
const DevTools: React.FC<any> = () => {
  const [firstNumber, setFirstNumber] = useState<any>(0);
  const [secondNumber, setSecondNumber] = useState<any>(0);
  const [thirdNumber, setThirdtNumber] = useState<any>(0);
  const [hexCode, setHexCode] = useState<string>();
  
  return (
    <div>
      <div>
        <NavBar />
        <div
          style={{
            backgroundColor: "#100672",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "85%", padding: 20 }}>
            <p
              style={{
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 26,
                color: "yellow",
                fontWeight: "700",
                marginTop: 30,
              }}
            >
              Elevate Your Development Workflow
            </p>
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "white",
                fontWeight: "300",
                textAlign: "justify",
                marginTop: 20,
              }}
            >
              Welcome to my Dev Tools page, where developers are equipped with a
              powerful arsenal of cutting-edge tools. Discover a carefully
              curated selection of industry-leading software and resources that
              elevate your productivity, efficiency, and coding prowess to new
              heights.
            </p>
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "white",
                fontWeight: "300",
                textAlign: "justify",
                marginTop: 20,
              }}
            >
              Unleash your creativity and streamline your workflow with our
              handpicked collection of development tools, designed to tackle the
              most complex challenges and bring your visionary projects to life.
              Embrace the power of innovation as you explore the possibilities
              of my list of Dev Tools, and step into a world where extraordinary
              solutions are just a click away. Empower your journey to success
              with the tools that empower greatness.
            </p>
            {/* <button
            style={{
              padding: 12,
              border: "none",
              // backgroundColor: checked
              //   ? Assets.theme.dark.textColor
              //   : Assets.theme.light.textColor,
              // color: checked
              //   ? Assets.theme.dark.bg
              //   : Assets.theme.light.bg,
              borderRadius: 5,
              backgroundColor: "yellow",
              cursor: "pointer",
              marginTop: 30,
            }}
          >
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "#000000",
              }}
            >
              Download my Resume
            </p>
          </button> */}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "85%", padding: 20 }}>
            <img
              src={Assets.images.coming_soon}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </div>
        {/* <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="number"
              onChange={(e) => setFirstNumber(e.target.value)}
              placeholder="Input First Number"
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            />
            <input
              placeholder="Input Second Number"
              onChange={(e) => setSecondNumber(e.target.value)}
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            />
            <input
              placeholder="Input Third Number"
              onChange={(e) => setThirdtNumber(e.target.value)}
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            />
          </div>
          <button onClick={() => generateHexCode()}>Generate Hex Code</button>

          <div>
            <p>Your hex code is: {hexCode}</p>
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default DevTools;
