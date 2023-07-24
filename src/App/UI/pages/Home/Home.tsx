import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/constants/Assets";
import "../Home/Home.css";
import { AiFillApple } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { windowWidth } from "../WelcomePage/WelcomePage";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Contact: React.FC<any> = ({}) => {
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div>
        <div className="homeCon">
          <MainContainer
            children={
              <div>
                <div style={{ display: "flex", backgroundColor: Assets.theme.dark.bg }}>
                  <div style={{ padding: 20, width: "50%" }}>
                    <p
                      style={{
                        fontSize: 30,
                        fontFamily: "Courier New",
                        fontWeight: "800",
                        letterSpacing: 2,
                        color: "yellow",
                        // color: checked
                        //   ? Assets.theme.dark.textColor
                        //   : Assets.theme.light.textColor,
                        marginBottom: 12,
                      }}
                    >
                      Mobile and Web Alchemist
                    </p>
                    <p
                      style={{
                        fontSize: 20,
                        fontFamily: "Courier New",
                        fontWeight: "600",
                        color: "yellow",
                        // letterSpacing: 2,
                        // color: checked
                        //   ? Assets.theme.dark.textColor
                        //   : Assets.theme.light.textColor,
                      }}
                    >
                      Crafting Magic with Code, Design, and User-Centricity.
                    </p>
                    <div style={{ marginTop: 30 }}>
                      <p
                        style={{
                          fontSize: 18,
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          paddingBottom: 20,
                          textAlign: "justify",
                          color: "#ffffff",
                          fontWeight: "400",
                        }}
                      >
                        In the realm of mobile app development, I reign supreme.
                        I have honed my skills in crafting fluid and responsive
                        applications for both Android and iOS platforms. From
                        sleek user interfaces to groundbreaking functionalities,
                        my mobile creations set new standards in user experience
                        and performance.
                      </p>
                      <p
                        style={{
                          fontSize: 18,
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          paddingBottom: 20,
                          textAlign: "justify",
                          color: "#ffffff",
                          fontWeight: "400",
                        }}
                      >
                        As a Web Developer, I weave the threads of HTML, CSS,
                        and JavaScript into awe-inspiring web experiences. My
                        web solutions transcend the ordinary, offering seamless
                        interactions, captivating visuals, and pixel-perfect
                        designs that captivate users and leave a lasting
                        impression.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                        gap: 20,
                        marginTop: 20,
                      }}
                    >
                      <button
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
                          backgroundColor: "#ffffff",
                          cursor: "pointer"
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "Courier New",
                            letterSpacing: 2,
                          }}
                        >
                          Hire Me
                        </p>
                      </button>
                      <button
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
                          backgroundColor: "#ffffff",
                          cursor: "pointer"
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "Courier New",
                            letterSpacing: 2,
                          }}
                        >
                          Download my CV
                        </p>
                      </button>
                      <button
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
                          backgroundColor: "#ffffff",
                          cursor: "pointer"
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "Courier New",
                            letterSpacing: 2,
                          }}
                        >
                          Get on a Call
                        </p>
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: 20, width: "50%" }}>
                    <p
                      style={{
                        fontSize: 20,
                        fontFamily: "Courier New",
                        fontWeight: "800",
                        letterSpacing: 2,
                        textAlign: "center",
                        // color: checked
                        //   ? Assets.theme.dark.textColor
                        //   : Assets.theme.light.textColor,
                        color: "yellow",
                      }}
                    >
                      Currently E-Process' Lead Frontend Engineer
                    </p>
                  </div>
                </div>
                <div style={{ padding: 20, backgroundColor: Assets.theme.dark.bg }}>
                  <div>
                    <p
                      style={{
                        textAlign: "center",
                        marginBottom: 30,
                        fontFamily: "Courier New",
                        fontSize: 26,
                        color: "yellow",
                      }}
                    >
                      Get my Apps on
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 50,
                      }}
                    >
                      <button
                        style={{
                          display: "flex",
                          padding: 12,
                          border: "none",
                          // backgroundColor: checked
                          //   ? Assets.theme.dark.textColor
                          //   : Assets.theme.light.textColor,
                          // color: checked
                          //   ? Assets.theme.dark.bg
                          //   : Assets.theme.light.bg,
                          borderRadius: 5,
                          backgroundColor: "#ffffff",
                          cursor: "pointer",
                        }}
                      >
                        <AiFillApple style={{ color: Assets.theme.dark.bg }} />
                        <p
                          style={{
                            textAlign: "center",
                            fontFamily: "Courier New",
                            color: Assets.theme.dark.bg,
                            fontWeight: "600",
                            marginLeft: 10,
                            // fontSize: 12,
                          }}
                        >
                          Apple Store
                        </p>
                      </button>
                      <button
                        style={{
                          display: "flex",
                          padding: 12,
                          border: "none",
                          // backgroundColor: checked
                          //   ? Assets.theme.dark.textColor
                          //   : Assets.theme.light.textColor,
                          // color: checked
                          //   ? Assets.theme.dark.bg
                          //   : Assets.theme.light.bg,
                          borderRadius: 5,
                          backgroundColor: "#ffffff",
                          cursor: "pointer",
                        }}
                      >
                        <AiFillGoogleCircle />
                        <p
                          style={{
                            textAlign: "center",
                            fontFamily: "Courier New",
                            color: Assets.theme.dark.bg,
                            fontWeight: "600",
                            marginLeft: 10,
                            // fontSize: 12,
                          }}
                        >
                          Google Store
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
            bg={checked ? Assets.theme.dark.bg : Assets.theme.light.bg}
          />
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
              Featured Projects
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
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
                    Rapid Transfer App - Lead, Front Engineer(Mobile / Web)
                  </p>
                </div>
                <div style={{ marginTop: 20 }}>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: Assets.theme.dark.bg,
                      fontWeight: "400",
                      marginBottom: 12,
                    }}
                  >
                    Key Highlights
                  </p>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: Assets.theme.dark.bg,
                      fontWeight: "300",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: "#282A94",
                      fontWeight: "600",
                    }}
                  >
                    Technologies:
                  </p>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: "#282A94",
                    }}
                  >
                    React Native, Typescript, Redux
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
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
                  Access Homes Mobile - Mobile Engineer
                </p>
              </div>
              <div style={{ marginTop: 20 }}>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "400",
                    marginBottom: 12,
                  }}
                >
                  Key Highlights
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#282A94",
                    fontWeight: "600",
                  }}
                >
                  Technologies:
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#282A94",
                  }}
                >
                  React Native, Typescript, Redux
                </p>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
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
                  Ecobank Pay - Mobile Engineer
                </p>
              </div>
              <div style={{ marginTop: 20 }}>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "400",
                    marginBottom: 12,
                  }}
                >
                  Key Highlights
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#282A94",
                    fontWeight: "600",
                  }}
                >
                  Technologies:
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#282A94",
                  }}
                >
                  React Native, Typescript, Redux
                </p>
              </div>
                <button
                  onClick={() => navigate("/projects")}
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
                    cursor: "pointer"
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: "#ffffff",
                    }}
                  >
                    Explore all Projects
                  </p>
                </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: Assets.theme.dark.bg,
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
                color: "yellow",
                fontWeight: "700",
              }}
            >
              Skills and Technologies
            </p>
            <p
              style={{
                fontSize: 18,
                fontFamily: "Courier New",
                letterSpacing: 2,
                paddingBottom: 20,
                textAlign: "justify",
                color: "#ffffff",
                fontWeight: "400",
              }}
            >
              As a skilled Software Engineer with expertise in both mobile and
              web development, I have acquired a diverse set of skills and
              worked with a range of technologies to deliver exceptional
              solutions. Here are the key areas where I excel:
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <div
                style={{
                  backgroundColor: "yellow",
                  padding: 20,
                  width: windowWidth / 2,
                }}
              >
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 30,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                  }}
                >
                  Mobile App Development:
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: Assets.theme.dark.bg,
                    fontWeight: "400",
                  }}
                >
                  <ul>
                    <li>
                      Proficient in building native mobile applications for
                      Android and iOS platforms.{" "}
                    </li>
                    <li>
                      Strong understanding of React Native and its ecosystem,
                      enabling cross-platform development with optimal
                      performance.{" "}
                    </li>
                    <li>
                      Experience with mobile app deployment, testing, and
                      performance optimization.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  width: windowWidth / 2,
                }}
              >
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 30,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                  }}
                >
                  Web Development:
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: Assets.theme.dark.bg,
                    fontWeight: "400",
                  }}
                >
                  <ul>
                    <li>
                      Extensive knowledge of modern web development frameworks,
                      including React, Vanila HTML and Css.
                    </li>
                    <li>
                      Proficient in creating responsive and interactive web
                      interfaces that deliver exceptional user experiences.
                    </li>
                    <li>
                      Strong understanding of HTML5, CSS3, and JavaScript,
                      ensuring pixel-perfect designs and smooth interactions.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 50 }}>
              <div
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  width: windowWidth / 2,
                }}
              >
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 30,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                  }}
                >
                  Front-End Tools and Libraries:
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: Assets.theme.dark.bg,
                    fontWeight: "400",
                  }}
                >
                  <ul>
                    <li>
                      Familiarity with front-end build tools like Webpack,
                      Babel, and Gulp, streamlining development workflows.
                    </li>
                    <li>
                      Experience with state management libraries such as Redux
                      and Vuex, ensuring efficient data handling in complex
                      applications.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "yellow",
                  padding: 20,
                  width: windowWidth / 2,
                }}
              >
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 30,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                  }}
                >
                  Version Control and Collaboration:
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: Assets.theme.dark.bg,
                    fontWeight: "400",
                  }}
                >
                  <ul>
                    <li>
                      Strong proficiency in Git, enabling seamless version
                      control and collaboration with development teams.
                    </li>
                    <li>
                      Experience with GitHub and GitLab for code hosting and
                      project management.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 50 }}>
              <div
                style={{
                  backgroundColor: "yellow",
                  padding: 20,
                  width: windowWidth / 2,
                }}
              >
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 30,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                  }}
                >
                  Software Development Life Cycle (SDLC):
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: Assets.theme.dark.bg,
                    fontWeight: "400",
                  }}
                >
                  <ul>
                    <li>
                      Comprehensive understanding of the software development
                      life cycle, from requirements gathering to testing and
                      deployment.
                    </li>
                    <li>
                      Experience with Agile methodologies, ensuring iterative
                      and efficient development.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  width: windowWidth / 2,
                }}
              >
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 30,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                  }}
                >
                  Problem-Solving and Analytical Skills:
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: Assets.theme.dark.bg,
                    fontWeight: "400",
                  }}
                >
                  <ul>
                    <li>
                      Adept at analyzing complex technical challenges and
                      devising effective solutions.
                    </li>
                    <li>
                      Strong problem-solving skills, honed through real-world
                      application and continuous learning.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: Assets.theme.dark.bg,
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
                color: "yellow",
                fontWeight: "700",
              }}
            >
              Testimonials and Recommendations
            </p>
            <p
              style={{
                fontSize: 18,
                fontFamily: "Courier New",
                letterSpacing: 2,
                paddingBottom: 20,
                textAlign: "justify",
                color: "#ffffff",
                fontWeight: "400",
              }}
            >
              As a Software Engineer - Mobile and Web, my dedication to
              delivering exceptional solutions has earned the appreciation and
              recognition of colleagues, clients, and employers. Here's what
              they have to say about working with me:
            </p>
            <div>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "yellow",
                  }}
                >
                  1.
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "yellow",
                    fontWeight: "600",
                  }}
                >
                  Mark Ettan - President / C.E.O - Leadpac Foundation
                </p>
              </div>
              <div
                style={{ display: "flex", height: 90, marginTop: 20, gap: 50 }}
              >
                <div
                  style={{ backgroundColor: "yellow", height: 90, width: 2 }}
                ></div>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: "#ffffff",
                    fontWeight: "400",
                  }}
                >
                  "Working with Ekene has been an absolute pleasure. His deep
                  technical expertise and commitment to quality have been
                  invaluable to our web development project. His ability to
                  deliver elegant solutions within tight deadlines is truly
                  commendable. I highly recommend Ekene to anyone looking for a
                  skilled and reliable Software Engineer."
                </p>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "yellow",
                  }}
                >
                  2.
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "yellow",
                    fontWeight: "600",
                  }}
                >
                  Jane Doe - CEO, ABC Web Services
                </p>
              </div>
              <div
                style={{ display: "flex", height: 90, marginTop: 20, gap: 50 }}
              >
                <div
                  style={{ backgroundColor: "yellow", height: 90, width: 2 }}
                ></div>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: "#ffffff",
                    fontWeight: "400",
                  }}
                >
                  "Ekenedilichukwu Okoli is an exceptional talent in the web
                  development space. His ability to grasp complex requirements
                  and turn them into elegant web solutions is remarkable.
                  Throughout our collaboration, He demonstrated strong
                  problem-solving skills and a keen eye for detail. I'm
                  impressed with Ekenedilichukwu Okoli's professionalism and
                  highly recommend him for any web development project."
                </p>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "yellow",
                  }}
                >
                  3.
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "yellow",
                    fontWeight: "600",
                  }}
                >
                  David Etuk - Lead Android Developer, Seashells Mobile
                  Solutions
                </p>
              </div>
              <div
                style={{ display: "flex", height: 90, marginTop: 20, gap: 50 }}
              >
                <div
                  style={{ backgroundColor: "yellow", height: 90, width: 2 }}
                ></div>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    paddingBottom: 20,
                    textAlign: "justify",
                    color: "#ffffff",
                    fontWeight: "400",
                  }}
                >
                  "I had the pleasure of working closely with Ekene on a
                  critical Android project. His deep understanding of Android
                  development, along with their collaborative nature, made them
                  an invaluable asset to the team. He consistently delivered
                  high-quality code and demonstrated a strong sense of ownership
                  for the project's success. I wholeheartedly endorse Ekene for
                  any mobile app development endeavor."
                </p>
              </div>
            </div>
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
              Contact Information
            </p>
            <p
              style={{
                fontSize: 18,
                fontFamily: "Courier New",
                letterSpacing: 2,
                paddingBottom: 20,
                textAlign: "justify",
                color: Assets.theme.dark.bg,
                fontWeight: "400",
              }}
            >
              Ready to collaborate or discuss your next project? I'd love to
              hear from you! Get in touch through any of the following channels:
            </p>
            <div>
              <input
                placeholder="Enter Full Name"
                style={{
                  backgroundColor: "white",
                  marginBottom: 20,
                  width: "50%",
                  height: 60,
                  paddingLeft: 15,
                  color: "#ffffff",
                  borderColor: Assets.theme.dark.bg,
                  borderWidth: 1,
                  outline: "none",
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  borderRadius: 20,
                }}
              />
              <br />
              <input
                placeholder="Enter Email Address"
                style={{
                  backgroundColor: "white",
                  marginBottom: 20,
                  width: "50%",
                  height: 60,
                  paddingLeft: 15,
                  color: "#ffffff",
                  borderColor: Assets.theme.dark.bg,
                  borderWidth: 1,
                  outline: "none",
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  borderRadius: 20,
                }}
              />
              <br />
              <input
                placeholder="Enter Subject"
                style={{
                  backgroundColor: "white",
                  marginBottom: 20,
                  width: "50%",
                  height: 60,
                  paddingLeft: 15,
                  color: "#ffffff",
                  borderColor: Assets.theme.dark.bg,
                  borderWidth: 1,
                  outline: "none",
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  borderRadius: 20,
                }}
              />
              <br />
              <input
                placeholder="Enter Message"
                style={{
                  backgroundColor: "white",
                  marginBottom: 20,
                  width: "50%",
                  height: 60,
                  paddingLeft: 15,
                  color: "#ffffff",
                  borderColor: Assets.theme.dark.bg,
                  borderWidth: 1,
                  outline: "none",
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  borderRadius: 20,
                }}
              />
              <br />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
              <button
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
                  cursor: "pointer"
                }}
              >
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#ffffff",
                  }}
                >
                  Submit
                </p>
              </button>
              <button
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
                  cursor: "pointer"
                }}
              >
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#ffffff",
                  }}
                >
                  Or Send a WhatsApp Message
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
