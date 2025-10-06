// vite.config.ts (at project root)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const r = (...p: string[]) => resolve(__dirname, ...p);

export default defineConfig({
  // your React app lives in /client
  root: r("client"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": r("client", "src"),
      "@shared": r("shared"),
      "@assets": r("attached_assets"),
    },
  },
  // MUST match your repo name on Pages
  base: "/StudentProfile/",
  build: {
    outDir: r("dist"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    fs: { strict: true, deny: ["**/.*"] },
  },
});
