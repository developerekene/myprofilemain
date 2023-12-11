/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "../PrimaryInputField/PrimaryInputField.css";
import "../PrimaryInputField/PrimaryInputField.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const PrimaryInputField = (props: Props) => {
  return (
    <label className="label">
      {props.title && (
        <div>
          {props.title}
          {props.required ? (
            <span className="required">*</span>
          ) : (
            <span className="optional"> (Optional)</span>
          )}
        </div>
      )}
      <input {...props} className="input" />
    </label>
  );
};

export default PrimaryInputField;
