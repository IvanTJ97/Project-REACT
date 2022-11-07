import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth,setPersistence,browserLocalPersistence} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_PROJECT_ID + '.firebaseapp.com',
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
};
const firebaseApp=initializeApp(firebaseConfig);
export const db=getFirestore();
export const auth=getAuth(firebaseApp);
setPersistence(auth,browserLocalPersistence);