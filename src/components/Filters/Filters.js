import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import { useQueryParams } from "use-query-params";

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
 * Sets up a context to make query params available down the component tree
 */
const QueryParamsContext = React.createContext();

/**
 * Displays the component
 */
const Filters = props => {
  const { filtersURL, filters: defaultFilters } = props;

  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(filtersURL);

      if (result.data) {
        setFilters(result.data);
      }
    };
    fetchData();
  }, [filtersURL]);

  const queryParamsFromFilters = getQueryParamsFromFilters({
    filters: filters
  });

  const [queryParams, setQueryParams] = useQueryParams(queryParamsFromFilters);

  const queryParamsContextValue = {
    queryParams: queryParams,
    setQueryParams: setQueryParams
  };

  return (
    <QueryParamsContext.Provider value={queryParamsContextValue}>
      <div className="Home">
        <a href="http://localhost:3000/">Home</a>
      </div>

      <div className="Filters">
        {filters &&
          filters.map &&
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
