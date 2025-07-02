import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use a synchronous configuration pattern
const isDev = process.env.NODE_ENV !== 'production';

// Create plugins array
const plugins = [
  react(),
  runtimeErrorOverlay()
];

// Only include development plugins in development
if (isDev && process.env.REPL_ID) {
  // Use dynamic import with then() to avoid top-level await
  import("@replit/vite-plugin-cartographer").then(module => {
    plugins.push(module.cartographer());
  }).catch(err => {
    console.warn("Could not load @replit/vite-plugin-cartographer:", err);
  });
}

export default defineConfig({
  // Base public path when served in development or production
  base: isDev ? '/' : '/',
  
  plugins,
  
  // Development server specific configuration
  server: {
    // Enable listening on all network interfaces
    host: true,
    // Enable CORS for development
    cors: true,
    // Enable strict port checking
    strictPort: true,
    // Allow all hosts (more permissive for development)
    allowedHosts: [
      'exciteservices.ca',
      'www.exciteservices.ca',],
    // Configure HMR
    hmr: isDev ? {
      protocol: 'ws',
      host: 'localhost',
      port: 24678
    } : undefined
  },
  // Resolve configuration
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'client/src') },
      { find: '@shared', replacement: path.resolve(__dirname, 'shared') },
      { find: '@assets', replacement: path.resolve(__dirname, 'attached_assets') },
    ],
  },
  
  // Root directory that contains the source files
  root: path.resolve(__dirname, 'client'),
  
  // Build configuration
  build: {
    // Output directory for the build
    outDir: path.resolve(__dirname, 'dist/public'),
    // Empty the output directory before building
    emptyOutDir: true,
    // Generate source maps for better debugging
    sourcemap: isDev,
    // Minify the output in production
    minify: !isDev ? 'esbuild' : false,
    // Configure rollup options
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'client/index.html'),
      },
    },
  },
  
  // Optimize dependencies configuration
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  
  // Configure the development server
  preview: {
    port: 3000,
    open: true
  }
});
