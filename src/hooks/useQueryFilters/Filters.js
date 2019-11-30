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
  const { queryParam, input } = props;
  const { type: queryParamType } = queryParam;
  const { type: inputType } = input;

  const filter = SupportedFilters.find(item => item.filter === inputType);

  if (!filter) {
    console.log("Unsupported filter type: ", inputType);
    return false;
  }

  const wellDefined = filter.paramTypes.find(item => item === queryParamType);

  if (!wellDefined) {
    console.log(
      `This filter (${inputType}) doesn't supports this query param type: `,
      queryParamType
    );
    return false;
  }

  return true;
};

export { SupportedFilters, isFilterWellDefined };
