import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'


export default [
  {
    input: ['src/index.ts', 'src/index.ts'],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        preserveModules: true,
      },
    ],
    plugins: [
      external(),
      typescript(),
    ],
  },
]
