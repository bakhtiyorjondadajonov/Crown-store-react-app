import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
import "./cart-dropdown.styles.scss"
function CartDropDown() {
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
      <Button>checkout</Button>
    </div>
  )
}

export default CartDropDown
