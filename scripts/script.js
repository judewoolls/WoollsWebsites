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

const contactsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.dataset.contact === '1') {
          entry.target.classList.add('contacts-end');
          entry.target.classList.remove('contacts-start');
        } else if (entry.target.dataset.contact === '2') {
          entry.target.classList.add('contacts-end-2');
          entry.target.classList.remove('contacts-start-2');
        }
      } else {
        if (entry.target.dataset.contact === '1') {
          entry.target.classList.remove('contacts-end');
          entry.target.classList.add('contacts-start');
        } else if (entry.target.dataset.contact === '2') {
          entry.target.classList.remove('contacts-end-2');
          entry.target.classList.add('contacts-start-2');
        }
      }
  });
});

const contactsLeft = document.querySelectorAll('.contacts-start');
contactsLeft.forEach((el) => contactsObserver.observe(el));

const contactsRight = document.querySelectorAll('.contacts-start-2');
contactsRight.forEach((el) => contactsObserver.observe(el));


