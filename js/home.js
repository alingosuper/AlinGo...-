document.addEventListener("DOMContentLoaded", function () {

  // Map initialize (never blank)
  const map = L.map('map').setView([30.3753, 69.3451], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Safe driver loader
  function addDrivers(lat, lng) {

    // User marker
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup("You are here 📍");

    // Nearby drivers
    for (let i = 1; i <= 5; i++) {

      const randomLat = lat + (Math.random() - 0.5) / 400;
      const randomLng = lng + (Math.random() - 0.5) / 400;

      L.circleMarker([randomLat, randomLng], {
        radius: 8,
        color: "#22c55e",
        fillColor: "#22c55e",
        fillOpacity: 0.8
      })
      .addTo(map)
      .bindPopup("🚕 Driver " + i + "<br>⭐ 4." + i);
    }
  }

  // Try geolocation (safe fallback)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        map.setView([lat, lng], 14);
        addDrivers(lat, lng);
      },
      function() {
        addDrivers(30.3753, 69.3451);
      }
    );
  } else {
    addDrivers(30.3753, 69.3451);
  }

});

// Sidebar toggle (independent, never breaks map)
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}
