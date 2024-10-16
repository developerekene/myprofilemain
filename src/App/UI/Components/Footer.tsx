import React from "react";
import "../Styles/Footer.css";

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer_main">
      <div className="footer_inner">
        <p className="footer_p">
          Copyright © 2024 - D’roid Technologies Ltd. All rights reserved
        </p>
        <p className="footer_p">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
