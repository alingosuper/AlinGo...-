import React from 'react';
import RideMap from '../components/RideMap';
import WeatherCard from '../components/WeatherCard';
import SportsScore from '../components/SportsScore';
import '../global.css';

const HomeScreen = () => {
  return (
    <div className="app-container">
      {/* ٹاپ ہیڈر */}
      <header className="main-header">
        <div className="logo">AlinGo</div>
        <div className="profile-btn">👤</div>
      </header>

      {/* لائیو میپ سیکشن */}
      <section className="map-section neon-border">
        <RideMap />
      </section>

      {/* کارڈز گریڈ */}
      <div className="info-grid">
        <WeatherCard temperature="28°C" condition="Clear" />
        <SportsScore teamA="PAK" teamB="AUS" score="150/2" />
      </div>

      {/* بڑا ایکشن بٹن */}
      <button className="main-action-btn">
        START RIDE
      </button>

      {/* باٹم نیویگیشن */}
      <nav className="bottom-nav">
        <div className="nav-item active">🏠<span>Home</span></div>
        <div className="nav-item">🚗<span>Rides</span></div>
        <div className="nav-item">🏆<span>Sports</span></div>
        <div className="nav-item">👤<span>Profile</span></div>
      </nav>
    </div>
  );
};

export default HomeScreen;
