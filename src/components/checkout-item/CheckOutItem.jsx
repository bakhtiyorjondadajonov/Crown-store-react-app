import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import "./checkout-item.styles.scss"
function CheckOutItem({cartItem}) {
    const {addItemToCart,removeItemFromCart,clearItemFromCart}=useContext(CartContext);
    const {name,quantity,price,imageUrl}=cartItem
  return (
    <div className='checkout-item-container' key={cartItem.id}>
<div className="image-container">
  <img src={imageUrl} alt={name} />
</div>
    <span className='name'>{name}</span>
    <div  className='quantity'>
    <span>
    <div onClick={()=>removeItemFromCart(cartItem)}>-</div>
    <div>{quantity}</div>
      <div onClick={()=>addItemToCart(cartItem)}>+</div>
  </span>
    </div>
    <div className="price">${price}</div>
    <div onClick={()=>clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>
</div>
  )
}

export default CheckOutItem
