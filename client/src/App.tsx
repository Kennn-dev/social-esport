import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./components/Theme";
import GlobalStyle from "./globalStyles";
import Routes from "./routes";

const client = new ApolloClient({
  uri: process.env.API_ENDPOINT_LOCAL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </Theme>
    </ApolloProvider>
  );
}

export default App;
