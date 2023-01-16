import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

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
    console.log(user)  
    createUserDocumentFromAuth(user,{name:displayName})
} catch (error) {
    if(error.code=="auth/email-already-in-use"){
        alert("Can not create a user,email is already in use")
        return
    }else{
        console.error("user creation error",error)
    }
   
}

}
  return (
    <form onSubmit={handleFormSubmit}>
        <h1>Sign Up with yor e-mail and password</h1>
      <label htmlFor="name">Dislay Name</label>
      <input onChange={handleChange} type="text"
      id='name'
      required
      name="displayName"
      />
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} type="email"
      id='email'
      required
      name="email"
      />
      <label htmlFor="password">Password</label>
      <input onChange={handleChange} type="password"
      id='password'
      required
      name="password"
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input onChange={handleChange} type="password"
      id='confirmPassword'
      required
      name="confirmPassword"
      />
      <button>Sign Up</button>
    </form>
  )
}

export default SignUpForm
