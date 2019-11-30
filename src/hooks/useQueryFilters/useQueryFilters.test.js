import {
  getQueryParamsFromFilters,
  convertStringToQueryParamObject
} from "./useQueryFilters";

import { StringParam, DelimitedNumericArrayParam } from "use-query-params";

import { filters1, filters2 } from "./Mocks";

test("Collects the query params from filters", () => {
  expect(getQueryParamsFromFilters({ filters: filters2 })).toStrictEqual({
    q: StringParam,
    risk: DelimitedNumericArrayParam
  });
});

test("Fails collecting query params from filters if a query param is not supported", () => {
  expect(getQueryParamsFromFilters({ filters: filters1 })).toStrictEqual({
    q: StringParam,
    location: null
  });
});
