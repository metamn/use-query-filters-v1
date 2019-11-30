# use-query-filters

React hook to manage search filters and URL query parameters

## How it works

1. Loads a set of filters.
2. Extracts a set of query params from filters. They will act as a whitelist for the URL params.
3. Displays the filters. (Only well defined filters will be displayed)
4. When a filter is modified the query params are updated in the URL and a request is made to the backend to return the results based on the filters.
5. Displays the results.

## Built on

- Create React App: https://github.com/facebook/create-react-app
- React input range: https://github.com/davidchin/react-input-range
- Use Query Params: https://github.com/pbeshai/use-query-params

## Dev roadmap

As seen on https://github.com/metamn/use-query-filters/branches

1. Check the underlying technology (Branches 1-3)
2. Create a proof of concept (Branch 4)
