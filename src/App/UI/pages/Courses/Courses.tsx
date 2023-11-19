/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";
import NavBar from "../../components/NavBar/NavBar";
// import { windowWidth } from "../WelcomePage/WelcomePage";
import { Assets } from "../../../utils/constants/Assets";
import Footer from "../../components/Footer/Footer";
import "../Courses/Courses.css";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import { coursesFree, coursesPaid } from "../../../utils/constants/Data";
import GroupButton from "../../components/GroupButton/GroupButton";

const Courses: React.FunctionComponent = () => {
  const [training, setTraining] = React.useState<boolean>(true);
  const [courses, setCourses] = React.useState<boolean>(false);
  const [articles, setArticles] = React.useState<boolean>(false);

  const [btnOneBG, setBtnOneBG] = React.useState<string>("#2e3644");
  const [btnTwoBG, setBtnTwoBG] = React.useState<string>("#4D5061");

  const [showTrainings, setShowTrainings] = React.useState<boolean>(true);

  const getFreeCourses = () => {
    return coursesFree.map((i, j) => {
      return (
        <>
          <div key={j}>
            <div className="courseCard">
              <img src={i.cover} width="100%" height={200} alt="" />
              <div className="cardInnerDiv">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: "#E8C547",
                      fontWeight: "600",
                      textAlign: "justify",
                      marginTop: 10,
                    }}
                  >
                    {i.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: "darkred",
                      fontWeight: "600",
                      textAlign: "justify",
                      marginTop: 10,
                      fontSize: 12,
                    }}
                  >
                    {i.releasedDate}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "#ffffff",
                    fontWeight: "400",
                    textAlign: "justify",
                    marginTop: 10,
                  }}
                >
                  {i.subTitle}
                </p>
                <div className="bottomInfoDiv">
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: "#ffffff",
                      fontWeight: "600",
                      textAlign: "justify",
                      marginTop: 10,
                      fontSize: 12,
                    }}
                  >
                    {i.time}
                  </p>
                  <p
                    style={{
                      fontFamily: "Courier New",
                      letterSpacing: 2,
                      color: "#ffffff",
                      fontWeight: "600",
                      textAlign: "justify",
                      marginTop: 10,
                      fontSize: 12,
                    }}
                  >
                    {i.totalStudents} Enrolled Students
                  </p>
                </div>
                {/* <button
                // onClick={() => navigate("/projects")}
                style={{
                  padding: 12,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: Assets.theme.dark.bg,
                  marginTop: 25,
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
                  Enroll for {i.title}
                </p>
              </button> */}
                <div style={{ marginTop: 60 }}>
                  <GlobalButton
                    text={"Enroll Now"}
                    bgColor={"#2C2817"}
                    textColor={Assets.colors.primary}
                    onPress={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  const trainingContent: ReactNode = (
    <div className="courses-training">
      <p className="courses-header">
        6 Months Software Engineering Training (Ongoing)
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "60%" }}>
          <p className="courses-p">
            Ready to embark on a transformative learning journey that will
            unleash your potential as a skilled software engineer?
          </p>
          <p className="courses-p">
            Join our training program, where knowledge meets innovation, and
            you'll gain the tools and confidence to thrive in the digital
            landscape. Our dynamic and immersive curriculum is designed to
            nurture your passion for technology, empower you with hands-on
            expertise, and equip you with the latest programming languages and
            real-world application development skills.
          </p>
          <p className="courses-p">
            Led by seasoned mentors and industry experts, our training fosters a
            supportive and collaborative learning environment, where curiosity
            is encouraged, challenges are embraced as opportunities, and
            questions lead to discoveries. Whether you're a novice or an
            experienced coder, our training welcomes you with open arms.
          </p>
          <p className="courses-p">
            Take the leap, redefine your future as a software engineer, and join
            us in shaping a world where innovation knows no bounds and
            possibilities are limitless.
          </p>
        </div>
        <img src={Assets.images.corsesIllustration} alt="" />
      </div>

      <p className="courses-header">Training Stacks</p>
      <ul>
        <li>
          <p className="courses-p">React Native / Typescript</p>
        </li>
        <li>
          <p className="courses-p">React Js / Typescript</p>
        </li>
        <li>
          <p className="courses-p">Understanding Typescript</p>
        </li>
        <li>
          <p className="courses-p">Understanding Javascript</p>
        </li>
      </ul>

      <div style={{ paddingTop: 25 }}>
        <GlobalButton
          text={"Start your Software Engineering Journey"}
          bgColor={"#2C2817"}
          textColor={Assets.colors.primary}
          onPress={() => {}}
        />
      </div>
    </div>
  );

  const articleContent: ReactNode = (
    <div
      style={{
        backgroundColor: Assets.colors.neat,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: 250,
        alignItems: "center",
      }}
    >
      <div>
        <p style={{ color: Assets.colors.boldNeat, fontSize: 96, fontWeight: "800" }}>Coming Soon</p>
      </div>
    </div>
  );
  const [content, setContent] = React.useState<any>(trainingContent);

  // const [hideFreeCourses, setHideFreeCourses] = React.useState<boolean>(true);
  // const [showArticles, setShowArticles] = React.useState<boolean>(false);
  // const [hidePaidCourses, setHidePaidCourses] = React.useState<boolean>(false);

  const getPaidCourses = () => {
    return coursesPaid.map((i, j) => {
      return (
        <div key={j}>
          <div className="courseCard">
            <img src={i.cover} width={350} height={200} alt="" />
            <div className="cardInnerDiv">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    fontWeight: "600",
                    textAlign: "justify",
                    marginTop: 10,
                    color: Assets.colors.light,
                  }}
                >
                  {i.title}
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: "yellow",
                    fontWeight: "600",
                    textAlign: "justify",
                    marginTop: 10,
                    fontSize: 12,
                  }}
                >
                  {i.releasedDate}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "Courier New",
                  letterSpacing: 2,
                  color: Assets.colors.light,
                  fontWeight: "400",
                  textAlign: "justify",
                  marginTop: 10,
                }}
              >
                {i.subTitle}
              </p>
              <div className="bottomInfoDiv">
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.colors.light,
                    fontWeight: "600",
                    textAlign: "justify",
                    marginTop: 10,
                    fontSize: 12,
                  }}
                >
                  {i.time}
                </p>
                <p
                  style={{
                    fontFamily: "Courier New",
                    letterSpacing: 2,
                    color: Assets.colors.light,
                    fontWeight: "600",
                    textAlign: "justify",
                    marginTop: 10,
                    fontSize: 12,
                  }}
                >
                  {i.totalStudents} Enrolled Students
                </p>
              </div>
              {/* <button
                // onClick={() => navigate("/projects")}
                style={{
                  padding: 12,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: Assets.theme.dark.bg,
                  marginTop: 25,
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
                  Enroll for {i.title}
                </p>
              </button> */}
              <div style={{ marginTop: 60 }}>
                <GlobalButton
                  text={"Enroll Now"}
                  bgColor={"#2C2817"}
                  textColor={Assets.colors.primary}
                  onPress={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: Assets.colors.secondary,
        }}
      >
        <div style={{}}>
          <p
            style={{
              textAlign: "center",
              color: Assets.colors.light,
              paddingTop: 140,
              fontSize: 58,
              fontWeight: "800",
            }}
          >
            Elevate Your Skills
          </p>
          <p
            style={{
              textAlign: "center",
              color: Assets.colors.light,
              fontSize: 58,
              fontWeight: "800",
            }}
          >
            & Expand Your Horizons
          </p>
          <p
            style={{
              textAlign: "center",
              color: Assets.colors.light,
              fontSize: 22,
              fontWeight: "200",
              paddingLeft: 120,
              paddingRight: 120,
            }}
          >
            Welcome to MasterClass+, where knowledge knows no bounds and
            learning becomes an exhilarating journey. Elevate your skills and
            explore new horizons with our diverse range of courses designed to
            nurture your passion and unleash your potential. From cutting-edge
            technology to creative arts, our handpicked selection of courses
            caters to every learner's interests. Immerse yourself in expert-led
            sessions, hands-on projects, and interactive learning experiences
            that bridge the gap between theory and practice.
          </p>
          <div
            style={{
              display: "flex",
              gap: 40,
              justifyContent: "center",
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <GlobalButton
              text={"Trainings"}
              bgColor={training === true ? "#306CA3" : Assets.colors.neat}
              textColor={training === true ? "#ffffff" : Assets.colors.boldNeat}
              onPress={() => {
                setTraining(true);
                setCourses(false);
                setArticles(false);
                setContent(trainingContent);
              }}
            />
            <GlobalButton
              text={"Courses"}
              bgColor={courses === true ? "#306CA3" : Assets.colors.neat}
              textColor={
                courses === true ? Assets.colors.light : Assets.colors.boldNeat
              }
              onPress={() => {
                setTraining(false);
                setCourses(true);
                setArticles(false);
                setContent(getFreeCourses());
              }}
            />
            <GlobalButton
              text={"Articles"}
              bgColor={articles === true ? "#306CA3" : Assets.colors.neat}
              textColor={
                articles === true ? Assets.colors.light : Assets.colors.boldNeat
              }
              onPress={() => {
                setTraining(false);
                setCourses(false);
                setArticles(true);
                setContent(articleContent);
              }}
            />
          </div>
        </div>
        <div>
          {courses === true ? (
            <GroupButton
              showBtnOne={true}
              pressBtnOne={() => {
                setBtnTwoBG("#4D5061");
                setBtnOneBG("#2e3644");
                setContent(getFreeCourses());
              }}
              pressBtnTwo={() => {
                setBtnTwoBG("#2e3644");
                setBtnOneBG("#4D5061");
                setContent(getPaidCourses());
              }}
              showBtnTwo={true}
              btnOneText={"Free Courses"}
              btnTwoText={"Paid Courses"}
              btnOneBg={btnOneBG}
              btnTwoBg={btnTwoBG}
            />
          ) : null}
          <div
            style={{
              gap: 20,
              paddingBottom: 50,
              display: "flex",
              overflow: "scroll",
              marginLeft: 120,
              marginRight: 120,
            }}
          >
            {content}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
