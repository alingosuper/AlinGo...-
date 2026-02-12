import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RideTracking from "./screens/RideTracking";
import WeatherDetail from "./screens/WeatherDetail";
import SportsLive from "./screens/SportsLive";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/ride" element={<RideTracking />} />
        <Route path="/weather" element={<WeatherDetail />} />
        <Route path="/sports" element={<SportsLive />} />
      </Routes>
    </div>
  );
}

export default App;
