import React from "react";
import { Assets } from "../../../utils/constants/Assets";
import "../Footer/Footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  // const [checked, setChecked] = React.useState(true);
  return (
    <div
      className="footer-main"
      style={{
        backgroundColor: Assets.theme.dark.bg,
      }}
    >
      <nav className="nav-footer">
        <ul className="ul-nav">
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <a style={{ color: "#E8C547" }} href="/services">
              My Services
            </a>
          </li>
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <a style={{ color: "#E8C547" }} href="/projects">
              Projects
            </a>
          </li>
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <a style={{ color: "#E8C547" }} href="/tools">
              Dev Tools
            </a>
          </li>
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <a style={{ color: "#E8C547" }} href="/courses">
              Learning
            </a>
          </li>
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <a style={{ color: "#E8C547" }} href="/about">
              About Me
            </a>
          </li>
        </ul>
      </nav>
      <div
        style={{
          marginLeft: 88,
          marginRight: 88,
          marginBottom: 20,
        }}
      >
        <img src={Assets.images.line} alt="" width={"100%"} />
      </div>
      <p
      className="footer-bottom"
        style={{
          color: Assets.theme.light.bg,
          textAlign: "center",
          fontFamily: "Courier New",
        }}
      >
        Copyright © 2023 - The_Ekenedilichukwu. All rights reserved.{" "}
        <p>
          <a style={{ color: "#5D9AE2" }} href="/app-privacy">
            Privacy Policy
          </a>
        </p>
      </p>
    </div>
  );
};

export default Footer;
