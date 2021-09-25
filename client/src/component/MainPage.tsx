import React from "react";
import properties from "../propertie";
import CoverPage from "./MainPage/CoverPage/CoverPage";
import Nav from "./MainPage/Nav";

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
      href: "#cover",
    },
    {
      Component: () => <p>About</p>,
      Label: "About",
      Icon: "user",
      href: "#about",
    },
    {
      Component: () => <p>Projet</p>,
      Label: "Projet",
      Icon: "gears",
      href: "#project",
    },
    {
      Component: () => <p>Contact</p>,
      Label: "Contact",
      Icon: "envelope",
      href: "#contact",
    },
  ];
  return (
    <>
      <CoverPage />
      <div className="MainContent">
        <Nav contents={Contents} media={properties.media} />
        <div className="content	md:ml-32">
          {Contents.filter(({ Component }) => Component !== undefined).map(
            ({ Component, Label }) =>
              Component !== undefined ? <Component key={Label} /> : <></>
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
