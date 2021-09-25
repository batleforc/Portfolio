import React from "react";
import { Content } from "../../MainPage";
import { MediaContent } from "../CoverPage/Media";

const MobileNav = ({
  contents,
  media,
}: {
  contents: Array<Content>;
  media: Array<MediaContent>;
}) => {
  return (
    <div className="MobileNavBar flex md:hidden">
      <p>WIP:MobileNavBar</p>
    </div>
  );
};

export default MobileNav;
