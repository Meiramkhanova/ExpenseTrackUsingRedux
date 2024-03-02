import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/add"> Add Items</Link>
        <Link to="/list">List Items</Link>
      </nav>
    </div>
  );
}

export default App;
