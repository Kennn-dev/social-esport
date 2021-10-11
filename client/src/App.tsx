import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Theme from "./components/Theme";
import GlobalStyle from "./globalStyles";
function App() {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </Theme>
    </>
  );
}

export default App;
