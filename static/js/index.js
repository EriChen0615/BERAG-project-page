const copyButton = document.querySelector('[data-copy-bibtex]');
const bibtexCode = document.getElementById('bibtex-code');
const copyStatus = document.querySelector('[data-copy-status]');
let copyReset;

copyButton?.addEventListener('click', async () => {
  if (!bibtexCode) return;
  let copied = false;
  try {
    await navigator.clipboard.writeText(bibtexCode.textContent.trim());
    copied = true;
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtexCode);
    selection.removeAllRanges();
    selection.addRange(range);
    try { copied = document.execCommand('copy'); } catch { /* Keep citation selected for manual copying. */ }
    if (copied) selection.removeAllRanges();
  }
  copyButton.textContent = copied ? 'Copied!' : 'Copy BibTeX';
  copyStatus.textContent = copied ? 'Citation copied.' : 'Select the citation and copy it manually.';
  window.clearTimeout(copyReset);
  copyReset = window.setTimeout(() => {
    copyButton.textContent = 'Copy BibTeX';
    if (copied) copyStatus.textContent = '';
  }, 2200);
});

const resourceMenus = [...document.querySelectorAll('.resource-menu')];
resourceMenus.forEach(menu => {
  menu.addEventListener('toggle', () => {
    if (menu.open) resourceMenus.forEach(other => { if (other !== menu) other.open = false; });
  });
});
document.addEventListener('click', event => {
  resourceMenus.forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  resourceMenus.forEach(menu => {
    if (!menu.open) return;
    if (menu.contains(document.activeElement)) menu.querySelector('summary').focus();
    menu.open = false;
  });
});

const viewer = document.querySelector('.figure-viewer');
const viewport = viewer?.querySelector('.viewer-viewport');
const viewerImage = viewport?.querySelector('img');
let zoom = 100;
function setZoom(value) {
  zoom = Math.max(100, Math.min(300, value));
  viewerImage.style.width = `${zoom}%`;
  viewer.querySelector('[data-zoom-level]').textContent = `${zoom}%`;
  viewer.querySelector('[data-zoom-out]').disabled = zoom === 100;
  viewer.querySelector('[data-zoom-in]').disabled = zoom === 300;
}
if (viewer && typeof viewer.showModal === 'function') {
  document.querySelector('[data-enlarge-figure]')?.addEventListener('click', event => {
    // Preserve opening the full-size asset in another tab with a modifier key.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setZoom(100);
    viewer.showModal();
    viewport.scrollTop = viewport.scrollLeft = 0;
    document.body.classList.add('viewer-open');
  });
  viewer.querySelector('[data-close-viewer]').addEventListener('click', () => viewer.close());
  viewer.querySelector('[data-zoom-out]').addEventListener('click', () => setZoom(zoom - 50));
  viewer.querySelector('[data-zoom-in]').addEventListener('click', () => setZoom(zoom + 50));
  viewer.querySelector('[data-zoom-fit]').addEventListener('click', () => setZoom(100));
  viewer.addEventListener('close', () => document.body.classList.remove('viewer-open'));
  viewer.addEventListener('click', event => {
    const bounds = viewer.getBoundingClientRect();
    if (event.target === viewer && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) viewer.close();
  });
}
