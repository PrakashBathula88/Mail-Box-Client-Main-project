import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyATouFSg6GqvW6-U90CJ0krHlNjKhv7U1I",
  authDomain: "mail--box-client.firebaseapp.com",
  projectId: "mail--box-client",
  storageBucket: "mail--box-client.appspot.com",
  messagingSenderId: "956141617547",
  appId: "1:956141617547:web:00148b127a37b06358ef8e",
  measurementId: "G-PEPS5FHMMF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

