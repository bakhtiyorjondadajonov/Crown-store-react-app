import {createContext,useState,useEffect} from "react"

const addCartItem=(cartItems,productToAdd)=>{
const existingItem=cartItems.find(cartItem=>cartItem.id===productToAdd.id);
if(existingItem){
    return cartItems.map(cartItem=>cartItem.id===existingItem.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
}
    return [...cartItems,{...productToAdd,quantity:1}]
}
const removeCartItem=(productToRemove,cartItems)=>{
//find cart item to remove
const existingItem=cartItems.find(cartItem=>cartItem.id===productToRemove.id)
if(existingItem.quantity===1){
    return cartItems.filter(cartItem=>{
        if(cartItem.id !==existingItem.id)return cartItem
    })
}else{
    return cartItems.map(cartItem=>cartItem.id===productToRemove.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem)
}

//check if item quantity=1,remove that item from array

// return back cartItems with reduced quantity

}
const clearItem=(cartItems,productToBeCleared)=>{
    return cartItems.filter(cartItem=>cartItem.id!==productToBeCleared.id&&cartItem)
}
export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>Boolean,
    cartItems:[],
    addItemToCart:()=>null,
    cartCount:0,
    cartTotal:0,
    removeItemFromCart:()=>null,
    clearItemFromCart:()=>null
    
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
const [cartTotal,setCartTotal]=useState(0);
useEffect(()=>{
const totalCount=cartItems.reduce(((sum,cartItem)=>sum+cartItem.quantity),0)
setCartCount(totalCount);
const totalPrice=cartItems.reduce((totalPrice,cartItem)=>totalPrice+cartItem.quantity*cartItem.price,0);
setCartTotal(totalPrice)
},[cartItems])

const removeItemFromCart=(product)=>{
setCartItems(removeCartItem(product,cartItems));

}
const addItemToCart=(product)=>{
  
setCartItems(addCartItem(cartItems,product))
}
const clearItemFromCart=(product)=>{
setCartItems(clearItem(cartItems,product))
}
const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,cartTotal,removeItemFromCart,clearItemFromCart}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}