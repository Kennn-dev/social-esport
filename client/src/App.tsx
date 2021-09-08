import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./globalStyles";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
