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
      href: "cover",
    },
    {
      Component: () => <p>About</p>,
      Label: "About",
      Icon: "user",
      href: "about",
    },
    {
      Component: () => <p>Projet</p>,
      Label: "Projet",
      Icon: "gear",
      href: "project",
    },
    {
      Component: () => <p>Contact</p>,
      Label: "Contact",
      Icon: "envelope",
      href: "contact",
    },
  ];
  return (
    <div>
      <CoverPage />
      <Nav contents={Contents} media={properties.media} />

      {Contents.map(({ Component }) =>
        Component !== undefined ? <Component /> : <></>
      )}
    </div>
  );
};

export default MainPage;
