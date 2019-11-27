import React from "react";
import PropTypes from "prop-types";

import { QueryParamDefaultPropTypes, QueryParamPropTypes } from "../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {
  name: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: "Search",
  queryParam: QueryParamDefaultPropTypes
};

/**
 * Displays the component
 */
const Filter = props => {
  const { name, queryParam } = props;

  return <div className="Filter">Filter</div>;
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
export { propTypes as FilterPropTypes, defaultProps as FilterDefaultProps };
