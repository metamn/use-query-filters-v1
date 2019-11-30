import {
  SupportedParamTypesAsString,
  isParamTypeAsStringSupported,
  convertStringToQueryParamObject
} from "./Params";

import { StringParam } from "use-query-params";

test("Checks if a param type string is supported", () => {
  const supported = SupportedParamTypesAsString[0];

  expect(
    isParamTypeAsStringSupported({ paramTypeAsString: supported })
  ).toStrictEqual(0);
});

test("Returns error when a param type string is not supported", () => {
  const supported = "random";

  expect(
    isParamTypeAsStringSupported({ paramTypeAsString: supported })
  ).toStrictEqual(-1);
});

test("Returns a query param type object from a string", () => {
  expect(
    convertStringToQueryParamObject({ type: "StringParam" })
  ).toStrictEqual(StringParam);
});
