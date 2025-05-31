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

// Dropdown logic (for all .dropdown-section elements)
window.toggleDropdown = function(id) {
  const section = document.getElementById(id);
  if (!section) return;
  section.classList.toggle('open');
  const arrow = section.querySelector('.dropdown-arrow');
  if (arrow) {
    arrow.innerHTML = section.classList.contains('open') ? '&#9660;' : '&#9654;';
  }
};
// Init all dropdowns closed with arrow set right
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-section').forEach(section => {
    section.classList.remove('open');
    const arrow = section.querySelector('.dropdown-arrow');
    if (arrow) arrow.innerHTML = '&#9654;';
  });
});

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

// Legacy Kingdom Slideshow logic
if (window.location.pathname.endsWith('legacykingdom.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const slides = [
      {src: "images/lk_slideshow_custom_mobs.png", alt: "Mobs"},
      {src: "images/lk_slideshow_custom_structures.png", alt: "Structures"},
      {src: "images/lk_slideshow_firework_arrow.png", alt: "PvP arena"},
      {src: "images/lk_slideshow_custom_mobs.png", alt: "Event screenshot"}
    ];
    let currentSlide = 0;
    function showSlide(n) {
      currentSlide = (n + slides.length) % slides.length;
      document.getElementById('slide-img').src = slides[currentSlide].src;
      document.getElementById('slide-img').alt = slides[currentSlide].alt;
      updateDots();
    }
    function prevSlide() { showSlide(currentSlide - 1); }
    function nextSlide() { showSlide(currentSlide + 1); }
    function updateDots() {
      const slideshowDots = document.getElementById('slideshow-dots');
      slideshowDots.innerHTML = "";
      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('button');
        dot.className = 'legacykingdom-dot' + (i === currentSlide ? ' active' : '');
        dot.onclick = () => showSlide(i);
        slideshowDots.appendChild(dot);
      }
    }
    showSlide(0);
    document.querySelector('.legacykingdom-slide-btn.left').onclick = prevSlide;
    document.querySelector('.legacykingdom-slide-btn.right').onclick = nextSlide;
  });
}

