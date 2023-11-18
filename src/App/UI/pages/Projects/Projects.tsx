/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "../Projects/Projects.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GroupButton from "../../components/GroupButton/GroupButton";
import { PROJECTS } from "../../../utils/constants/Data";

const Projects: React.FC = () => {
  // States
  const [btnOneBG, setBtnOneBG] = React.useState<string>("#2e3644");
  const [btnTwoBG, setBtnTwoBG] = React.useState<string>("#4D5061");

  const [topContent, setTopContent] = React.useState<React.ReactNode>();
  const [middle, setMiddle] = React.useState<React.ReactNode>();
  const [middleTitle, setMiddleTitle] = React.useState<React.ReactNode>();
  const [bottomTitle, setBottomTitle] = React.useState<React.ReactNode>();
  const [bottom, setBottom] = React.useState<React.ReactNode>();

  // Function to map through the project array
  const getAllProjects = (): JSX.Element[] => {
    return PROJECTS.map((item, index: number) => {
      return (
        <div key={index}>
          <div className="project-card">
            <img src={item.icon} alt="" width={150} height={150} />
            <p className="project-title">{item.title}</p>
            <p className="project-header">{item.header}</p>
            <p className="project-company">{item.company}</p>
            <p className="project-company">{item.date}</p>
            <div
              onClick={() => {
                setTopContent(item.aboutApp);
                setMiddleTitle(item.jobDescriptionTitle);
                setMiddle(
                  item.jobDescription.map((item) => (
                    <p style={{ textAlign: "left" }}>{item}</p>
                  ))
                );
                setBottomTitle(item.techTitle);
                setBottom(
                  item.techUsed.map((item) => (
                    <p style={{ textAlign: "left" }}>{item}</p>
                  ))
                );
              }}
            >
              <p className="project-btn">Click to know more</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <NavBar />
      <div className="projects-conn">
        <h3 className="projects-h3">Where Innovation Meets Excellence</h3>
        <p className="projects-conn-p">
          A showcase of digital marvels crafted with passion and precision. Each
          project represents a unique blend of innovation and technical
          expertise, harnessing the power of code to shape extraordinary
          experiences. From seamless mobile apps that empower users to
          cutting-edge web solutions that transform businesses, these projects
          embody my journey as a software engineer. Immerse yourself in a world
          of creativity and problem-solving, where every line of code weaves a
          tapestry of digital ingenuity.
        </p>

        <div className="projects-btn">
          <GroupButton
            showBtnOne={true}
            pressBtnOne={() => {}}
            pressBtnTwo={() => {}}
            showBtnTwo={true}
            btnOneText={"Engineering Projects"}
            btnTwoText={"IT Projects"}
            btnOneBg={btnOneBG}
            btnTwoBg={btnTwoBG}
          />
        </div>

        <div className="project-top">{getAllProjects()}</div>
        <div className="projects-contents">
          <p style={{ color: "#ffffff ", textAlign: "left" }}>{topContent}</p>
          <p style={{ color: "#479BE8 ", marginTop: 18, textAlign: "left" }}>
            {middleTitle}
          </p>
          <p style={{ color: "#ffffff ", textAlign: "left" }}>{middle}</p>
          <p
            style={{
              color: " #E8C547 ",
              textAlign: "left",
              marginTop: 18,
            }}
          >
            {bottomTitle} {bottom}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
