import React from "react";
import { WebView } from "react-native-webview";

export default function RideMap() {
  const leafletHTML = `
  <!DOCTYPE html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
  <style>
    body { margin:0; background:black; }
    #map { height:100vh; filter: invert(90%) hue-rotate(80deg) brightness(0.7); }
  </style>
  </head>
  <body>
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script>
    var map = L.map('map').setView([31.5204, 74.3587], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map);

    L.circle([31.5204, 74.3587], {
      color: '#39FF14',
      fillColor: '#39FF14',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map);
  </script>
  </body>
  </html>
  `;

  return <WebView originWhitelist={["*"]} source={{ html: leafletHTML }} />;
}
