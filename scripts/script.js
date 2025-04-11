const logoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
      entry.target.classList.add('logo-end');
      entry.target.classList.remove('logo-start');
      }
  });
});

const logo = document.querySelectorAll('.logo-start');
logo.forEach((el) => logoObserver.observe(el));

const modal = document.querySelector('.intro-modal');
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        modal.classList.add('intro-modal-end');
    }, 1000);
});