import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

it("has a Input component", () => {
  const { getByText } = render(<Input />);
  expect(getByText("Input")).toBeInTheDocument();
});
