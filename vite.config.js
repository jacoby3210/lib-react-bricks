import { defineConfig } from "vite";
import { viteConsolePro } from "vite-plugin-console-pro";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.jsX"),
      name: "BRICKS",
      fileName: (format) => `BRICKS.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), viteConsolePro({ exclude: ["node_modules"] })],
});
