Add a new work entry (case study, build, or experiment) to the site. Input: $ARGUMENTS

Follow this exactly:

1. **Get the material.** Pasted notes, a description, or an Apple Note reference
   (read it with the Apple Notes tools). If nothing was provided, ask and stop.

2. **Create** `src/content/work/<slug>/index.mdx`. Folder name = URL slug. Frontmatter:

   ```mdx
   ---
   title: The idea, not the deliverable
   date: <completion date>
   kind: case-study        # case-study | build | experiment
   kicker: Company · What it was · Year
   summary: One sentence — what happened and why it mattered.
   dek: The italic line under the title.
   featured: false         # true = homepage; ask if unclear
   order: 99               # homepage position; 1 = full-width lead
   role: What Damian did
   timeframe: 'Q_ 20__'
   company: Who for
   status: Live / Shipped / Ongoing
   ---
   ```

   Body structure: `## The problem`, `## The decision`, `## What I made`,
   `## The outcome`, `## Reflection`. Concise — outcomes over adjectives.

3. **Confidentiality check (non-negotiable).** For employer work, include only
   what is publicly verifiable. No internal numbers, pipeline or revenue figures,
   customer or prospect names, competitor pricing, or contract intelligence. No
   disparaging comparatives about identifiable competitors. If the material
   contains any of these, exclude it and tell the user what you left out and why.

4. **Verify.** `npm run build`, fix errors, confirm the page in dist/.

5. **Show** title, kicker, summary, URL, and whether it's featured. Ask: ship it?
   On yes: commit, push, poll the live URL until 200, confirm with a link.
