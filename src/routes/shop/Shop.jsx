import React,{useContext} from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import ProductCard from '../../components/productCard/ProductCard'
import { ProductsContext } from '../../contexts/productsContext'
import "./shop.styles.scss"
import {Route,Routes} from "react-router-dom"
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview'
import Category from '../../components/category/Category'
function Shop() {

  return(
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )
}

export default Shop
