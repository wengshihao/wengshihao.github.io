# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

Personal academic homepage for Shihao Weng, hosted at `wengshihao.github.io`. Built on the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) Jekyll template (which itself derives from `minimal-mistakes` / `academicpages`). Almost all day-to-day edits are content updates in `_pages/includes/*.md`; the Jekyll layout/SCSS scaffolding rarely needs to change.

## Local development

```bash
bash run_server.sh         # = `bundle exec jekyll liveserve` — serves on http://127.0.0.1:4000 with livereload
bundle install             # one-time: install Ruby gems pinned via github-pages
```

Requires the GitHub Pages Ruby toolchain (Ruby + RubyGems + GCC + Make). The site is published by GitHub Pages directly from `main` — there is no separate build step.

`run_server.sh` literally contains `bundle exec jekyll liveservesource` (no space, no newline). It works because the shell parses `liveserve` as the command and `source` as a positional arg Jekyll ignores. Don't "fix" the typo unless you've verified the new form still launches with livereload.

## Content architecture

The single rendered page is `_pages/about.md`, which uses Jekyll's `include_relative` to stitch together six content fragments — edits to the homepage almost always land in one of these:

```
_pages/about.md
└── _pages/includes/
    ├── intro.md     # name, bio + research directions, profile links, photo carousel
    ├── news.md      # News rows
    ├── pub.md       # Publications, grouped by year
    ├── honers.md    # Honors
    ├── service.md   # Service
    └── others.md    # Education + page footer (visit counter, theme toggle)
```

The homepage is single-column: `about.md` sets `author_profile: false`, so the sidebar (`_includes/author-profile.html`) is not rendered. The photo carousel lives in `_includes/profile-carousel.html` and is included from `intro.md`; photos are listed under `author.photos` in `_config.yml`. Author identity (name, photos, social links) lives in `_config.yml` under `author:` — change it there, not in the layouts.

Design: typographic, card-free. Exo is the display face (name, headings, dates, venues); Inter is the body face. All homepage styles use the `hp-` prefix in `assets/css/main.scss`; colors are tokens on `:root` with a `[data-theme="dark"]` override.

Row pattern shared by News / Honors / Service / Education: `<ul class="hp-rows"><li><span class="hp-when">…</span><span>…</span></li></ul>`.

Publication entry pattern in `pub.md` (inside a `.hp-year` group's `<ol class="hp-papers">`):
- `.hp-paper__title` — an `<a>` to the paper, or a `<span>` when there is no link yet.
- `.hp-paper__authors` — wrap the site owner's name in `<span class="hp-me">`; `*` marks the corresponding author.
- `.hp-paper__meta` — `<span class="hp-venue">` with the full venue name and year (e.g. `NeurIPS 2026`, `arXiv preprint`), optional `<span class="hp-honor">` for awards/spotlights, then `<span class="hp-paper__links">` with plain `paper` / `code` / `tool` links.

## Google Scholar citation pipeline

Citations shown on the page are pulled from a sibling branch, **not** from `main`:

1. `.github/workflows/google_scholar_crawler.yaml` runs daily at 08:00 UTC (and on `page_build`).
2. It executes `google_scholar_crawler/main.py`, which uses `scholarly` to fetch the author profile keyed by the `GOOGLE_SCHOLAR_ID` repo secret.
3. Results (`gs_data.json`, `gs_data_shieldsio.json`) are force-pushed to the `google-scholar-stats` branch.
4. `_includes/fetch_google_scholar_stats.html` reads that JSON at page load; per-paper counts are rendered via `<span class='show_paper_citations' data='SCHOLAR_PAPER_ID'></span>` (see README "Quick Start" step 5 for how to find the ID). `google_scholar_stats_use_cdn: true` in `_config.yml` makes the client fetch via CDN.

Editing `main.py` or the workflow only takes effect after the next scheduled run (or a manual workflow dispatch).

## Things to leave alone

- `_sass/`, `_layouts/default.html`, `_includes/*.html` — upstream template scaffolding. Override via `assets/css/main.scss` rather than editing `_sass` partials.
- `Gemfile.lock` — pinned by `github-pages`; let `bundle update` manage it.
- `docs/` and `google_scholar_crawler/` are excluded from the Jekyll build (`exclude:` in `_config.yml`), so changes there don't affect the rendered site.
