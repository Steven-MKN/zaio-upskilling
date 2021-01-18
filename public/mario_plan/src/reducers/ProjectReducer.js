const initState = {
    projects: [],
    projectPage: {
        on: 1,
        of: 1
    },
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
            const pageNum = action.pageNum
            const projects = action.projects

            return {
                ...state,
                projects: [...projects],
                projectPage: {
                    ...state.projectPage,
                    on: pageNum
                }
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

        case 'PROJECTS_COUNT':
            return {
                ...state,
                projectPage: {
                    ...state.projectPage,
                    of: action.pages
                }
            }

        default: return state
    }
    
}

export default ProjectReducer