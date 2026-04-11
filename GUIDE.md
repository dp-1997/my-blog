# anyone-can-cook — Site Guide

Everything you need to know about your blog, how to maintain it, and how to work with Claude going forward.

---

## What we built

A personal blog and portfolio site built with:

- **Astro 6** — the framework that generates the site
- **MDX** — lets you write blog posts in plain text with occasional rich embeds (images, video)
- **Lora** (Google Fonts) — the serif typeface
- **One CSS file** — all the styling lives in `src/styles/global.css`
- **Vercel** — hosts the live site, redeploys automatically on every git push
- **GitHub** (`github.com/dp-1997/my-blog`) — stores the code, triggers deploys

The site is fully static — no server, no database, nothing to hack.

---

## File structure

```
my-blog/
├── src/
│   ├── content/
│   │   └── posts/
│   │       └── hello-world/        ← one folder per post
│   │           ├── index.mdx       ← the post itself
│   │           └── anton-ego.jpg   ← images live here
│   ├── layouts/
│   │   └── Base.astro              ← site header, footer, fonts
│   ├── pages/
│   │   ├── index.astro             ← homepage (post list)
│   │   └── posts/[slug].astro      ← individual post page
│   └── styles/
│       └── global.css              ← all visual styling
├── public/
│   └── favicon.svg                 ← site favicon
└── astro.config.mjs                ← Astro configuration
```

---

## Adding a new blog post

1. Create a new folder inside `src/content/posts/` — the folder name becomes the URL slug
2. Create `index.mdx` inside that folder
3. Add the frontmatter at the top, then write your post below

**Minimum template:**

```mdx
---
title: Your Post Title
date: 2026-05-01
---

Your writing goes here.
```

**Full template (with all optional fields):**

```mdx
---
title: Your Post Title
date: 2026-05-01
location: London, UK
tags: [design, product]
---
import { Image } from 'astro:assets';
import photo from './your-photo.jpg';

Your writing goes here.

<Image src={photo} alt="Describe the image" />

More writing.
```

**The URL will be:** `anyone-can-cook.com/posts/your-folder-name`

---

## Publishing a new post

Once you've written and saved the post, run these three lines in Terminal from the project folder:

```bash
cd ~/Projects/my-blog
git add -A
git commit -m "new post: your title here"
git push
```

Vercel picks it up automatically. Live in ~30 seconds.

---

## Changing the favicon

Replace the file at `public/favicon.svg` with your own SVG icon. Keep it square, keep it simple. If you want a `.png` or `.ico` instead, update the `<link>` tag in `src/layouts/Base.astro` line 16.

---

## Changing your name / site title

Open `src/layouts/Base.astro`. Line 25 has `Damian Pickett` — that's the header link. Line 19 controls the browser tab title on the homepage (currently `Damian Pickett`).

---

## Changing the domain on Vercel

1. Go to your project on vercel.com → **Domains**
2. Click **Add Existing** and type `anyone-can-cook.com`
3. Vercel will give you DNS records to add at your domain registrar
4. Once added, it goes live automatically (usually within an hour)

---

## Changing the social links

Open `src/layouts/Base.astro`. Lines 49 and 55 have your X and LinkedIn URLs. Update them there. The same links appear in your Hello World post at `src/content/posts/hello-world/index.mdx` at the bottom — update those too.

---

## Changing fonts or colours

Everything visual is in `src/styles/global.css`. The key variables are at the top:

```css
:root {
  --bg:     #F5F0E8;   /* background — the warm beige */
  --fg:     #1C1917;   /* text colour */
  --muted:  #78716C;   /* secondary text, dates */
  --accent: #C4715A;   /* terracotta — used in blockquotes and illustration */
  --border: #E4DDD4;   /* subtle divider lines */
}
```

The font is loaded in `src/layouts/Base.astro` line 21. To change it, swap `Lora` for any other Google Font.

---

## Working with Claude going forward

### New session or same session?

**Start a new session each time** — it's cleaner. Claude Code has a memory system set up for this project, so a new session will already know the stack, file structure, and your preferences. You don't need to re-explain anything.

### Writing in Notion or Apple Notes

This workflow works perfectly:

1. Write your post in Notion or Apple Notes as plain text
2. Open Claude Code in the `my-blog` folder
3. Paste your text and say something like:
   > "Turn this into a new post called `my-post-title`. Date is today, location is London."
4. Claude creates the file, formats the MDX, and you review it
5. When happy: `git add -A && git commit -m "new post" && git push`

### What to tell Claude in a new session

You don't need to explain the whole setup. Just say things like:
- *"Add a new post called X with this content: [paste]"*
- *"Change the background colour to..."*
- *"The blockquote styling feels too heavy, can we try..."*
- *"Add an image to the hello-world post"*

### Using Claude Code to edit

Yes — Claude Code is exactly the right tool for this. It reads your files, edits them directly, runs the build to check for errors, and can preview changes. Think of it as a developer you can talk to in plain English.

---

## Quick reference — things you'll do often

| Task | What to do |
|------|-----------|
| New blog post | Create `src/content/posts/slug/index.mdx` |
| Publish changes | `git add -A && git commit -m "message" && git push` |
| Change favicon | Replace `public/favicon.svg` |
| Change colours | Edit `:root` variables in `src/styles/global.css` |
| Change social links | Edit `src/layouts/Base.astro` lines 49 + 55 |
| Preview locally | `npm run dev` → open `http://localhost:4321` |
| Check for errors | `npm run build` |

---

## If something breaks

Tell Claude exactly what you see — paste the error message. Everything is version-controlled in git, so nothing is ever permanently broken. The worst case is reverting to the last working commit, which takes one command.
