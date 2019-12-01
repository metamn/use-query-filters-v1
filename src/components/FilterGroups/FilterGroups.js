import React from "react";
import PropTypes from "prop-types";

import { displayFilters } from "../Filters";
import FilterGroup, {
  FilterGroupPropTypes,
  FilterGroupDefaultProps
} from "../FilterGroup";

/**
 * Defines the prop types
 */
const propTypes = {
  filterGroups: PropTypes.arrayOf(PropTypes.shape(FilterGroupPropTypes))
};

/**
 * Defines the default props
 */
const defaultProps = {
  filterGroups: Array(1).fill(FilterGroupDefaultProps)
};

/**
 * Displays the component
 */
const FilterGroups = props => {
  const { filterGroups, filters } = props;

  return (
    <div className="FilterGroups">
      {filterGroups &&
        filterGroups.map &&
        filterGroups.map((filterGroup, index) => (
          <FilterGroup key={index} {...filterGroup} allFilters={filters} />
        ))}
    </div>
  );
};

FilterGroups.propTypes = propTypes;
FilterGroups.defaultProps = defaultProps;

export default FilterGroups;
export {
  propTypes as FilterGroupsPropTypes,
  defaultProps as FilterGroupsDefaultProps
};
