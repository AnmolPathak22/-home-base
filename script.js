window.addEventListener('pageshow', function () {
  const leaf = document.getElementById('leaf');
  if (!leaf) return;
  leaf.classList.remove('flipping');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      leaf.classList.remove('incoming');
    });
  });
});

// ---------- Gallery photo click-to-enlarge ----------
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const allPhotos = document.querySelectorAll('.polaroid img');

allPhotos.forEach(photo => {
  photo.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = photo.src;
  });
});

if (modal) {
  modal.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}

// ---------- Page-turn flip animation on side-tab clicks ----------
let isFlipping = false;

document.addEventListener('click', function (e) {
  const link = e.target.closest('.side-tabs a');
  if (!link || isFlipping) return;

  e.preventDefault();
  isFlipping = true;
  const destination = link.getAttribute('href');
  const leaf = document.getElementById('leaf');

  leaf.classList.add('flipping');

  setTimeout(() => {
    window.location.href = destination;
  }, 700);
});