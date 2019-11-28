import PropTypes from "prop-types";

import {
  StringParam,
  NumberParam,
  ObjectParam,
  ArrayParam,
  JsonParam,
  DateParam,
  BooleanParam,
  NumericObjectParam,
  DelimitedArrayParam,
  DelimitedNumericArrayParam
} from "use-query-params";

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
 * Returns a query param type object from a string
 *
 * See the tests for details
 * @see https://github.com/pbeshai/use-query-params#param-types
 */
const convertStringToQueryParamObject = props => {
  const { type } = props;

  /**
   * One of these objects will be returned ...
   */
  const objects = [
    StringParam,
    NumberParam,
    ObjectParam,
    ArrayParam,
    JsonParam,
    DateParam,
    BooleanParam,
    NumericObjectParam,
    DelimitedArrayParam,
    DelimitedNumericArrayParam
  ];

  /**
   * ... when `type` matches one of these strings
   */
  const strings = [
    "StringParam",
    "NumberParam",
    "ObjectParam",
    "ArrayParam",
    "JsonParam",
    "DateParam",
    "BooleanParam",
    "NumericObjectParam",
    "DelimitedArrayParam",
    "DelimitedNumericArrayParam"
  ];

  return objects[strings.indexOf(type)];
};

export {
  getQueryParamsFromFilters,
  convertStringToQueryParamObject,
  QueryParamPropTypes,
  QueryParamDefaultPropTypes
};
