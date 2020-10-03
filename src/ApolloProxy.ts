import { ApolloClient } from '@apollo/client';
import {cache} from './cache'

export const getClient = () => {
  const client = new ApolloClient({
    cache
  });

  return client;
};
