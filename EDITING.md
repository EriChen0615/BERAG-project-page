# Editing the BERAG page

The page is static HTML, CSS, and JavaScript, with no installation or build step.

- `index.html`: title, authors, resource destinations, overview, summary, and BibTeX. Search for `EDIT:` comments.
- `static/css/index.css`: ATPO-inspired colours, typography, resource menus, responsive layout, and figure viewer.
- `static/js/index.js`: resource menus, figure zoom, and copying the citation.

## Resources

The top resource bar separates **Code · Inference** (`BERAG-demo`) and **Code · Training** (`BERAG`). **HF Models** and **HF Data** are native HTML disclosure menus; their links work without JavaScript. The environment button opens the prebuilt vLLM-BERAG Apptainer container.

Model and data destinations come from [the BERAG-demo reproduction recipe](https://github.com/EriChen0615/BERAG-demo/blob/main/recipes/infoseek_qwen3_vl_8b_beft.sh). Update these links when more checkpoints or dataset recipes become available. Currently the checkpoint links are for Infoseek; avoid implying that E-VQA checkpoints are already linked.

## Main figure

The figure is the file actually referenced by PhD Thesis Chapter 6:

`Chapter6/Figures/system-diagram-v2.pdf`

Web assets:

- `static/images/berag-overview.webp`: 1200 × 675 preview.
- `static/images/berag-overview-large.webp`: 2400 × 1350 enlarged version.
- `static/pdfs/berag-system-diagram.pdf`: unchanged source PDF.

If replacing the figure, update both image sizes, the PDF, the image dimensions, alt text, and caption in `index.html`. Keep the `srcset` and modal image in sync. The original diagram's equation numbers are preserved.

## Main results

The latest supplied Overleaf archive is extracted into `paper/overleaf-latest/` and preserved as the original snapshot. The current editable manuscript is `paper/arxiv-submission/main.tex`. The page's Results section transcribes all 37 active rows of `tab:best_vqa_performance_against_baselines`, including the authors' subsequently supplied full-validation InfoSeek BEFT results at K = 5 (43.54 for Qwen2-VL-7B and 45.41 for Qwen3-VL-8B, rounded to one decimal in the table). The archive also contains older `BERAG.tex` and `BERAG-0430.tex` versions; do not mix their results into this table.

Preserve the three evaluation settings: E-VQA M2KR (150K passages), original E-VQA (2M passages), and Infoseek (100K passages). E-VQA uses BEM; Infoseek uses the official VQA score. Keep retriever Recall@5 separate from the best VQA score. Dagger-marked Infoseek results use the full validation set rather than the M2KR test subset. Preserve this caveat and the manuscript's bold scores when updating the table.

## Content and metadata

The Abstract section is a short paraphrased overview. The full abstract is linked on arXiv. Keep the visible title, author list, citation, and metadata in `<head>` consistent when updating the paper. Only add results and performance claims that can be traced to the paper or chapter.

## Preview

From the project root:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Check desktop and phone widths, both resource menus, figure zoom (including Escape to close), the PDF link, and Copy BibTeX. Stop the server with Ctrl+C.

The default project destination remains the existing GitHub Pages repository. A local draft does not require a separate hosting service.
