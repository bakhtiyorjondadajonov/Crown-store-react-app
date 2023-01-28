
// import "./directory-item.styles.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { BackgroundImage, Directory, DirectoryBody } from "./DirectoryItem.styles";

const DirectoryItem=({directory:{id,title,imgUrl,route}})=>{
 const navigate=useNavigate()

    return <Directory onClick={()=>navigate(route)} to={route}>
        
    <BackgroundImage imageUrl={imgUrl}/>
      <DirectoryBody >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </Directory>
}
export default DirectoryItem