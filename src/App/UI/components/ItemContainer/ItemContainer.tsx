import React from "react";
import "../ItemContainer/ItemContainer.css";
import { windowWidth } from "../../pages/WelcomePage/WelcomePage";

interface ItemConType {
  headerImage: React.ReactNode;
  headerText: string;
  headerTextColor: string;
  bgColor: string;
  width: number | string;
  height?: number | string;
  desc: string;
  descColor: string;
  title: string;
  titleColor: string;
  jContent: string;
  onPress?: () => void;
}

const ItemContainer: React.FunctionComponent<ItemConType> = ({
  headerImage,
  headerText,
  headerTextColor,
  bgColor,
  width,
  height,
  desc,
  descColor,
  title,
  titleColor,
  jContent,
  onPress,
}) => {
  return (
    <div
      className="item-container"
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: jContent,
        }}
      >
        {headerImage}
      </div>

      <p
        className="header-p"
        style={{
          color: headerTextColor,
        }}
      >
        {headerText}
      </p>
      <p
        className="desc-p"
        style={{
          color: descColor,
        }}
      >
        {desc}
      </p>
      <p style={{ color: titleColor, marginTop: 20 }}>{title}</p>
    </div>
  );
};

export default ItemContainer;
