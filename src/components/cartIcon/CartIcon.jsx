import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import CartDropDown from '../cartDropDown/CartDropDown'
// import "./cart-icon.styles.scss"
import { CartIconContainer, ItemCount, ShoppingIconStyle } from './CartIcon.styles'

function CartIcon() {
    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
   
    const toggleIsCartOpen=()=>{
        isCartOpen?setIsCartOpen(false): setIsCartOpen(true)
        
    }
  return (
   <CartIconContainer onClick={toggleIsCartOpen} >
    <ShoppingIconStyle />
    <ItemCount >{cartCount}</ItemCount>  
    </CartIconContainer>
  )
}

export default CartIcon
