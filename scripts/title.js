const titleSpan = document.querySelector('#title-span');
titleSpan.innerHTML = '';

const title = "Let's Build Something That Works";
const titleLetters = title.split('');
let animationComplete = false;

// Check for prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // If the user prefers reduced motion, display the full title immediately
    titleSpan.innerHTML = titleLetters.map(letter => `<span>${letter}</span>`).join('');
} else {
    // Otherwise, animate the title
    const titleObserver = new IntersectionObserver((entries) => {
        setTimeout(() => {
            entries.forEach((entry) => {
                let interval;
                let count;
                if (entry.isIntersecting && animationComplete === false) {
                    count = 0;
                    interval = setInterval(() => {
                        titleSpan.innerHTML += `<span>${titleLetters[count]}</span>`;
                        count++;
                        if (count === titleLetters.length) {
                            animationComplete = true;
                            clearInterval(interval);
                        }
                    }, 50);
                }
            });
        }, 300);

    });

    const titleSection = document.querySelectorAll('#about-me');
    titleSection.forEach((el) => titleObserver.observe(el));
}
