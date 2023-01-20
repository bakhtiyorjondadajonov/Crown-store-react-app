import {createContext,useState,useEffect} from "react"

const addCartItem=(cartItems,productToAdd)=>{
const existingItem=cartItems.find(cartItem=>cartItem.id===productToAdd.id);
if(existingItem){
    return cartItems.map(cartItem=>cartItem.id===existingItem.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
}
    return [...cartItems,{...productToAdd,quantity:1}]
}
export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>Boolean,
    cartItems:[],
    addItemToCart:()=>null,
    cartCount:0
    
})
/*
product={
    id,
    name,
    price,
    imgUrl
}

cartItem={
    ...product,
    quantity
}
*/




export const CartProvider=({children})=>{
const [isCartOpen,setIsCartOpen]=useState(null);
const [cartItems,setCartItems]=useState([]);
const [cartCount,setCartCount]=useState(0);
useEffect(()=>{
const totalCount=cartItems.reduce(((sum,cartItem)=>sum+cartItem.quantity),0)
setCartCount(totalCount)
},[cartItems])


const addItemToCart=(product)=>{
  
setCartItems(addCartItem(cartItems,product))
}
const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}