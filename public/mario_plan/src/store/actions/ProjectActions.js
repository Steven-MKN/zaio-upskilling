export const createProject = (project) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        // const firestore = getFirestore()

        // try {
        //     await firestore.collection('projects').add({
        //         ...project,
        //         authorFirstName: 'Net',
        //         authorLastName: 'Ninja',
        //         authorId: 12345,
        //         createdAt: new Date()
        //     })

        //     dispatch({type: 'CREATE_PROJECT', project})

        // } catch (err){
        //     dispatch({type: 'CREATE_PROJECT_ERROR', err})
        // }

    }
}