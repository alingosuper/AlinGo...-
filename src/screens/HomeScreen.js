import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div style={{ padding: 40 }}>
      <h1>AlinGo Super App</h1>

      <Link to="/ride"><button>Ride Tracking</button></Link>
      <br /><br />
      <Link to="/weather"><button>Weather</button></Link>
      <br /><br />
      <Link to="/sports"><button>Sports Live</button></Link>
    </div>
  );
}

export default HomeScreen;
