import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'platform',
      filename: 'remoteEntry.js',
      remotes: {
        main_layout: 'http://localhost:5000/assets/remoteEntry.js',
      },
      exposes: {
        './Button': './src/components/Button.jsx',
        './TemplatesList': './src/pages/TemplatesList.jsx',
        './TemplateEditor': './src/pages/TemplateEditor.jsx',
        './YourDesigns': './src/pages/YourDesigns.jsx',
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
