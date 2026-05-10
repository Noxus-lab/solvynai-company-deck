import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  base: isGitHubPages ? "/solvynai-company-deck/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});