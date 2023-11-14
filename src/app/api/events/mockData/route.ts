// @ts-nocheck

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const url = "https://www.meetup.com/gql";

    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      operationName: "categorySearch",
      variables: {
        first: 100,
        lat: 49.279998779296875,
        lon: -123.04000091552734,
        topicCategoryId: 546,
        startDateRange: "2023-11-10T10:50:50-05:00[US/Eastern]",
        sortField: "DATETIME",
        after: "",
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash:
            "0aceed81313ebba814c0feadeda32f404147996091b6b77209353e2183b2dabb",
        },
      },
    };

    try {
      const response = await axios.post(url, body, { headers });

      // Include CORS headers if needed
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST");

    //   res.status(response.status).json(response.data);

  res.status(200).json({ status:200 , data: response});

    } catch (error) {
      console.error("Error:", error);

      // Include more details in the error response
      res
        .status(500)
        .json({ error: "Internal Server Error", details: error });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
