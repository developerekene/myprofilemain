import React from "react";
import { Assets } from "../../../utils/constants/Assets";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  // const [checked, setChecked] = React.useState(true);
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 0.5
      }}
    >
      <p
        style={{
          color: Assets.theme.dark.bg,
          textAlign: "center",
          fontFamily: "Courier New",
        }}
      >
        Copyright © 2023 - The_Ekenedilichukwu. All rights reserved. <p>Our <a href="/app-privacy">Privacy Policy</a></p>
      </p>
    </div>
  );
};

export default Footer;
