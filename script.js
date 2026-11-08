// Highlight nothing fancy: keep the site fast. Placeholder for future scripts.
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => img.remove());
});
