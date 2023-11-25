import React from "react";
import "../GroupButton/GroupButton.css";

type GroupButtonType = {
  showBtnOne: boolean;
  pressBtnOne: () => void;
  pressBtnTwo: () => void;
  pressBtnThree?: () => void;
  showBtnTwo: boolean;
  showBtnThree?: boolean;
  btnOneText: string;
  btnTwoText: string;
  btnThreeText?: string;
  btnOneBg: string;
  btnTwoBg: string;
  btnThreeBg?: string;
};
const GroupButton: React.FunctionComponent<GroupButtonType> = ({
  showBtnOne,
  showBtnTwo,
  showBtnThree,
  pressBtnOne,
  btnOneText,
  btnOneBg,
  pressBtnTwo,
  btnTwoBg,
  btnTwoText,
  btnThreeText,
  pressBtnThree,
  btnThreeBg,
}) => {
  return (
    <div className="conn-gb">
      <div className="containerGB">
        {showBtnOne ? (
          <div>
            <button
              // disabled={disable}
              onClick={pressBtnOne}
              className="group-button"
              style={{
                backgroundColor: btnOneBg,
              }}
            >
              <p>{btnOneText}</p>
            </button>
          </div>
        ) : null}
        {showBtnTwo ? (
          <div>
            <button
              // disabled={disable}
              onClick={pressBtnTwo}
              className="group-button"
              style={{
                backgroundColor: btnTwoBg,
              }}
            >
              {btnTwoText}
            </button>
          </div>
        ) : null}
        {showBtnThree ? (
          <div>
            <button
              // disabled={disable}
              onClick={pressBtnThree}
              className="group-button"
              style={{
                backgroundColor: btnThreeBg,
              }}
            >
              {btnThreeText}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GroupButton;
