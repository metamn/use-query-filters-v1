# use-query-filters

React hook to manage search filters and URL query parameters

## How it works

1. Loads a set of filters.
2. Extracts a set of query params from filters.
3. Displays the filters.
4. When a filter is modified the query params are updated in the URL and a request is made to the backend to return the results based on the filters.
5. Displays the results.

## How to run

```
json-server src/App.json --watch --port=3001
```

## Built on

- Create React App
- React input range: https://github.com/davidchin/react-input-range
- Use Query Params: https://github.com/pbeshai/use-query-params
- JSON Server: https://github.com/typicode/json-server
- Data fetching: https://swr.now.sh/
