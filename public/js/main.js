class Project{
    relativePath;
    title;
    constructor(relativePath, title){
        this.relativePath = relativePath;
        this.title = title;
    }
}

let projects = [
    new Project('./phase_one', 'HTML, CSS & JS'),
    new Project('./todo_list', 'React Todo List'),
    new Project('./poke_times', 'Poke Time app'),
    new Project('./mario_plan', 'marioplan app'),
    new Project('', 'Node Todo list'),
    new Project('', 'REST API'),
    new Project('', 'Property24 App')
]

let openAt = (location) => {
    if (location)
        document.location = location
}

let renderProjects = () => {
    let container = document.getElementById('projects-sub-container')
    projects.forEach(project => {
        container.innerHTML += `
        <div data-aos="zoom-in-right" class="card col-md-3 m-2 ${project.relativePath ? 'clickable' : ''}" style="width: 18rem;" onclick="openAt('${project.relativePath}')">
        <div class="card-body">
          <h5 class="">${project.title}</h5>
        </div>
      </div>`
    })

    console.log('render done')
}

onload = () => {
    renderProjects()
}