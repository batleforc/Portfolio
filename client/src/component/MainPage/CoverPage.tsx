import React from "react";
import TextRotate from "./TextRotate";
import properties from "../../propertie";
import Media from "./Media";
const CoverPage = () => {
  return (
    <div className="coverPage justify-center place-items-center	">
      <div className="coverPageContent">
        <h1 className="PageTittle text-6xl">{properties.name}</h1>
        <TextRotate
          dataRotate={properties.attribute}
          className="justify-center place-items-center"
        />
        <Media medias={properties.media} />
      </div>
    </div>
  );
};

export default CoverPage;
