import React from "react";
import IcoMoonSVG from "../../../helper/IcomoonSVG";
import { IExperience } from "../Exp";

const ExpItem = ({
  item: { Label, type, from, to, location, where, description },
  index
}: {
  item: IExperience;
  index: number;
}) => {
  return (
    <div className={`timeContainer ${index%2===1?"container-right":"container-left"}`}>
      <div className="timeContent">
        <p>{Label}</p>
        <p>{from===to?from:`${from}-${to.length===0?"Now":to}`}</p>
        <p className="">
          {where}, {location}
        </p>
      </div>
    </div>
  );
};

export default ExpItem;
