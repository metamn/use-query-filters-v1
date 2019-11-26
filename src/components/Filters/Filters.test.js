import React from "react";
import { render } from "@testing-library/react";
import Filters from "./Filters";

it("has a Filters component", () => {
  const { getByText } = render(<Filters />);
  expect(getByText("Filters")).toBeInTheDocument();
});
