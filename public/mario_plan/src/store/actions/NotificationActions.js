let listener = null
export const getNotifications = () => {
    return async (dispatch, getState, { firebase }) => {

        if (listener != null) {            
            dispatch({ type: 'NO_CHANGE' })
            return
        }

        try {
            const firestore = firebase.firestore()

            listener = firestore.collection('notifications').orderBy('time', 'desc').limit(3).onSnapshot( snapshots => {
                console.log(snapshots)
                let notifications = []
                snapshots.forEach(doc => {
                    notifications.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })

                dispatch({ type: 'REGISTER_NOTIFICATION_LISTENER', notifications })
            })
            

        } catch (error) {
            dispatch({ type: 'REGISTER_NOTIFICATION_LISTENER_ERROR', error })
        }

    }
}