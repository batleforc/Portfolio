import React from "react";
import ExpItem from "./Exp/ExpItem";

export interface IExperience {
  Label: string;
  type: string;
  from: string;
  to: string;
  location: string;
  where: string;
  description: string;
  Icon?: string;
}

const Experience = ({ exp }: { exp: Array<IExperience> }) => {
  return (
    <div id="about-exp" className="my-8 truc about">
      <div className="timeline">
        {[...exp]
          .sort(
            (a: IExperience, b: IExperience) =>
              Number.parseInt(a.from) - Number.parseInt(b.from)
          )
          .map((expItem,index) => (
            <ExpItem key={expItem.Label} index={index} item={expItem} />
          ))}
      </div>
    </div>
  );
};

export default Experience;
