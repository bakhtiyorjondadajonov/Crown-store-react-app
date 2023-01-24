import "./directory-item.styles.scss";

const DirectoryItem=({directory:{id,title,imgUrl}})=>{
    return <div  className="directory">
        
    <div style={{backgroundImage:`url(${imgUrl})`}} className="background-img"/>
      <div className="directory__body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
}
export default DirectoryItem