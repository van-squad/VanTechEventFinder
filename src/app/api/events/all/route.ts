import { NextResponse } from "next/server";
import { request } from "graphql-request";
import moment from "moment-timezone";
import { GET_EVENTS } from "~/queries/get-events";
import { convertDate } from "~/utils";
import { env } from "~/env.mjs";

const endpoint = env.EVENTS_ENDPOINT;

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
    id: string;
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

export type ModifiedResult = Omit<Result, "dateTime" | "image"> & {
  dateTime: string;
  imageUrl: string;
  imageId: string;
};

const FILTER_CONSTANT = {
  query: "tech",
  // These point at Vancouver
  lat: 49.246292,
  lon: -123.116226,
  source: "EVENTS",
};

export async function POST(req: Request) {
  try {
    const response = (await req.json()) as {
      date: string;
      isInPersonOnly: boolean;
    };

    if (!("date" in response && typeof response.date === "string")) {
      throw Error("Invalid input!");
    }
    const dateObject = new Date(response.date);

    const vancouverTime = moment.tz(dateObject, "America/Vancouver");

    // Get the day of 0:00
    const startOfDay = vancouverTime.clone().startOf("day");
    const startOfDayString = startOfDay.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

    // Get the day of 23:59:59
    const endOfDay = vancouverTime.clone().endOf("day");
    const endOfDayString = endOfDay.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    const variables = {
      filter: {
        ...FILTER_CONSTANT,
        ...(response.isInPersonOnly && { eventType: "PHYSICAL" }),
        startDateRange: startOfDayString,
        endDateRange: endOfDayString,
      },
    };
    const { keywordSearch }: EventsData = await request(
      endpoint,
      GET_EVENTS,
      variables,
      {
        Authorization: env.EVENTS_KEY,
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
          imageId: edge.node.result.image.id,
          imageUrl: edge.node.result.image.baseUrl,
          dateTime: convertDate(edge.node.result.dateTime),
        });
      }
    }
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "fetch data failed", error },
      { status: 400 }
    );
  }
}
