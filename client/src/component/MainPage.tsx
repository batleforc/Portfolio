import React from "react";
import {Content} from '../App'

export interface IContent{
  Label: string;
  Icon: string;
  href: string;
  Component?: ({ Label, Icon, href }: Content) => JSX.Element;
  checkClass: boolean;
  OnlyHome?: boolean;
}

const MainPage = ({Contents}:{Contents:IContent[]}) => {
  return (
      <div className="content	md:ml-32">
          {Contents.filter(({ Component }) => Component !== undefined).map(
            ({ Component, Label, Icon, href }) =>
              Component !== undefined ? (
                <Component key={Label} Label={Label} Icon={Icon} href={href} />
              ) : (
                <></>
              )
          )}
        </div>
  );
};

export default MainPage;
