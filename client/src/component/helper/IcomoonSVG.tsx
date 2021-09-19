import React from "react";

const IcoMoonSVG = ({
  icon = "",
  className = "",
}: {
  icon: string;
  className?: string;
}) => {
  return (
    <svg className={`ico ico-${icon} ${className}`} focusable="false">
      <use
        href={process.env.PUBLIC_URL + "/icon/symbol-defs.svg#ico-" + icon}
      ></use>
    </svg>
  );
};

export default IcoMoonSVG;
