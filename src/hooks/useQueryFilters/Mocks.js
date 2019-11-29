const filters1 = [
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
];

const filters2 = [
  {
    title: "Search",
    queryParam: { name: "q", type: "StringParam" },
    input: { type: "text", defaultValue: "" }
  },
  {
    title: "Risk rating",
    queryParam: { name: "risk", type: "DelimitedNumericArrayParam" },
    input: {
      type: "range-multi-handle",
      min: 0,
      max: 5,
      value: { min: 1, max: 4 }
    }
  }
];

export { filters1, filters2 };
