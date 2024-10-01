import React from "react";
import "../Styles/Navbar.css";
import { Assets } from "../../utils/constants/Assets";
import { DATA } from "../../utils/constants/Data";
import { PiHamburgerFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  const [mobileNavBar, setMobileNavBar] = React.useState<string>("none");
  const [showDropDown, setShowDropDown] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const navLinksMap = () => {
    return DATA.navLinks.map((item, index) => {
      return (
        <li className="list" key={index}>
          <div
            className="anchor"
            onClick={() => {
              if (item.path === "") {
                setShowDropDown(!showDropDown);
              } else {
                navigate(item.path);
              }
            }}
            style={{
              color:
                window.location.pathname === item.path ? "#193868" : "#ffffff",
            }}
          >
            {item.link}
          </div>
        </li>
      );
    });
  };

  const dropDownLinksMap = () => {
    return DATA.dropDownLinks.map((item, index) => {
      return (
        <li className="list" key={index}>
          <div
            className="anchor_down"
            onClick={() => {
              navigate(item.path);
            }}
            style={{
              color:
                window.location.pathname === "/software-eng" ||
                "/entrepreneur" ||
                "/tech"
                  ? "#ffffff"
                  : "",
            }}
          >
            {item.link}
          </div>
        </li>
      );
    });
  };

  const triggerMobileNavBar = () => {
    if (mobileNavBar === "none") {
      setMobileNavBar("block");
    } else {
      setMobileNavBar("none");
    }
  };

  return (
    <>
      <div className="navbar_mobile" style={{ display: mobileNavBar }}>
        <ul className="nav_bar_mobile_links">{navLinksMap()}</ul>
      </div>
      <div className="navbar_home">
        <div className="left_navbar">
          <div className="">
            <a href="/">
              <img src={Assets.images.main_logo} alt="Logo" className="logo" />
            </a>
          </div>
          <ul className="nav_bar">{navLinksMap()}</ul>
          {showDropDown ? (
            <ul className="drop_down_menu">{dropDownLinksMap()}</ul>
          ) : null}
        </div>
        <div className="right_navbar">
          <div className="socials">
            <a href="https://github.com/developerekene">
              <img
                src={Assets.images.social_github}
                alt="twitter_icon"
                className="social_icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/">
              <img
                src={Assets.images.social_linkedIn}
                alt="linkedIn_icon"
                className="social_icon"
              />
            </a>
            <a href="https://x.com/developer_ekene">
              <img
                src={Assets.images.social_twitter}
                alt="twitter_icon"
                className="social_icon"
              />
            </a>
          </div>
          <div className="">
            <span className="version">v2.5</span>
          </div>
          <div
            className="menu_btn"
            onClick={() => {
              triggerMobileNavBar();
            }}
          >
            <PiHamburgerFill className="menu_btn_icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
