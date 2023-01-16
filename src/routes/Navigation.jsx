import React from 'react'
import "./navigation.styles.scss"
import {ReactComponent as CrwnLogo} from "../assets/crown.svg"
import {Outlet,Link} from "react-router-dom"
function Navigation() {
  return (
     <>
    <nav>
      <Link to="/" className="nav__logo"><CrwnLogo/></Link>
      <div className="nav__links">
        <Link className='nav__link' to="/shop" >Shop</Link>
        <Link className='nav__link' to="sign-in">Sign In</Link>
      </div>
    </nav>
    <Outlet />
    </>
  )
}

export default Navigation
