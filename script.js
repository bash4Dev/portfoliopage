document.getElementById('nav-links-menu').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

document.getElementById('resume-link').addEventListener('click', (e) => {
    e.preventDefault();
    const viewResume = confirm("Click OK to view my Resume");
    
    viewResume ? window.location.href = "https://drive.google.com/file/d/1HqGlO8hxHGoDTr4-SGAeYXap2hUxqM5x/view?usp=drive_link"
        : '';
  });

const projects = [
    {
        image: "./images/desktop-design.png",
        title: "Survey Form",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "https://bash4dev.github.io/survey-form/",
    },
    {
        image: "./images/calculator.png",
        title: "Calculator App",
        description: "A simple calculator app using CSS, Bootstrap and JS for basic arithmetic operations with a clean, responsive design.",
        link: "https://bash4dev.github.io/simple-Calculator/",
    },
    {
        image: "./images/rewards-summary.png",
        title: "Reward Summary",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "https://bash4dev.github.io/rewards-page/",
    },
    {
        image: "./images/roman-numeral-converter.png",
        title: "Roman Numeral",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "https://bash4dev.github.io/roman-num-converter/",
    },
    {
        image: "./images/desktop-design (2).jpg",
        title: "Newsletter Sign-up",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "https://bash4dev.github.io/newsletter_sign-up/",
    },
    {
        image: "./images/palindrome-checker.png",
        title: "Palindrome Checker",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "https://bash4dev.github.io/palindromechecker/",
    }
];

const displayProjects = () => {
    const projectDiv = document.getElementById('project-div');
    projectDiv.innerHTML = '';

    projects.forEach(project => {
        const projectElem = document.createElement('div');
        projectElem.className = 'project';
        projectElem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectDiv.appendChild(projectElem);
    });
}

displayProjects();