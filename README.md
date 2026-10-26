# BERAG project page

Project page for **BERAG: Bayesian Ensemble Retrieval-Augmented Generation for Knowledge-based Visual Question Answering** by Jinghong Chen, Jingbiao Mei, Guangyu Yang, and Bill Byrne.

- Paper: <https://arxiv.org/abs/2604.22678>
- PDF: <https://arxiv.org/pdf/2604.22678>
- Project page: <https://erichen0615.github.io/BERAG-project-page/>
- Editing guide: [EDITING.md](EDITING.md)

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Stop the server with `Ctrl+C`.

## Where things live

| What you want to change | File |
| --- | --- |
| Title, authors, links, overview, abstract, citation | `index.html` |
| Colours, typography, responsive layout | `static/css/index.css` |
| Copy citation, resource menus, and figure zoom | `static/js/index.js` |
| Main figure previews and favicon | `static/images/` |
| Videos you add later | `static/videos/` |
| Original main-figure PDF | `static/pdfs/` |

Search for `EDIT:` in `index.html` to jump to a specific content block. The resource bar links to the inference repository, training repository, Hugging Face models and data, and the inference container. The main figure comes from the BERAG chapter of the PhD Thesis; its source and update instructions are recorded in `EDITING.md`.

The page is plain HTML, CSS, and JavaScript, so there is no build step or package installation.

## Publishing

Pushing page changes to `master` publishes the site through `.github/workflows/pages.yml`. The workflow copies only `index.html`, `.nojekyll`, the page CSS/JavaScript, and the BERAG figure assets into the deployment artifact.

`paper/` and `codes/` are local reference folders, ignored by Git and excluded from the website.

## Credits

The layout follows the [ATPO project page](https://bruceyg.github.io/ATPO-project-page/). This repository originally used the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), itself adapted from the Nerfies project page.
