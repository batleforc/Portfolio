import React from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";
import { MediaContent } from "./Media";

const MediaItem = ({ label, icon, link }: MediaContent) => {
  return (
    <a href={`#${link}`} target="_blank" rel="noreferrer">
      <IcoMoonSVG icon={icon} className="ico-cover" />
    </a>
  );
};

export default MediaItem;
