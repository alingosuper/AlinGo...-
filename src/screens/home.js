import { navigate } from "../navigation.js";
import { loadRide } from "./ride.js";
import { loadWeather } from "./weather.js";
import { loadSports } from "./sports.js";

export function loadHome() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div style="padding:40px">
      <h1>AlinGo Super App</h1>
      <button id="rideBtn">Ride Tracking</button><br/>
      <button id="weatherBtn">Weather</button><br/>
      <button id="sportsBtn">Sports Live</button>
    </div>
  `;

  document.getElementById("rideBtn").onclick = () => navigate(loadRide);
  document.getElementById("weatherBtn").onclick = () => navigate(loadWeather);
  document.getElementById("sportsBtn").onclick = () => navigate(loadSports);
}
