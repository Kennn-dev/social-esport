import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./components/Theme";
import GlobalStyle from "./globalStyles";
import Routes from "./routes";
import { ToastContainer, toast, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const uri = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      // dev code
      return process.env.REACT_APP_API_ENDPOINT_LOCAL;
    } else {
      // production code
      return process.env.REACT_APP_API_ENDPOINT;
    }
  };
  console.log("Backend", uri());

  const client = new ApolloClient({
    uri: uri(),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  const toastConfig: ToastContainerProps = {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 5000,
    hideProgressBar: true,
    theme: "dark",
    className: "toast",
    toastClassName: "toast-wrapper",
    bodyClassName: "toast-body",
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
