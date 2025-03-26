window.addEventListener('resize', function() {
    window.innerWidth > 768 ? document.querySelector('#navbar').classList.remove('nav--mobile') : document.querySelector('#navbar').classList.add('nav--mobile');
    setUpNavbar(document.querySelector('#navbar'));
});

document.addEventListener('DOMContentLoaded', function() {
    window.innerWidth > 768 ? document.querySelector('#navbar').classList.remove('nav--mobile') : document.querySelector('#navbar').classList.add('nav--mobile');
    setUpNavbar(document.querySelector('#navbar'));
    setActivePage();
});

const originalNav = `
    <header id="navbar">
        <nav>
            <h1 id="heading-title">WoollsWebsites</h1>
            <ul>
                <li><a href="index.html" class="active-page myNavLinks">Home</a></li>
                <li><a href="index.html#my-services-section" class="myNavLinks">Services</a></li>
                <li><a href="portfolio.html" class="myNavLinks">Portfolio</a></li>
                <li><a href="contact.html" class="myNavLinks">Contact</a></li>
            </ul>
        </nav>
    </header>`

function setUpNavbar(navbar) {
    if (navbar.classList.contains('nav--mobile')) {
        navbar.outerHTML = 
        `<nav class="navbar navbar-expand-lg navbar-dark bg-dark nav--mobile" id="navbar">
  <div class="container-fluid">
    <h2 id="heading-title" href="#">WoollsWebsites</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="index.html" class="active-page myNavLinks">Home</a>
        </li>
        <li class="nav-item">
          <a href="index.html#my-services-section" class="myNavLinks">Services</a>
        </li>
        <li class="nav-item">
          <a href="portfolio.html" class="myNavLinks">Portfolio</a>
        </li>
        <li class="nav-item">
          <a href="contact.html" class="myNavLinks">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
    } else {
        navbar.outerHTML = originalNav;
    }
    // Call setActivePage after the DOM has been updated
    setTimeout(setActivePage, 0);
}

function setActivePage() {
    const links = document.querySelectorAll('.myNavLinks');
    const currentPath = window.location.pathname.split('/').pop();

    links.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath || (linkPath === '' && currentPath === 'index.html')) {
            link.classList.add('active-page');
        } else {
            link.classList.remove('active-page');
        }

        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active-page'));
            this.classList.add('active-page');
        });
    });
}