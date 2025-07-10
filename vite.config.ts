import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Flowy',
      formats: ['es'],
      fileName: (format) => `flowy.${format}.js`,
    },
    target: 'es2022',
    outDir: 'dist/es2022',
  },
})
