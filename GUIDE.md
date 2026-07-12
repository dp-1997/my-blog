# anyone-can-cook — Site Guide

How the site works, how to change it, and how to work with Claude on it.

---

## What this is

The personal site of Damian Pickett: homepage, Work, Writing, About, and a web CV.

- **Astro 6** — static site generator; the whole site is prebuilt HTML
- **MDX** — writing format for essays, notes, and work entries
- **Newsreader + JetBrains Mono** — the two typefaces; serif for voice, mono for structure
- **One CSS file** — all styling lives in `src/styles/global.css`
- **Vercel** — hosting; redeploys automatically on every git push
- **GitHub** — source control; pushing to `main` deploys

---

## File structure

```
my-blog/
├── src/
│   ├── content/
│   │   ├── essays/<slug>/index.mdx    ← long-form writing
│   │   ├── notes/<slug>/index.mdx     ← short-form writing
│   │   └── work/<slug>/index.mdx      ← case studies, builds, experiments
│   ├── data/
│   │   └── cv.ts                      ← the CV's single source of truth
│   ├── layouts/
│   │   ├── Base.astro                 ← header, nav, footer, metadata
│   │   └── WritingPost.astro          ← essay/note article template
│   ├── components/
│   │   ├── Mark.astro                 ← the rising-thoughts mark
│   │   ├── PostToc.astro              ← table of contents on articles
│   │   └── LiquidGlassDemo.astro      ← the WebGL experiment
│   ├── pages/                         ← one file per route
│   └── styles/global.css              ← the entire design system
├── public/                            ← favicon, og-image, robots.txt
├── vercel.json                        ← redirects (old /projects/* URLs)
└── astro.config.mjs                   ← site URL, MDX, sitemap
```

**The folder name is the URL slug.** `src/content/work/my-project/index.mdx`
becomes `anyone-can-cook.com/work/my-project`. Images live next to the
`index.mdx` that uses them.

---

## Adding content

Tell Claude what you want — it knows these conventions. Or by hand:

### A new essay or note

Create `src/content/essays/<slug>/index.mdx` (or `notes/`):

```mdx
---
title: The Title
date: 2026-08-01
summary: One sentence that sells the piece. Used as the dek and meta description.
featured: false        # true = surfaces on the homepage
---

Your writing.
```

### A new work entry

Create `src/content/work/<slug>/index.mdx`:

```mdx
---
title: The idea, not the deliverable
date: 2026-08-01
kind: case-study       # case-study | build | experiment
kicker: Company · What it was · Year
summary: One sentence — what happened and why it mattered.
dek: The italic line under the title.
featured: true         # true = appears on the homepage
order: 4               # homepage/index position; lower = earlier
role: What you did
timeframe: 'Q3 2026'
company: Who for
status: Live
---

## The problem
## The decision
## What I made
## The outcome
## Reflection
```

The homepage shows featured work in `order` sequence: the first entry gets
the full-width lead treatment, the rest sit in the two-column row.

### Updating the CV

Edit `src/data/cv.ts` — experience, capabilities, education, selected links.
The `/cv` page renders from it and prints cleanly (the Print button uses
print CSS; no PDF file to maintain).

### Homepage copy

The masthead, experience summary, and closing are written directly in
`src/pages/index.astro`.

---

## Publishing

```bash
git add -A
git commit -m "describe the change"
git push
```

Vercel deploys in about 30 seconds.

---

## The design system

Everything visual is variables at the top of `src/styles/global.css`:

```css
--paper   #F6F1E7   /* background */
--ink     #201B15   /* text */
--muted   #6B6055   /* secondary text */
--accent  #A34A2A   /* terracotta — links, markers, emphasis */
--rule    #E0D6C4   /* hairlines */
--wash    #EDE5D5   /* code backgrounds */
```

Dark theme variants live in the `[data-theme="dark"]` block. All colour
pairs are WCAG AA verified — if you change one, re-check contrast.

Conventions worth protecting:

- Serif (Newsreader) carries voice; mono (JetBrains Mono) carries structure —
  labels, kickers, dates, nav.
- Hairline rules separate; heavy 2px rules open and close the page.
- Typographic apostrophes (’) in template copy — MDX body text gets them
  automatically, `.astro` files and frontmatter do not.
- No cards, no gradients, no glassmorphism. Composition over decoration.

---

## Working with Claude

Start a fresh session in this folder and say what you want:

- *"Add a new essay called X — here's the draft: [paste]"*
- *"Add the [project] case study to Work, featured, order 2"*
- *"Update the CV — I've changed roles"*
- *"The blockquotes feel heavy — try something lighter"*

Claude reads the conventions from this file and the code, makes the change,
builds to verify, and can commit and push when you're happy.

If something breaks: paste the error. Everything is in git; the worst case
is reverting one commit.
