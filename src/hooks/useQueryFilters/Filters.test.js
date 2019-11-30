import {
  isFilterWellDefined,
  SupportedFilters,
  areFiltersWellDefined
} from "./Filters";

test("Checks if a filter is well defined.", () => {
  const supported = SupportedFilters[0];
  const { filter, paramTypes } = supported;
  const paramType = paramTypes[0];

  const props = {
    queryParam: {
      type: paramType
    },
    input: {
      type: filter
    }
  };

  expect(isFilterWellDefined({ filter: props })).toStrictEqual(true);
});

test("Fails when the filter's param type is not well defined.", () => {
  const supported = SupportedFilters[0];
  const { filter } = supported;

  const props = {
    queryParam: {
      type: "random"
    },
    input: {
      type: filter
    }
  };

  expect(isFilterWellDefined({ filter: props })).toStrictEqual(false);
});

test("Fails when the filter's type is not well defined.", () => {
  const supported = SupportedFilters[0];
  const { paramTypes } = supported;
  const paramType = paramTypes[0];

  const props = {
    queryParam: {
      type: paramType
    },
    input: {
      type: "random"
    }
  };

  expect(isFilterWellDefined({ filter: props })).toStrictEqual(false);
});

test("Checks if all filters are well defined.", () => {
  const supported = SupportedFilters;

  expect(areFiltersWellDefined({ filters: supported })).toStrictEqual(true);
});

test("Fails if one of the filters is not well defined.", () => {
  const notSupported = [
    ...SupportedFilters,
    { filter: "random", paramTypes: ["StringParam"] }
  ];

  expect(areFiltersWellDefined({ filters: notSupported })).toStrictEqual(false);
});
