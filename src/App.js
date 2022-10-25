import "./App.css";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>What would you like to see?</h1>
      <nav>
        <Link to="/dogs" className="linksBoi">
          Cute Dogs
        </Link>
        <Link to="/cats" className="linksBoi">
          Cute Cats
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
