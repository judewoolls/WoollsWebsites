const modalContent = [
    {
        "title": "Website Package",
        "text": "Get a professionally designed website tailored to your unique needs and goals. This package includes responsive design, user-friendly navigation, and a modern aesthetic to effectively showcase your business. Prices start at £300. After discussing your requirements in a free consultation call, I will ensure your website aligns perfectly with your vision."
    },
    {
        "title": "Web App Package",
        "text": "Receive a custom web application designed to meet your specific requirements. This package ensures robust functionality, scalability, and a seamless user experience. Prices start at £900. We will schedule a consultation call to understand your needs and provide a solution that exceeds your expectations."
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