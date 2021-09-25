import React from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";
import { Content } from "../../MainPage";
/* eslint-disable react/jsx-no-target-blank*/
interface ItemContent extends Content {
  externalLink?: boolean;
}

const ItemNav = ({ Label, Icon, href, externalLink }: ItemContent) => {
  // eslint-disable-next-line
  return (
    <a
      href={href}
      target={externalLink ? "_blank" : "_self"}
      rel={externalLink ? "noreferrer" : "tag"}
      className="flex-col text-center m-2"
    >
      <IcoMoonSVG className="DeskNavBarIcon" icon={Icon} />
      <p>{Label}</p>
    </a>
  );
};

/* eslint-enable react/jsx-no-target-blank*/
export default ItemNav;
