import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
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
            <Route path="/:pageId" component={Page} />
          </Switch>
        </body>
      </Router>
    </div>
  );
}

const Page = ({ match }) => {
  return <div>{match.params.pageId}</div>;
};

export default App;
