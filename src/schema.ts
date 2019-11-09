import gql from "graphql-tag";

const QUERY_CARS = gql`
  query carForm {
    carForm @client {
      brand
      model
      year
      fastEnough
    }
  }
`;

export const Queries = {
  QUERY_CARS
};
