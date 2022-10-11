import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDUisNFftZHu66X8qYcQ7OzBC6r_zWUvQk",
  authDomain: "dropbox-app-98e49.firebaseapp.com",
  projectId: "dropbox-app-98e49",
  storageBucket: "dropbox-app-98e49.appspot.com",
  messagingSenderId: "925503478779",
  appId: "1:925503478779:web:2d0d3049a76fc55a1bc95e",
  measurementId: "G-3XSZ5P4FYX"
})

const firestore = app.firestore()


export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
