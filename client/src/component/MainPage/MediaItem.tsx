import React from "react";
import IcoMoonSVG from "../helper/IcomoonSVG";
import { MediaContent } from "./Media";

const MediaItem = ({ label, icon, link }: MediaContent) => {
  return (
    <div>
      <IcoMoonSVG icon={icon} className="ico-cover" />
    </div>
  );
};

export default MediaItem;
