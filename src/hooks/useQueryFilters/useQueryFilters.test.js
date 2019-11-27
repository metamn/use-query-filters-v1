import {
  getQueryParamsFromFilters,
  convertStringToQueryParamObject
} from "./useQueryFilters";
import { StringParam, ArrayParam } from "use-query-params";

const filters = [
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

test("Collects the query params from filters", () => {
  expect(getQueryParamsFromFilters({ filters: filters })).toStrictEqual({
    q: StringParam,
    location: ArrayParam
  });
});

test("Returns a query param type object from a string", () => {
  expect(
    convertStringToQueryParamObject({ type: "StringParam" })
  ).toStrictEqual(StringParam);
});
