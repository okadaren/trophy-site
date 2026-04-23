import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    rolldownOptions: {
      input: {
        index: "index.html",
        viewer: "viewer.html",
      },
    },
    outDir: "../dist",
  },
});
