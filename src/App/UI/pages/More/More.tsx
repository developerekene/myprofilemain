import React from "react";
import { Assets } from "../../../utils/constants/Assets";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "../More/More.css";
import { textData } from "../../../utils/constants/Data";

const More: React.FC<any> = ({}) => {
  return (
    <div>
      <NavBar />
      <div className="moreMain">
        <div className="moreInnerCon">
          <p className="moreHeader">
            {textData.more.mainHeader}
          </p>
          <p className="moreParagraph">
            {textData.more.mainHeaderPone}
          </p>
          <p className="moreParagraph">
            {textData.more.mainHeaderPtwo}
          </p>
          <p className="moreParagraph">
            {textData.more.mainHeaderPthree}
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
      <div className="moreInnerDiv">
        <div className="moreInnerCon">
          <div>
            <div className="flexDisplay">
              <div className="flexDisplayInner">
                <p className="morePTop">
                  One day, I'll address a Nation and leave a big positive impact
                  in the world.
                </p>
                <img src={Assets.images.more_image_one} className="moreImg" />
              </div>
              <div className="flexDisplayInner">
                <p className="morePJustify">
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
                <p className="morePJustify">
                  Having a personality of not giving up, being persistent,
                  holding on to dreams, and moving forward till I reach my goal
                  is my gift to the world. It is a powerful force that defies
                  the odds and paves the way for extraordinary achievements.
                  Embracing this personality, it allows me the strength to
                  surpass limitations and shape my destiny. My journey is one of
                  courage, resilience, and boundless potential. Trust in
                  yourself, and with every stride, know that you are creating an
                  inspiring legacy for the world to witness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flexDisplayA">
        <div className="flexDisplayMore">
          <div className="cardImg">
            <div>
              <img src={Assets.images.img_one} alt="2017 MIC" className="imgCard"/>
            </div>
            <div>
              <p className="morePJustify">The MIC Competition - June, 2017</p>
            </div>
          </div>
          <div className="cardImg">
            <div>
              <img src={Assets.images.img_two} alt="2017 MIC" className="imgCard"/>
            </div>
            <div>
              <p className="morePJustify">The MIC Competition - June, 2017</p>
            </div>
          </div>
          <div className="cardImg">
            <div>
              <img src={Assets.images.img_three} alt="2017 MIC" className="imgCard"/>
            </div>
            <div>
              <p className="morePJustify">The MIC Competition - June, 2017</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default More;
