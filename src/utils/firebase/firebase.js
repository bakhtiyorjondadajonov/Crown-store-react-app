// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword,getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc,collection, writeBatch,query, getDocs} from 'firebase/firestore'
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
export const sginInAuthUserWithEmailAndPassword=async (email,password)=>{

  if(!email || !password)return
  return await signInWithEmailAndPassword(auth,email,password)
}
export const signOutUser=async()=>{
  return await signOut(auth)
}
export const AuthStateChangeListener=async (observer)=>{
  return onAuthStateChanged(auth,observer)

}
//  This function is only for reference.I used it to write all data t0 the database at once
export const AddCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
try {
  // create a collection reference first in order to write document to that collection

  const collectionRef=collection(db,collectionKey)
const batch=writeBatch(db)
objectsToAdd.forEach((object=>{
  // create a document reference to write (or batch) data
 const docReference=doc(collectionRef,object.title.toLowerCase())
 console.log(docReference)
batch.set(docReference,object)
}))
await batch.commit()
console.log("done")
} catch (error) {
  console.log("error",error)
}

}

// ------ READING DATA FROM DATABASE -------//
export const getCollectionAndDocuments=async ()=>{

  // we need to create collection reference to get data from the necessary collection.
 
  const collectionReference=collection(db,"categories");
const q=query(collectionReference)
const querySnapshot=await getDocs(q);
const categoryMap=querySnapshot.docs.reduce((sum,docSnapShot)=>{
const {title,items}=docSnapShot.data()
sum[title.toLowerCase()]=items
return sum

},{})
return categoryMap
}
// the format of data we are trying to get
/*
{
  hats:[],
  sneakers:[],
  mens:[],
  jackets:[]
}
hashtables 
*/
 