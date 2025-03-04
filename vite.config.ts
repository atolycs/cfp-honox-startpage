import build from "@hono/vite-build/cloudflare-workers";
import ssg from "@hono/vite-ssg";
import adapter from "@hono/vite-dev-server/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig({
  plugins: [
    honox({
      devServer: { adapter },
      client: { input: ["./app/style.css"] },
    }),
    tailwindcss(),
    build(),
    ssg({ entry }),
  ],
});
