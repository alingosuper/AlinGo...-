import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function RideTracking() {
  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={[31.5204, 74.3587]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[31.5204, 74.3587]}>
          <Popup>AlinGo Ride Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default RideTracking;
