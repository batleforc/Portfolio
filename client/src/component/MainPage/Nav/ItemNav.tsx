import React from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";
import { Content } from "../../MainPage";

const ItemNav = ({ Label, Icon, href }: Content) => {
  return (
    <a href={href} className="flex-col text-center m-2">
      <IcoMoonSVG className="DeskNavBarIcon" icon={Icon} />
      <p>{Label}</p>
    </a>
  );
};

export default ItemNav;
