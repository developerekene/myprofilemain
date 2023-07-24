import * as React from "react";
import Switch from "@mui/material/Switch";
import { Assets } from "../../../utils/constants/Assets";
import "../NavBar/NavBar.css";
import { navUl } from "../../../utils/constants/Data";

const label = { inputProps: { "aria-label": "Switch demo" } };

const NavBar: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(checked);
  };

  const getThroughNav = () => {
    return navUl.map((i, j) => {
      return (
        <div key={j}>
          <ul>
            <li className="navList" style={{ listStyle: "none" }}>
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
          </ul>
        </div>
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
      {getThroughNav()}
      <div className="navRight">
        <div>
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
