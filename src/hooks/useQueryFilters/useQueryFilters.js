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
const supportedParamTypes = [
  StringParam,
  DelimitedNumericArrayParam,
  DelimitedArrayParam
];

/**
 * Defines the string correspondent to a param type
 *
 * - The filters will use these values to define the param types.
 */
const supportedParamTypesAsString = [
  "StringParam",
  "DelimitedNumericArrayParam",
  "DelimitedArrayParam"
];

/**
 * Returns a query param type object from a string
 */
const convertStringToQueryParamObject = props => {
  const { type } = props;

  const index = supportedParamTypesAsString.indexOf(type);

  if (index === -1) {
    console.log("Invalid param type:", type);
    return null;
  }

  return supportedParamTypes[index];
};

/**
 * Collects the query params from filters
 *
 * See the tests for details
 */
const getQueryParamsFromFilters = props => {
  const { filters } = props;

  return (
    filters &&
    filters.filter &&
    filters
      .filter(item => item.queryParam)
      .map(item => item.queryParam)
      .reduce((result, item) => {
        const { name, type } = item;

        result[name] = convertStringToQueryParamObject({ type: type });
        return result;
      }, {})
  );
};

/**
 * Defines the Query Param prop types
 */
const QueryParamPropTypes = {
  name: PropTypes.String,
  type: PropTypes.string
};

/**
 * Defines the Query Param default props
 */
const QueryParamDefaultPropTypes = {
  name: "q",
  type: "StringParam"
};

export {
  getQueryParamsFromFilters,
  convertStringToQueryParamObject,
  QueryParamPropTypes,
  QueryParamDefaultPropTypes
};
