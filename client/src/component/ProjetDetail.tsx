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
  return (
    <div className="content md:ml-32">
      {project === undefined && (
        <p id="title">No article found please go home</p>
      )}
      {project !== undefined && (
        <>
          <h1 id="title" className="text-4xl font-bold m-1">
            {project.Name}
          </h1>
          <div className="flex flex-col flex-wrap">
            <div className="flex-row flex mb-10">
              <div className="mr-10 grow">
                {/* Bloc de gauche */}
                <p>{project.Description}</p>
                <div className="my-2">
                  {project.Techno.length !== 0 && (
                    <ul>
                      <li key="init">Techno : </li>
                      {project.Techno.map(({Label,Content}) => (
                        <li className="mx-2" key={Label}>
                          <p key={Label}>{Label } :</p>
                          {Content.map((value)=><p className="mx-2" key={value}>{value}</p>)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                {/* Bloc de droite */}
                <p> Status : {project.Status}</p>
                {project.Link.map(({ Label, Lien }) => (
                  <a href={Lien} target="_blank" rel="noreferrer">
                    {" "}
                    {Label} : {Lien.replace("https://", "")}
                  </a>
                ))}
              </div>
            </div>

            <div>
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
