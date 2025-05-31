// Footer visibility on scroll
function checkFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 8)) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
}
window.addEventListener('scroll', checkFooter);
window.addEventListener('resize', checkFooter);
document.addEventListener('DOMContentLoaded', checkFooter);

// Gallery Modal (for Korvia only)
function setupGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryModal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryModalImg');
  const modalVideo = document.getElementById('galleryModalVideo');
  if (!galleryItems.length || !galleryModal) return;
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const type = item.getAttribute('data-type');
      const src = item.getAttribute('data-src');
      if (type === 'img') {
        modalImg.style.display = 'block';
        modalImg.src = src;
        modalVideo.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = '';
      } else if (type === 'video') {
        modalVideo.style.display = 'block';
        modalVideo.src = src;
        modalVideo.poster = item.getAttribute('data-poster') || '';
        modalVideo.load();
        modalImg.style.display = 'none';
        modalImg.src = '';
      }
      galleryModal.classList.add('active');
    });
  });
  document.getElementById('closeGalleryModal').onclick = function() {
    galleryModal.classList.remove('active');
    modalImg.src = '';
    modalVideo.src = '';
    modalVideo.pause();
  }
  galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
      galleryModal.classList.remove('active');
      modalImg.src = '';
      modalVideo.src = '';
      modalVideo.pause();
    }
  });
}
// Only run on korvia.html
if (window.location.pathname.endsWith('korvia.html')) {
  document.addEventListener('DOMContentLoaded', setupGallery);
}
