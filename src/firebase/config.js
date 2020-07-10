import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
apiKey: 'AIzaSyBMMLdEENKh3vYKeFOA_1tfRCDCn2eVa34',
authDomain: 'alas-ec935.firebaseapp.com',
databaseUrl: 'https://alas-ec935.firebaseio.com',
projectId: 'alas-ec935',
storageBucket: 'alas-ec935.appspot.com/',
messagingSenderId: '123565123',
appId: '1:712066277142:ios:cf2bfe6a3cfdf8db2cfa37'
}


if (!firebase.apps.lenght){
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
