import { type NextApiRequest, type NextApiResponse } from "next";
import { request } from "graphql-request";
import { GET_EVENT_BY_ID } from "~/queries/get-event-by-id";
import { type Result } from "./all";
const endpoint = process.env.EVENTS_ENDPOINT;

interface Event {
  event: Result | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  const variables = {
    eventId: query.id,
  };
  try {
    const { event }: Event = await request(
      endpoint,
      GET_EVENT_BY_ID,
      variables,
      {
        Authorization: process.env.EVENTS_KEY,
      }
    );
    let result;
    if (event) {
      result = {
        id: event.id,
        title: event.title,
        eventUrl: event.eventUrl,
        description: event.description,
        venue: event.venue,
        imageUrl: event.image.baseUrl,
      };
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: "fetch data failed", error });
  }
}
