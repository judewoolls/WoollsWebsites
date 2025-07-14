// this is the header animation
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

// this is the text content animation
const textObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hide');
      } else {
        entry.target.classList.remove('show');
        entry.target.classList.add('hide');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => textObserver.observe(el));

// modal interaction
const modal = document.querySelector('.intro-modal');
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        modal.classList.add('intro-modal-end');
    }, 1000);
});

// service section animation
const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.dataset.service === '1') {
          entry.target.classList.add('service-card-end');
          entry.target.classList.remove('service-card-start');
        } else if (entry.target.dataset.service === '2') {
          entry.target.classList.add('service-card-end-2');
          entry.target.classList.remove('service-card-start-2');
        }
      } else {
        if (entry.target.dataset.service === '1') {
          entry.target.classList.remove('service-card-end');
          entry.target.classList.add('service-card-start');
        } else if (entry.target.dataset.service === '2') {
          entry.target.classList.remove('service-card-end-2');
          entry.target.classList.add('service-card-start-2');
        }
      }
  });
});
const services = document.querySelectorAll('.service-card');

services.forEach((el) => serviceObserver.observe(el));
