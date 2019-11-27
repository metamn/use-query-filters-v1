import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import useSWR from "swr";
import {
  useQueryParams,
  ArrayParam,
  StringParam,
  NumberParam
} from "use-query-params";

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
 * Sets up a context to make query params available down the component tree
 */
const QueryParamsContext = React.createContext();

/**
 * Displays the component
 */
const Filters = props => {
  const { filtersURL } = props;

  /**
   * Fetching filters is async and can return different values: an error message, some initial data, and the real data.
   *
   * Therefore no other `useState` can be used after fetching filters. The error message will be something like `Cannot use hooks after conditional rendering`
   *
   * This means all states has to be set up before fetching filters. With default params, then updated via `useEffect` after the real filter data arrives
   */

  /**
   * Sets up the data fetching
   */
  let data = { data: {}, error: {} };

  /**
   * Sets up the filters
   *
   * - They will be populated with the fetched data
   */
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters(data.data);
  }, [data]);

  /**
   * Sets up a white list for `useQueryParams`
   *
   * - Only these URL query vars will be available for the app
   * - This filters out malicious, undefined query vars
   */
  const [queryParamsFromFilters, setQueryParamsFromFilters] = useState({});

  useEffect(() => {
    setQueryParamsFromFilters(
      getQueryParamsFromFilters({
        filters: filters
      })
    );
  }, [filters]);

  /**
   * Sets up state to manage the query params
   *
   * This one is tricky: the first initialization sets up the whitelist, all next modifications sets up the query params.
   *
   * This is a strange, non-standard approach. Maybe the plugin has to be replaced.
   *
   * Therefore useQueryParams must be initialized only once (no useEffect) with the final data
   *
   * @see https://github.com/pbeshai/use-query-params
   */
  const [queryParams, setQueryParams] = useQueryParams({});

  /**
  useEffect(() => {
    if (queryParamsFromFilters !== undefined) {
      setQueryParams(queryParamsFromFilters); // This causes the error
    }
  }, [queryParamsFromFilters]);
*/

  const queryParamsContextValue = {
    queryParams: queryParams,
    setQueryParams: setQueryParams
  };

  /**
   * Fetches the data
   *
   * - Once done the filters, queryParamsFromFilters, queryParams will all be updated
   */
  data = useSWR(filtersURL, fetcher);
  if (data.error) return <div>Failed to load data from {filtersURL}</div>;
  if (!data.data) return <div>Loading...</div>;

  return (
    <QueryParamsContext.Provider value={queryParamsContextValue}>
      <div className="Home">
        <a href="http://localhost:3000/">Home</a>
      </div>

      <div className="Filters">
        {filters &&
          filters.map((filter, index) => {
            return <Filter key={index} {...filter} />;
          })}
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
