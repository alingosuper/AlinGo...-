export function initRideMap() {
  const map = L.map("map").setView([31.5204, 74.3587], 13);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  ).addTo(map);

  L.marker([31.5204, 74.3587])
    .addTo(map)
    .bindPopup("AlinGo Ride Location")
    .openPopup();
}
