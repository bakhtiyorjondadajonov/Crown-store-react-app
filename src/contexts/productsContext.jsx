import PRODUCTS from "../routes/shop/shop-data.json";
import {createContext,useState} from "react"
export const ProductsContext=createContext({
    products:[]
})
const ProductProvider=({children})=>{
const [products,setProducts]=useState(PRODUCTS)
const value={products}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
export default ProductProvider