import React from "react";
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
      Label: "",
      Icon: "",
      href: "",
    },
    {
      Component: () => <p>truc1</p>,
      Label: "",
      Icon: "",
      href: "",
    },
    {
      Component: () => <p>truc2</p>,
      Label: "",
      Icon: "",
      href: "",
    },
  ];
  return (
    <div>
      <CoverPage />
      <Nav contents={Contents} />

      {Contents.map(({ Component }) =>
        Component !== undefined ? <Component /> : <></>
      )}
    </div>
  );
};

export default MainPage;
