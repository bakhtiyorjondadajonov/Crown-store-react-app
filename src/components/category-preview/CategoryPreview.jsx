import React from 'react'
import {useContext} from 'react'
import {Link} from "react-router-dom"
import ProductCard from '../productCard/ProductCard'
import { ProductsContext } from '../../contexts/productsContext';
import "./category-preview.styles.scss"
function CategoryPreview({products,title}) {
    return (
        <div className='category-preview-container' key={title}>
   <Link to={title}><h1 className='title'>{title}</h1></Link>
   <div className='preview'>
   {products.slice(0,4).map(product=>{
    return (<ProductCard key={product.id} product={product}/>)
   })}

   </div>
 </div>
   
    )
}

export default CategoryPreview
