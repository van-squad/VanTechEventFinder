import { NextResponse } from "next/server";
import { request } from "graphql-request";
import { GET_EVENT_BY_ID } from "~/queries/get-event-by-id";
import { type Result } from "../all/route";
import { convertDate } from "~/utils";
import { env } from "~/env.mjs";
const endpoint = env.EVENTS_ENDPOINT;

interface Event {
  event: Result | null;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log({ url: req.url, id, req });
  const variables = {
    eventId: id,
  };
  try {
    const { event }: Event = await request(
      endpoint,
      GET_EVENT_BY_ID,
      variables,
      {
        Authorization: env.EVENTS_KEY,
      }
    );
    if (event) {
      const result = {
        id: event.id,
        title: event.title,
        eventUrl: event.eventUrl,
        description: event.description,
        venue: event.venue,
        imageUrl: event.image.baseUrl,
        dateTime: convertDate(event.dateTime),
      };
      return NextResponse.json(result, { status: 200 });
    }
    return NextResponse.json({ message: "no event found" }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { message: "fetch data failed", error },
      { status: 400 }
    );
  }
}
