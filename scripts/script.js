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

// curtain animation
function playCurtain() {
  const curtain = document.querySelector('.curtain');
  const logo = document.querySelector('.curtain-logo');
  const headerLogo = document.querySelector('.header-logo')

  // Reset state so animation can replay
  curtain.style.display = 'flex';
  logo.classList.remove('animate');
  headerLogo.classList.remove('header-logo-show');
  
  setTimeout(() => {
    setTimeout(() => {
      logo.classList.add('animate');
    }, 500);
  
    setTimeout(() => {
      headerLogo.classList.add('header-logo-show');
    }, 1000);
  
    setTimeout(() => {
      curtain.style.borderBottom = 'none';
    }, 1500);
  
    setTimeout(() => {
      curtain.style.display = 'none';
    }, 2500);
  }, 2000);
 
}

// Run on fresh load and bfcache restore
document.addEventListener('DOMContentLoaded', playCurtain);
window.addEventListener('pageshow', playCurtain);

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
