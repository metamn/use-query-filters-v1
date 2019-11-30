const data = {
  filters: [
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
    },
    {
      label: "Gender",
      queryParam: { name: "gender", type: "StringParam" },
      input: {
        type: "radio",
        items: [
          {
            label: "Women",
            value: "female"
          },
          {
            label: "Men",
            value: "male"
          }
        ]
      }
    },
    {
      label: "Loan status",
      queryParam: { name: "status", type: "StringParam" },
      input: {
        type: "select",
        items: [
          {
            label: "Fundraising",
            value: "fundraising"
          },
          {
            label: "Funded",
            value: "funded"
          }
        ]
      }
    },
    {
      label: "Location",
      queryParam: { name: "location", type: "DelimitedArrayParam" },
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
          },
          {
            label: "UK",
            value: "uk"
          },
          {
            label: "France",
            value: "fr"
          }
        ]
      }
    },
    {
      label: "Sector",
      queryParam: { name: "sector", type: "DelimitedNumericArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Agriculture",
            value: 1
          },
          {
            label: "Economy",
            value: 2
          },
          {
            label: "IT",
            value: 300
          }
        ]
      }
    }
  ]
};

export default data;
