# snail.id

Personal site for Matilda Snail, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves the built site
```

## Adding a project

Projects live in `src/content/projects/`, one markdown file each:

```md
---
title: Bird feeder camera
fig: 2                 # figure number, also sets the order
summary: One line for the card and page description.
draft: false           # true = card shows "Write-up coming", no page yet
cover: ./bird-feeder.jpg   # optional, image next to the .md file
coverAlt: The feeder on the balcony rail
---

The write-up, in markdown.
```

Published projects get a page at `/projects/<file-name>/`.
