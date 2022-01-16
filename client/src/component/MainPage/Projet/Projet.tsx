import React, { useState } from "react";
import { Content } from "../../../App";
import properties from "../../../properties";
import ProjectItem from "./ProjectItem";

export interface IProject {
  Slug: string;
  Name: string;
  ShortDescription: string;
  Tag: string[];
  Status: string;
  Techno: string[];
  Git: string;
  Lien: string;
}

const paginateArray = (
  toTreat: IProject[],
  page: number,
  itemPerPage: number
) => {
  var newTab = [];
  for (var i = (page-1)*itemPerPage; i < page * itemPerPage; i++) {
    if (toTreat[i] !== undefined) newTab.push(toTreat[i]);
    else return newTab;
  }
  return newTab;
};

const Projet = ({ Label, Icon, href }: Content) => {
  const [pagination, setPagination] = useState(1);
  return (
    <div id={href} className="py-5">
      <h1 className="text-4xl font-bold m-1">{Label}</h1>
      <div className="flex flex-col md:flex-row justify-center flex-wrap m-3">
        {paginateArray(properties.project, pagination, 10).map((project) => (
          <ProjectItem key={project.Slug} project={project} />
        ))}
      </div>
      {properties.project.length > 10 && (
        <div className="flex justify-center">
          {Array.from(
            Array(Math.ceil(properties.project.length / 10)).keys()
          ).map((value) => (
            <p
              className="mx-1 hover:cursor-pointer hover:border p-1 rounded-xl"
              onClick={() => setPagination(value + 1)}
              key={value}
            >
              {value + 1}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projet;
