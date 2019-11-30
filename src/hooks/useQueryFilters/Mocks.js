const filters1 = [
  {
    label: "Search",
    queryParam: { name: "q", type: "StringParam" },
    input: { type: "text", value: "" }
  },
  {
    label: "Location",
    queryParam: { name: "location", type: "ArrayParam" },
    input: {
      type: "checkbox",
      items: [
        {
          label: "Canada",
          value: "ca"
        },
        {
          label: "Mexico",
          value: "mx"
        }
      ]
    }
  }
];

const filters2 = [
  {
    label: "Search",
    queryParam: { name: "q", type: "StringParam" },
    input: { type: "text", value: "" }
  },
  {
    label: "Risk rating",
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
