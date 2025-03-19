import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/index.js",
      exportName: "viteNodeApp",
    }),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        format: "es",
      },
    },
  },
  server: {
    host: true,
    port: process.env.PORT || 3000,
    strictPort: true,
  },
  preview: {
    allowedHosts: ["sgdapi-production.up.railway.app"],
  },
});
