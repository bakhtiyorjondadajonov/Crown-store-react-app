import React,{useContext} from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { ProductsContext } from '../../contexts/productsContext'
import "./shop.styles.scss"

function Shop() {
    const {products}=useContext(ProductsContext)
  return (
    <div className='products-container'>
  
      {
        products.map((product)=>{
return (
   <ProductCard key={product.id} product={product}/>
)
        })
      }
    </div>
  )
}

export default Shop
