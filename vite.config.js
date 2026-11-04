import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrganizationSite = repositoryName?.endsWith(".github.io");
const base = process.env.GITHUB_ACTIONS
  ? isUserOrOrganizationSite
    ? "/"
    : `/${repositoryName}/`
  : "/";

function pwaServiceWorker() {
  return {
    name: "im3d-pwa-service-worker",
    apply: "build",
    generateBundle(_, bundle) {
      const precacheUrls = [
        "./",
        "./index.html",
        "./manifest.webmanifest",
        "./icons/icon-192.png",
        "./icons/icon-512.png",
        "./icons/icon-512-maskable.png",
        ...Object.keys(bundle)
          .filter((fileName) => fileName !== "sw.js")
          .map((fileName) => `./${fileName}`),
      ];
      const uniquePrecacheUrls = [...new Set(precacheUrls)];
      const workerTemplate = readFileSync(
        new URL("./src/service-worker.js", import.meta.url),
        "utf8",
      );
      const cacheName = `im3d-app-${createHash("sha256")
        .update(workerTemplate)
        .update(JSON.stringify(uniquePrecacheUrls))
        .digest("hex")
        .slice(0, 12)}`;
      const serviceWorker = workerTemplate
        .replace("self.__CACHE_NAME__", JSON.stringify(cacheName))
        .replace(
          "self.__PRECACHE_URLS__",
          JSON.stringify(uniquePrecacheUrls),
        );

      this.emitFile({
        type: "asset",
        fileName: "sw.js",
        source: serviceWorker,
      });
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), pwaServiceWorker()],
});
