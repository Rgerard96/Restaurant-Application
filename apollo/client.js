import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const link = new HttpLink({
  uri: '/api/graphql',
  credentials: 'same-origin',
});

let token;

const authLink = setContext(() => {
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('jwtToken');
  }

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});
