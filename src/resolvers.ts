import { Resolvers, Car } from "./graphql/types";
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
  }
};
