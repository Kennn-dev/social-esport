import {
  ApolloClient,
  ApolloError,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";

const uri = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // dev code
    return `${process.env.REACT_APP_API_ENDPOINT_LOCAL}/graphql`;
  } else {
    // production code
    return `${process.env.REACT_APP_API_ENDPOINT}/graphql`;
  }
};

console.log("Backend", uri());

const httpLink = createHttpLink({
  uri: uri(),
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log("ERROR CLIENT", graphQLErrors);

  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      toast.error(`[GraphQL error]: Message: ${message}`)
    );
  if (networkError) {
    toast.error(`[Network error]: ${networkError.message}`);
  }
});
const links = from([errorLink, authLink, httpLink]);
const client = new ApolloClient({
  uri: uri(),
  cache: new InMemoryCache(),
  link: links,
  connectToDevTools: true,
});

export default client;
// export function handleError(error : ApolloError) {
//   error.
// }
