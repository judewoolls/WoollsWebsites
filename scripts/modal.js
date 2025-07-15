const modalContent = [
    {
        "title": "Website Package",
        "text": "Looking for a professional website that truly represents your brand? This package includes a clean, modern design that looks great on all devices, easy navigation for your visitors, and everything you need to make a strong first impression online. Prices start at £300. We’ll start with a free consultation call to plan a site that fits your goals perfectly."
    },
    {
        "title": "Web App Package",
        "text": "Need something more interactive? This package is perfect for businesses that want a custom web app tailored to how they work. Whether it’s a booking system, client portal, or something unique, you’ll get a smooth, scalable solution designed for real results. Prices start at £900. We'll kick things off with a free consultation to map out your ideal app."
    }
];

// Modal functionality
// Open modal on click

document.querySelectorAll('.modal-open').forEach((el) => {
    el.addEventListener('click', () => {
        const modal = document.querySelector('.info-modal');
        const modalSection = modal.querySelector('.info-modal-content');
        modal.classList.add('active-modal');
        const modalNumber = parseInt(el.dataset.modal) - 1;
        const modalTitle = document.querySelector('#modal-title');
        modalTitle.innerText = modalContent[modalNumber].title;
        const modalTextSection = document.querySelector('#modal-p');
        modalTextSection.innerText = modalContent[modalNumber].text;
        if (modalNumber === 6) {
            const modalList = document.querySelector('#modal-list');
            modalList.innerHTML = modalContent[modalNumber].list;
        } else {
            const modalList = document.querySelector('#modal-list');
            modalList.innerHTML = '';
        }
        if (modalSection) {
            modalSection.scrollTop = 0;
        }
    });
});

// Close modal on click
document.querySelector('#modal-close').addEventListener('click', () => {
    const modal = document.querySelector('.info-modal');
    modal.classList.remove('active-modal');
});