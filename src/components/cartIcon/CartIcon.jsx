import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import CartDropDown from '../cartDropDown/CartDropDown'
import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon } from "./shopping-bag.svg"
function CartIcon() {
    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
   
    const toggleIsCartOpen=()=>{
        isCartOpen?setIsCartOpen(false): setIsCartOpen(true)
        
    }
  return (
   <div onClick={toggleIsCartOpen} className='cart-icon-container'>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{cartCount}</span>  
    </div>
  )
}

export default CartIcon
