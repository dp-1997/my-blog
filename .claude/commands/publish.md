Publish pending site changes. Context from the user (may be empty): $ARGUMENTS

1. Run `git status` and `git diff --stat` and summarise what's pending in one or
   two plain sentences.
2. Run `npm run build` — never push a failing build.
3. Commit with a descriptive message (never "session update") and push to main.
4. Vercel deploys automatically. Poll https://anyone-can-cook.com until the
   change is live (check a URL the change affects; new deploys usually land in
   under a minute).
5. Confirm to the user with the live URL(s) of what changed.
