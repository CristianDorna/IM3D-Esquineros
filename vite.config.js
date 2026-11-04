import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrganizationSite = repositoryName?.endsWith(".github.io");
const base = process.env.GITHUB_ACTIONS
  ? isUserOrOrganizationSite
    ? "/"
    : `/${repositoryName}/`
  : "/";

export default defineConfig({
  base,
  plugins: [react()],
});
