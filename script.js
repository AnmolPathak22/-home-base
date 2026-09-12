const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const allPhotos = document.querySelectorAll('.polaroid img');

allPhotos.forEach(photo => {
  photo.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = photo.src;
  });
});

modal.addEventListener('click', () => {
  modal.classList.remove('active');
});