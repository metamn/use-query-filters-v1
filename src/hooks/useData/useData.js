import useSWR from "swr";

/**
 * Defines a fetcher for useSWR to comply with CORS
 *
 * @see https://github.com/zeit/swr
 */
const fetcher = url => fetch(url).then(r => r.json());

/**
 * Fetches data the sync way
 */
const useData = (url, defaultValues = {}) => {
  /**
   * Queries the database
   */
  const { data, error } = useSWR(url, fetcher, {
    initialData: defaultValues
  });

  /**
   * Returns default data while real data is loaded from the database
   */
  if (!data) {
    return defaultValues;
  }

  /**
   * Logs to console when there is an error
   */
  if (error) {
    console.log("useData error:" + error);
    return;
  }

  /**
   * Returns data
   */
  return data;
};

export { useData };
