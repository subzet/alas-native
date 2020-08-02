import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import config from '../config/secret/firebaseConfig.json'

const firebaseConfig = config;

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };