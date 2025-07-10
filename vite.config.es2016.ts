import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Flowy',
      formats: ['es', 'cjs'],
      fileName: (format) => `flowy.${format}.js`,
    },
    target: 'es2016',
    outDir: 'dist/es2016',
  },
})
