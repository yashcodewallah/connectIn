 import {initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage } from "firebase/storage"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMLKG2DaOKuDLFdrqus-JbwwNd458HqHw",
  authDomain: "connectin-6c2e7.firebaseapp.com",
  projectId: "connectin-6c2e7",
  storageBucket: "connectin-6c2e7.appspot.com",
  messagingSenderId: "958146168475",
  appId: "1:958146168475:web:cccf4f75852dc6bfdfe83e",
  measurementId: "G-VGHD92YMYV"
};

const firebaseApp=initializeApp(firebaseConfig);
  const db= getFirestore(firebaseApp);
  const auth=getAuth(firebaseApp);
  const provider=new GoogleAuthProvider();
  const storage=getStorage(firebaseApp);

  export  {auth,storage,provider};
  export default db;