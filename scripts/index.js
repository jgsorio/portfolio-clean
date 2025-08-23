const projectsElement = document.getElementById('projects');
const fades = ["fade-up", "fade-down", "fade-right", "fade-left"]

fetch('./projects.json')
.then(response => response.json())
.then(data => {
    data.projects.forEach((project) => {
        const randomFade = Math.floor(Math.random() * fades.length + 1);
        projectsElement.insertAdjacentHTML('afterbegin', `
            <a href="${project.link}" target="_blank" class="project" data-aos="${fades[randomFade]}">
                <picture>
                    <img src="${project.image}" alt="${project.name}">
                </picture>
                <strong>${project.name}</strong>
                <div class="project__stack">
                    ${project.stack.split(',').map((stack) => `<span><i class=devicon-${stack.trim()}></i></span>`).join("")}
                </div>
            </a>
        `)
    })
});

