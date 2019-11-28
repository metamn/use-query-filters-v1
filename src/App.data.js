const data = {
  filters: [
    {
      title: "Search",
      queryParam: { name: "q", type: "StringParam" },
      input: { type: "text", defaultValue: "" }
    },
    {
      title: "Location",
      queryParam: { name: "location", type: "DelimitedArrayParam" },
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
          },
          {
            label: "UK",
            queryValue: "uk"
          },
          {
            label: "France",
            queryValue: "fr"
          }
        ]
      }
    },
    {
      title: "Sector",
      queryParam: { name: "sector", type: "DelimitedNumericArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Agriculture",
            queryValue: 1
          },
          {
            label: "Economy",
            queryValue: 2
          },
          {
            label: "IT",
            queryValue: 300
          }
        ]
      }
    }
  ]
};

export default data;
