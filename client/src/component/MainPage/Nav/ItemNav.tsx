import React from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";
import { Content } from "../../MainPage";
/* eslint-disable react/jsx-no-target-blank*/
interface ItemContent extends Content {
  externalLink?: boolean;
  IconClassName?: string;
  TextClassName?: string;
  WrapperClassName?: string;
  onClick?: (arg0: string) => void;
}

const ItemNav = ({
  Label,
  Icon,
  href,
  externalLink,
  IconClassName = "",
  TextClassName = "",
  WrapperClassName = "",
  onClick,
}: ItemContent) => {
  // eslint-disable-next-line
  return (
    <a
      href={externalLink || href.includes("/") ? href : `#${href}`}
      target={externalLink ? "_blank" : "_self"}
      rel={externalLink ? "noreferrer" : "tag"}
      onClick={(event) => {
        if (!event || externalLink) return;
        event.preventDefault();
        document.querySelector(`#${href}`)?.scrollIntoView({
          behavior: "smooth",
        });
        if (onClick !== undefined) onClick(href);
      }}
      className={`flex-col text-center m-2 ${WrapperClassName}`}
    >
      <IcoMoonSVG className={IconClassName} icon={Icon} />
      <p className={TextClassName}>{Label}</p>
    </a>
  );
};

/* eslint-enable react/jsx-no-target-blank*/
export default ItemNav;
