import React from "react";
import PropTypes from "prop-types";

import { findFilterByLabel, displayFilters } from "../Filters";

/**
 * Defines the prop types
 */
const propTypes = {
  label: PropTypes.string,
  isLabelDisplayed: PropTypes.bool,
  type: PropTypes.oneOf(["standalone"]),
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      isLabelDisplayed: PropTypes.bool
    })
  )
};

/**
 * Defines the default props
 */
const defaultProps = {
  label: "Group label",
  isLabelDisplayed: true,
  filters: [
    {
      label: "Filter 1"
    },
    {
      label: "Filter 2",
      isLabelDisplayed: false
    }
  ]
};

/**
 * Displays the component
 */
const FilterGroup = props => {
  const { label, isLabelDisplayed, filters, type, allFilters } = props;

  if (type && type === "standalone") {
    const f = findFilterByLabel({ label: label, filters: allFilters });
    return displayFilters({ filters: [f] });
  }

  const items = filters.map((filter, index) => {
    const { label } = filter;
    return findFilterByLabel({ label: label, filters: allFilters });
  });

  return (
    <div className="FilterGroup">
      <div className="Label">{label}</div>
      <div className="Items">{displayFilters({ filters: items })}</div>
    </div>
  );
};

FilterGroup.propTypes = propTypes;
FilterGroup.defaultProps = defaultProps;

export default FilterGroup;
export {
  propTypes as FilterGroupPropTypes,
  defaultProps as FilterGroupDefaultProps
};
