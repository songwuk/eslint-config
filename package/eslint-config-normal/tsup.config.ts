import { defineConfig } from 'tsup'
export default defineConfig({
  entry: ['index.ts'],
  splitting: false,
  format: ['cjs', 'esm'],
  sourcemap: false,
  clean: true,
  bundle: true,
  outDir: 'dist',
  external: ['eslint','@typescript-eslint/utils'],
})
