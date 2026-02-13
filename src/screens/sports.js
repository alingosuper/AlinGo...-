import { navigate } from "../navigation.js";
import { loadHome } from "./home.js";
import { renderSportsScore } from "../components/SportsScore.js";

export function loadSports() {
  const app = document.getElementById("app");

  const demoData = {
    match: "PSL 2026",
    teamA: "Lahore Qalandars",
    teamB: "Karachi Kings",
    score: "150/3 - 18 Overs"
  };

  app.innerHTML = `
    <button id="backBtn">← Back</button>
    <div style="padding:40px">
      <h2>Live Sports</h2>
      ${renderSportsScore(demoData)}
    </div>
  `;

  document.getElementById("backBtn").onclick = () => navigate(loadHome);
}
