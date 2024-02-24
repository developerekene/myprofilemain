import React from "react";
import "../PrimaryButton/PrimaryButton.css";

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const PrimaryButton = (props: Button) => {
  return (
    <div>
      <button {...props} className="primaryButton">
        {props.title}
      </button>
    </div>
  );
};

export default PrimaryButton;
