import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import requireTransform from "vite-plugin-require-transform";

export default defineConfig({
  //@ts-ignore
  plugins: [svgr(), react(), tsconfigPaths(), requireTransform({})],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#3392CE",
          "border-radius-base": "8px",
          "border-color-base": "#3392CE",
        },
        javascriptEnabled: true,
      },
    },
  },
});
