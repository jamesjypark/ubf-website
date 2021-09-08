import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const list = [1, 2, 3, 4];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          We are a UVic Student club dedicated to studying the <b>Bible.</b>
        </p>
        {list.map((number) => (
          <div>{number}</div>
        ))}
      </header>
      <Router>
        {list.map((number) => (
          <div>number</div>
        ))}
      </Router>
    </div>
  );
}

export default App;
