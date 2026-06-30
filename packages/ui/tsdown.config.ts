import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: "esm",
  dts: true,
  clean: true,
  sourcemap: true,
  outExtensions: () => ({ js: ".js" }),
  deps: {
    neverBundle: ["react", "react-dom"],
    skipNodeModulesBundle: true,
  },
});