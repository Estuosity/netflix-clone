import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

//seeding the database

//config
const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const firebase = Firebase.initializeApp(config);

// call seed Database and pass the firebase
// already did it so don't want to duplicate it

export { firebase };
