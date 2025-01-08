import { defineConfig } from "vite";
import { resolve } from "path";
import viteCompression from "vite-plugin-compression";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                "quill.imageUploader": resolve(__dirname, "src/dist.js"),
                demo: resolve(__dirname, "src/demo.js"),
            },
            output: {
                entryFileNames: "[name].min.js",
                dir: resolve(__dirname, "dist"),
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
        preprocessorOptions: {
            css: {
                additionalData: `@import "./src/styles.css";`, // Optional CSS pre-processing
            },
        },
    },
    server: {
        https: true, // Enable HTTPS for dev server
    },
});

