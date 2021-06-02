import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { external } from './rollup.config.external';
import * as path from 'path';

const packageJson = require('./package.json');

const root = path.join(__dirname, '../../');
const input = path.join(__dirname, 'src/index.ts');
export default [
  // CommonJS
  {
    external,
    input,
    output: {
      dir: path.join(root, `dist/components`),
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: path.join(__dirname, './tsconfig.lib.json'),
        outDir: path.join(root, 'dist/components'),
        declaration: true,
        composite: false,
        declarationDir: path.join(root, 'dist/components/types'),
      }),
      postcss(),
    ],
  },
  // ES
  {
    external,
    input,
    output: {
      file: path.join(`dist/components/esm/index.js`),
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: path.join(__dirname, './tsconfig.lib.json'),
        outDir: path.join(root, 'dist/components/esm'),
        declaration: false,
        composite: false,
      }),
      postcss(),
    ],
  },
];
