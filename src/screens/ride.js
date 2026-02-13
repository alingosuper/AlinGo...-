import { navigate } from "../navigation.js";
import { loadHome } from "./home.js";
import { initRideMap } from "../components/RideMap.js";

export function loadRide() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <button id="backBtn">← Back</button>
    <div id="map" style="height:90vh;"></div>
  `;

  document.getElementById("backBtn").onclick = () => navigate(loadHome);

  initRideMap();
}
