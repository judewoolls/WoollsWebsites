
document.querySelectorAll('.modal-open').forEach((el) => {
  el.addEventListener('click', () => {
    const modal = document.querySelector('.info-modal');
    modal.classList.add('active-modal');
  });
})

document.querySelector('#modal-close').addEventListener('click', () => {
  const modal = document.querySelector('.info-modal');
  modal.classList.remove('active-modal');
}
)