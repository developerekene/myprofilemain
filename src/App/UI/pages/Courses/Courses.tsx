import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { windowWidth } from "../WelcomePage/WelcomePage";
import { Assets } from "../../../utils/constants/Assets";
import Footer from "../../components/Footer/Footer";
// import ScrollAnimation from "react-animate-on-scroll";
const Courses: React.FC<any> = ({}) => {
  const [showCourses, setShowCourses] = React.useState<boolean>(false);
  const [showTrainings, setShowTrainings] = React.useState<boolean>(true);
  const [showArticles, setShowArticles] = React.useState<boolean>(false);
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
            Elevate Your Skills and Expand Your Horizons
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
            Welcome to MasterClass+, where knowledge knows no boundaries, and
            learning becomes an exhilarating journey. Elevate your skills and
            explore a world of opportunities with our diverse range of courses
            designed to nurture your passion and unleash your potential.
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
            From cutting-edge technology to creative arts, our carefully curated
            selection of courses caters to every learner's interest. Immerse
            yourself in expert-led sessions, hands-on projects, and interactive
            learning experiences that bridge the gap between theory and
            practice.
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
            Whether you're a seasoned professional seeking to stay ahead in your
            industry or a curious enthusiast eager to explore new territories,
            MasterClass+ offers an engaging and inclusive platform to fuel your
            intellectual curiosity. Prepare to unlock new possibilities and
            embark on a transformative educational adventure with MasterClass+.
            Join us today and let's embark on this inspiring journey of
            discovery together.
          </p>
          {/* <ScrollAnimation animateIn="fadeIn"> */}
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
              Start your Software Engineering Journey
            </p>
          </button>
          {/* </ScrollAnimation> */}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: 60,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
          }}
        >
          <button
            onClick={() => {
              setShowTrainings(true);
              setShowCourses(false);
              setShowArticles(false);
            }}
            style={{
              padding: 15,
              backgroundColor: showTrainings
                ? "yellow"
                : Assets.theme.light.textColor,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: showTrainings
                  ? Assets.theme.dark.bg
                  : Assets.theme.light.bg,
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              Trainings
            </p>
          </button>
          <button
            onClick={() => {
              setShowTrainings(false);
              setShowCourses(true);
              setShowArticles(false);
            }}
            style={{
              padding: 15,
              backgroundColor: showCourses
                ? "yellow"
                : Assets.theme.light.textColor,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: showCourses
                  ? Assets.theme.dark.bg
                  : Assets.theme.light.bg,
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              Courses
            </p>
          </button>
          <button
            onClick={() => {
              setShowTrainings(false);
              setShowCourses(false);
              setShowArticles(true);
            }}
            style={{
              padding: 15,
              backgroundColor: showArticles
                ? "yellow"
                : Assets.theme.light.textColor,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: showArticles
                  ? Assets.theme.dark.bg
                  : Assets.theme.light.bg,
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              Articles
            </p>
          </button>
        </div>
      </div>
      <div>
        {showTrainings ? (
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
                  Are you ready to embark on a transformative learning
                  experience that will unlock the world of software engineering?
                  Join our training program, where knowledge meets innovation,
                  and unleash your potential as a skilled developer.
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
                  Our dynamic and immersive curriculum is designed to nurture
                  your passion for technology and empower you with hands-on
                  expertise. From mastering the latest programming languages to
                  building real-world applications, you'll gain the tools and
                  confidence to thrive in the digital landscape.
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
                  Led by seasoned mentors and industry experts, our training
                  fosters a supportive learning environment, where curiosity is
                  encouraged, and questions lead to discoveries. Embrace
                  challenges as stepping stones and turn obstacles into
                  opportunities.
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
                  Whether you're a novice or an experienced coder seeking to
                  level up your skills, our training welcomes all with open
                  arms. Take the leap and redefine your future as a software
                  engineer. Together, let's shape a world where innovation knows
                  no bounds and possibilities are limitless.
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
        ) : null}
        {showCourses ? (
          <div
            style={{
              backgroundColor: "ffffff",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "85%", padding: 20 }}>
              <img src={Assets.images.coming_soon} style={{ width: "100%" }} />
            </div>
          </div>
        ) : null}
        {showArticles ? (
          <div
          style={{
            backgroundColor: "ffffff",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "85%", padding: 20 }}>
            <img src={Assets.images.coming_soon} style={{ width: "100%" }} />
          </div>
        </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
