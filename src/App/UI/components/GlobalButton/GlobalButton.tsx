import React from "react";
import "../GlobalButton/GlobalButton.css";

interface GlobalButtonType {
  text: string;
  bgColor: string;
  textColor: string;
  onPress: () => void;
  disable?: boolean;
}

const GlobalButton: React.FunctionComponent<GlobalButtonType> = ({
  text,
  bgColor,
  textColor,
  onPress,
  disable,
}) => {
  return (
    <div>
      <button
        disabled={disable}
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
