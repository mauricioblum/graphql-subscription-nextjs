import { gql } from "@apollo/client";

export const QUERY_COUNTRIES = gql`
  query {
    countries: Country {
      _id
      name
    }
  }
`;
