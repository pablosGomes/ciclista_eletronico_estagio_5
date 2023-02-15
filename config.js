import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDiLR3AnnUY7Ad17WQjRbpmHL1m_KsGywo",
  authDomain: "ciclista-eletronico-af581.firebaseapp.com",
  projectId: "ciclista-eletronico-af581",
  storageBucket: "ciclista-eletronico-af581.appspot.com",
  messagingSenderId: "485477765883",
  appId: "1:485477765883:web:b260de271163cecdad565e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
