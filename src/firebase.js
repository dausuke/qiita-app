import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  EmailAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: false},
    GoogleAuthProvider.PROVIDER_ID,
  ],
};

export const isLoggedin = () => {
  return new Promise(resolve => {
    onAuthStateChanged(auth, user => resolve(user || false));
  });
};

export const db = getFirestore(app);
export const columnColRef = collection(db, 'columns');
