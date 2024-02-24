import React from "react";
import "../ItemService/ItemService.css";

type ItemServiceType = {
  headerText: string;
  desc: string;
  headerTextColor: string;
  icon: React.ReactNode;
  onPress: () => void;
};
const ItemService: React.FunctionComponent<ItemServiceType> = ({
  headerText,
  desc,
  headerTextColor,
  icon,
  onPress,
}) => {
  return (
    <div className="item-service-con">
      <div onClick={onPress} className="item-service-inner">
        <div className="item-icon">{icon}</div>
        <p className="desc-header" style={{ color: headerTextColor }}>
          {headerText}
        </p>
        <p className="desc-item">{desc}</p>
      </div>
    </div>
  );
};

export default ItemService;
