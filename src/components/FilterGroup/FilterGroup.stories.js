import React from "react";
import FilterGroup from "./FilterGroup";
import ApiDoc from "./FilterGroup.md";

export default {
  component: FilterGroup,
  title: "FilterGroup",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FilterGroup />;
