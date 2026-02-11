document.addEventListener("DOMContentLoaded", function () {

  // ===== Initialize Map =====
  const map = L.map('map').setView([30.3753, 69.3451], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  // ===== Custom Driver Icon =====
  const driverIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  });

  // ===== Get User Location =====
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(position => {

      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      map.setView([userLat, userLng], 14);

      // User Marker
      L.marker([userLat, userLng])
        .addTo(map)
        .bindPopup("You are here 📍")
        .openPopup();

      // ===== Generate Nearby Drivers =====
      for (let i = 1; i <= 5; i++) {

        const randomLat = userLat + (Math.random() - 0.5) / 500;
        const randomLng = userLng + (Math.random() - 0.5) / 500;

        L.marker([randomLat, randomLng], { icon: driverIcon })
          .addTo(map)
          .bindPopup(`
            🚕 <b>Driver ${i}</b><br>
            ⭐ Rating: ${(4 + Math.random()).toFixed(1)}<br>
            📍 Nearby
          `);
      }

    }, () => {
      alert("Location permission denied.");
    });

  }

});

// ===== Sidebar Toggle =====
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}
