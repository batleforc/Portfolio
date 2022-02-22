import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProject } from "./MainPage/Projet/Projet";
import properties from "../properties";

const ProjetDetail = () => {
  const [project, setProject] = useState<IProject>();
  const params = useParams();
  useEffect(() => {
    setProject(properties.project.find(({ Slug }) => Slug === params.slug));
  }, [params]);
  console.log(project);
  return (
    <div className="content md:ml-32">
      {project === undefined && (
        <p id="title">No article found please go home</p>
      )}
      {project !== undefined && (
        <>
          <h1 id="title" className="text-4xl font-bold m-1">{project.Name}</h1>
          <div className="flex flex-col flex-wrap">
            <div className="flex-row flex mb-10">
              <div className="mr-10 grow">
                {/* Bloc de gauche */}
                <p>{project.Description}</p>
              </div>
              <div>
                {/* Bloc de droite */}
                <p> Status : {project.Status}</p>
                {project.Git !== "" && <p> Git : {project.Git}</p>}
                {project.Lien !== "" && <p> Lien : {project.Lien}</p>}
              </div>
            </div>

            <div>
              {project.Techno.length !== 0 && (
                <ul>
                  <li key="init">Techno : </li>
                  {project.Techno.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              )}
              {project.Tag.length !== 0 && (
                <div className="my-2">
                  <p key="init">Tag : </p>
                  <div className="flex">
                    {project.Tag.map((value) => (
                      <p
                        className="border rounded-xl border-black m-1 p-1 h-max"
                        key={value}
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjetDetail;
