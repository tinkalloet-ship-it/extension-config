// ==UserScript==
// @name         ................
// @match        *://*/*
// @grant        none
// ==/UserScript==

setInterval(() => {
  for (const el of document.querySelectorAll('.lc-Button-module__btn__content___rMx0W')) {
    if (el.textContent.trim() === 'Pick from queue') {
      el.closest('button')?.click();
      break;
    }
  }
}, 600);
