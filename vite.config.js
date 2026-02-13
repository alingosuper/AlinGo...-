import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sports: resolve(__dirname, 'src/screens/SportsLive.html'),
        ride: resolve(__dirname, 'src/screens/RideTracking.html'),
        weather: resolve(__dirname, 'src/screens/Weather.html'),
        profile: resolve(__dirname, 'src/screens/Profile.html'),
      },
    },
  },
});
