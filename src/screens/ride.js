import { navigate } from "../navigation.js";
import { loadHome } from "./home.js";

export function loadRide() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <button id="backBtn">← Back</button>
    <div id="map" style="height:90vh;"></div>
  `;

  document.getElementById("backBtn").onclick = () => navigate(loadHome);

  const map = L.map("map").setView([31.5204, 74.3587], 13);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  ).addTo(map);

  L.marker([31.5204, 74.3587])
    .addTo(map)
    .bindPopup("AlinGo Ride Location")
    .openPopup();
}
