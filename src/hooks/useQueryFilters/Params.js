/**
 * Everything related to managing params from use-query-params
 */

import {
  StringParam,
  DelimitedArrayParam,
  DelimitedNumericArrayParam
} from "use-query-params";

/**
 * Defines which param types are usable
 *
 * @see https://github.com/pbeshai/use-query-params#param-types
 */
const SupportedParamTypes = [
  StringParam,
  DelimitedNumericArrayParam,
  DelimitedArrayParam
];

/**
 * Defines the string correspondent to a param type
 *
 * - The filters will use these values to define the param types.
 */
const SupportedParamTypesAsString = [
  "StringParam",
  "DelimitedNumericArrayParam",
  "DelimitedArrayParam"
];

/**
 * Checks if a param type string is supported
 */
const isParamTypeAsStringSupported = props => {
  const { paramTypeAsString } = props;

  return SupportedParamTypesAsString.indexOf(paramTypeAsString);
};

export {
  SupportedParamTypes,
  SupportedParamTypesAsString,
  isParamTypeAsStringSupported
};
