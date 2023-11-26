/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import Switch from "@mui/material/Switch";
import { Assets } from "../../../utils/constants/Assets";
import "../NavBar/NavBar.css";
import { LINKS, navUl } from "../../../utils/constants/Data";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

const label = { inputProps: { "aria-label": "Switch demo" } };

const NavBar: React.FC = () => {
  const [openNav, setOpenNav] = React.useState(true);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };
  if (!openNav) {
    document.body.classList.add("active-nav");
  } else {
    document.body.classList.remove("active-nav");
  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(checked);
  };

  const getThroughNav = () => {
    return navUl.map((i, j) => {
      return (
        <li style={{ listStyle: "none" }}>
          <a
            href={i.render}
            style={{
              color: Assets.theme.light.bg,
              textDecoration: "none",
              fontFamily: "Courier New",
            }}
          >
            {i.link}
          </a>
        </li>
      );
    });
  };

  return (
    <div className="navMain">
      <div className="web-nav">
        <a href="/home">
          <img src={Assets.images.nav_logo} width={60} height={40} alt="" />
        </a>
        <div className="nav-links-container">
          <ul className="navLinks">{getThroughNav()}</ul>
        </div>
      </div>

      {/* <div className={!openNav ? "overlay" : "overlay-hide"}></div> */}
      <div className={openNav ? "nav-drawer-close" : "nav-drawer-open"}>
        <div className="X-icon" onClick={() => toggleNav()}>
          <HiX />
        </div>
        <ul className="navLinks">{getThroughNav()}</ul>
        <div className="show-button">
          <button className="letsChatButtonTwo">
            <p style={{ fontFamily: "Courier New" }}>Let's Build Together</p>
          </button>
        </div>
      </div>

      <div className="navRight">
        <a href={LINKS.twitter}>
          <RiTwitterXFill onClick={() => {}} className="right-icon" />
        </a>
        <a href={LINKS.github}>
          <FaGithub onClick={() => {}} className="right-icon" />
        </a>
        <a href={LINKS.linkedIn}>
          <FaLinkedin onClick={() => {}} className="right-icon" />
        </a>
        <p className="version">V 2.0</p>
        <div>
          <div className="menu-icon" onClick={() => toggleNav()}>
            <HiMenu color="#E8C547" />
          </div>
          <button
            className="letsChatButton"
            style={{
              backgroundColor: "#292414",
              borderWidth: 1,
              color: "#E8C547",
            }}
          >
            <p style={{ fontFamily: "Courier New" }}>Let's Build Together</p>
          </button>
        </div>
        {/* <CiMenuFries color="#ffffff" /> */}
        {/* <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        /> */}
      </div>
    </div>
  );
};
export default NavBar;
