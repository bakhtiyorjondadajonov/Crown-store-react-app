import { createContext,useState,useEffect} from "react";
import { AuthStateChangeListener } from "../utils/firebase/firebase";

export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
})
const UserContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null)
    const value={currentUser,setCurrentUser}
    useEffect(()=>{
        
       const unsubscribe=AuthStateChangeListener((user)=>{
            console.log(user)
             setCurrentUser(user)
        })
 
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
export default UserContextProvider 