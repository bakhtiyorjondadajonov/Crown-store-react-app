import SHOP_DATA from "../routes/shop/shopData.js";
import {createContext,useState,useEffect} from "react"
import { AddCollectionAndDocuments } from "../utils/firebase/firebase.js";
export const ProductsContext=createContext({
    products:[]
})
const ProductProvider=({children})=>{
const [products,setProducts]=useState([]);
useEffect(()=>{

const myfn=async()=>{
   await AddCollectionAndDocuments("categories",SHOP_DATA)
}

myfn()


},[])
const value={products}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
export default ProductProvider