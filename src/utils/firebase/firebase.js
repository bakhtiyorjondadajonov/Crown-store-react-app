// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdyv6cGeF5oEtU7qanBW_0harN266ZIEI",
  authDomain: "crown-app-9b684.firebaseapp.com",
  projectId: "crown-app-9b684",
  storageBucket: "crown-app-9b684.appspot.com",
  messagingSenderId: "712017089820",
  appId: "1:712017089820:web:280af68b1776e63eaa56d9"
};


// Initialize Firebase
initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

const auth=getAuth()
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);


//we use getfirestore to connect with db,or more precisely create  database
const db=getFirestore();
// we need to create a user with the information passed through 
//authentication process
export const createUserDocumentFromAuth=async (userAuth,additionalInfo)=>{  
    //as a first properity for "doc" function,
    //we need to enter the database we would like to get connected
    // as a second parametr("path") ,we need to write the name of colection we want to get its data

    // returns a DocumentReference instance 
    //that refers to the document at the specified absolute path.
const userDocRef= doc(db,"users",userAuth.uid);


const userSnapshot=await getDoc(userDocRef);

//if user data does not exist,create/set 
//the document with the data from userAuth
if(!userSnapshot.exists()){
  try {
    const userData=await setDoc(userDocRef,{
      email:userAuth.email,
      name:userAuth.displayName,
      createdAt:Date.now(),
      ...additionalInfo
    });
  } catch (error) {
    console.log("Error creating user:",error.message)
  }
}

 return userDocRef    
}
export const createAuthUserWithEmailAndPassword=async (email,password)=>{
if(!email || !password)return
return await createUserWithEmailAndPassword(auth,email,password)
}