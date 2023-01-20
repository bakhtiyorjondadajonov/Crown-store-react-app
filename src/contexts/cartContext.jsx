import {createContext,useState,useEffect} from "react"
const addCartItem=(cartItems,productToAdd)=>{
    // find if cartItems contains productToAdd
    //if found,increment quantity and return updated Items
const existingCartItem=cartItems.find(cartItem=>cartItem.id===productToAdd.id)
if(existingCartItem){
    return cartItems.map(cartItem=>cartItem.id===existingCartItem.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
}


    //if no found, add productToAdd and return updated Items
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

const totalCount=cartItems.reduce(((total,cartItem)=>total+cartItem.quantity),0)

setCartCount(totalCount)

},[cartItems])


const addItemToCart=(product)=>{
console.log("Add Item to Cart fn");
setCartItems(addCartItem(cartItems,product))
console.log("cart items",cartItems)
}
const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}