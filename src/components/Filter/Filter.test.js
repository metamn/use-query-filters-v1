import React from "react";
import { render } from "@testing-library/react";
import Filter from "./Filter";

it("has a Filter component", () => {
  const { getByText } = render(<Filter />);
  expect(getByText("Filter")).toBeInTheDocument();
});
