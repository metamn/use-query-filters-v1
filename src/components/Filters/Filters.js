import React from "react";
import PropTypes from "prop-types";

import useSWR from "swr";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * A fetcher to comply with CORS coming from json-server
 */
const fetcher = url => fetch(url).then(r => r.json());

/**
 * Displays the component
 */
const Filters = props => {
  const { data, error } = useSWR("http://localhost:3001/filters", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log("data:", data);

  return <div className="Filters">Filters: {data.length}</div>;
};

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;

export default Filters;
export { propTypes as FiltersPropTypes, defaultProps as FiltersDefaultProps };
