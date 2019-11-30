/**
 * Everything related to managing the filters
 */

/**
 * Defines which filter types are supported.
 * Alseo defines which query param type is supported by a filter.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * @see https://github.com/pbeshai/use-query-params#param-types
 */
const SupportedFilters = [
  {
    filter: "text",
    paramTypes: ["StringParam"]
  },
  {
    filter: "checkbox",
    paramTypes: ["DelimitedArrayParam", "DelimitedNumericArrayParam"]
  },
  {
    filter: "select",
    paramTypes: ["StringParam"]
  },
  {
    filter: "radio",
    paramTypes: ["StringParam"]
  },
  {
    filter: "range-multi-handle",
    paramTypes: ["DelimitedNumericArrayParam"]
  }
];

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

export { SupportedFilters, isFilterWellDefined, areFiltersWellDefined };
