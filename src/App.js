import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";

import Header from "./components/Header/Header";

import "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <body>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
          </Switch>
        </body>
      </HashRouter>
    </div>
  );
}

export default App;
