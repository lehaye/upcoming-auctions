import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works from a GitHub Pages project path
  // (https://<user>.github.io/<repo>/) without hardcoding the repo name.
  base: "./",
});
