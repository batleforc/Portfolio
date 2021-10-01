import React from "react";
import { Content } from "../../MainPage";
import properties from "../../../properties";
import WhoAmI from "./WhoAmI";
import Tech from "./Tech";
import Cv from "./Cv";

const About = ({ Label, Icon, href }: Content) => {
  return (
    <div id={href} className="py-5">
      <WhoAmI about={properties.about} />
      <Tech techs={properties.tech} />
      <Cv cvUrl={properties.cvUrl} />
    </div>
  );
};

export default About;
