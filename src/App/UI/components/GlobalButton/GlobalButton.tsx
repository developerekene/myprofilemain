import React from "react";
import "../GlobalButton/GlobalButton.css"

interface GlobalButtonType {
  text: string;
  bgColor: string;
  textColor: string;
  onPress: () => void;
}

const GlobalButton: React.FunctionComponent<GlobalButtonType> = ({
  text,
  bgColor,
  textColor,
  onPress,
}) => {
  //   const blueButtonStyles = {
  //     backgroundColor: "#212C2F",
  //     // color: "#5D9AE2",
  //   };
  //   const yellowButtonStyles = {
  //     backgroundColor: "#2C2817",
  //     // color: "#E2C65E",
  //   };

  //   const normalButtonStyle = {
  //     backgroundColor: "#080808",
  //     // color: "#ffffff"
  //   }
  return (
    <div>
      <button
        onClick={onPress}
        className="global-button"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default GlobalButton;
