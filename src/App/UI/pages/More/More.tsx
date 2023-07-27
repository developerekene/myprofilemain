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
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", padding: 10 }}>
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 26,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                  }}
                >
                  One day, I'll address a Nation and leave a big positive impact
                  in the world.
                </p>
                <img
                  src={Assets.images.more_image_one}
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "50%", padding: 10 }}>
                {/* <p>hvghv</p> */}
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 18,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                    textAlign: "justify",
                  }}
                >
                  In the depths of our souls lies a relentless spirit that
                  refuses to surrender in the face of challenges. It is the mark
                  of a truly remarkable individual, a testament to the power of
                  an unwavering will and an unyielding belief in oneself. Having
                  a personality of not giving up, being persistent, holding on
                  to dreams, and moving forward until I reach my goal is a
                  defining quality that will propels me beyond my limitations
                  and into the realm of greatness.
                </p>
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 18,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                    textAlign: "justify",
                  }}
                >
                  Life may present us with setbacks, but it is how we respond to
                  them that defines our journey. Transforming setbacks into
                  comebacks is an art. Embrace the lessons they offer, rise
                  above adversity, and emerge stronger and more determined than
                  ever. Resilience is the cornerstone of my personality. It is
                  the ability to bounce back from adversity, unwavering in my
                  pursuit of greatness. Persistence is the key that unlocks the
                  door to success. It is the steady drumbeat that propels me
                  forward, step by step, toward my dreams. Hold onto your
                  dreams, for they are the seeds of greatness. Believe in their
                  possibility, for faith is the foundation of achievement. With
                  unwavering determination, I take deliberate steps daily
                  towards my dreams, turning them into tangible realities.
                </p>
                <p
                  style={{
                    // textAlign: "center",
                    marginBottom: 30,
                    fontFamily: "Courier New",
                    fontSize: 18,
                    color: Assets.theme.dark.bg,
                    fontWeight: "700",
                    textAlign: "justify",
                  }}
                >
                  Having a personality of not giving up, being persistent,
                  holding on to dreams, and moving forward till I reach my
                  goal is my gift to the world. It is a powerful
                  force that defies the odds and paves the way for extraordinary
                  achievements. Embracing this personality, it allows me the
                  strength to surpass limitations and shape my destiny. My
                  journey is one of courage, resilience, and boundless
                  potential. Trust in yourself, and with every stride, know that
                  you are creating an inspiring legacy for the world to witness.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default More;
