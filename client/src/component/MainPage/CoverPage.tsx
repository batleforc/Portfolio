import React from "react";
import TextRotate from "./TextRotate";
import properties from "../../propertie";
const CoverPage = () => {
  return (
    <div className="coverPage">
      <h1>Hello You</h1>
      <TextRotate dataRotate={properties.attribute} />
    </div>
  );
};

export default CoverPage;
