import React from "react";
import { render, screen } from "@testing-library/react";
import Recipe from "../tsx/Recipe";

test("renders learn react link", () => {
  render(<Recipe />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
