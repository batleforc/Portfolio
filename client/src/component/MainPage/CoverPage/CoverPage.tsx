import React from "react";
import TextRotate from "./TextRotate";
import properties from "../../../propertie";
import Media from "./Media";
import IcoMoonSVG from "../../helper/IcomoonSVG";
const CoverPage = () => {
  return (
    <div id="cover" className="coverPage justify-center place-items-center	">
      <div className="coverPageContent">
        <h1 className="PageTittle text-6xl text-center">{properties.name}</h1>
        <TextRotate
          dataRotate={properties.attribute}
          className="justify-center place-items-center m-4"
        />
        <Media medias={properties.media} />
      </div>
      <a
        href="#about"
        onClick={(event) => {
          if (!event) return;
          event.preventDefault();
          document.querySelector(`#about`)?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <IcoMoonSVG
          icon="chevron-down"
          className="ico-next-content animate-bounce"
        />
      </a>
    </div>
  );
};

export default CoverPage;
