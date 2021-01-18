const initState = {
    auth: null,
    error: null
}

const AuthReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            console.log(action)
            return {
                ...state,
                error: null,
                auth: {
                    ...action.data,
                    uuid: action.user.user.uid,
                    email: action.user.user.email,                    
                }
            }

        case 'LOGIN_USER_ERROR':
            console.log(action.error)
            return {
                ...state,
                error: action.error
            }

        case 'SIGN_UP':
            console.log(action)
            return {
                ...state,
                error: null,
                auth: {
                    ...action.data,
                    uuid: action.user.user.uid,
                    email: action.user.user.email
                }
            }

        case 'SIGN_UP_ERROR':
            console.log(action.error)
            return {
                ...state,
                error: action.error
            }

        case 'SIGN_OUT': 
            console.log('sign out success')
            return {
                ...state,
                error: null,
                auth: null
            }

        case 'SIGN_OUT_ERROR': 
            console.log('sign out error')
            console.log(action.error)
            return {
                ...state,
                error: action.error
            }

        case 'GET_INIT_STATE': 
            console.log(action)

            const { user, data } = action
            if (user){
                return {
                    ...state,
                    auth: {
                        ...data,
                        uuid: user.uid,
                        email: user.email
                    }
                }
            } else {
                return {
                    ...state,
                    auth: null
                }
            } 
            
        case 'GET_INIT_STATE_ERROR': 
            console.log(action.error)
            return state

        default: return state
    }
}

export default AuthReducer