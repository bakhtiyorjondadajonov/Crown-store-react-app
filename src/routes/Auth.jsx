import React from 'react'
import "./authentication.styles.scss"
import SignInForm from '../components/sign-in-form/SignInForm'
import SignUpForm from '../components/sign-up-form/SignUpForm'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../utils/firebase/firebase'
function Auth() {

  return (
    <div className='authentication-container'>
    
   <SignInForm/>
    <SignUpForm/>
    </div>
  )
}

export default Auth
