import React, { useState } from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";
import { MediaContent } from "../CoverPage/Media";
import ItemNav from "./ItemNav";
import { IContent } from "../../MainPage";

const MobileNav = ({
  contents,
  media,
  selected,
}: {
  contents: Array<IContent>;
  media: Array<MediaContent>;
  selected: string;
  onClick: (arg0: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`md:hidden ${open ? "fadeIn" : "fadeOut"}`}>
      <div className="MobileNavBar" onClick={() => setOpen(!open)}>
        <IcoMoonSVG icon={open ? "cross" : "burger"} className="burgerIcon" />
      </div>
      <div className={`MobileNavBarVertical flex  flex-col`}>
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
      <div className={`MobileNavBarHorizontal flex-row flex`}>
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
