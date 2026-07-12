Update the CV. Requested change: $ARGUMENTS

Follow this exactly:

1. Edit `src/data/cv.ts` — it is the single source of truth for /cv. Match the
   existing structure: `when` uses en-dash ranges ('2024–Present'), bullets are
   outcomes and decisions rather than duties, typographic apostrophes (’) in
   strings, British spelling.

2. **Never invent facts.** Only include what the user stated or what is already
   in the file. If a date, title, or claim is missing or ambiguous, ask.

3. Keep it scannable: max ~4 bullets per role, one line each where possible.

4. `npm run build` to verify, then show the user exactly what changed (before →
   after). Ask: ship it? On yes: commit, push, and confirm /cv is live and that
   the print layout still holds (check the @media print rules if the change
   touched structure).
