import * as React from "react";
import Switch from "@mui/material/Switch";
import { Assets } from "../../../utils/constants/Assets";
import "../NavBar/NavBar.css";
import { navUl } from "../../../utils/constants/Data";
import { HiMenu, HiX } from "react-icons/hi";

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
        <li style={{ listStyle: "none", }}>
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
    <div
      className="navMain"
      style={{
        backgroundColor: '#080808',
      }}
    >
      <div>
        <a href="/home">
            <img src={Assets.images.nav_logo} width={60} height={40} alt=""/>
        </a>
      </div>
      <div className="nav-links-container">
        <ul className="navLinks">{getThroughNav()}</ul>
      </div>
      <div className={!openNav ? "overlay" : "overlay-hide"}></div>
      <div className={openNav ? "nav-drawer-close" : "nav-drawer-open"}>
        <div className="X-icon" onClick={() => toggleNav()}>
          <HiX />
        </div>
        <ul className="navLinks">{getThroughNav()}</ul>
      </div>

      <div className="navRight">
        <div>
          <div className="menu-icon" onClick={() => toggleNav()}>
            <HiMenu />
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
