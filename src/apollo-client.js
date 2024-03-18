import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://hasura.io/learn/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.VUE_APP_RAWG_API_KEY;
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const errorLink = onError((error) => {
    if (process.env.NODE_ENV !== "production") {
        logErrorMessages(error)
    }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache(),
});