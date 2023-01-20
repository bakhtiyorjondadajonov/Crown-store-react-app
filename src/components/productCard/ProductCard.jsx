import React,{useContext} from 'react'
import { CartContext } from '../../contexts/cartContext'
import Button from '../button/Button'
import "./product-card.styles.scss"
function ProductCard({product}) {
  const {addItemToCart}=useContext(CartContext)
  const handleAddToCart=()=>{
addItemToCart(product)
  }
  return (
    <div className='product-card-container'>
        <img src={product.imageUrl} alt={product.name} />
   <div className="footer">
    <div className="name">{product.name}</div>
    <div className="price">${product.price}</div>
   </div>
   <Button onClick={handleAddToCart} className='inverted'>Add to cart</Button>
</div>
  )
}

export default ProductCard
