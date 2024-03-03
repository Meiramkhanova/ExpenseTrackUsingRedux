import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>An App for expenses accounting using Redux</h1>
      <div>
        <Link to="/add">
          <button>Add</button>
        </Link>
        <Link to="/list">
          <button>See List</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
