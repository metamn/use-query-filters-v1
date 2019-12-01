import React from "react";
import { render } from "@testing-library/react";
import FilterGroups from "./FilterGroups";

it("has a FilterGroups component", () => {
  const { getByText } = render(<FilterGroups />);
  expect(getByText("FilterGroups")).toBeInTheDocument();
});
