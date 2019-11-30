/**
 * Everything related to managing params from use-query-params
 */

import PropTypes from "prop-types";

import {
  StringParam,
  DelimitedArrayParam,
  DelimitedNumericArrayParam
} from "use-query-params";

/**
 * Defines the query param prop types
 */
const QueryParamPropTypes = {
  name: PropTypes.String,
  type: PropTypes.string
};

/**
 * Defines the query param default props
 */
const QueryParamDefaultPropTypes = {
  name: "queryParamName",
  type: "StringParam"
};

/**
 * Defines which param types are usable / implemented from `use-query-params`
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

/**
 * Returns a query param type object from a string
 */
const convertStringToQueryParamObject = props => {
  const { type } = props;

  const index = isParamTypeAsStringSupported({ paramTypeAsString: type });

  if (index === -1) {
    console.log("Invalid param type:", type);
    return null;
  }

  return SupportedParamTypes[index];
};

export {
  SupportedParamTypes,
  SupportedParamTypesAsString,
  isParamTypeAsStringSupported,
  convertStringToQueryParamObject,
  QueryParamDefaultPropTypes,
  QueryParamPropTypes
};
