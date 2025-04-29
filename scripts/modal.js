const modalContent = [
    {
        "title": "What is Frontend Development?",
        "text": "Frontend development is the part of web development that focuses on the user interface and user experience. It involves creating the visual elements of a website or application that users interact with directly. Frontend developers use languages like HTML, CSS, and JavaScript to build responsive and interactive interfaces."
    },
    {
        "title": "What is Backend Development?",
        "text": "Backend development refers to the server-side of web development. It involves creating and managing the server, database, and application logic that power the frontend. Backend developers use languages like Python to build APIs, manage databases, and ensure that the frontend can communicate with the server."
    },
    {
        "title": "What is Full Stack Development?",
        "text": "Full stack development encompasses both frontend and backend development. Full stack developers have the skills to work on both sides of a web application, allowing them to create complete solutions from start to finish. They are proficient in multiple programming languages and frameworks, enabling them to handle all aspects of web development."
    },
    {
        "title": "Where Did I learn?",
        "text": "I honed my coding skills through the comprehensive Full-Stack Web Development program at Code Institute, where I gained hands-on experience in building dynamic and responsive web applications."
    },
    {
        "title": "About the Technologies",
        "text": "I'm fluent in the languages that power the web – HTML, CSS, and JavaScript – and equally adept with the robust capabilities of Python, Django, and PostgreSQL. My focus is always on creating a seamless experience for your users."
    },
    {
        "title": "What Can You Expect?",
        "text": "So, if you're seeking a website that's built with purpose, without the unnecessary technical jargon, let's connect and you will find a dedicated partner committed to crafting a website that truly works for you."
    }
]

document.querySelectorAll('.modal-open').forEach((el) => {
    el.addEventListener('click', () => {
        const modal = document.querySelector('.info-modal');
        modal.classList.add('active-modal');

        const modalNumber = parseInt(el.dataset.modal) - 1;
        const modalTitle = document.querySelector('#modal-title');
        modalTitle.innerText = modalContent[modalNumber].title;
        const modalTextSection = document.querySelector('#modal-p');
        modalTextSection.innerText = modalContent[modalNumber].text;

    });
});

document.querySelector('#modal-close').addEventListener('click', () => {
    const modal = document.querySelector('.info-modal');
    modal.classList.remove('active-modal');
});