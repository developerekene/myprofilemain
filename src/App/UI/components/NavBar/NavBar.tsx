import * as React from "react";
import Switch from "@mui/material/Switch";
import { Assets } from "../../../utils/constants/Assets";
import "../NavBar/NavBar.css";
import { navUl } from "../../../utils/constants/Data";
import {HiMenu, HiX} from "react-icons/hi"

const label = { inputProps: { "aria-label": "Switch demo" } };

const NavBar: React.FC = () => {

  const [openNav , setOpenNav] = React.useState(true)
  const toggleNav =()=>{
    setOpenNav(!openNav);
    
  }
  if(!openNav) {
    document.body.classList.add('active-nav')
  } else {
    document.body.classList.remove('active-nav')
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
                  color: checked ? Assets.theme.light.bg : Assets.theme.dark.bg,
                  textDecoration: "none",
                  fontFamily: "Courier New"
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
        backgroundColor: checked ? Assets.theme.dark.bg : Assets.theme.light.bg,
      }}
    >
      <div>
        <a href="/home">
          {checked ? (
            <img src={Assets.images.logo_nav_two} width={40} height={40} />
          ) : (
            <img src={Assets.images.logo_nav} width={60} height={60} />
          )}
        </a>
      </div>
      <div className="nav-links-container">
          <ul className="navLinks">
            {getThroughNav()}
          </ul>
      </div>
      <div className={!openNav ? "overlay" : "overlay-hide"}>
      </div>
        <div className={openNav ? "nav-drawer-close" : "nav-drawer-open"}>
          <div className="X-icon" onClick={()=>toggleNav()}>
            <HiX/>
          </div>
          <ul className="navLinks">
            {getThroughNav()}
          </ul>
      
      </div>
      
      <div className="navRight">
        <div >
          <div className="menu-icon" onClick={()=>toggleNav()}>
            <HiMenu />
          </div>
          <button
            className="letsChatButton"
            style={{
              backgroundColor: checked
                ? Assets.theme.dark.textColor
                : Assets.theme.light.textColor,
              // borderColor: checked
              //   ? Assets.theme.light.bg
              //   : Assets.theme.dark.bg,
              borderWidth: 1,
              color: checked ? Assets.theme.dark.bg : Assets.theme.light.bg,
            }}
          >
            <p style={{fontFamily: "Courier New"}}>Let's Chat</p>
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
