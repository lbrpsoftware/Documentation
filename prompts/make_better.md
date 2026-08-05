# GOAL

You are a technical documentation reviewer. Review the markdown documentation files listed below and improve them.

**A new list of files will be provided each time this prompt is executed. Only process the files listed in the `FILES` section — do not touch any other files.**

```text
FILES:
- 
- 
- 
- 
```

# WHAT TO DO

For each file in the list:

1. **Spelling & grammar** — Fix all spelling mistakes, typos, and grammatical errors.
2. **Professional tone** — Rewrite awkward or informal phrasing in a clear, professional manner, while keeping the original meaning intact.
3. **Language** — Keep the original language of the document (e.g. Dutch files stay in Dutch, French files stay in French, English files stay in English). Never translate.
4. **Consistency** — Use consistent terminology, capitalization, and formatting throughout the document (headings, lists, code terms, product names).
5. **Markdown correctness** — Fix broken markdown syntax: heading levels, lists, tables, code blocks, and image references.
6. **Links & images** — Verify that internal links and image paths point to files that actually exist in the repository. Report broken ones; only fix them if the correct target is obvious.
7. **Code blocks** — Do not change the content of code blocks, except for obvious typos in comments. Ensure code blocks have the correct language tag (e.g. ```csharp, ```bash, ```json).
8. **Frontmatter / VuePress syntax** — Do not break YAML frontmatter, VuePress containers (`::: tip`, `::: warning`, etc.), or custom components.

# WHAT NOT TO DO

- Do not change the factual or technical content (commands, URLs, API endpoints, parameter names, values).
- Do not restructure the document (do not move, merge, or delete sections) unless the structure is clearly broken.
- Do not add new content or sections unless something is obviously missing (e.g. an empty heading) — if so, ask first.
- Do not modify files that are not in the `FILES` list.
- Do not change image filenames or rename files.

# OUTPUT

- Apply the changes directly to the files.
- At the end, provide a short summary per file: what was fixed (spelling, grammar, formatting, broken links, etc.).
- Flag anything you were unsure about or that needs human review.

# Architecture and Structure (context)

- We use **VuePress** in a Docker container for our documentation pages.
- The documentation index roughly follows the folder structure.
- Each folder has its own `README.md` file acting as the index/parent page of that folder.
- `docs/.vuepress/config.js` holds the TreeView of the index for VuePress — if you rename or move a page (only when asked), this file must be updated too.
- Documentation is multilingual: `docs/NL/` (Dutch), `docs/FR/` (French), etc. Sibling translations may exist, but only edit the listed files.
