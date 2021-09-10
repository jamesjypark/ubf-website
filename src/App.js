import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

import Home from "./pages/Home/Home";

const navList = ["About", "News", "Contact Us"];

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav>
                <Navbar.Brand href="/">
                  <img
                    src={require("./ubf_logo_white.png").default}
                    height="30"
                    className="d-inline-block align-top"
                    alt="UBF logo"
                  />
                </Navbar.Brand>

                {navList.map((option) => (
                  <Nav.Link href={`/${option}`}>{option}</Nav.Link>
                ))}
              </Nav>
            </Container>
          </Navbar>
        </header>

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
