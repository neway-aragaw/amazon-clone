import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB46KGxIjDgap3BHGZMpsZgeEfzbwN1FDo",
  authDomain: "fir-e9db9.firebaseapp.com",
  projectId: "fir-e9db9",
  storageBucket: "fir-e9db9.appspot.com",
  messagingSenderId: "438761125407",
  appId: "1:438761125407:web:4e71bcb0e4d072c143072a",
  measurementId: "G-2X289QFJBN"
};
const app = firebase.initializeApp(firebaseConfig)
const auth=firebase.auth()
const db=app.firestore()

export {auth,db}