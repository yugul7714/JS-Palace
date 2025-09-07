// Mobile nav toggle
const navToggleButton = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggleButton && nav) {
  navToggleButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    const spans = navToggleButton.querySelectorAll('span');
    spans[0].style.transform = nav.classList.contains('open') ? 'translateY(7px) rotate(45deg)' : '';
    spans[1].style.opacity = nav.classList.contains('open') ? '0' : '1';
    spans[2].style.transform = nav.classList.contains('open') ? 'translateY(-7px) rotate(-45deg)' : '';
  });
}

// Smooth scroll for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const targetEl = targetId && document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('open');
      if (navToggleButton) {
        const spans = navToggleButton.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    }
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const href = item.getAttribute('href');
    if (!href) return;
    if (lightbox && lightboxImg) {
      lightboxImg.src = href;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
