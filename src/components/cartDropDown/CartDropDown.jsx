import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../../contexts/cartContext'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
import "./cart-dropdown.styles.scss"
function CartDropDown() {
  const navigationFn=useNavigate()
  const navigationHandler=()=>{
navigationFn("checkout")
  }
    const {cartItems}=useContext(CartContext)
    
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
     {cartItems.map((item)=>{
        return (
            <CartItem key={item.id} cartItem={item}/>
        )
     })}
        </div>
      <Button onClick={navigationHandler}>checkout</Button>
    </div>
  )
}

export default CartDropDown
