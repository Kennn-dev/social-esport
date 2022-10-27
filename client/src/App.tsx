import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./components/Theme";
import GlobalStyle from "./globalStyles";
import Routes from "./routes";
import { ToastContainer, toast, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_ENDPOINT_LOCAL,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  const toastConfig: ToastContainerProps = {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 3000,
    hideProgressBar: true,
    theme: "dark",
  };
  return (
    <ApolloProvider client={client}>
      <ToastContainer {...toastConfig} />
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
