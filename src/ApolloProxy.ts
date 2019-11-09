import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from "./resolvers";
import { Car, CarFormQuery } from "./graphql/types";

let dell = resolvers;

export const getClient = () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    resolvers
  });

  cache.writeData<CarFormQuery>({
    data: {
      carForm: {
        __typename: "Car",
        brand: "",
        model: "",
        year: null,
        fastEnough: false
      }
    }
  });

  return client;
};
