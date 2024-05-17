import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'platform',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
        './GraphicsList': './src/Pages/GraphicsList.jsx',
        './TemplateEditor': './src/Pages/TemplateEditor.jsx',
        './YourDesigns': './src/Pages/YourDesigns.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
