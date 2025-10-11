import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  minify: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  // Inject CSS into the bundle
  injectStyle: true,
});
