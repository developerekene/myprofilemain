import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Projects.css";
import { LuSearch } from "react-icons/lu";
import { Assets } from "../../utils/constants/Assets";
import { DATA } from "../../utils/constants/Data";

const Projects: React.FunctionComponent = () => {
  const [dropDown, setDropDown] = React.useState<string>("All");
  const [positionA, setPositionA] = React.useState<any>("none");
  const [mainContainer, setMainContainer] = React.useState<any>("grid");
  const [subContainer, setSubContainer] = React.useState<any>("none");
  const [img, setImg] = React.useState<any>();
  const [name, setName] = React.useState<any>("");
  const [appDesc, setAppDesc] = React.useState<any>("");
  const [res, setRes] = React.useState<any>("");
  const [link, setLink] = React.useState<any>("");
  const [search, setSearch] = React.useState<any>("");

  const showDropDown = () => {
    if (positionA === "none") {
      setPositionA("block");
    } else {
      setPositionA("none");
    }
  };

  const dropdown_menu = [
    "All",
    "Front-End Projects",
    "Mobile App Projects",
    "NPM Projects",
  ];

  const projectMap = () => {
    return DATA.projectsHomePage
      .filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.name.toLowerCase().includes(search);
      })
      .map((item, index) => {
        if (dropDown === "All") {
          return (
            <div key={index} className="projects_header_item_main">
              <div
                className="project_header_item"
                onClick={() => {
                  if (mainContainer === "grid") {
                    setMainContainer("none");
                    setSubContainer("grid");
                    setImg(item.icon);
                    setName(item.name);
                    setAppDesc(item.appDesc);
                    setRes(item.responsibility);
                    setLink(item.link);
                  }
                }}
              >
                <div className="projects_header_image">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="projects_header_image_img"
                  />
                </div>
              </div>
            </div>
          );
        } else if (
          dropDown === "Mobile App Projects" &&
          item.category === "Mobile App Projects"
        ) {
          return (
            <div key={index} className="projects_header_item_main">
              <div className="project_header_item">
                <div className="projects_header_image">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="projects_header_image_img"
                  />
                </div>
              </div>
            </div>
          );
        } else if (
          dropDown === "Front-End Projects" &&
          item.category === "Front-End Projects"
        ) {
          return (
            <div key={index} className="projects_header_item_main">
              <div className="project_header_item">
                <div className="projects_header_image">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="projects_header_image_img"
                  />
                </div>
              </div>
            </div>
          );
        } else if (
          dropDown === "NPM Projects" &&
          item.category === "NPM Projects"
        ) {
          return (
            <div key={index} className="projects_header_item_main">
              <div className="project_header_item">
                <div className="projects_header_image">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="projects_header_image_img"
                  />
                </div>
              </div>
            </div>
          );
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="projects_main">
        <div className="projects_main_header">
          <h1 className="projects_main_header_text">
            Where Innovation Meets Excellence
          </h1>
          <div className="projects_main_search">
            <div className="projects_search">
              <LuSearch className="projects_search_icon" />
              <input
                placeholder="Search Projects"
                className="projects_search_bar"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div
              className="projects_filter"
              onClick={() => {
                showDropDown();
              }}
            >
              <div className="projects_filter_inner">
                <p>{dropDown}</p>
                <img src={Assets.images.drop_down_b} alt="face_image" />
              </div>
            </div>
          </div>
          <div className="projects_filter_drop" style={{ display: positionA }}>
            {dropdown_menu.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setDropDown(item);
                  setPositionA("none");
                }}
                className="projects_filter_drop_drown"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div
            className="project_header_content"
            style={{ display: mainContainer }}
          >
            {projectMap()}
          </div>
          <div
            className="project_header_content"
            style={{ display: subContainer }}
          >
            <div className="projects_header_item_main">
              <div
                className="project_header_item"
                onClick={() => {
                  if (mainContainer === "none") {
                    setMainContainer("grid");
                    setSubContainer("none");
                  }
                }}
              >
                <div className="projects_header_image">
                  <img src={img} className="projects_header_image_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="project_header_content_desc"
          style={{ display: subContainer }}
        >
          <h1 className="project_header_content_h1">{name}</h1>
          <p className="project_header_content_p">{appDesc}</p>
          <p className="project_header_content_link">{link}</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
