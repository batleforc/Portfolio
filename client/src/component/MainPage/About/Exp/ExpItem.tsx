import React from "react";
import { IExperience } from "../Exp";

const ExpItem = ({
  item: { Label, type, from, to, location, where, description, Icon },
  index,
}: {
  item: IExperience;
  index: number;
}) => {
  return (
    <div
      className={`timeContainer ${
        index % 2 === 1 ? "container-right" : "container-left"
      }`}
    >
      <div className="timeContent flex flex-col">
        <div>
          {" "}
          <p>
            <span className="font-semibold">{Label}</span>
            {", "}
            <span>{where}</span>
            {", "}
            <span>{location}</span>
          </p>
          <p className="font-thin">
            {from === to ? from : `${from}-${to.length === 0 ? "Now" : to}`}
          </p>
          <p className="font-normal">{description}</p>
        </div>
        <div className="imageExpContainer">
        {Icon && <img alt={Label} className="imageExp" src={"logo/"+Icon}/>}
        </div>
      </div>
    </div>
  );
};

export default ExpItem;
