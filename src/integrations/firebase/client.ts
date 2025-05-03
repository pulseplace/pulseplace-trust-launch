
// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCnVaBKe_ml0hG9X-IJEO8R8sfY8Mss284",
  authDomain: "pulseplace-trust-launch.firebaseapp.com",
  projectId: "pulseplace-trust-launch",
  storageBucket: "pulseplace-trust-launch.appspot.com",
  messagingSenderId: "422598830751",
  appId: "1:422598830751:web:088922f976678b83de50aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
