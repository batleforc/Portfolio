import React from "react";
import { Content } from "../../MainPage";
import { MediaContent } from "../CoverPage/Media";
import ItemNav from "./ItemNav";

const DesktopNav = ({
  contents,
  media,
}: {
  contents: Array<Content>;
  media: Array<MediaContent>;
}) => {
  return (
    <div className="w-28 DeskNavBar sticky top-0 m-0 hidden md:block">
      <div className=" sm:relative shadow flex-col flex ">
        {contents.map(({ Label, Icon, href }) => (
          <ItemNav key={Label} Label={Label} Icon={Icon} href={href} />
        ))}
        {media.map(({ label, icon, link }) => (
          <ItemNav
            key={label}
            Label={label}
            Icon={icon}
            href={link}
            externalLink={true}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
