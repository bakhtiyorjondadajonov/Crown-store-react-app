import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../utils/firebase/firebase'
function SignIn() {
  const logGoogleUser=async ()=>{
const {user}=await signInWithGooglePopup()

createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  )
}

export default SignIn
