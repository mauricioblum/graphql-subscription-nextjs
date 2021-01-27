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
    queryMessage(order: { desc: time }) {
      id
      text
      title
      half
      time
      match(filter: { id: ["0xa"] }) {
        id
      }
    }
  }
`;

export const ADD_MATCH_MESSAGE = gql`
  mutation AddMatchMessage {
    addMessage(
      input: {
        text: "Fulano pega a bola..."
        half: First
        club: { id: "0x5", name: "SC Internacional" }
        match: { id: "0xa" }
        time: "10"
        title: "Que lance!"
      }
    ) {
      message {
        id
        text
        title
        half
        time
        match {
          id
        }
      }
    }
  }
`;
