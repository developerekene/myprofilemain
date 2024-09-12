import React from "react";
import "../Styles/Navbar.css";
import { Assets } from "../../utils/constants/Assets";
import { DATA } from "../../utils/constants/Data";

const Navbar: React.FunctionComponent = () => {
  const navLinksMap = () => {
    return DATA.navLinks.map((item, index) => {
      return (
        <li className="list" key={index}>
          <a href={item.path} className="anchor">
            {item.link}
          </a>
        </li>
      );
    });
  };

  return (
    <div className="navbar_home">
      <div className="left_navbar">
        <div className="">
          <img src={Assets.images.main_logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav_bar">{navLinksMap()}</ul>
      </div>
      <div className="right_navbar">
        <div className="socials">
          <img src={Assets.images.social_github} alt="twitter" className="" />
          <img src={Assets.images.social_linkedIn} alt="" className="" />
          <img src={Assets.images.social_twitter} alt="" className="" />
        </div>
        <div className="">
          <span className="version">v2.5</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
