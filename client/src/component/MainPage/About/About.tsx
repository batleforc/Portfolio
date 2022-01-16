import React from "react";
import { Content } from "../../../App";
import properties from "../../../properties";
import WhoAmI from "./WhoAmI";
import Tech from "./Tech";
import Cv from "./Cv";
import Experience from "./Exp";

const About = ({ Label, Icon, href }: Content) => {
  return (
    <div id={href} className="py-5">
      <WhoAmI about={properties.about} />
      <Tech techs={properties.tech} />
      <Cv cvUrl={properties.cvUrl} />
      <Experience exp={properties.exp} />
    </div>
  );
};

export default About;
