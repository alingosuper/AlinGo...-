import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="card">
      <h1>AlinGo Super App</h1>
      <Link to="/ride"><button>Ride</button></Link>
      <Link to="/food"><button>Food</button></Link>
      <Link to="/sports"><button>Sports</button></Link>
      <Link to="/weather"><button>Weather</button></Link>
    </div>
  );
}

export default HomeScreen;
