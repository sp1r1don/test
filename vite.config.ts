import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        controlPane: path.resolve(__dirname, './src/components/ControlPane/index.ce.ts'),
        counter: path.resolve(__dirname, './src/components/Counter/index.ce.ts'),
        metricsDisplay: path.resolve(__dirname, './src/components/MetricsDisplay/index.ce.ts'),
        localePicker: path.resolve(__dirname, './src/components/LocalePicker/index.ce.ts'),
        I18nHost: path.resolve(__dirname, './src/components/I18nHost/index.ce.ts'),
      },
      output: {
        format: 'es',
        dir: 'dist',
        entryFileNames: `[name].js`,
      },
    },
  },
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
});
