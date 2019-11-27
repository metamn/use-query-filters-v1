import React from "react";
import PropTypes from "prop-types";

import useSWR from "swr";

import { getQueryParamsFromFilters } from "../../hooks";
import Filter, { FilterDefaultProps, FilterPropTypes } from "../Filter";

/**
 * Defines the prop types
 */
const propTypes = {
  filtersURL: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.shape(FilterPropTypes))
};

/**
 * Defines the default props
 */
const defaultProps = {
  filtersURL: "http://localhost:3001/filters",
  filters: Array(1).fill(FilterDefaultProps)
};

/**
 * Defines a fetcher for useSWR to comply with CORS coming from json-server
 */
const fetcher = url => fetch(url).then(r => r.json());

/**
 * Displays the component
 */
const Filters = props => {
  const { filtersURL } = props;

  const { data: filters, error } = useSWR(filtersURL, fetcher);
  if (error) return <div>Failed to load data from {filtersURL}</div>;
  if (!filters) return <div>Loading...</div>;

  /**
   * Gets all available query params from filters
   * - As a safety measure only these query params will be usable in the URL
   */
  const queryParamsFromFilters = getQueryParamsFromFilters({
    filters: filters
  });

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
