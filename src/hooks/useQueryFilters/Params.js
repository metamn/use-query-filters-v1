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
  name: "query-param-name",
  type: "StringParam"
};

export {
  SupportedParamTypes,
  SupportedParamTypesAsString,
  isParamTypeAsStringSupported,
  QueryParamDefaultPropTypes,
  QueryParamPropTypes
};
