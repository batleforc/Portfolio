import React from "react";
import { useParams } from "react-router-dom";

const ProjetDetail = () => {
  var params = useParams();
  return <div className="content md:ml-32">{params.slug}</div>;
};

export default ProjetDetail;
