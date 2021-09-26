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
    <div id="Tech" className="flex justify-center">
      {techs.map(({ Label, Icon, categorie }, index) => (
        <div id={`${Label}`} key={index} className="flex-row mx-2">
          <p id={`${Label}Label`}>{Label}</p>
          <div id={`${Label}Icon`} className="flex justify-center my-1">
            {Icon.map(({ icon }, indexIcon) => (
              <IcoMoonSVG key={indexIcon} icon={icon} />
            ))}
          </div>
          <div id={`${Label}Categorie`}>
            {categorie.map(
              ({ Label: labelCategorie, List, Horizontal }, indexCat) => (
                <div key={indexCat}>
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
