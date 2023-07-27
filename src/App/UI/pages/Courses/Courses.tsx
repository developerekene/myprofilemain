import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { windowWidth } from "../WelcomePage/WelcomePage";
import { Assets } from "../../../utils/constants/Assets";
// import ScrollAnimation from "react-animate-on-scroll";
const Courses: React.FC<any> = ({}) => {
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
            MasterClass+: Elevate Your Skills and Expand Your Horizons
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
            style={{
              padding: 15,
              backgroundColor: Assets.theme.light.textColor,
              border: "none",
              color: Assets.theme.light.bg,
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "white",
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              Trainings
            </p>
          </button>
          <button
            style={{
              padding: 15,
              backgroundColor: Assets.theme.light.textColor,
              border: "none",
              color: Assets.theme.light.bg,
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "white",
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              Courses
            </p>
          </button>
          <button
            style={{
              padding: 15,
              backgroundColor: Assets.theme.light.textColor,
              border: "none",
              color: Assets.theme.light.bg,
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontFamily: "Courier New",
                letterSpacing: 2,
                color: "white",
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              Articles
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
