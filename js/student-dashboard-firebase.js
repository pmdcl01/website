const firebaseConfig = {
  apiKey: "AIzaSyApTSunUN0X0kzb7OhjC7rW9GUmkmWCyWo",
  authDomain: "pmd-classes.firebaseapp.com",
  databaseURL: "https://pmd-classes-default-rtdb.firebaseio.com",
  projectId: "pmd-classes",
  storageBucket: "pmd-classes.firebasestorage.app",
  messagingSenderId: "834273217434",
  appId: "1:834273217434:web:d746720fdbf2bdf2230823",
  measurementId: "G-6D2GEPTC6R"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();