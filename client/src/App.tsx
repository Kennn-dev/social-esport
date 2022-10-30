import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./components/Theme";
import GlobalStyle from "./globalStyles";
import Routes from "./routes";
import { SkeletonTheme, SkeletonThemeProps } from "react-loading-skeleton";

import { ToastContainer, toast, ToastContainerProps } from "react-toastify";
import client from "src/graphql/client";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
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
      <SkeletonTheme>
        <Theme>
          <GlobalStyle />
          <Router>
            <Routes />
          </Router>
        </Theme>
      </SkeletonTheme>
    </ApolloProvider>
  );
}

export default App;
