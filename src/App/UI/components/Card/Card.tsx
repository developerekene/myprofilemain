import React from "react";
import "../Card/Card.css";

type CardType = {
  content: React.ReactNode;
  buttonText: string;
  buttonPress: () => void;
};
const Card: React.FunctionComponent<CardType> = ({
  content,
  buttonText,
  buttonPress,
}) => {
  return (
    <div className="card-container">
      <div>{content}</div>
      <div>
        <button onClick={buttonPress} className="card-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
