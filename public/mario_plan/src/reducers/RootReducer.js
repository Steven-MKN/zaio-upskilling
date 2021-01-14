import AuthReducer from './AuthReducer'
import ProjectReducer from './ProjectReducer'
import NotificationReducer from './NotificationReducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    notification: NotificationReducer
})

export default RootReducer