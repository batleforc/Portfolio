import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Maxime Leriche/i);
  expect(linkElement).toBeInTheDocument();
});
// TODO : Mise en place de test par composant
