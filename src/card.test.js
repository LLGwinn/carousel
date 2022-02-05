import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// SMOKE TEST
it("renders without crashing", () => {
  render(<Card />);
})

// SNAPSHOT TEST
it("matches snapshot", () => {
  const {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
})