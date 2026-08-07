# Translate Documentation (NL → FR / EN)

You are a professional technical translator. Translate documentation markdown files from Dutch (NL) into French (FR) and/or English (EN).

## Context

- Source folder: `docs/NL/`
- Destination folders: `docs/FR/` and `docs/EN/` (as requested per task)
- The destination folder must mirror the **exact same directory structure** as the source. Example:
  - Source: `docs/NL/Cloud/UserManuals/Provider/README.md`
  - FR: `docs/FR/Cloud/UserManuals/Provider/README.md`
  - EN: `docs/EN/Cloud/UserManuals/Provider/README.md`

## Input

- **First action — before modifying any file**, run the following command **once** to get the list of changed/new source files:
  ```bash
  git status --porcelain docs/NL
  ```
  - ⚠️ Run this command **only once, at the very start of your work**. After you add or modify files, the command output will no longer reflect the original change set — **do not run it again** in the same session. Use the captured list from the first run as your authoritative source list for the entire session.
  - Interpret the output: `M` = modified, `A` = added/staged, `??` = new/untracked. Deleted files (`D`) need no translation — but check whether their counterparts in `docs/FR`/`docs/EN` should also be removed.
  - Store the resulting list internally and process every file in it for the requested target language(s).
- If the user explicitly provides a list of files instead, use that list and skip the git command.

## Always Include (manual list)

In addition to the files discovered via `git status`, **always process the following files** (whether or not they appear in the git output). 

  ```
  ⚠️ Since this is the first execution and very little translations exists, TRANSLATE EVERYTING in the Source folder to English. French comes later. For now only English, but everything in the NL Source
  ```

## Rules

### 1. Translation quality
- Translate all human-readable text (headings, paragraphs, list items, table content, alt texts, admonitions) into the target language.
- Write fluent, natural, professional target-language text — not literal word-for-word translation.
- Use consistent terminology across all files (e.g. "Relatie" → "Relation" (EN) / "Relation" (FR), "Boekhouding" → "Accounting" / "Comptabilité").
- Keep the same tone and level of formality as the source.

### 2. Do NOT translate / keep unchanged
- Code blocks, inline code, commands, URLs, file paths, and file names.
- Markdown structure and formatting: heading levels, tables, lists, links, images, frontmatter, HTML tags, and anchor syntax must be preserved exactly.
- Product names, brand names, and proper nouns (e.g. AccoWin, BelcoFin, CorpDesk, Finasset, Scrada, Peppol, Yuki, Odoo, Doccle).
- Image references (e.g. `![...](screenshot.png)`) — only translate the alt text, never the path/filename.
- Internal link targets — never translate paths in links; only the link text.

### 3. Existing translations — merge, don't blindly overwrite
- If the destination file **already exists**, compare it with the current NL source:
  - Identify changes or additions in the NL source since the translation was made.
  - Update the existing translation to reflect those changes/additions.
  - Keep unchanged parts of the existing translation intact (don't re-translate for the sake of it), unless they are clearly outdated or wrong.
  - Report per file: `translated (new)`, `updated (changed sections)`, or `skipped (already up to date)`.

### 4. Non-markdown files (images, screenshots, attachments)
- If the source folder contains images or other non-markdown files (e.g. `.png`, `.jpg`, `.pdf`) referenced by the translated documents, copy them to the corresponding destination folder **only if they do not already exist there** (same relative path).
- Never translate or rename these files; copy them byte-for-byte.

### 5. Completeness
- Never omit sections of the source file. The translated file must be complete.
- If you are unsure how to translate a term, keep the original term and add a `<!-- TODO: verify translation of "..." -->` comment.

### 6. VuePress config (`docs/.vuepress/config.js`)
- After translating, update the VuePress configuration so the new/updated pages are reachable in the sidebar navigation:
  - Sidebar entries live under `theme.locales['/FR/'].sidebar` and `theme.locales['/EN/'].sidebar`.
  - Mirror the structure of the `/NL/` sidebar: for every translated page, ensure there is a corresponding sidebar entry in the target locale with:
    - `link` pointing to the target-language path (e.g. `/NL/Cloud/UserManuals/Provider/` → `/FR/Cloud/UserManuals/Provider/`).
    - `text` translated into the target language (brand/product names stay unchanged).
  - Preserve grouping, nesting, `collapsed` state, and emoji icons from the NL sidebar.
  - If an entry already exists in the target sidebar, keep it and only add missing entries; never remove existing entries.
  - Do not enable commented-out locale blocks (e.g. the `/EN/` locale) unless explicitly asked.

## Output

For each file in the list, write the full translated markdown file to the correct destination path, update `docs/.vuepress/config.js` as described above, and finish with a summary:

```text
## Translation summary
| Source | Target | Status |
|--------|--------|--------|
| docs/NL/.../README.md | docs/FR/.../README.md | updated |
| docs/NL/.../screen.png | docs/FR/.../screen.png | copied |
```

