import React from "react";
import { IProject } from "./Projet";

const ProjectItem = ({
  project: { Name, Tag, ShortDescription },
}: {
  project: IProject;
}) => {
  return (
    <div className="border mx-3 rounded-xl border-black my-2 shadow relative h-max w-52 pb-12">
      <div className="px-4 pt-2 pb-1">
        <p>{Name}</p>
        <p>{ShortDescription}</p>
        <p className="text-xs"> + En savoir plus</p>
      </div>
      <div className="border rounded-xl border-b-0 border-x-0 border-black flex flex-row flex-wrap overflow-auto absolute bottom-0 w-52 h-11">
        {Tag.map((value) => (
          <p className="border rounded-xl border-black m-1 p-1 h-max" key={value}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
