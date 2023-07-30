import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";
const Home: React.FC<any> = ({}) => {
  const navigate = useNavigate();
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
            Connect with the Code Wizard, Let's Bring Your Vision to Life
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
            I'm excited to collaborate with you, whether it's for a potential
            project, a technical consultation, or simply a conversation about
            the endless possibilities of technology.
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
            Let's embark on a transformative partnership, where lines of code
            merge with creativity to craft innovative solutions. Whether you
            have a grand idea or a curious question, I'm here to listen,
            understand, and unleash the power of technology to bring your vision
            to life.
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
            Reach out through any of the channels below, and let's start an
            enchanting conversation. Together, we can build digital marvels that
            resonate with users and leave a lasting mark on the world. I can't
            wait to hear from you!
          </p>
          <div>
            <p
              style={{
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 26,
                color: "#ffffff",
                fontWeight: "700",
                marginTop: 30,
              }}
            >
              Contact Channels
            </p>
            <p
              style={{
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 20,
                color: "#ffffff",
                fontWeight: "400",
                marginTop: 30,
              }}
            >
              By Email
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
              For all inquiries, collaboration opportunities, or any questions
              you may have, feel free to reach out to me via email. I look
              forward to hearing from you and exploring how we can work together
              to create innovative solutions and bring your ideas to life. Let's
              start an exciting conversation today!
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
              <a
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#000000",
                  textDecoration: "none",
                }}
                href="mailto:developerekene@gmail.com"
              >
                Send me an Email
              </a>
              <p></p>
            </button>
            <p
              style={{
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 20,
                color: "#ffffff",
                fontWeight: "400",
                marginTop: 30,
              }}
            >
              By WhatsApp
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
              Stay connected effortlessly with a direct line to reach me on
              WhatsApp. Whether you have questions, collaboration ideas, or just
              want to say hello, feel free to drop me a message anytime. Let's
              chat and explore the possibilities of our digital journey
              together. Looking forward to connecting with you on WhatsApp!
            </p>
            <button
              style={{
                padding: 12,
                border: "none",
                borderRadius: 5,
                backgroundColor: "yellow",
                cursor: "pointer",
                marginTop: 30,
              }}
            >
              <a
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#000000",
                  textDecoration: "none",
                }}
                href="https://wa.me/08133992410"
              >
                Let's chat via WhatsApp
              </a>
            </button>
            <p
              style={{
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 20,
                color: "#ffffff",
                fontWeight: "400",
                marginTop: 30,
              }}
            >
              By Call [Video / Audio]
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
              Take the direct route to connect with me by phone. For prompt
              responses and real-time communication, feel free to give me a
              call. Whether you have questions, project inquiries, or simply
              want to discuss ideas, I'm just a phone call away. Let's have a
              productive conversation and explore the possibilities of working
              together to create something extraordinary. Dial by clicking the
              button below, and let's bring your visions to life with the power
              of technology!
            </p>
            <button
              style={{
                padding: 12,
                border: "none",
                borderRadius: 5,
                backgroundColor: "yellow",
                cursor: "pointer",
                marginTop: 30,
              }}
            >
              <a
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: "#000000",
                  textDecoration: "none",
                }}
                href="tel:07068815984"
              >
                Let's Talk
              </a>
            </button>
            <p
              style={{
                marginBottom: 30,
                fontFamily: "Courier New",
                fontSize: 20,
                color: "#ffffff",
                fontWeight: "400",
                marginTop: 30,
              }}
            >
              By Social Media
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
              Stay updated and connected with me through my active presence on
              various social media platforms. Follow me on Twitter, Instagram,
              and LinkedIn to get the latest updates on my projects, insights on
              tech trends, motivational content, and helpful resources. Let's
              engage in meaningful discussions and build a community where we
              can share our passion for technology, personal growth, and more.
              Don't miss out on exciting content and opportunities to connect
              with like-minded individuals. Join me on social media and let's
              stay connected!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10
              }}
            >
              <button
                style={{
                  padding: 12,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "yellow",
                  cursor: "pointer",
                  marginTop: 30,
                }}
              >
                <a
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#000000",
                    textDecoration: "none",
                  }}
                  href="https://twitter.com/developer_ekene"
                >
                  <TwitterIcon />
                </a>
              </button>
              <button
                style={{
                  padding: 12,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "yellow",
                  cursor: "pointer",
                  marginTop: 30,
                }}
              >
                <a
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#000000",
                    textDecoration: "none",
                  }}
                  href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/"
                >
                  <LinkedInIcon />
                </a>
              </button>
              <button
                style={{
                  padding: 12,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "yellow",
                  cursor: "pointer",
                  marginTop: 30,
                }}
              >
                <a
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#000000",
                    textDecoration: "none",
                  }}
                  // href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/"
                >
                  <InstagramIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div
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
            key Projects
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
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
                    Develop flowcharts, layouts and documentation to identify
                    requirements and solutions
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
                    Produce specifications and determine operational feasibility
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
                    Develop software verification plans and quality assurance
                    procedures
                  </li>
                  <li
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: Assets.theme.dark.bg,
                      fontWeight: "300",
                    }}
                  >
                    Nurturing team members strength and identifying areas for
                    improvement
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
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
                  Collaborated with Product and Design to create a seamless user
                  experience
                </li>
                <li
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.theme.dark.bg,
                    fontWeight: "300",
                  }}
                >
                  Contributed to the architecture, development, and maintenance
                  of our mobile app.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
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
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
