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
    }
]

document.querySelectorAll('.modal-open').forEach((el) => {
  el.addEventListener('click', () => {
    const modal = document.querySelector('.info-modal');
    modal.classList.add('active-modal');

    if (el.dataset.modal === '1') {
      const modalTitle = document.querySelector('#modal-title');
      modalTitle.innerText = modalContent[0].title;
      const modalTextSection = document.querySelector('#modal-p');
      modalTextSection.innerText = modalContent[0].text;
    } else if (el.dataset.modal === '2') {
      const modalTitle = document.querySelector('#modal-title');
      modalTitle.innerText = modalContent[1].title;
      const modalTextSection = document.querySelector('#modal-p');
      modalTextSection.innerText = modalContent[1].text;
    } else if (el.dataset.modal === '3') {
      const modalTitle = document.querySelector('#modal-title');
      modalTitle.innerText = modalContent[2].title;
      const modalTextSection = document.querySelector('#modal-p');
      modalTextSection.innerText = modalContent[2].text;
    }
  });
});

document.querySelector('#modal-close').addEventListener('click', () => {
  const modal = document.querySelector('.info-modal');
  modal.classList.remove('active-modal');
});