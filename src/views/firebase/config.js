import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDo4R1IvpgpRB9Y9KXV_UWQ_LeHPmgkFzs",
  authDomain: "udemy-build-web-apps-with-vue.firebaseapp.com",
  projectId: "udemy-build-web-apps-with-vue",
  storageBucket: "udemy-build-web-apps-with-vue.firebasestorage.app",
  messagingSenderId: "178031165621",
  appId: "1:178031165621:web:75e76fd805fea6ea397efc"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }