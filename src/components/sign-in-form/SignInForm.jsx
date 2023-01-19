import React, { useState,useContext } from 'react'
import "./sign-in-form.styles.scss"
import {createUserDocumentFromAuth, sginInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import UserContextProvider, { UserContext } from '../../contexts/userContext';

function SignInForm() {
const {currentUser,setCurrentUser}=useContext(UserContext)

      const logGoogleUser=async ()=>{
const {user}=await signInWithGooglePopup()
createUserDocumentFromAuth(user)
// setCurrentUser(user)
console.log(currentUser)
  }
    const defaultFormData={
        password:"",
        email:"",
    }
    const [formData,setFormData]=useState(defaultFormData);
    const {email,password}=formData
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    const handleFormSubmit=async(e)=>{
e.preventDefault()
// if(password !== confirmPassword)return alert("Password and Confirm Password are not the same")
try {
  await sginInAuthUserWithEmailAndPassword(email,password)
     
  setFormData(defaultFormData)
} catch (error) {
    if(error.code==="auth/email-already-in-use"){
        alert("Can not create a user,email is already in use")
        return
    }else{
        console.error("user creation error",error)
    }
   
}

}
  return (
    <form className='sign-in-container' onSubmit={handleFormSubmit}>
        <h2>Sign In with your e-mail and password</h2>
  
   <FormInput
   label="Email"
   onChange={handleChange} type="email"
   id='email'
   required
   value={email}
   name="email"
   />
      
     
     <FormInput
     label="Password"
     onChange={handleChange} type="password"
     id='password'
     required
     value={password}
     name="password"
     />
     <div className="buttons-container">
      <Button  type="submit">Sign In </Button>
      <Button onClick={logGoogleUser} className='google'   type="button">Sign In with Google </Button>
     </div>
    </form>
  )
}

export default SignInForm
