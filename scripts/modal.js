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
        "title": "Where Did I Learn?",
        "text": "I honed my coding skills through the comprehensive Full-Stack Web Development program at Code Institute, where I gained hands-on experience in building dynamic and responsive web applications."
    },
    {
        "title": "About the Technologies",
        "text": "I'm fluent in the languages that power the web – HTML, CSS, and JavaScript – and equally adept with the robust capabilities of Python, Django, and PostgreSQL. My focus is always on creating a seamless experience for your users."
    },
    {
        "title": "What Can You Expect?",
        "text": "So, if you're seeking a website that's built with purpose, without the unnecessary technical jargon, let's connect and you will find a dedicated partner committed to crafting a website that truly works for you."
    },
    {
        "title": "Why Do You Need a Website?",
        "text": "Your website: It's your digital storefront. Showcase, engage, build trust, and drive sales in today's online world.",
        "list": `
        <ul id='modal-list'>
        <li><i class="fa-solid fa-check"></i><p><strong>Reach More Customers Online:</strong> Be found by a wider audience, beyond your local area and traditional marketing.</p></li>
        <li><i class="fa-solid fa-check"></i><p><strong>Build Trust & Professionalism:</strong> Establish credibility and show you're a serious business with a central information hub.</p></li>
        <li><i class="fa-solid fa-check"></i><p><strong>Showcase Your Offerings Visually:</strong> Present your services and portfolio with compelling images and detailed descriptions.</p></li>
        <li><i class="fa-solid fa-check"></i><p><strong>Generate Leads & Increase Sales:</strong> Convert website visitors into inquiries and paying customers with clear calls to action.</p></li>
        <li><i class="fa-solid fa-check"></i><p><strong>Provide 24/7 Customer Information:</strong> Offer essential details, FAQs, and contact options for improved service.</p></li>
        <li><i class="fa-solid fa-check"></i><p><strong>Strengthen Your Brand Identity:</strong> Communicate your unique values and personality consistently online.</p></li>
        <li><i class="fa-solid fa-check"></i><p><strong>Stay Competitive in the Digital Age:</strong> Don't get left behind – a website is now a standard expectation.</p></li>
    </ul>
    `
    }
];

document.querySelectorAll('.modal-open').forEach((el) => {
    el.addEventListener('click', () => {
        const modal = document.querySelector('.info-modal');
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
    });
});

document.querySelector('#modal-close').addEventListener('click', () => {
    const modal = document.querySelector('.info-modal');
    modal.classList.remove('active-modal');
});