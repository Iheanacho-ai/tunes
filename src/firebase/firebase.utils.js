import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDARY6BXpGgR3WI4AKwymUH5GDJ84QS604",
    authDomain: "music-app-21f1b.firebaseapp.com",
    projectId: "music-app-21f1b",
    storageBucket: "music-app-21f1b.appspot.com",
    messagingSenderId: "514535313398",
    appId: "1:514535313398:web:7af4780ba92e9cc7f5c1d7",
    measurementId: "G-WFEKS24X56"
};

export const createUserProfileDocument = async ( userAuth, additionalData  ) => {
    if(!userAuth) return;

    const userRef = firestore.doc( `users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();


        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;