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

The single rendered page is `_pages/about.md`, which uses Jekyll's `include_relative` to stitch together five content fragments — edits to the homepage almost always land in one of these:

```
_pages/about.md
└── _pages/includes/
    ├── intro.md     # bio, advisor, contact
    ├── news.md      # 🔥 News timeline
    ├── pub.md       # 📝 Publications
    ├── honers.md    # 🏆 Honors & Awards
    └── others.md    # extra sections
```

`_config.yml` declares `permalink: /:categories/:title/` and a default layout of `default` with `author_profile: true`, so every page gets the sidebar from `_includes/author-profile.html`. Author identity (name, avatar, social links) lives in `_config.yml` under `author:` — change it there, not in the layouts.

Custom inline classes used in publication entries (defined in `assets/css/main.scss`):
- `.papercolor` — venue tag color (currently blue), wraps things like `[ICSE'26]`.
- `.author-me` — highlights the site owner's name in author lists (purple `#6a4c93`).
- Publication links use `shields.io` "for-the-badge" badges; follow the existing color/logo conventions in `pub.md` when adding entries (arxiv = `b31b1b`, github code = `f5f5f5`, ACM = `0085CA`, Springer/Google Scholar = `005F86`).

Each publication entry in `pub.md` ends with two `<br>` tags for spacing — preserve that pattern.

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
