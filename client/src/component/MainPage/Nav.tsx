import React from "react";
import { IContent } from "../MainPage";
import { MediaContent } from "./CoverPage/Media";
import DesktopNav from "./Nav/DesktopNav";
import MobileNav from "./Nav/MobileNav";
import { useLocation } from 'react-router-dom';
const Nav = ({
  contents,
  media,
  selected,
  onClick
}: {
  contents: Array<IContent>;
  media: Array<MediaContent>;
  selected: string;
  onClick: (arg0: string) => void;
  }) => {
  const location = useLocation();

  const areWeHome = ()=> location.pathname ==="/"
  return (
    <>
      {[DesktopNav, MobileNav].map((Component, index) => (
        <Component
          selected={selected}
          key={index}
          contents={contents.filter((value)=>areWeHome()||!value.OnlyHome)}
          media={media}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default Nav;
