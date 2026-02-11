document.addEventListener("DOMContentLoaded", function () {

  // ===== Map initialize (never blank) =====
  const map = L.map('map').setView([30.3753, 69.3451], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let userLat = 30.3753, userLng = 69.3451;
  let driverMarkers = [];

  // ===== Add Drivers Function =====
  function addDrivers(lat, lng) {
    // User marker
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup("You are here 📍");

    // Nearby drivers
    for (let i = 1; i <= 5; i++) {
      const randomLat = lat + (Math.random() - 0.5) / 400;
      const randomLng = lng + (Math.random() - 0.5) / 400;

      const marker = L.circleMarker([randomLat, randomLng], {
        radius: 8,
        color: "#22c55e",
        fillColor: "#22c55e",
        fillOpacity: 0.8
      }).addTo(map)
        .bindPopup("🚕 Driver " + i + "<br>⭐ 4." + i);

      driverMarkers.push({
        marker,
        lat: randomLat,
        lng: randomLng,
        deltaLat: (Math.random() - 0.5) / 5000,  // small random movement
        deltaLng: (Math.random() - 0.5) / 5000
      });
    }

    // Start driver movement animation
    animateDrivers();
  }

  // ===== Animate Drivers =====
  function animateDrivers() {
    setInterval(() => {
      driverMarkers.forEach(driver => {
        driver.lat += driver.deltaLat;
        driver.lng += driver.deltaLng;
        driver.marker.setLatLng([driver.lat, driver.lng]);
      });
    }, 1000); // move every 1 second
  }

  // ===== Geolocation =====
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        userLat = position.coords.latitude;
        userLng = position.coords.longitude;
        map.setView([userLat, userLng], 14);
        addDrivers(userLat, userLng);
      },
      function() {
        addDrivers(userLat, userLng);
      }
    );
  } else {
    addDrivers(userLat, userLng);
  }

  // ===== Ride Panel Logic =====
  // Create Ride Panel dynamically if not exists
  let ridePanel = document.getElementById("ride-panel");
  if(!ridePanel){
    ridePanel = document.createElement("div");
    ridePanel.id = "ride-panel";
    ridePanel.className = "ride-panel hidden";
    ridePanel.innerHTML = `
      <h3>Request a Ride</h3>
      <p id="ride-info">Select a nearby driver</p>
      <button id="request-ride-btn">Request Ride</button>
      <button id="close-ride-panel">Close</button>
    `;
    document.body.appendChild(ridePanel);
  }

  const rideInfo = document.getElementById("ride-info");
  const requestBtn = document.getElementById("request-ride-btn");
  const closeBtn = document.getElementById("close-ride-panel");

  // Open panel when Ride service clicked
  document.querySelectorAll(".service").forEach(item => {
    item.addEventListener("click", () => {
      if(item.innerText.includes("Ride")) {
        ridePanel.classList.remove("hidden");
        rideInfo.textContent = "Select a nearby driver and request your ride.";
      }
    });
  });

  // Close panel
  closeBtn.addEventListener("click", () => {
    ridePanel.classList.add("hidden");
  });

  // Request Ride
  requestBtn.addEventListener("click", () => {
    if(driverMarkers.length === 0){
      rideInfo.textContent = "No drivers nearby!";
      return;
    }

    // Randomly pick a driver
    const driver = driverMarkers[Math.floor(Math.random() * driverMarkers.length)];
    driver.marker.bindPopup("🚕 Your ride is coming! ETA 5 min").openPopup();
    rideInfo.textContent = "Ride requested! Driver on the way 🚖";

    // Update status
    setTimeout(() => {
      rideInfo.textContent = "Driver is arriving...";
    }, 5000);

    setTimeout(() => {
      rideInfo.textContent = "Driver has arrived! Enjoy your ride 🎉";
    }, 10000);
  });

});

// ===== Sidebar toggle (independent, never breaks map) =====
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}
