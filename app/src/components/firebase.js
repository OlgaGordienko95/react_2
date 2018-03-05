import * as firebase from 'firebase';
import React from 'react';
// Initialize Firebase

const config = {
  apiKey: "AIzaSyCtv4a1pGB5cjBPTwLMIzXjyV6C8N7dUAQ",
  authDomain: "first-try-d42dd.firebaseapp.com",
  databaseURL: "https://first-try-d42dd.firebaseio.com",
  projectId: "first-try-d42dd",
  storageBucket: "first-try-d42dd.appspot.com",
  messagingSenderId: "894181046263"
}

export default firebase.initializeApp(config);
