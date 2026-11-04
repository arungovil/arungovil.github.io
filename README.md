# arungovil.github.io

Personal site built with [Astro](https://astro.build), pnpm and [Biome](https://biomejs.dev).

```sh
pnpm install
pnpm dev      # local server
pnpm build    # static site into dist/
pnpm check    # lint and format
```

Posts are Markdown in `src/content/posts/` (frontmatter in `src/content.config.ts`).

Pushes to `main` deploy to GitHub Pages through `.github/workflows/deploy.yml`. In the repo, set Settings > Pages > Source to **GitHub Actions**.
