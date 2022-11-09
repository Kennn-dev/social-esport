import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { useHistory } from "react-router-dom";
import Theme from "./components/Theme";
import GlobalStyle from "./globalStyles";
import Routes from "./routes";

import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GraphQLErrorExtensions } from "graphql";
import { toast, ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useAppStore } from "./store";

function App() {
  const reset = useAppStore((state) => state.reset);
  const history = useHistory();
  const toastConfig: ToastContainerProps = {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 5000,
    hideProgressBar: true,
    theme: "dark",
    className: "toast",
    toastClassName: "toast-wrapper",
    bodyClassName: "toast-body",
  };

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
        authorization: token ? `Bearer ${token}` : null,
      },
    };
  });

  type ResponseError = GraphQLErrorExtensions & {
    response: {
      message?: string;
      statusCode?: number;
    };
  };

  // Log any GraphQL errors or network error that occurred
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log("ERROR CLIENT", graphQLErrors);

    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        if ((extensions as ResponseError)?.response?.statusCode === 401) {
          reset && reset();
          localStorage.removeItem("token");
          history.push("/login");
          return;
        }
        toast.error(`[GraphQL error]: Message: ${message}`);
      });

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

  return (
    <ApolloProvider client={client}>
      <ToastContainer {...toastConfig} />
      <Theme>
        <GlobalStyle />
        <Routes />
      </Theme>
    </ApolloProvider>
  );
}

export default App;
