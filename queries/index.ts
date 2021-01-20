import { gql } from "@apollo/client";

export const QUERY_COUNTRIES = gql`
  query {
    countries: Country {
      _id
      name
    }
  }
`;

export const QUERY_MATCHES = gql`
  query MyQuery {
    queryMatch {
      id
      home_score
      home {
        id
        name
      }
      away_score
      away {
        id
        name
      }
      messages {
        id
        text
        club {
          id
          name
        }
      }
    }
  }
`;

export const MY_SUBSCRIPTION_MESSAGES = gql`
  subscription MySubscription {
    queryMessage {
      id
      text
      match(filter: { id: ["0xa"] }) {
        id
      }
    }
  }
`;
