Add a new piece of writing to the site. Input from the user: $ARGUMENTS

Follow this exactly:

1. **Get the content.** It may be pasted directly, described, or referenced as an
   Apple Note (e.g. "from my note called X") — if so, read it with the Apple Notes
   tools. If no content was provided at all, ask for it and stop.

2. **Decide essay or note.** Long-form argument → `src/content/essays/<slug>/index.mdx`.
   Short observation → `src/content/notes/<slug>/index.mdx`. If genuinely ambiguous, ask.

3. **Create the entry.** Folder name = URL slug (kebab-case, short). Frontmatter:

   ```mdx
   ---
   title: The Title
   date: <today>
   summary: One sentence that sells the piece — used as the dek and meta description.
   featured: false
   ---
   ```

   Preserve the author's voice — edit only for typos and obvious grammar slips,
   never rewrite. Use typographic apostrophes (’) and quotes (“ ”) in frontmatter
   strings. British spelling in anything you write yourself. Co-locate any images
   in the entry folder and use `astro:assets` Image imports.

4. **Verify.** Run `npm run build`. Fix any errors. Confirm the page renders by
   checking the built HTML in dist/.

5. **Show the user** the title, slug, summary, and URL, then ask one question:
   ship it? On yes: `git add -A && git commit && git push`, then poll the live
   URL until it returns 200 and confirm with a link.
