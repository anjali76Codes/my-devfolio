import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Clean config for Vercel (no Replit plugin needed)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Vercel will use this folder
  },
});
