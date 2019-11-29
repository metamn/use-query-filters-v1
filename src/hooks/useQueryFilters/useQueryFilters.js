import { isParamTypeAsStringSupported, SupportedParamTypes } from "./Params";

/**
 * Returns a query param type object from a string
 */
const convertStringToQueryParamObject = props => {
  const { type } = props;

  const index = isParamTypeAsStringSupported({ paramTypeAsString: type });

  if (index === -1) {
    console.log("Invalid param type:", type);
    return null;
  }

  return SupportedParamTypes[index];
};

/**
 * Collects the query params from filters
 */
const getQueryParamsFromFilters = props => {
  const { filters } = props;

  return (
    filters &&
    filters.filter &&
    filters
      .filter(item => item.queryParam)
      .map(item => item.queryParam)
      .reduce((result, item) => {
        const { name, type } = item;

        result[name] = convertStringToQueryParamObject({ type: type });
        return result;
      }, {})
  );
};

export { getQueryParamsFromFilters, convertStringToQueryParamObject };
