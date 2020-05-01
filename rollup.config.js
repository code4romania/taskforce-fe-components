import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
import image from "@rollup/plugin-image";
import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    image(),
    postcss({
      extract: true,
      minimize: true,
    }),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs(),
  ],
  external: ["react", "react-dom", "prop-types"],
};
