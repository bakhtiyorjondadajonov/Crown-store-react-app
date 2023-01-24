import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import CategoryPreview from '../category-preview/CategoryPreview'
import "./categories-preview.styles.scss"
function CategoriesPreview() {
    const {products}=useContext(ProductsContext)
    return (
      <div className="">
        {
          Object.keys(products).map((title)=>{
            return <CategoryPreview title={title} key={title} products={products[title]}/>
          })
        }
      </div>
  //     <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
    
  //       {
  //         Object.keys(products).map((title)=>{
  // return <React.Fragment key={title}>
  //   <h1 style={{
  //       padding:"1rem",
  //         textTransform:"capitalize"
  //   }}>{title}</h1>
  //   <div className='products-container'>
  //   {products[title].slice(0,4).map(product=>{
  //    return (<ProductCard key={product.id} product={product}/>)
  //   })}
  
  //   </div>
  // </React.Fragment>
  //         })
  //       }
  //     </div>
    )
}

export default CategoriesPreview
