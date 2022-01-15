import React, { useEffect, useState } from "react";
import properties from "../properties";
import CoverPage from "./MainPage/CoverPage/CoverPage";
import Nav from "./MainPage/Nav";
import About from "./MainPage/About/About";
import Projet from "./MainPage/Projet/Projet";
export interface Content {
  Label: string;
  Icon: string;
  href: string;
}

const MainPage = () => {
  const [where, setWhere] = useState<string>("");
  const notification = new IntersectionObserver(
    (entries) => {
      var id = entries[0].target.id;
      if (id.includes("-"))
        id = id.split("-")[0]
      if (id !== where) setWhere(id);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.30,
    }
  );
  const Contents = [
    {
      Label: "Home",
      Icon: "home",
      href: "cover",
      checkClass: false
    },
    {
      Component: About,
      Label: "About",
      Icon: "user",
      href: "about",
      checkClass: true
    },
    {
      Component: Projet,
      Label: "Projets",
      Icon: "gears",
      href: "project",
      checkClass: false
    },
    {
      Component: ({ Label, Icon, href }: Content) => <p id={href}>Contact</p>,
      Label: "Contact",
      Icon: "envelope",
      href: "contact",
      checkClass: false
    },
  ];
  useEffect(() => {
    Contents.forEach(({ href, checkClass }) => {
      if (checkClass) {
        Array.from(document.getElementsByClassName(href)).forEach((el)=>notification.observe(el))
      }
      var element = document.getElementById(href);
      if (element !== null) notification.observe(element);
    });
    return () => {
      notification.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CoverPage />
      <div className="MainContent">
        <Nav contents={Contents} media={properties.media} selected={where} onClick={setWhere} />
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
      </div>
    </>
  );
};

export default MainPage;
