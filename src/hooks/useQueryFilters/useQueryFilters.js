import { convertStringToQueryParamObject } from "./Params";

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

export { getQueryParamsFromFilters };
