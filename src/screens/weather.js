import { navigate } from "../navigation.js";
import { loadHome } from "./home.js";

export function loadWeather() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <button id="backBtn">← Back</button>
    <div style="padding:40px">
      <h2>Weather Details</h2>
      <p>Weather API Ready</p>
    </div>
  `;

  document.getElementById("backBtn").onclick = () => navigate(loadHome);
}
