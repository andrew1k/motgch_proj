import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
// import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
}

// init firebase
initializeApp(firebaseConfig)

const firebaseAuth = getAuth()

const firebaseDB = getDatabase()

// const firestoreDB = getFirestore(firebaseApp)

export {
  firebaseAuth,
  firebaseDB,
}