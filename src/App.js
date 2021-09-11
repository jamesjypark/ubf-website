import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <body>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:pageId" component={RenderPage} />
          </Switch>
        </body>
      </Router>
    </div>
  );
}

const RenderPage = ({ match }) => {
  let pageId = match.params.pageId.toLowerCase();
  switch (pageId) {
    case "about":
      return <About />;
    default:
      return <div>{pageId}</div>;
  }
};

export default App;
