import React from "react";
import { Content } from "../../MainPage";
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

const Projet = ({ Label, Icon, href }: Content) => {
  return (
    <div id={href} className="py-5">
      <h1 className="text-4xl">Projet</h1>
      <div className="flex flex-col md:flex-row justify-center flex-wrap">
        {properties.project.map((project) => (
          <ProjectItem key={project.Slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projet;
