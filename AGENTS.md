# AGENTS.md — Documentation (VuePress site)

This repo is the **VuePress 2 (rc)** documentation site for LBRP software (Accowin, Belcofin, Finasset, Corporate/Cloud). It contains **Markdown content only** — no application code.

## Repository structure

| Path | Purpose |
|------|---------|
| `README.md` | Repo intro, Docker build/run instructions, contribution guidelines |
| `package.json` | VuePress project (`type: module`, vite bundler) |
| `docs/README.md` | **Site index** — language selection page (EN/NL/FR links) |
| `docs/.vuepress/config.js` | **VuePress config** — locales, navbar, full sidebar tree |
| `docs/EN/`, `docs/NL/`, `docs/FR/` | Content per language |

### Content layout per language

```
docs/<LANG>/
  README.md          language home page
  Desktop/           desktop app manuals (AccoWin, BelcoFin, Finasset, ...)
  Cloud/             cloud platform manuals + DevManuals
  Contracts/         contract pages
```

Structure is mirrored across languages where content exists (FR currently only has Cloud/DevManuals). Key sub-paths: `Desktop/UserManuals/<App>/<Topic>/`, `Cloud/DevManuals/<Topic>/`, `Cloud/DevManuals/Code/{Delphi,Curl,CSharp}/`.

## VuePress config (`docs/.vuepress/config.js`)

- Config file is **`config.js`** (ESM, `defineUserConfig`) — the root README mentions `config.ts`, but the actual file is `config.js`. Follow the existing file.
- Three locales: `/EN/`, `/NL/`, `/FR/` — each with `lang`, `selectLanguageName`, `title`, `description`, and its own **sidebar tree**.
- Root `/` locale only has the "Select your Language" sidebar.
- Theme: `@vuepress/theme-default` with vite bundler; navbar is shared (Home, Documentation links, Login).
- `docsRepo: 'lbrpsoftware/Documentation'`, `docsDir: 'docs'`, `docsBranch: 'main'` — edit links point at GitHub.

**Important:** the sidebar is a large nested structure **duplicated per locale**. When adding/removing/moving a page you must update the sidebar entry in **every locale that has that section**.

## Conventions for AI changes

- **Adding a page**: create the `.md` under the right `docs/<LANG>/...` folder, then add a matching entry to that locale's `sidebar` in `docs/.vuepress/config.js`. VuePress routes are derived from the file path: `docs/EN/Cloud/DevManuals/Code/Delphi/README.md` → `/EN/Cloud/DevManuals/Code/Delphi/`. Sidebar `link` values must match these routes (folder links end with `/`).
- Use a `README.md` inside a folder for the folder's index page.
- **Language**: write content in the language of its locale folder (`EN/` English, `NL/` Dutch, `FR/` French). Keep the three locales structurally consistent when possible.
- Style (from `README.md` contribution guidelines): present tense, active voice, sentence case headers, numerals for numbers, minimal punctuation, always capitalize **LBRP, Accowin, Finasset and Belcofin**, bold for emphasis, italics in parentheses, no underlines, commented code examples.
- Keep emoji usage in sidebar section names as they currently are (e.g. `🖥️`, `🦄`, `⚖️`, `🌐`) — follow the existing pattern.
- `node_modules/` and VuePress build/cache output (`.vuepress/dist`, `.vuepress/cache`, `.vuepress/temp`) are generated — never edit or treat as source.
- The README mentions `yarn run lint`; no lint script exists in `package.json` (npm is used). Verify formatting by eyeballing the rendered `npm run docs:dev` output instead.
- Related repos: see `ABF/AGENTS.md` (Delphi desktop apps) and `LBRP/AGENTS.md` (C# cloud backend) — API links in the navbar (Swagger, api-docs) point to those services.

## Git Policy (HARD RULE - never violate)

- Git is ONLY allowed for **status purposes and analysis of work** (read-only commands: `git status`, `git log`, `git diff`, `git show`, `git branch` (listing), `git remote -v`, ...).
- NEVER run git commands that remove, create, or mutate resources (`git commit`, `git push`, `git add`, `git checkout --`, `git restore`, `git reset`, `git clean`, `git stash`, ...). Leave those to the user.
- Use `--no-pager` for git commands that would otherwise open an interactive pager.

## File Editing Policy (HARD RULE - never violate)

- Use the dedicated file editing tools for edits and file creation — NEVER modify files via terminal one-liners (`sed`, `awk`, `echo >`, `tee`, heredocs, ...).
