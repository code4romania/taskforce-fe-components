import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import image from "@rollup/plugin-image";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    image(),
    postcss({
      extract: true,
      minimize: true
    }),
    babel({
      runtimeHelpers: true
    })
  ],
  external: ["react", "react-dom", "prop-types"]
};
