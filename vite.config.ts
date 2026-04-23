import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "./src",
  build: {
    rolldownOptions: {
      input: {
        index: "src/index.html",
        viewer: "src/viewer.html",
      },
    },
  },
});
