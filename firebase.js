import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBN-9jNspCuHD7dJgTIMOmtdh0scVBr3Ps",
  authDomain: "final-app-9591d.firebaseapp.com",
  projectId: "final-app-9591d",
  storageBucket: "final-app-9591d.appspot.com",
  messagingSenderId: "1010150821827",
  appId: "1:1010150821827:web:7cbb967b1bcb4238a1f776",
  measurementId: "G-BDJL8YZSY5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
