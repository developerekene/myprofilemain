import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Assets } from "../../../utils/constants/Assets";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Projects: React.FC<any> = ({}) => {
  const [engProjects, setEngProjects] = React.useState<boolean>(false);
  const [itProjects, setItProjects] = React.useState<boolean>(false);
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
            Projects: The code chronicles, Where Innovation Meets Excellence
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
            Welcome to my Projects page, a journey through a collection of
            digital marvels crafted with passion and precision. Each project
            showcases a unique blend of innovation and technical expertise, a
            testament to the power of code in shaping extraordinary experiences.
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
            From seamless mobile apps that empower users to cutting-edge web
            solutions that transform businesses, these projects represent the
            heart and soul of my journey as a software engineer. Immerse
            yourself in a world of creativity and problem-solving, where every
            line of code weaves a story of digital ingenuity.
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
            Discover how technology can revolutionize industries, connect
            communities, and make a positive impact. Let's explore these code
            chronicles together, where innovation meets excellence, and
            possibilities know no bounds.
          </p>
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
          </button>
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
            All Projects
          </p>
          <button
            onClick={() => setEngProjects(!engProjects)}
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: Assets.theme.light.bg,
              height: 40,
              padding: 10,
              marginBottom: 30,
              borderWidth: 0.5,
              cursor: "pointer"
            }}
          >
            <p
              style={{
                // textAlign: "center",
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 20,
                color: Assets.theme.dark.bg,
                fontWeight: "700",
              }}
            >
              Engineering Projects
            </p>
            {
              engProjects ? (<ArrowDownwardIcon/>) : (<ArrowUpwardIcon/>)
            }
          </button>
          {engProjects ? (
            <div style={{marginBottom: 30}}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{ display: "flex", gap: 20, alignItems: "center" }}
                  >
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
                      Rapid Transfer App - Lead, Front-End Engineer(Mobile /
                      Web)
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "600",
                      }}
                    >
                      E - Process Nigeria:{" "}
                    </p>
                    <p
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "400",
                      }}
                    >
                      Jan 2023 - Present
                    </p>
                    <p
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "400",
                      }}
                    >
                      |
                    </p>
                    <p
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "400",
                      }}
                    >
                      Full Time
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
                      powerful features, MoneyFlow empowers you to navigate
                      international transactions with ease and confidence.
                      Instantly transfer funds to friends, family, or business
                      partners anywhere in the world, even in a different
                      currency. Say goodbye to high fees and delays, as Rapid
                      Transfer ensures swift and secure cross-border
                      transactions.
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
                      Responsibilities
                    </p>
                    <ul style={{ marginBottom: 20 }}>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Delegating task to team members
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Execute full software development life cycle
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Helping team members fix issues when the need arises.
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Assigning task on Jira
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Organisation of Work and initial app setup
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Develop flowcharts, layouts and documentation to
                        identify requirements and solutions
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Write well-designed, testable code
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Communicating goals to team members
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Produce specifications and determine operational
                        feasibility
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Integrate software components into a fully functional
                        software system
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Reporting progress to project supervisors
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Develop software verification plans and quality
                        assurance procedures
                      </li>
                      <li
                        style={{
                          fontFamily: "Courier New",
                          letterSpacing: 2,
                          color: Assets.theme.dark.bg,
                          fontWeight: "300",
                        }}
                      >
                        Nurturing team members strength and identifying areas
                        for improvement
                      </li>
                    </ul>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: Assets.theme.dark.bg,
                      fontWeight: "600",
                    }}
                  >
                    E - Process Nigeria:{" "}
                  </p>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: Assets.theme.dark.bg,
                      fontWeight: "400",
                    }}
                  >
                    Jan 2023 - Present
                  </p>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: Assets.theme.dark.bg,
                      fontWeight: "400",
                    }}
                  >
                    |
                  </p>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: Assets.theme.dark.bg,
                      fontWeight: "400",
                    }}
                  >
                    Full Time
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
                    security, and convenience. Tailored for seamless
                    transactions within the same currency and country,
                    EcobankPay empowers you to effortlessly send, receive, and
                    schedule payments with just a few taps. Say goodbye to cash
                    transactions and delays. EcobankPay enables instant,
                    hassle-free money transfers to friends, family, or business
                    associates within the same country and currency. Enjoy the
                    ease of splitting bills, sharing expenses, and sending gifts
                    effortlessly.
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
                    Responsibilities
                  </p>
                  <ul style={{ marginBottom: 20 }}>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Developed new user-facing features for our cross-platform
                      mobile app
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Collaborated with Product and Design to create a seamless
                      user experience
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Contributed to the architecture, development, and
                      maintenance of our mobile app.
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Built reusable code and libraries for future use
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Leveraged native APIs for deep integrations with both
                      platforms
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Ensured the technical feasibility of UI/UX designs
                    </li>
                  </ul>
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
                    <b>AccessHomes</b> is a revolutionary mobile app that puts
                    the world of real estate at your fingertips. Seamlessly
                    search for your dream home, explore property options, and
                    connect with sellers, all from the comfort of your own
                    space, no matter where you are in the world. Embark on a
                    global property hunt from the convenience of your
                    smartphone. Whether you're across the street or across the
                    globe, AccessHomes empowers you to explore a wide range of
                    houses and lands in different locations.
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
                    Responsibilities
                  </p>
                  <ul style={{ marginBottom: 20 }}>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Developed new user-facing features for our cross-platform
                      mobile app
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Collaborated with Product and Design to create a seamless
                      user experience
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Contributed to the architecture, development, and
                      maintenance of our mobile app.
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Built reusable code and libraries for future use
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Leveraged native APIs for deep integrations with both
                      platforms
                    </li>
                    <li
                      style={{
                        fontFamily: "Courier New",
                        letterSpacing: 2,
                        color: Assets.theme.dark.bg,
                        fontWeight: "300",
                      }}
                    >
                      Ensured the technical feasibility of UI/UX designs
                    </li>
                  </ul>
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
                    Hire Me - Let's Work Together
                  </p>
                </button>
              </div>
            </div>
          ) : null}
          <button
            onClick={() => setItProjects(!itProjects)}
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: Assets.theme.light.bg,
              height: 40,
              padding: 10,
              marginBottom: 30,
              borderWidth: 0.5,
              cursor: "pointer"
            }}
          >
            <p
              style={{
                // textAlign: "center",
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 20,
                color: Assets.theme.dark.bg,
                fontWeight: "700",
              }}
            >
              IT Projects
            </p>
            {
              itProjects ? (<ArrowDownwardIcon/>) : (<ArrowUpwardIcon/>)
            }
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
