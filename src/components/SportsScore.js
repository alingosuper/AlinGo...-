export function renderSportsScore(data) {
  return `
    <div style="
      border:1px solid #00ff66;
      padding:20px;
      margin-top:20px;
    ">
      <h3>${data.match}</h3>
      <p>${data.teamA} vs ${data.teamB}</p>
      <p>Score: ${data.score}</p>
    </div>
  `;
}
