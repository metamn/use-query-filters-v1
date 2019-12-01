import React from "react";
import PropTypes from "prop-types";

import { useQueryParams } from "use-query-params";

import { getQueryParamsFromFilters, isFilterWellDefined } from "../../hooks";

import Filter, { FilterPropTypes } from "../Filter";
import FilterGroups, { FilterGroupsPropTypes } from "../FilterGroups";
import data from "../../App.data";

/**
 * Defines the prop types
 */
const propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape(FilterPropTypes)),
  ...FilterGroupsPropTypes
};

/**
 * Defines the default props
 */
const defaultProps = {
  filters: data.filters,
  filterGroups: data.groups
};

/**
 * Sets up a context to make query params available down the component tree
 */
const QueryParamsContext = React.createContext();

/**
 * Displays a set of filters
 */
const displayFilters = props => {
  const { filters } = props;

  return (
    <div className="Filters">
      {filters &&
        filters.map &&
        filters.map((filter, index) => {
          console.log("xxx");
          /**
           * Only well defined filters will be displayed
           */
          return isFilterWellDefined({ filter: filter }) ? (
            <Filter key={index} {...filter} />
          ) : null;
        })}
    </div>
  );
};

/**
 * Finds a filter by its label
 */
const findFilterByLabel = props => {
  const { label, filters } = props;
  return filters.find(item => item.label === label);
};

/**
 * Displays the component
 */
const Filters = props => {
  const { filters, filterGroups } = props;

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
      {filterGroups ? <FilterGroups {...props} /> : displayFilters(props)}
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
  QueryParamsContext,
  displayFilters,
  findFilterByLabel
};
