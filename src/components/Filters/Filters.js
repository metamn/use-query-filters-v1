import React from "react";
import PropTypes from "prop-types";

import useSWR from "swr";
import {
  useQueryParams,
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

import Filter, { FilterDefaultProps, FilterPropTypes } from "../Filter";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Defines a fetcher for useSWR to comply with CORS coming from json-server
 */
const fetcher = url => fetch(url).then(r => r.json());

/**
 * Returns a query param type object from a string
 *
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

/**
 * Collects the query params from filters
 *
 * @see App.json for the filters syntax
 */
const getQueryParamsFromFilters = props => {
  const { filters } = props;

  let results = [];

  filters
    .filter(item => item.queryParam)
    .map(item => item.queryParam)
    .map(item => {
      const { name, type } = item;
      results[name] = convertStringToQueryParamObject({ type: type });
    });

  return results;
};

/**
 * Displays the component
 */
const Filters = props => {
  const { data: filters, error } = useSWR(
    "http://localhost:3001/filters",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!filters) return <div>loading...</div>;

  console.log("filters:", filters);
  console.log("tf:", typeof filters);

  /**
   * Gets all available query params from filters
   * - As a safety measure only these query params will be usable in the URL
   */
  const availableQueryParams = getQueryParamsFromFilters({ filters: filters });
  console.log("a", availableQueryParams);

  return (
    <div className="Filters">
      {filters &&
        filters.map((filter, index) => {
          return <Filter key={index} {...filter} />;
        })}
    </div>
  );
};

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;

export default Filters;
export { propTypes as FiltersPropTypes, defaultProps as FiltersDefaultProps };
