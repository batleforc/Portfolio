import React from "react";
import IcoMoonSVG from "../../../helper/IcomoonSVG";
import { IExperience } from "../Exp";

const ExpItem = ({
  Label,
  type,
  from,
  to,
  location,
  where,
  description,
}: IExperience) => {
  return (
    <div className="flex">
      <div className="timelineIconBlock">
        <IcoMoonSVG icon="cross" className="timelineIcon" />
      </div>
      <div className="mx-2">
        <p>{Label}</p>
        <p className="mx-2">
          {where}, {location}
        </p>
      </div>
    </div>
  );
};

export default ExpItem;
