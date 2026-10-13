<p align="center">
My personal NextJS webspace with Markdown blog
</p>
<h4 align="center">
<a href="https://arungovil.me/">https://arungovil.me</a>
</h4>

---

## Made with

- Next.js (static export)
- Tailwind CSS
- Markdown posts, highlighted at build time with highlight.js

## Running locally

```sh
yarn install
yarn dev
```

## Content

- Work: `content/Work.ts`
- Projects: `content/Projects.ts`
- Posts: Markdown files in `posts/` (put cover images in `public/img/posts/`)
- About: `components/About.tsx`

## Deploying

Pushes to `main` build and publish the site to GitHub Pages through
`.github/workflows/deploy.yml`.

- In the repo, set Settings > Pages > Source to **GitHub Actions**.
- The custom domain lives in `public/CNAME`. Point the domain's DNS at GitHub Pages.
- To build the static site locally, run `yarn export` (output goes to `out/`).
