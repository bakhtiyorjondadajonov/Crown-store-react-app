import React,{useContext}from 'react'

import {ReactComponent as CrwnLogo} from "../assets/crown.svg"
import {Outlet,Link} from "react-router-dom"
import { UserContext } from '../contexts/userContext'
import { signOutUser } from '../utils/firebase/firebase'
import CartIcon from '../components/cartIcon/CartIcon'
import CartDropDown from '../components/cartDropDown/CartDropDown'
import { CartContext } from '../contexts/cartContext'
import { NavLink, NavLinks, NavLogo, NavContainer } from './Navigation.styles'
function Navigation() {
  const {isCartOpen}=useContext(CartContext)
  const {currentUser}=useContext(UserContext)
  const signOutHandler=async()=>{
    await signOutUser()
    // setCurrentUser(null)
  }

  return (
     <> 
    <NavContainer>
      <NavLogo to="/" ><CrwnLogo/></NavLogo>
      <NavLinks>
        <NavLink  to="/shop" >Shop</NavLink>
        {currentUser? <span onClick={signOutHandler} className='nav__link' to="/">Sign out</span>: <NavLink className='nav__link' to="auth">Sign In</NavLink>}
        <CartIcon/>
      </NavLinks>
      {isCartOpen&&<CartDropDown/>}  
    </NavContainer>
    <Outlet />
    </>
  )
}

export default Navigation
