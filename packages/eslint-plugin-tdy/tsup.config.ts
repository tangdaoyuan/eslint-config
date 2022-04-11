import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  dts: true,
  sourcemap: 'inline',
  clean: true,
  format: ['cjs', 'esm'],
})
