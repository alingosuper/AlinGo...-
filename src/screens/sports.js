import { navigate } from "../navigation.js";
import { loadHome } from "./home.js";

export function loadSports() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <button id="backBtn">← Back</button>
    <div style="padding:40px">
      <h2>Live Sports</h2>
      <p>Sports API Ready</p>
    </div>
  `;

  document.getElementById("backBtn").onclick = () => navigate(loadHome);
}
