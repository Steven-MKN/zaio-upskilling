export const loginUser = ({ email, password }) => {
    return async (dispatch, getState, { firebase }) => {

        try {
            const auth = firebase.auth()

            try {
                await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            } catch(err){
                console.log(err)
            }

            const user = await auth.signInWithEmailAndPassword(email, password)

            dispatch({ type: 'LOGIN_USER', user })

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

export const getInitState = () => {
    return async (dispatch, getState, { firebase }) => {
        let user = firebase.auth().currentUser

        dispatch({ type: 'GET_INIT_STATE', user })
    }
}