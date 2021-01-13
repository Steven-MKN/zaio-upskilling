const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true})
  response.send("Hello from Firebase!")
})

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
  .onCreate(doc => {
    const project = doc.data()
    const notification = {
      content: 'Added a new project',
      user: `${ project.authorFirstName } ${ project.authorLastName }`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
})