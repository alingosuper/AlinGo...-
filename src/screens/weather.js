import { navigate } from "../navigation.js";
import { loadHome } from "./home.js";
import { fetchWeather } from "../services/weatherService.js";
import { renderWeatherCard } from "../components/WeatherCard.js";

export async function loadWeather() {
  const app = document.getElementById("app");

  const data = await fetchWeather();

  app.innerHTML = `
    <button id="backBtn">← Back</button>
    <div style="padding:40px">
      <h2>Weather Details</h2>
      ${renderWeatherCard(data)}
    </div>
  `;

  document.getElementById("backBtn").onclick = () => navigate(loadHome);
}
