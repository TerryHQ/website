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

window.toggleDropdown = function(id) {
  const section = document.getElementById(id);
  if (!section) return;
  section.classList.toggle('open');
  const arrow = section.querySelector('.dropdown-arrow');
  if (arrow) {
    arrow.innerHTML = section.classList.contains('open') ? '&#9660;' : '&#9654;';
  }
};
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-section').forEach(section => {
    section.classList.remove('open');
    const arrow = section.querySelector('.dropdown-arrow');
    if (arrow) arrow.innerHTML = '&#9654;';
  });
});

// Legacy Kingdom Slideshow logic (auto, no controls)
if (window.location.pathname.endsWith('legacykingdom.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const slides = [
      {src: "images/lk_slideshow_custom_mobs.png", alt: "Mobs"},
      {src: "images/lk_slideshow_custom_structures.png", alt: "Structures"},
      {src: "images/lk_slideshow_firework_arrow.png", alt: "PvP arena"},
      {src: "images/lk_slideshow_custom_mobs.png", alt: "Event screenshot"}
    ];
    let currentSlide = 0;
    let autoSlideInterval = null;
    const slideImg = document.getElementById('slide-img');
    const slideshow = document.getElementById('slideshow');

    function showSlide(n) {
      currentSlide = (n + slides.length) % slides.length;
      slideImg.src = slides[currentSlide].src;
      slideImg.alt = slides[currentSlide].alt;
    }
    function nextSlide() { showSlide(currentSlide + 1); }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        nextSlide();
      }, 2200);
    }
    function stopAutoSlide() {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }

    slideshow.addEventListener('mouseenter', stopAutoSlide);
    slideshow.addEventListener('mouseleave', startAutoSlide);

    showSlide(0);
    startAutoSlide();
  });
}

// Korvia Steam-Style Media Gallery
if (window.location.pathname.endsWith('korvia.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    const media = [
      { type: 'video', src: './videos/korvia1.mp4', thumb: './videos/korvia1.mp4' },
      { type: 'video', src: './videos/korvia2.mp4', thumb: './videos/korvia2.mp4' },
      { type: 'img', src: './images/korvia1.png', thumb: './images/korvia1.png' },
      { type: 'img', src: './images/korvia2.png', thumb: './images/korvia2.png' }
    ];

    let current = 0;
    const mainMediaArea = document.getElementById('mainMediaArea');
    const galleryBar = document.getElementById('korviaGalleryBar');

    function renderMainMedia(idx) {
      const m = media[idx];
      mainMediaArea.innerHTML = '';
      if (m.type === 'video') {
        const vid = document.createElement('video');
        vid.controls = true;
        vid.autoplay = true;
        vid.muted = false;
        vid.playsInline = true;
        vid.setAttribute('style', 'width:100%;height:100%;background:#101010;');
        const source = document.createElement('source');
        source.src = m.src;
        source.type = 'video/mp4';
        vid.appendChild(source);
        mainMediaArea.appendChild(vid);
      } else if (m.type === 'img') {
        const img = document.createElement('img');
        img.src = m.src;
        img.alt = "Korvia Screenshot";
        mainMediaArea.appendChild(img);
      }
    }

    function renderThumbnails(selectedIdx) {
      galleryBar.innerHTML = '';
      media.forEach((m, idx) => {
        const thumb = document.createElement('div');
        thumb.className = 'korvia-gallery-thumb' + (idx === selectedIdx ? ' active' : '');
        thumb.tabIndex = 0;
        if (m.type === 'video') {
          const v = document.createElement('video');
          v.src = m.thumb;
          v.muted = true;
          v.playsInline = true;
          v.preload = 'metadata';
          v.setAttribute('style', 'pointer-events: none;');
          thumb.appendChild(v);
        } else {
          const i = document.createElement('img');
          i.src = m.thumb;
          i.alt = "Korvia Thumb";
          thumb.appendChild(i);
        }
        thumb.onclick = () => {
          if (current !== idx) {
            current = idx;
            renderMainMedia(current);
            renderThumbnails(current);
          }
        };
        galleryBar.appendChild(thumb);
      });
    }

    renderMainMedia(current);
    renderThumbnails(current);
  });
}
