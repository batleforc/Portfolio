import React from "react";
import { Content } from "../MainPage";
import { MediaContent } from "./CoverPage/Media";
import DesktopNav from "./Nav/DesktopNav";
import MobileNav from "./Nav/MobileNav";

const Nav = ({
  contents,
  media,
  selected,
  onClick
}: {
  contents: Array<Content>;
  media: Array<MediaContent>;
  selected: string;
  onClick: (arg0: string) => void;
}) => {
  return (
    <>
      {[DesktopNav, MobileNav].map((Component, index) => (
        <Component
          selected={selected}
          key={index}
          contents={contents}
          media={media}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default Nav;
