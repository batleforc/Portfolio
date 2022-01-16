import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import MainPage from "./component/MainPage";
import ProjetDetail from "./component/ProjetDetail";
import CoverPage from "./component/MainPage/CoverPage/CoverPage";
import properties from "./properties";
import About from "./component/MainPage/About/About";
import Projet from "./component/MainPage/Projet/Projet";
import Nav from "./component/MainPage/Nav";
import { AreWeHome } from "./component/helper";
export interface Content {
  Label: string;
  Icon: string;
  href: string;
}

function App() {
  const [where, setWhere] = useState<string>("");
  const notification = new IntersectionObserver(
    (entries) => {
      var id = entries[0].target.id;
      if (id.includes("-")) id = id.split("-")[0];
      if (id !== where) setWhere(id);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    }
  );
  const Contents = [
    {
      Label: "Home",
      Icon: "home",
      href: AreWeHome() ? "cover" : "/",
      checkClass: false,
      OnlyHome: false,
    },
    {
      Component: About,
      Label: "About",
      Icon: "user",
      href: "about",
      checkClass: true,
      OnlyHome: true,
    },
    {
      Component: Projet,
      Label: "Projets",
      Icon: "gears",
      href: "project",
      checkClass: false,
      OnlyHome: true,
    },
    {
      Component: ({ Label, Icon, href }: Content) => <p id={href}>Contact</p>,
      Label: "Contact",
      Icon: "envelope",
      href: "contact",
      checkClass: false,
      OnlyHome: true,
    },
  ];
  useEffect(() => {
    Contents.forEach(({ href, checkClass }) => {
      if (checkClass) {
        Array.from(document.getElementsByClassName(href)).forEach((el) =>
          notification.observe(el)
        );
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
    <div className="App">
      <CoverPage />
      <div className="MainContent">
        <Nav
          contents={Contents}
          media={properties.media}
          selected={where}
          onClick={setWhere}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route index element={<MainPage Contents={Contents} />} />
            <Route path="project/:slug" element={<ProjetDetail />} />
            <Route
              path="project"
              element={
                <div className="content md:ml-32 text-9xl">
                  <p>YOU SHOULD NOT PASS</p>
                </div>
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
