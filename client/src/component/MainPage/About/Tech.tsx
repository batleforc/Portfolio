import React from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";

interface IIcon {
  icon: string;
  label: string;
}

interface ITechCategorie {
  Label: string;
  List: string[];
  Horizontal: boolean;
}

interface ITech {
  Label: string;
  Icon: IIcon[];
  categorie: ITechCategorie[];
}

const Tech = ({ techs }: { techs: ITech[] }) => {
  return (
    <div
      id="Tech"
      className="flex flex-col md:flex-row justify-center flex-wrap"
    >
      {techs.map(({ Label, Icon, categorie }, index) => (
        <div
          id={`${Label}`}
          key={index}
          className="flex flex-col mx-3 border rounded-xl text-center border-black p-5 my-2 shadow"
        >
          <p id={`${Label}Label`} className="text-xl m-2">
            {Label}
          </p>
          <div id={`${Label}Icon`} className="flex justify-center my-1">
            {Icon.map(({ icon }, indexIcon) => (
              <IcoMoonSVG
                key={indexIcon}
                icon={icon}
                className="text-3xl m-1"
              />
            ))}
          </div>
          <div id={`${Label}Categorie`}>
            {categorie.map(
              ({ Label: labelCategorie, List, Horizontal }, indexCat) => (
                <div key={indexCat} className="mt-2 mb-1">
                  <p className="font-bold">{labelCategorie}</p>
                  {List.map((listItem, indexList) => (
                    <p key={indexList}>{listItem}</p>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tech;
