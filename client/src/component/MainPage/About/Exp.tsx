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
    <div className="my-8">
      <div id="verticalTimeline">
        {[...exp]
          .sort(
            (a: IExperience, b: IExperience) =>
              Number.parseInt(a.from) - Number.parseInt(b.from)
          )
          .map((expItem) => (
            <ExpItem {...expItem} />
          ))}
      </div>
    </div>
  );
};

export default Experience;
