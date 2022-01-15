import React from "react";
import { IProject } from "./Projet";
import { Link } from "react-router-dom";

const ProjectItem = ({
  project: { Name, Tag, ShortDescription, Slug },
}: {
  project: IProject;
}) => {
  return (
    <div className="border md:mx-3 rounded-xl border-black my-2 shadow relative h-max md:w-52 pb-12 w-full">
      <div className="px-4 pt-2 pb-1">
        <p>{Name}</p>
        <p>{ShortDescription}</p>
        <Link to={`/project/${Slug}`}>
          <p className="text-xs m-1 text-center"> + En savoir plus</p>
        </Link>
      </div>
      <div className="projectItemTag border rounded-xl border-b-0 border-x-0 border-black flex flex-row flex-wrap overflow-auto absolute bottom-0 w-full md:w-52 h-12">
        {Tag.map((value) => (
          <p
            className="border rounded-xl border-black m-1 p-1 h-max"
            key={value}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
