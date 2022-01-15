import React from "react";

const WhoAmI = ({ about }: { about: string[] }) => {
  return (
    <div id="about-WhoAmI">
      <h1 className="text-4xl font-bold m-1 about">Qui suis je ?</h1>
      {about.map((aboutContent, index) => (
        <p key={index}>{aboutContent}</p>
      ))}
    </div>
  );
};

export default WhoAmI;
