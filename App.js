import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import RideTracking from "./src/screens/RideTracking";
import WeatherDetail from "./src/screens/WeatherDetail";
import SportsLive from "./src/screens/SportsLive";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          background: "#000000",
          card: "#000000",
          text: "#ff0000",
          border: "#ff0000",
          primary: "#ff0000",
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#ff0000",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RideTracking" component={RideTracking} />
        <Stack.Screen name="WeatherDetail" component={WeatherDetail} />
        <Stack.Screen name="SportsLive" component={SportsLive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
