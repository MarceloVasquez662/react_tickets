import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyC8T6HAMfA6-eSio5enbZIqbawyOoDO1Ls",
  authDomain: "react-tickets-6029b.firebaseapp.com",
  databaseURL: "https://react-tickets-6029b.firebaseio.com",
  projectId: "react-tickets-6029b",
  storageBucket: "react-tickets-6029b.appspot.com",
  messagingSenderId: "362225639132",
  appId: "1:362225639132:web:6354473bdd352eb8419e19",
  measurementId: "G-E5DMY29BTL",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
