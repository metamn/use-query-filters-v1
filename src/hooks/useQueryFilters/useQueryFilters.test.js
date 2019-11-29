import {
  getQueryParamsFromFilters,
  convertStringToQueryParamObject
} from "./useQueryFilters";
import { StringParam, DelimitedNumericArrayParam } from "use-query-params";

const filters1 = [
  {
    title: "Search",
    queryParam: { name: "q", type: "StringParam" },
    input: { type: "text", defaultValue: "" }
  },
  {
    title: "Location",
    queryParam: { name: "location", type: "ArrayParam" },
    input: {
      type: "checkbox",
      items: [
        {
          label: "Canada",
          queryValue: "ca"
        },
        {
          label: "Mexico",
          queryValue: "mx"
        }
      ]
    }
  }
];

const filters2 = [
  {
    title: "Search",
    queryParam: { name: "q", type: "StringParam" },
    input: { type: "text", defaultValue: "" }
  },
  {
    title: "Risk rating",
    queryParam: { name: "risk", type: "DelimitedNumericArrayParam" },
    input: {
      type: "range-multi-handle",
      min: 0,
      max: 5,
      value: { min: 1, max: 4 }
    }
  }
];

test("Collects the query params from filters", () => {
  expect(getQueryParamsFromFilters({ filters: filters1 })).toStrictEqual({
    q: StringParam,
    location: null
  });

  expect(getQueryParamsFromFilters({ filters: filters2 })).toStrictEqual({
    q: StringParam,
    risk: DelimitedNumericArrayParam
  });
});

test("Returns a query param type object from a string", () => {
  expect(
    convertStringToQueryParamObject({ type: "StringParam" })
  ).toStrictEqual(StringParam);
});
