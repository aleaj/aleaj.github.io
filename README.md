# Alejandro Andrés-Juanes’s academic website

An al-folio-based PhD portfolio for https://aleaj.github.io.

## Editing content

- Bio and selected achievements: `_pages/about.md`.
- Research: `_projects/*.md`; the landing page orders entries by `importance`.
- Publications: `_bibliography/papers.bib`; mark a paper `selected = {true}` to feature it on the homepage.
- CV: `_data/cv.yml`. Run `python scripts/generate_cv.py` after changing it to regenerate the public PDF. Install `requirements-cv.txt` first.
- Blog: add `_posts/YYYY-MM-DD-title.md` with frontmatter `layout: post`, `title`, `date`, and `description`. The blog lists posts automatically.
- Contact links: `_data/socials.yml`.

Do not upload the private source CV. The public CV excludes phone and birth details.

## Build and deploy

Use Ruby 3.3 and Node 20. Run `bundle install`, `npm ci`, and `JEKYLL_ENV=production bundle exec jekyll build`. The root site uses an empty `baseurl`.

The retained al-folio Deploy site workflow builds pushes to `main` and publishes `_site` to `gh-pages`. In repository Settings → Pages, select Deploy from a branch, `gh-pages`, `/ (root)`. Enable workflows for the fork and give the deploy workflow contents write access.

Changes live on `my-site-updates` until ready for `main`. `origin` must point to `aleaj/aleaj.github.io`; `upstream` is the al-folio project.

## Design and provenance

Al-folio provides the layout and light/dark modes. A site-owned `_sass/_themes.scss` override sets blue accents. Runtime gem versions remain pinned in Gemfile. The original MIT license is retained.

Profile content is based on the supplied CV and confirmed research description. Publication metadata was verified against https://journals.aps.org/prx/abstract/10.1103/r4jt-j39w on 7 October 2026; the preprint retains its original title at https://arxiv.org/abs/2510.07139.
