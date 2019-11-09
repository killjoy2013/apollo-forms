import { Resolvers, Car, CarFormQuery } from "./graphql/types";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Queries } from "./schema";

export const resolvers: Resolvers = {
  Query: {
    carForm: (_, args, { cache }: { cache: InMemoryCache }) => {
      const queryCarForm = cache.readQuery<Car>({
        query: Queries.QUERY_CARS
      });
      return queryCarForm;
    }
  },
  Mutation: {
    persistCarForm: (
      _,
      { carFormInput },
      { cache }: { cache: InMemoryCache }
    ) => {
      const { brand, model, year, fastEnough } = carFormInput;

      cache.writeData<CarFormQuery>({
        data: {
          carForm: {
            __typename: "Car",
            brand,
            model,
            year,
            fastEnough
          }
        }
      });
      return "";
    }
  }
};
