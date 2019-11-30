import { isFilterWellDefined, SupportedFilters } from "./Filters";

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

  expect(isFilterWellDefined(props)).toStrictEqual(true);
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

  expect(isFilterWellDefined(props)).toStrictEqual(false);
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

  expect(isFilterWellDefined(props)).toStrictEqual(false);
});
