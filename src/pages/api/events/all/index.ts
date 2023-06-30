import { type NextApiRequest, type NextApiResponse } from "next";
import { request } from "graphql-request";
import moment from "moment-timezone";
import { GET_EVENTS } from "~/queries/get-events";
import convertDate from "~/utils/date-converter";

const endpoint = process.env.EVENTS_ENDPOINT;

export interface Venue {
  id: string;
  name: string;
  address?: string;
  lat?: number;
  lng?: number;
}

export interface Result {
  id: string;
  title: string;
  eventUrl: string;
  description: string;
  venue: Venue;
  dateTime: Date;
  image: {
    baseUrl: string;
  };
}

interface EventNode {
  node: {
    id: string;
    result: Result;
  };
}

interface EventsData {
  keywordSearch: {
    count: number;
    edges: EventNode[];
  };
}

interface Body {
  date: Date;
}

export type ModifiedResult = Omit<Result, "dateTime" | "image"> & {
  dateTime: string;
  imageUrl: string;
};

const FILTER_CONSTANT = {
  query: "tech",
  // These point at Vancouver
  lat: 49.246292,
  lon: -123.116226,
  source: "EVENTS",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const bodyJSON = req.body as string;
      const body = JSON.parse(bodyJSON) as Body;

      const date = new Date(body.date);

      const vancouverTime = moment.tz(date, "America/Vancouver");

      // Get the day of 0:00
      const startOfDay = vancouverTime.clone().startOf("day");
      const startOfDayString = startOfDay.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

      // Get the day of 23:59:59
      const endOfDay = vancouverTime.clone().endOf("day");
      const endOfDayString = endOfDay.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
      const variables = {
        filter: {
          ...FILTER_CONSTANT,
          startDateRange: startOfDayString,
          endDateRange: endOfDayString,
        },
      };
      const { keywordSearch }: EventsData = await request(
        endpoint,
        GET_EVENTS,
        variables,
        {
          Authorization: process.env.EVENTS_KEY,
        }
      );

      const results: ModifiedResult[] = [];
      if (keywordSearch.count > 0) {
        for (const edge of keywordSearch.edges) {
          results.push({
            id: edge.node.result.id,
            title: edge.node.result.title,
            eventUrl: edge.node.result.eventUrl,
            description: edge.node.result.description,
            venue: edge.node.result.venue,
            imageUrl: edge.node.result.image.baseUrl,
            dateTime: convertDate(edge.node.result.dateTime),
          });
        }
      }
      res.status(200).json(results);
    } catch (error) {
      console.log("error here", error);
      res.status(400).json({ message: "fetch data failed", error });
    }
  }
}
