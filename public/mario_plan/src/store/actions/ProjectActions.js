//let lastDoc = []

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

export const getProjectCount = () => {
    return async (dispatch, getState, { firebase }) => {
        try {            
            firebase.firestore().collection('meta').doc('projectsDocCount').onSnapshot(doc => {
                console.log(doc.data())

                const count = doc.data().count

                console.log(doc.data())

                let pages = Math.ceil(count / 3)
                console.log(pages)

                dispatch({ type: 'PROJECTS_COUNT', pages })
            })

        } catch (error){
            dispatch({ type: 'PROJECTS_COUNT_ERROR', error })
        }
    }
}

export const getProjects = (pageNum) => {
    return async (dispatch, getState, { firebase }) => {

        try {
            const firestore = firebase.firestore()

            let query = firestore.collection('projects').orderBy('createdAt', 'desc')

            // if (pageNum > 1 && lastDoc[pageNum - 2]){
            //     const title = lastDoc[pageNum - 2].title
            //     console.log(lastDoc[pageNum - 2])
            //     query.startAfter(lastDoc[pageNum - 2])
            // }
            
            //query.limit(3).onSnapshot(docs => {
            query.onSnapshot(docs => {
                let projects = []
                docs.docs.forEach(doc => {
                    projects.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })

                // lastDoc[pageNum - 1] = docs.docs[2].data()
                // console.log(lastDoc)

                dispatch({ type: 'GET_PROJECTS', projects, pageNum })
            }, err => dispatch({ type: 'GET_PROJECTS_ERROR', err }))


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