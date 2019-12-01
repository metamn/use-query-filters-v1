import React from "react";
import { render } from "@testing-library/react";
import FilterGroup from "./FilterGroup";

it("has a FilterGroup component", () => {
  const { getByText } = render(<FilterGroup />);
  expect(getByText("FilterGroup")).toBeInTheDocument();
});
