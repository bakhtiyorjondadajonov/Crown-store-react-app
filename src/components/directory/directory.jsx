import React from 'react'
import CategoryItem from '../category-item/categoryItem'
import "./directory.style.scss"
function Directory({categories}) {
  
  return (
    <div className="categories-container">
    {categories.map((category )=>{


return (
  <CategoryItem category={category} key={category.id}/>
)
    })}
    </div>
  )
}

export default Directory
