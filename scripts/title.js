const titleSpan = document.querySelector('#title-span');
titleSpan.innerHTML = '';

const title = "Let's Build Something That Works";
const titleLetters = title.split('');
let animationComplete = false;

const titleObserver = new IntersectionObserver((entries) => {
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

            }
                , 50);
        } 
    });
});

const titleSection = document.querySelectorAll('#about-me');
titleSection.forEach((el) => titleObserver.observe(el));
