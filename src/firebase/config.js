import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8fBz-IyKA25KwNinm20UWWwPOuwu68Qc",
    authDomain: "te-2023-2.firebaseapp.com",
    databaseURL: "https://te-2023-2-default-rtdb.firebaseio.com",
    projectId: "te-2023-2",
    storageBucket: "te-2023-2.appspot.com",
    messagingSenderId: "155653093962",
    appId: "1:155653093962:web:df271267d9f8af7dbc44b3",
    measurementId: "G-ZXT2DGVFXT"  
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.getAnalytics(app);
}

export { firebase };