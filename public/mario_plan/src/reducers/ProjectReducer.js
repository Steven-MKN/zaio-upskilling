const initState = {
    projects: [],
    project: {
        title: '',
        content: '',
        createdAt: new Date(),
        authorFirstName: '',
        authorId: '',
        authorLastName: ''
    }
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project')
            console.log(action.project)
            return state

        case 'CREATE_PROJECT_ERROR':
            console.log(action.err)
            return state

        case 'GET_PROJECTS':
            const projects = action.projects
            return {
                ...state,
                projects
            }

        case 'GET_PROJECTS_ERROR':
            console.log(action.err)
            return state

        case 'GET_PROJECT':
            const project = action.project
            return {
                ...state,
                projects: [...state.projects, project]
            }

        case 'GET_PROJECT_ERROR':
            console.log(action.err)
            return state

        case 'NO_CHANGE': return state

        default: return state
    }
    
}

export default ProjectReducer