import React from "react";
import properties from "../propertie";
import CoverPage from "./MainPage/CoverPage/CoverPage";
import Nav from "./MainPage/Nav";
import About from "./MainPage/About/About";
export interface Content {
  Label: string;
  Icon: string;
  href: string;
}

const MainPage = () => {
  const Contents = [
    {
      Label: "Home",
      Icon: "home",
      href: "cover",
    },
    {
      Component: About,
      Label: "About",
      Icon: "user",
      href: "about",
    },
    {
      Component: ({ Label, Icon, href }: Content) => <p>Projet</p>,
      Label: "Projet",
      Icon: "gears",
      href: "project",
    },
    {
      Component: ({ Label, Icon, href }: Content) => <p>Contact</p>,
      Label: "Contact",
      Icon: "envelope",
      href: "contact",
    },
  ];
  return (
    <>
      <CoverPage />
      <div className="MainContent">
        <Nav contents={Contents} media={properties.media} />
        <div className="content	md:ml-32">
          {Contents.filter(({ Component }) => Component !== undefined).map(
            ({ Component, Label, Icon, href }) =>
              Component !== undefined ? (
                <Component key={Label} Label={Label} Icon={Icon} href={href} />
              ) : (
                <></>
              )
          )}
          {Array(100)
            .fill(42, 0, 100)
            .map((value, index) => (
              <p key={index}>{value}</p>
            ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
