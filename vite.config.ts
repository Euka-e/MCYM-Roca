import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api/youtube-feed": {
        target: "https://www.youtube.com",
        changeOrigin: true,
        rewrite: () => "/feeds/videos.xml?channel_id=UCRImVNCeV1WVWITFzCZovYQ",
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/public": path.resolve(__dirname, "./public"),
    },
  },
}));
