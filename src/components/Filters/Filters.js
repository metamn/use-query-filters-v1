import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useQueryParams } from "use-query-params";

import { getQueryParamsFromFilters } from "../../hooks";
import Filter, { FilterDefaultProps, FilterPropTypes } from "../Filter";
import data from "../../App.data";

/**
 * Defines the prop types
 */
const propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape(FilterPropTypes))
};

/**
 * Defines the default props
 */
const defaultProps = {
  filters: data.filters
};

/**
 * Sets up a context to make query params available down the component tree
 */
const QueryParamsContext = React.createContext();

/**
 * Displays the component
 */
const Filters = props => {
  const { filters } = props;

  /**
   * Loads all available param types.
   *
   * - This will act as a whitelist for URL params
   */
  const queryParamsFromFilters = getQueryParamsFromFilters({
    filters: filters
  });

  /**
   * Sets up the query params
   */
  const [queryParams, setQueryParams] = useQueryParams(queryParamsFromFilters);

  /**
   * Sets up the context for the query params
   */
  const queryParamsContextValue = {
    queryParams: queryParams,
    setQueryParams: setQueryParams
  };

  return (
    <QueryParamsContext.Provider value={queryParamsContextValue}>
      <div className="Filters">
        {filters &&
          filters.map &&
          filters.map((filter, index) => {
            return <Filter key={index} {...filter} />;
          })}
      </div>

      <div className="Home">
        <p>
          <a href="http://localhost:3000/">Reset filters</a>
        </p>
      </div>
    </QueryParamsContext.Provider>
  );
};

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;

export default Filters;
export {
  propTypes as FiltersPropTypes,
  defaultProps as FiltersDefaultProps,
  QueryParamsContext
};
