export const GET_EVENTS = `
  query (
    $input: ConnectionInput
    $filter: SearchConnectionFilter!
    $sort: KeywordSort
  ) {
    keywordSearch(input: $input, filter: $filter, sort: $sort) {
      count
      edges {
        node {
          id
          result {
            ... on Event {
              id
              title
              eventUrl
              description
              dateTime
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
        }
      }
    }
  }
`;
