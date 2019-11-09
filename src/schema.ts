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

const PERSIST_CAR_FORM = gql`
  mutation persistCarForm($args: CarFormInput!) {
    persistCarForm(carFormInput: $args) @client
  }
`;

export const Queries = {
  QUERY_CARS
};

export const Mutations = {
  PERSIST_CAR_FORM
};
