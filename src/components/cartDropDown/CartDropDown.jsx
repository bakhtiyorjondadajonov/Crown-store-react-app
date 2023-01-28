import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../../contexts/cartContext'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
// import "./cart-dropdown.styles.scss"
import { CartDropDownContainer, CartItems, EmptyMessage } from './CartDropDown.styles'
function CartDropDown() {
  const navigationFn=useNavigate()
  const navigationHandler=()=>{
navigationFn("checkout")
  }
    const {cartItems}=useContext(CartContext)
    
  return (
    <CartDropDownContainer>
        <CartItems >
     {
     cartItems.length?cartItems.map((item)=>{
        return (
            <CartItem key={item.id} cartItem={item}/>
        )
     }):<EmptyMessage>Your cart is empty</EmptyMessage>}
        </CartItems>
      <Button className='button' onClick={navigationHandler}>checkout</Button>
    </CartDropDownContainer>
  )
}

export default CartDropDown
