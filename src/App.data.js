const data = {
  filters: [
    {
      title: "Search",
      queryParam: { name: "q", type: "StringParam" },
      input: { type: "text", defaultValue: "" }
    },
    {
      title: "Location",
      queryParam: { name: "location", type: "ArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Canada",
            queryValue: "ca"
          },
          {
            label: "Mexico",
            queryValue: "mx"
          }
        ]
      }
    }
  ]
};

export default data;
