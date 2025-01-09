import { defineConfig } from "vite";
import { resolve } from "path";
import viteCompression from "vite-plugin-compression";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                "quill.imageUploader": resolve(__dirname, "src/dist.js"),
                "quill.imageUploader.css": resolve(__dirname, "src/quill.imageUploader.css"),
                demo: resolve(__dirname, "src/demo.js"),
            },
            output: {
                entryFileNames: "[name].min.js",
                dir: resolve(__dirname, "dist"),
                assetFileNames: (assetInfo) => {
                    return "[name].[ext]";
                },
            },
            external: ["Quill"], // Mark Quill as an external dependency
            plugins: [
                terser({
                    compress: {
                        drop_console: false,
                    },
                    format: {
                        comments: "all",
                    },
                }),
            ],
        },
        sourcemap: true, // Enable sourcemaps in production
        minify: false, // Use rollup-plugin-terser for finer control
    },
    plugins: [
        viteCompression({
            ext: '.gz', // Compress files to .gz
            deleteOriginFile: false, // Ensure original files are not deleted
        }),
    ],
    css: {
        postcss: null, // Remove unnecessary postcss config
    },
    server: {
        https: true, // Enable HTTPS for dev server
    },
});

