let projectSubscription = null

export const createProject = (project) => {
    return async (dispatch, getState, { firebase }) => {

        try {
            const firestore = firebase.firestore()
            const { firstName, lastName, uuid } = getState().auth.auth

            await firestore.collection('projects').add({
                ...project,
                authorFirstName: firstName,
                authorLastName: lastName,
                authorId: uuid,
                createdAt: new Date()
            })

            dispatch({ type: 'CREATE_PROJECT', project })

        } catch (err) {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        }

    }
}

export const getProjects = () => {
    if (projectSubscription !== null) 
    return (dispatch, getState, { firebase }) => {
        dispatch({ type: 'NO_CHANGE' })
    }

    return async (dispatch, getState, { firebase }) => {

        try {
            const firestore = firebase.firestore()

            projectSubscription = firestore.collection('projects').orderBy('createdAt', 'desc').onSnapshot(docs => {
                let projects = []
                docs.docs.forEach(doc => {
                    projects.push({
                        ...doc.data(),
                        id: doc.id
                    })
                });

                dispatch({ type: 'GET_PROJECTS', projects })
            }, error => dispatch({ type: 'GET_PROJECTS_ERROR', error }))


        } catch (err) {
            dispatch({ type: 'GET_PROJECTS_ERROR', err })
        }
    }
}

export const getProject = (id) => {
    return async (dispatch, getState, { firebase }) => {

        try {
            const firestore = firebase.firestore()

            const doc = await firestore.collection('projects').doc(id).get()
            if (doc.exists){
                
                let project = {
                    ...doc.data(),
                    id: doc.id
                }
                dispatch({ type: 'GET_PROJECT', project })

            } else throw new Error('No document matching the ID')            

        } catch (err) {
            dispatch({ type: 'GET_PROJECT_ERROR', err })
        }
    }
}