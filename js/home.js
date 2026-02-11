// Initialize Map
const map = L.map('map').setView([30.3753, 69.3451], 6); // Pakistan default

// OpenStreetMap Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Get User Live Location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    map.setView([lat, lon], 14);

    L.marker([lat, lon])
      .addTo(map)
      .bindPopup("You are here 📍")
      .openPopup();

  });
}

// Service Click Animation
document.querySelectorAll(".service").forEach(item => {
  item.addEventListener("click", () => {
    alert(item.innerText + " Module Coming Soon");
  });
});
