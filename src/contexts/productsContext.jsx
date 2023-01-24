
import {createContext,useState,useEffect} from "react"
import { getCollectionAndDocuments } from "../utils/firebase/firebase";

export const ProductsContext=createContext({
    products:{}
})
const ProductProvider=({children})=>{
const [products,setProducts]=useState({});
useEffect(()=>{
    (async function(){
const categoryMap=await getCollectionAndDocuments();

setProducts(categoryMap)
    })()
   
},[])
const value={products}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
export default ProductProvider