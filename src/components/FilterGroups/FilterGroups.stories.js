import React from "react";
import FilterGroups from "./FilterGroups";
import ApiDoc from "./FilterGroups.md";

export default {
  component: FilterGroups,
  title: "FilterGroups",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FilterGroups />;
