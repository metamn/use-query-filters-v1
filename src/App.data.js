const data = {
  filters: [
    {
      title: "Search",
      queryParam: { name: "q", type: "StringParam" },
      input: { type: "text", defaultValue: "" }
    },
    {
      title: "Gender",
      queryParam: { name: "gender", type: "StringParam" },
      input: {
        type: "radio",
        items: [
          {
            label: "Women",
            queryValue: "female"
          },
          {
            label: "Men",
            queryValue: "male"
          }
        ]
      }
    },
    {
      title: "Loan status",
      queryParam: { name: "status", type: "StringParam" },
      input: {
        type: "select",
        items: [
          {
            label: "Fundraising",
            queryValue: "fundraising"
          },
          {
            label: "Funded",
            queryValue: "funded"
          }
        ]
      }
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
