import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "../pages/Main";
require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
  });

test("renders Main component", () => {
  const { getByText } = render(<Main />);
  const element = screen.getByText("Select Frequency");
  expect(element).toBeInTheDocument();
  const element2 = screen.getByText("Select Type");
  expect(element2).toBeInTheDocument();
});