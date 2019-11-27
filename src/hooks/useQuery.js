import React from "react";
import useSWR from "swr";

/**
 * Defines a fetcher for useSWR to comply with CORS coming from json-server
 */
const fetcher = url => fetch(url).then(r => r.json());

const useQuery = props => {
  const { url, initialData } = props;

  const { data, error } = useSWR(url, fetcher, { initialData: initialData });

  if (error) return <div>failed to load</div>;
  if (!data) return initialData;

  return data;
};

export { useQuery };
