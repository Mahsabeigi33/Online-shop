import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDMVSrO0zTdaMwBAn0jY27f3sEm2Ld7cU",
  authDomain: "onlineshop-268c5.firebaseapp.com",
  projectId: "onlineshop-268c5",
  storageBucket: "onlineshop-268c5.appspot.com",
  messagingSenderId: "25656974183",
  appId: "1:25656974183:web:9528e200ad5c099fb32dc2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db ,app};
