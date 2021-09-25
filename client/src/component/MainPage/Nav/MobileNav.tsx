import React, { useState } from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";
import { Content } from "../../MainPage";
import { MediaContent } from "../CoverPage/Media";
import ItemNav from "./ItemNav";

const MobileNav = ({
  contents,
  media,
}: {
  contents: Array<Content>;
  media: Array<MediaContent>;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="MobileNavBar" onClick={() => setOpen(!open)}>
        <IcoMoonSVG icon={open ? "cross" : "burger"} className="burgerIcon" />
      </div>
      <div
        className={`MobileNavBarVertical ${open ? "flex" : "hidden"}  flex-col`}
      >
        {contents.map(({ Label, Icon, href }) => (
          <ItemNav
            key={Label}
            Label={Label}
            Icon={Icon}
            href={href}
            IconClassName={"MobileNavBarIcon"}
            WrapperClassName={"MobileNavBarWrapper"}
          />
        ))}
      </div>
      <div
        className={`MobileNavBarHorizontal flex flex-row ${
          open ? "flex" : "hidden"
        }`}
      >
        {media.map(({ label, icon, link }) => (
          <ItemNav
            key={label}
            Label={label}
            Icon={icon}
            href={link}
            externalLink={true}
            IconClassName={"MobileNavBarIcon"}
            WrapperClassName={"MobileNavBarWrapper"}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
