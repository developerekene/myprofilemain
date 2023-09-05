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
                <div
                  className="homeConInner"
                  style={{
                    display: "flex",
                    backgroundColor: Assets.theme.dark.bg,
                  }}
                >
                  <div className="homeConCarry">
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
                          cursor: "pointer",
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
                          cursor: "pointer",
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
                          borderRadius: 5,
                          backgroundColor: "#ffffff",
                          cursor: "pointer",
                        }}
                      >
                        <a
                          style={{
                            fontFamily: "Courier New",
                            letterSpacing: 2,
                            color: Assets.theme.dark.bg,
                            textDecoration: "none",
                          }}
                          href="tel:08133992410"
                        >
                          {/* <p
                            style={{
                              // fontFamily: "Courier New",
                              // letterSpacing: 2,
                              color: Assets.theme.dark.bg
                            }}
                          > */}
                          Get on a Call
                          {/* </p> */}
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="homeConCarry">
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
                    <img src={Assets.images.main_cover} width={"100%"} />
                  </div>
                </div>
                <div
                  className="appStoreMain"
                  style={{ padding: 20, backgroundColor: Assets.theme.dark.bg }}
                >
                  <div className="appStore">
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
                    Rapid Transfer App - Lead, Front-End Engineer(Mobile / Web)
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
                    <b>Rapid Transfer</b> is a cutting-edge fintech mobile
                    application designed to revolutionize the way you manage
                    your finances globally. With a seamless user interface and
                    powerful features, Rapid Transfer empowers you to navigate
                    international transactions with ease and confidence.
                    Instantly transfer funds to friends, family, or business
                    partners anywhere in the world, even in a different
                    currency. Say goodbye to high fees and delays, as Rapid
                    Transfer ensures swift and secure cross-border transactions.
                  </p>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: Assets.theme.dark.bg,
                      fontWeight: "300",
                      marginTop: 20,
                    }}
                  >
                    Need to know the latest exchange rates? Rapid Transfer's
                    built-in currency converter provides up-to-date rates,
                    allowing you to convert currencies effortlessly and make
                    informed financial decisions. Busy schedule? No worries.
                    Rapid Transfer enables you to schedule payments in advance,
                    ensuring that your financial commitments are met on time,
                    every time. Topping up your wallet is a breeze with Rapid
                    Transfer. Easily fund your account using your local
                    currency, and the app will handle the conversion hassle,
                    leaving you with more time to focus on what matters most.
                    Your security is our priority. Rapid Transfer offers
                    state-of-the-art biometric authentication, giving you the
                    option to enable or disable fingerprint or facial
                    recognition for a seamless and secure login experience.
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
                  EcobankPay is a cutting-edge fintech mobile application
                  designed to simplify local money transfers with speed,
                  security, and convenience. Tailored for seamless transactions
                  within the same currency and country, EcobankPay empowers you
                  to effortlessly send, receive, and schedule payments with just
                  a few taps. Say goodbye to cash transactions and delays.
                  EcobankPay enables instant, hassle-free money transfers to
                  friends, family, or business associates within the same
                  country and currency. Enjoy the ease of splitting bills,
                  sharing expenses, and sending gifts effortlessly.
                </p>

                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                    marginTop: 20,
                  }}
                >
                  Managing your financial commitments is a breeze with
                  EcobankPay's payment scheduling feature. Set up recurring or
                  one-time payments in advance, ensuring timely transactions
                  while maintaining control over your finances. Receiving money
                  has never been more convenient. EcobankPay allows you to
                  effortlessly accept funds from others, providing a smooth and
                  reliable platform for receiving payments. EcobankPay redefines
                  local money transfers, offering a user-friendly interface that
                  puts you in control of your financial interactions. Embrace
                  the simplicity, speed, and security of EcobankPay, and
                  experience a new level of financial convenience right at your
                  fingertips.
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
                  Knowledge City Inc- Mobile Engineer
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
                  KnowledgeCity is an innovative E-learning mobile app that
                  unlocks a world of learning and exploration at your
                  fingertips. With a wealth of features designed to enrich your
                  mind and open doors to new opportunities, KnowledgeCity is
                  your go-to platform for personal and professional growth.
                  Enhance your skills with a vast selection of online courses
                  covering a diverse range of subjects. Whether you're a
                  lifelong learner or pursuing career advancement,
                  KnowledgeCity's comprehensive course catalog caters to all
                  levels and interests.
                </p>

                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                    marginTop: 20,
                  }}
                >
                  Embrace the joy of reading and get rewarded. Discover a
                  collection of curated books, articles, and resources, and earn
                  redeemable points as you delve into the literary world.
                  Experience the extraordinary from the comfort of your screen.
                  KnowledgeCity brings you exclusive and verified events,
                  workshops, and webinars from experts and visionaries
                  worldwide. Stay updated with the latest trends, insights, and
                  knowledge in your field. Dive into an array of
                  thought-provoking articles and broaden your perspective on
                  various subjects. Unleash your professional potential with
                  KnowledgeCity's job portal. Apply for jobs seamlessly and
                  display your meticulously crafted resume, positioning yourself
                  for success.
                </p>

                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                    marginTop: 20,
                  }}
                >
                  KnowledgeCity is not just an app; it's a gateway to endless
                  possibilities. Embrace the spirit of exploration, knowledge,
                  and growth. Whether you aspire to upskill, gain insights, or
                  connect with like-minded individuals, KnowledgeCity has something
                  for everyone.{" "}
                  <b>
                    {/* <a href="#" style={{ color: "#282A94" }}> */}
                      Download the app
                    {/* </a> */}
                  </b>
                  today and embark on a journey of discovery and fulfillment
                  with KnowledgeCity, where learning knows no boundaries.
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
            <div className="homeInner">
              <div
                className="innerYellow"
                // style={{
                // backgroundColor: "yellow",
                // padding: 20,
                // width: windowWidth / 2,
                // }}
              >
                <p
                  style={{
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
                className="innerWhite"
                // style={{
                // backgroundColor: "white",
                // padding: 20,
                // width: windowWidth / 2,
                // }}
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
            <div className="homeInner" style={{ marginTop: 50 }}>
              <div
                className="innerWhite"
                // style={{
                //   width: windowWidth / 2,
                // }}
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
                className="innerYellow"
                // style={{
                //   width: windowWidth / 2,
                // }}
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
            <div className="homeInner" style={{ marginTop: 50 }}>
              <div
                className="innerYellow"
                // style={{
                //   width: windowWidth / 2,
                // }}
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
                className="innerWhite"
                // style={{
                //   backgroundColor: "white",
                //   padding: 20,
                //   width: windowWidth / 2,
                // }}
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
        className="testimonyMain"
          style={{
            backgroundColor: Assets.theme.dark.bg,
            display: "flex",
            justifyContent: "center",
            height: "auto"
          }}
        >
          <div  style={{ width: "85%", padding: 20,  }}>
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
                className="testimony"
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
                    borderWidth: 1,
                    borderColor: "green",
                    height: "auto",
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
                  Zainab Hadiza - CEO, Karma Web Services
                </p>
              </div>
              <div
              className="testimonyA"
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
                className="homeInput"
              />
              <br />
              <input
                placeholder="Enter Email Address"
                className="homeInput"
              />
              <br />
              <input
                placeholder="Enter Subject"
                className="homeInput"
              />
              <br />
              <input
                placeholder="Enter Message"
                className="homeInput"
              />
              <br />
            </div>
            <div className="divButtons" style={{ display: "flex", alignItems: "center", gap: 60 }}>
              <button
                style={{
                  padding: 12,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: Assets.theme.dark.bg,
                  cursor: "pointer",
                  marginTop: 10
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
                  borderRadius: 5,
                  backgroundColor: Assets.theme.dark.bg,
                  cursor: "pointer",
                  marginTop: 10
                }}
              >
                <a 
                // href="www.wa"
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#ffffff",
                    textDecoration: "none"
                  }}
                >
                  Or Send a WhatsApp Message
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
