import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { version } from './package.json';

export default {
  input: 'src/utils.ts',
  output: {
    name: 'my_utils',
    file: `dist/@${version}/index.js`,
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
      },
    }),
    babel({
      extensions: [".js", ".ts"],
      exclude: "node_modules/**",
      babelHelpers: 'bundled'
    }),
    terser(),
  ],
};
