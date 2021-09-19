import React from "react";
import TextRotate from "./TextRotate";
import properties from "../../propertie";
const CoverPage = () => {
  return (
    <div className="coverPage justify-center place-items-center	">
      <div className="coverPageContent">
        <h1 className="PageTittle text-5xl">{properties.name}</h1>
        <TextRotate
          dataRotate={properties.attribute}
          className="justify-center place-items-center"
        />
      </div>
    </div>
  );
};

export default CoverPage;
