import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDv7VZ5lUMrO68xYinbCdpr8BHBmPGqcnI',
  authDomain: 'fashion-d280d.firebaseapp.com',
  projectId: 'fashion-d280d',
  storageBucket: 'fashion-d280d.appspot.com',
  messagingSenderId: '183809749354',
  appId: '1:183809749354:web:4ccb8b46bdb225ac2ab513',
  measurementId: 'G-BZYCE3F6YX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const providerFacebook = new FacebookAuthProvider();
export { auth, provider, providerFacebook };
