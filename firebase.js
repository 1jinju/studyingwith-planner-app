// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6IaY5EZ_yxUYFPIxrhm4rkJ673AVzCFY",
  authDomain: "fir-auth-47ff6.firebaseapp.com",
  projectId: "fir-auth-47ff6",
  storageBucket: "fir-auth-47ff6.appspot.com",
  messagingSenderId: "119737522410",
  appId: "1:119737522410:web:dc583c06eaa771b59f1f93"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };