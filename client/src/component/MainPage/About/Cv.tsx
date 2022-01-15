import React from "react";
import IcoMoonSVG from "../../helper/IcomoonSVG";

const Cv = ({
  cvUrl = "/CV.pdf",
  ico = "download",
}: {
  cvUrl?: string;
  ico?: string;
}) => {
  return (
    <div id="about-cv" className="about flex justify-center my-8">
      <a
        className="border-2 rounded-full cvButton px-5 py-2"
        href={cvUrl}
        rel="noreferrer"
        target="_blank"
      >
        Mon CV
        <IcoMoonSVG className="ml-2" icon={ico} />
      </a>
    </div>
  );
};

export default Cv;
