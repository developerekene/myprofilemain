import React from "react";
import { Assets } from "../../../utils/constants/Assets";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
const More: React.FC<any> = ({}) => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "#000000",
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
            Beyond the Code: Unveiling the Person Behind the Projects
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
            Take a glimpse into the multifaceted world beyond the lines of code.
            Here, I invite you to join me on a journey that goes beyond my
            professional endeavors, delving into the passions, inspirations, and
            adventures that shape who I am.
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
            From my outdoor escapades that invigorate my spirit to the books
            that fuel my imagination, this page celebrates the tapestry of
            experiences that make me a well-rounded individual. I'm more than a
            software engineer; I'm an explorer, a learner, and a dreamer.
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
            In this digital sanctuary, we'll unravel the stories and interests
            that define my character, finding common ground and shared passions.
            Join me as we go beyond the code and embark on an odyssey of growth,
            curiosity, and human connection. Let's connect on a deeper level,
            and together, celebrate the essence of being human in a world of
            technology.
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
          backgroundColor: "ffffff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "85%", padding: 20 }}>
          <p
            style={{
              // textAlign: "center",
              marginBottom: 30,
              fontFamily: "Courier New",
              fontSize: 36,
              color: Assets.theme.dark.bg,
              fontWeight: "700",
            }}
          >
            6 Months Software Engineering Training (Ongoing)
          </p>
          <div>
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "#000000",
                fontWeight: "300",
                textAlign: "justify",
                // marginTop: 20,
              }}
            >
              Are you ready to embark on a transformative learning experience
              that will unlock the world of software engineering? Join our
              training program, where knowledge meets innovation, and unleash
              your potential as a skilled developer.
            </p>

            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "#000000",
                fontWeight: "300",
                textAlign: "justify",
                marginTop: 20,
              }}
            >
              Our dynamic and immersive curriculum is designed to nurture your
              passion for technology and empower you with hands-on expertise.
              From mastering the latest programming languages to building
              real-world applications, you'll gain the tools and confidence to
              thrive in the digital landscape.
            </p>
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "#000000",
                fontWeight: "300",
                textAlign: "justify",
                marginTop: 20,
              }}
            >
              Led by seasoned mentors and industry experts, our training fosters
              a supportive learning environment, where curiosity is encouraged,
              and questions lead to discoveries. Embrace challenges as stepping
              stones and turn obstacles into opportunities.
            </p>
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "#000000",
                fontWeight: "300",
                textAlign: "justify",
                marginTop: 20,
              }}
            >
              Whether you're a novice or an experienced coder seeking to level
              up your skills, our training welcomes all with open arms. Take the
              leap and redefine your future as a software engineer. Together,
              let's shape a world where innovation knows no bounds and
              possibilities are limitless.
            </p>
          </div>
          <div style={{ marginTop: 20 }}>
            <p
              style={{
                // textAlign: "center",
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 36,
                color: Assets.theme.dark.bg,
                fontWeight: "700",
              }}
            >
              Our Training Stacks Include
            </p>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                }}
              >
                1.
              </p>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                  fontWeight: "600",
                }}
              >
                MEAN Stack
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                }}
              >
                2.
              </p>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                  fontWeight: "600",
                }}
              >
                MERN Stack
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                }}
              >
                3.
              </p>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                  fontWeight: "600",
                }}
              >
                React Native Stack
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                }}
              >
                4.
              </p>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                  fontWeight: "600",
                }}
              >
                Java Stack
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                }}
              >
                5.
              </p>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#282A94",
                  fontWeight: "600",
                }}
              >
                Django Stack
              </p>
            </div>
            {/* <div style={{ marginTop: 20 }}> */}
            {/* <ul style={{ marginBottom: 20 }}>
                <li
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                  }}
                >
                  MongoDB: A NoSQL database for storing and managing data.
                </li>
                <li
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                  }}
                >
                  Express.js: A fast and flexible web application framework for
                  Node.js.
                </li>
                <li
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                  }}
                >
                  Angular: A powerful front-end framework for building dynamic
                  single-page applications.
                </li>
                <li
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                  }}
                >
                  Node.js: A server-side JavaScript runtime environment for
                  building scalable applications.
                </li>

              </ul> */}
            {/* </div> */}
            
          </div>
          <button
              // onClick={() => navigate("/projects")}
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
                backgroundColor: Assets.theme.dark.bg,
                marginTop: 50,
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#ffffff",
                }}
              >
                I want to register
              </p>
            </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default More;
