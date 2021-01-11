export const loginUser = ({ email, password }) => {
    return async (dispatch, getState, { firebase }) => {

        try {
            const auth = firebase.auth()

            try {
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            } catch(err){
                console.log(err)
            }

            const user = await auth.signInWithEmailAndPassword(email, password)
            let data = null

            if (user) {
                const snapshot = await firebase.firestore().collection('users').doc(user.user.uid).get()

                data = {
                    firstName: snapshot.data().firstName,
                    lastName: snapshot.data().lastName,
                    initials: snapshot.data().initials
                }
            }

            dispatch({ type: 'LOGIN_USER', user, data })

        } catch (error) {
            dispatch({ type: 'LOGIN_USER_ERROR', error })
        }

    }
}

export const signOut = () => {
    return async (dispatch, getState, { firebase }) => {
        try {
            await firebase.auth().signOut()

            dispatch({ type: 'SIGN_OUT' })
        } catch(error){
            dispatch({ type: 'SIGN_OUT_ERROR', error })
        }
    }
}

export const signUp = ({ email, password, firstName, lastName }) => {
    return async (dispatch, getState, { firebase }) => {
        try {
            const auth = firebase.auth()
            const firestore = firebase.firestore()

            const user = await auth.createUserWithEmailAndPassword(email, password)

            if (!user) throw Error('Failed to register user')

            await firestore.collection('users').doc(user.user.uid).set({
                firstName: firstName,
                lastName: lastName,
                initials: firstName[0] + lastName[0]
            })            

            dispatch({ type: 'SIGN_UP', user, data: { firstName, lastName, initials: (firstName[0] + lastName[0]) } })
        } catch (error) {
            dispatch({ type: 'SIGN_UP_ERROR', error })
        }
    }
}

export const getInitState = () => {
    return async (dispatch, getState, { firebase }) => {
        let user = firebase.auth().currentUser

        if (user){
            try {
                const snapshot = await firebase.firestore().collection('users').doc(user.uid).get()

                const data = {
                    firstName: snapshot.data().firstName,
                    lastName: snapshot.data().lastName,
                    initials: snapshot.data().initials
                }

                dispatch({ type: 'GET_INIT_STATE', user, data })
            } catch (error){
                dispatch({ type: 'GET_INIT_STATE_ERROR', error })
            }
        }

        dispatch({ type: 'GET_INIT_STATE', user: { ...user } })
    }
}