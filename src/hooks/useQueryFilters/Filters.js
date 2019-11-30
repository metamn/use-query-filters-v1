/**
 * Everything related to managing the filters
 */

import PropTypes from "prop-types";

/**
 * Defines which filter types are supported.
 * - Also defines which query param type is supported by a filter.
 * - Also defines how the query value should look like
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * @see https://github.com/pbeshai/use-query-params#param-types
 */
const SupportedFilters = [
  {
    filter: "text",
    paramTypes: ["StringParam"],
    paramValues: PropTypes.string
  },
  {
    filter: "checkbox",
    paramTypes: ["DelimitedArrayParam", "DelimitedNumericArrayParam"],
    paramValues: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },
  {
    filter: "select",
    paramTypes: ["StringParam"],
    paramValues: PropTypes.string
  },
  {
    filter: "radio",
    paramTypes: ["StringParam"],
    paramValues: PropTypes.string
  },
  {
    filter: "range-multi-handle",
    paramTypes: ["DelimitedNumericArrayParam"],
    paramValues: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number
    })
  }
];

/**
 * Defines how query values should look like
 *
 * - It is manually collected from `SupportedFilters`
 */
const SupportedQueryValues = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number
  })
]);

/**
 * Checks if a filter is well defined.
 */
const isFilterWellDefined = props => {
  const { filter } = props;
  const { queryParam, input } = filter;
  const { type: queryParamType } = queryParam;
  const { type: inputType } = input;

  /**
   * Checks the filter type
   */
  const f = SupportedFilters.find(item => item.filter === inputType);

  if (!f) {
    console.log("Unsupported filter type: ", inputType);
    return false;
  }

  /**
   * Checks the param type
   */
  const wellDefined = f.paramTypes.find(item => item === queryParamType);

  if (!wellDefined) {
    console.log(
      `This filter (${inputType}) doesn't supports this query param type: `,
      queryParamType
    );
    return false;
  }

  return true;
};

/**
 * Checks if all filters are well defined
 */
const areFiltersWellDefined = props => {
  const { filters } = props;

  const wellDefined = filters.find(filter => {
    const { filter: f, paramTypes } = filter;
    const paramType = paramTypes[0];

    const props = {
      queryParam: {
        type: paramType
      },
      input: {
        type: f
      }
    };

    return !isFilterWellDefined({ filter: props });
  });

  return wellDefined === undefined;
};

export {
  SupportedFilters,
  isFilterWellDefined,
  areFiltersWellDefined,
  SupportedQueryValues
};
