import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5_PHhARFK3Mb0jW-0JUqkuBWfvkWG3bE",
  authDomain: "earnest-command-440715-q4.firebaseapp.com",
  projectId: "earnest-command-440715-q4",
  storageBucket: "earnest-command-440715-q4.appspot.com",
  messagingSenderId: "957641928739",
  appId: "1:957641928739:web:9248163d4c4b0d4a9b4196",
  measurementId: "G-8R8S02ZVJJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };