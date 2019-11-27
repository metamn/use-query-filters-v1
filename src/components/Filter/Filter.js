import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  name: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Filter = props => {
  return <div className="Filter">Filter</div>;
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
export { propTypes as FilterPropTypes, defaultProps as FilterDefaultProps };
