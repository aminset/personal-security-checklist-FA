import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from 'vite-plugin-static-copy'

const normalizeBase = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) return '/';
  const withLeading = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
};

export default defineConfig((): UserConfig => {
  const base = normalizeBase(process.env.PUBLIC_BASE_PATH || '/');

  return {
    base,
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      viteStaticCopy({
        targets: [
          {
            src: '../personal-security-checklist.yml',
            dest: 'public'
          }
        ]
      })
    ],
    server: {
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
