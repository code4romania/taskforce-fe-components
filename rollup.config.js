import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

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
