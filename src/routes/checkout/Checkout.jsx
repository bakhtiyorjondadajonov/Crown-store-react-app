import React, { useContext } from 'react'
import './checkout.styles.scss'
import { CartContext } from '../../contexts/cartContext'
import CheckOutItem from '../../components/checkout-item/CheckOutItem'

function Checkout() {
    const {cartItems,addItemToCart,removeItemFromCart,cartTotal}=useContext(CartContext)
  return (
    <div className='checkout-container'>
        <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>
        </div>
     {
        cartItems.map(cartItem=>{
            
            return <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
        })
     }
     <span className="total">Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout
