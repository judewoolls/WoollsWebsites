const titleSpan = document.querySelector('#title-span');
titleSpan.innerHTML = '';

const title = "Turning Your Vision Into Value";
const titleLetters = title.split('');

let animationStarted = false;
let animationComplete = false;
let count = 0;

// Check for prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    titleSpan.innerHTML = titleLetters.map(letter => `<span>${letter}</span>`).join('');
} else {
    function animateTitle() {
        if (animationComplete || animationStarted) return;

        animationStarted = true;

        const interval = setInterval(() => {
            if (count < titleLetters.length) {
                titleSpan.innerHTML += `<span>${titleLetters[count]}</span>`;
                count++;
            } else {
                clearInterval(interval);
                animationComplete = true;
            }
        }, 50);
    }

    // Start animation only once when first intersecting
    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !animationStarted) {
                animateTitle();
                observer.unobserve(entry.target); // Stop observing after starting animation
            }
        });
    }, {
        threshold: 0.1
    });

    const titleSection = document.querySelector('#about-me');
    titleObserver.observe(titleSection);
}
