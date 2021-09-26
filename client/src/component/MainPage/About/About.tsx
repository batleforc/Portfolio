import React from "react";
import { Content } from "../../MainPage";
import propeties from "../../../propertie";
import WhoAmI from "./WhoAmI";
import Tech from "./Tech";

const Cover = ({ Label, Icon, href }: Content) => {
  return (
    <div id={href} className="py-5">
      <WhoAmI about={propeties.about} />
      <Tech techs={propeties.tech} />
    </div>
  );
};

export default Cover;
