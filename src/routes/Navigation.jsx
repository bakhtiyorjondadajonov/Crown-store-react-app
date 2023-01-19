import React,{useContext}from 'react'

import "./navigation.styles.scss"
import {ReactComponent as CrwnLogo} from "../assets/crown.svg"
import {Outlet,Link} from "react-router-dom"
import { UserContext } from '../contexts/userContext'
import { signOutUser } from '../utils/firebase/firebase'
function Navigation() {
  const {currentUser,setCurrentUser}=useContext(UserContext)
  const signOutHandler=async()=>{
    await signOutUser()
    // setCurrentUser(null)
  }
  return (
     <> 
    <nav>
      <Link to="/" className="nav__logo"><CrwnLogo/></Link>
      <div className="nav__links">
        <Link className='nav__link' to="/shop" >Shop</Link>
        {currentUser? <span onClick={signOutHandler} className='nav__link' to="/">Sign out</span>: <Link className='nav__link' to="auth">Sign In</Link>}
        
      </div>
    </nav>
    <Outlet />
    </>
  )
}

export default Navigation
