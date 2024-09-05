
## 🚧 Project Structure

```
/
├── public/
│   └── CNAME
│   └── favicon.svg
│   └── banana_favicon.svg      (self-explanatory)
├── src/
│   └── pages/
│       └── about.astro
│       └── works/
│           └── .md files
│       └── notes/              (symbolic link to notes repo written in Obsidian)
│       └── index.astro
│       └── links.astro
│       └── notes.astro         (WIP)
│       └── 404.astro
│   └── components/             (React components + Astro islands)
│   └── data/                   (static data of works and global store for tags)
│   └── layouts/                (for sidebar and articles)
│   └── styles/ 
└── package.json
```

Project pages in `src/pages/works` are written in `.md` files, and each page is exposed as a route based on its filename.

`src/components/` contains miscellaneous React/Astro components.

All assets, compressed and converted to `.webp` format wherever possible, are hosted on an S3 bucket.
