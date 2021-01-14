const initState = {
    notifications: []
}

const NotificationReducer = (state = initState, action) => {
    switch (action.type){
        case 'REGISTER_NOTIFICATION_LISTENER':            
            return {
                ...state,
                notifications: [...action.notifications]
            }

        case 'REGISTER_NOTIFICATION_LISTENER_ERROR':
            console.log(action.err)
            return state

        case 'NO_CHANGE':
            return state

        default: return state
    }
    
}

export default NotificationReducer