import React from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";
import { MediaContent } from "./Media";

const MediaItem = ({ label, icon, link }: MediaContent) => {
  return (
    <a
      href={link.includes("/") ? link : `#${link}`}
      target={link ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <IcoMoonSVG icon={icon} className="ico-cover" />
    </a>
  );
};

export default MediaItem;
