import React, { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import "./category.styles.scss"
import { ProductsContext } from '../../contexts/productsContext'
import ProductCard from '../productCard/ProductCard';
function Category() {
    const {products}=useContext(ProductsContext);
    const {category}=useParams();
    const [categoryProducts,setCategoryProducts]=useState(products[category])
  useEffect(()=>{
    setCategoryProducts(products[category])
  },[category,products])
   
  return (
    <div className='products-container'>
     {
        categoryProducts?.map(product=> <ProductCard key={product.name} product={product}/>)
        
     }
    </div>
  )
}

export default Category
