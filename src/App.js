import { Navbar } from "./components/";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from './globalSyles';

function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Navbar/>
    </Router>
    </>
  );
}

export default App;
