export function renderWeatherCard(data) {
  return `
    <div style="
      border:1px solid #00ff66;
      padding:20px;
      margin-top:20px;
    ">
      <h3>${data.city}</h3>
      <p>Temperature: ${data.temp}°C</p>
      <p>Condition: ${data.condition}</p>
    </div>
  `;
}
