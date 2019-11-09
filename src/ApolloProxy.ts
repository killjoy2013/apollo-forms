import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from "./resolvers";
import { Car } from "./graphql/types";

let dell = resolvers;

export const getClient = () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    resolvers
  });

  cache.writeData({
    data: {
      carForm: {
        __typename: "Car",
        brand: "",
        model: "",
        year: "",
        fastEnough: false
      }
    }
  });

  return client;
};
