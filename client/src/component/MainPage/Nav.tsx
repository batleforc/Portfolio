import React from "react";
import { Content } from "../MainPage";
import { MediaContent } from "./CoverPage/Media";
import DesktopNav from "./Nav/DesktopNav";
import MobileNav from "./Nav/MobileNav";

const Nav = ({
  contents,
  media,
}: {
  contents: Array<Content>;
  media: Array<MediaContent>;
}) => {
  return (
    <>
      {[DesktopNav, MobileNav].map((Component, index) => (
        <Component key={index} contents={contents} media={media} />
      ))}
    </>
  );
};

export default Nav;
