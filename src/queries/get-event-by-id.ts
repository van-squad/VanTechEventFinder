export const GET_EVENT_BY_ID = `
  query ($eventId: ID) {
    event(id: $eventId) {
      id
      title
      description
      eventUrl
      venue {
        id
        name
        address
        lat
        lng
      }
      image {
        baseUrl
      }
    }
  }
`;
