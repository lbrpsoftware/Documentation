# VuePress config (`docs/.vuepress/config.js`)

- Update the VuePress configuration so the new/updated pages are reachable in the sidebar navigation:
  - Sidebar entries live under `theme.locales['/FR/'].sidebar`, `theme.locales['/EN/'].sidebar`.
  - Mirror the structure of the `/NL/` sidebar: for every translated page, ensure there is a corresponding sidebar entry in the target locale with:
    - `link` pointing to the target-language path (e.g. `/NL/Cloud/UserManuals/Provider/` → `/FR/Cloud/UserManuals/Provider/`).
    - `text` translated into the target language (brand/product names stay unchanged).
  - Preserve grouping, nesting, `collapsed` state, and emoji icons from the NL sidebar.
  - Do not enable commented-out locale blocks (e.g. the `/EN/` locale) unless explicitly asked.

