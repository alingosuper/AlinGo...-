import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { WebView } from "react-native-webview";
import { lightningStyle } from "../utils/lightningBackground";

export default function HomeScreen({ navigation }) {
  const leafletHTML = `
  <!DOCTYPE html>
  <html>
  <head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <style>
  body { margin:0; }
  #map { height:100vh; }
  </style>
  </head>
  <body>
  <div id="map"></div>
  <script>
    var map = L.map('map').setView([24.8607, 67.0011], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);
  </script>
  </body>
  </html>
  `;

  return (
    <View style={lightningStyle.container}>
      
      {/* Lightning Effect Line */}
      <View style={lightningStyle.lightning} />

      {/* Profile Section */}
      <View style={styles.profileBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>Asif Awan</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <CustomButton title="🚗 Ride" onPress={() => navigation.navigate("RideTracking")} />
        <CustomButton title="🌤 Weather" onPress={() => navigation.navigate("WeatherDetail")} />
        <CustomButton title="🏏 Sports" onPress={() => navigation.navigate("SportsLive")} />
      </View>

      {/* Leaflet Map */}
      <View style={styles.mapContainer}>
        <WebView originWhitelist={['*']} source={{ html: leafletHTML }} />
      </View>

    </View>
  );
}

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileBox: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff0000",
  },
  profileText: {
    color: "#ff0000",
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ff0000",
    shadowColor: "#ff0000",
    shadowRadius: 10,
  },
  buttonText: {
    color: "#ff0000",
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ff0000",
    borderRadius: 10,
    overflow: "hidden",
  },
});
