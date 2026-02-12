import { auth, db } from "./firebase-config.js";
import { doc, getDoc, updateDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {

  // ===== Map Initialize =====
  const map = L.map('map').setView([30.3753, 69.3451], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let userLat = 30.3753, userLng = 69.3451;
  let driverMarkers = [];

  function addDrivers(lat, lng) {

    L.marker([lat, lng]).addTo(map).bindPopup("You are here 📍");

    for (let i = 1; i <= 5; i++) {

      const randomLat = lat + (Math.random() - 0.5) / 400;
      const randomLng = lng + (Math.random() - 0.5) / 400;

      const marker = L.circleMarker([randomLat, randomLng], {
        radius: 8,
        color: "#22c55e",
        fillColor: "#22c55e",
        fillOpacity: 0.8
      })
      .addTo(map)
      .bindPopup("🚕 Driver " + i + "<br>⭐ 4." + i);

      driverMarkers.push(marker);
    }
  }

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

  // ===== Ride Panel =====
  const ridePanel = document.getElementById("ride-panel");
  const rideInfo = document.getElementById("ride-info");
  const requestBtn = document.getElementById("request-ride-btn");
  const closeBtn = document.getElementById("close-ride-panel");

  document.querySelectorAll(".service").forEach(item => {
    item.addEventListener("click", () => {
      if (item.innerText.includes("Ride")) {
        ridePanel.classList.remove("hidden");
        rideInfo.textContent = "Select a nearby driver and request your ride.";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    ridePanel.classList.add("hidden");
  });

  // ===== Ride Request With Wallet Check =====
  requestBtn.addEventListener("click", async () => {

    const user = auth.currentUser;

    if (!user) {
      alert("Please login first.");
      window.location.href = "login.html";
      return;
    }

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);
    let currentWallet = snap.data().wallet;

    if (currentWallet < 200) {
      rideInfo.textContent = "Insufficient wallet balance!";
      return;
    }

    if (driverMarkers.length === 0) {
      rideInfo.textContent = "No drivers nearby!";
      return;
    }

    const driver = driverMarkers[Math.floor(Math.random() * driverMarkers.length)];

    driver.bindPopup("🚕 Driver Assigned! ETA 5 min").openPopup();
    rideInfo.textContent = "Ride requested! Driver on the way 🚖";

    // Simulate arrival
    setTimeout(() => {
      rideInfo.textContent = "Driver has arrived.";
    }, 8000);

    // ===== Ride Complete & Deduct Wallet =====
    setTimeout(async () => {

      await updateDoc(userRef, {
        wallet: currentWallet - 200
      });

      rideInfo.textContent = "Ride Completed. ₨200 deducted";

    }, 15000);

  });

});

// Sidebar toggle (unchanged)
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}
