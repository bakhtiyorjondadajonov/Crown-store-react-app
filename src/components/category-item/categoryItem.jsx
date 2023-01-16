import "./category-item.styles.scss";

const CategoryItem=({category:{id,title,imgUrl}})=>{
    return <div  className="category">
        
    <div style={{backgroundImage:`url(${imgUrl})`}} className="background-img"/>
      <div className="category__body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
}
export default CategoryItem