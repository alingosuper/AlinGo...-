document.addEventListener("DOMContentLoaded", function () {

  // Leaflet Map
  const map = L.map('map').setView([30.3753, 69.3451], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

});

// Sidebar
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}
