import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxKFzD12_dwFxnzMEpNimt6mAwe09bMTg",
    authDomain: "zaio-upskilling.firebaseapp.com",
    projectId: "zaio-upskilling",
    storageBucket: "zaio-upskilling.appspot.com",
    messagingSenderId: "253832554412",
    appId: "1:253832554412:web:69da0f1ff1a1d238c27c09"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export default firebase