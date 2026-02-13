import { Link } from "react-router-dom";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function HomeScreen() {

  useEffect(() => {
    const map = L.map("homeMap", {
      zoomControl: false,
      attributionControl: false,
    }).setView([31.5204, 74.3587], 13);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    ).addTo(map);

    L.marker([31.5204, 74.3587]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div className="home-container">
      <h1>AlinGo</h1>
      <p>Ride • Food • Sports • Weather</p>

      <div className="map-preview">
        <div id="homeMap" style={{ height: "250px" }}></div>
      </div>

      <div className="button-grid">
        <Link to="/ride">
          <button className="neon-btn">🚗 Ride</button>
        </Link>

        <Link to="/food">
          <button className="neon-btn">🍔 Food</button>
        </Link>

        <Link to="/sports">
          <button className="neon-btn">⚽ Sports</button>
        </Link>

        <Link to="/weather">
          <button className="neon-btn">🌤 Weather</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
