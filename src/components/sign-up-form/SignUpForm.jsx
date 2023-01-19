import React, { useState } from 'react'
import "./sign-up-form.styles.scss"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

function SignUpForm() {
    const defaultFormData={
        displayName:"",
        password:"",
        email:"",
        confirmPassword:""
    }
    const [formData,setFormData]=useState(defaultFormData);
    const {displayName,email,password,confirmPassword}=formData
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
        
    }

    const handleFormSubmit=async(e)=>{
e.preventDefault()
if(password !== confirmPassword)return alert("Password and Confirm Password are not the same")
try {
    const {user}=await createAuthUserWithEmailAndPassword(email,password)
   
    createUserDocumentFromAuth(user,{name:displayName})
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
    <form className='sign-up-container' onSubmit={handleFormSubmit}>
        <h2>Sign Up with yor e-mail and password</h2>
   <FormInput
   className="Test"
   label="Display Name"
   onChange={handleChange} type="text"
   id='name'
   required
   value={displayName}
   name="displayName"
   />
   <FormInput
   label="Email !"
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
      <FormInput
      label="Confirm Password"
      onChange={handleChange} type="password"
      id='confirmPassword'
      required
      value={confirmPassword}
      name="confirmPassword"/>
      <Button  type="submit">Sign Up </Button>
    </form>
  )
}

export default SignUpForm
