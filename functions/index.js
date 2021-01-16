const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const createNotification = async (notification) => {
  try {
    const doc = await admin.firestore().collection('notifications').add(notification)
    console.log('notification added')
    console.log(doc)
  } catch (err){
    console.log(err)
  }

  return
}

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(async doc => {

    // create notification
    const project = doc.data()
    const notification = {
      content: 'Added a new project',
      user: `${ project.authorFirstName } ${ project.authorLastName }`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    try {
      // increase count
      const res = await admin.firestore().collection('meta').doc('projectsDocCount').update({ count: FieldValue.increament(1) })
      console.log(res)
    } catch (err){
      console.log(err)
    }

    return createNotification(notification)
})

exports.userJoined = functions.auth.user().onCreate(async user => {

  try {
    const doc = await admin.firestore().collection('users').doc(user.uid).get()
    const newUser = doc.data()
    const notiification = {
      content: 'Joined the party',
      user: `${newUser.firstName} ${newUser.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    await createNotification(notiification)
  } catch (err){
    console.log(err)    
  }

  return
}) 

exports.projectDeleted = functions.firestore.document('projects/{projectId}').onDelete(async doc => {
  try {
    // decrease count
    const res = await admin.firestore().collection('meta').doc('projectsDocCount').update({ count: FieldValue.increament(-1) })
    console.log(res)
  } catch (err){
    console.log(err)
  }

  return
})