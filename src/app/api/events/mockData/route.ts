

export async function POST() {
  const res = await fetch("https://www.meetup.com/gql2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      operationName: "recommendedEventsWithSeries",
      variables: {
        first: 200,
        lat: 49.279998779296875,
        lon: -123.04000091552734,
        topicCategoryId: "546",
        startDateRange: "2023-11-23T17:20:15-05:00[US/Eastern]",
        sortField: "DATETIME",
        doConsolidateEvents: false,
        after:
          "Y21WalUyOTFjbU5sT25KaGJtdGxaQzFsZG1WdWRITXRZbmt0ZEdsdFpTeHBibVJsZURveU1BPT0=",
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash:
            "0dd88409952899c04bb45c32890ba7383d5ae2ba6c9bdfd4ea2cffee77bbdf12",
        },
      },
    }),
  });

  // const data = await res.json();
  // console.log("data", data);

  // return Response.json(data);
}
