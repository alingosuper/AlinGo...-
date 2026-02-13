import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import RideTracking from "../screens/RideTracking";
import FoodDelivery from "../screens/FoodDelivery";
import SportsLive from "../screens/SportsLive";
import WeatherDetail from "../screens/WeatherDetail";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/ride" element={<RideTracking />} />
        <Route path="/food" element={<FoodDelivery />} />
        <Route path="/sports" element={<SportsLive />} />
        <Route path="/weather" element={<WeatherDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
