import {Routes,Route,Outlet} from "react-router-dom"
import './App.css';
import "./category.styles.scss"
import CategoryItem from './components/category-item/categoryItem';
import Directory from './components/directory/directory';
import Home from './routes/Home';
import Navigation from "./routes/Navigation";
import Auth from "./routes/Auth";
const Shop=()=>{
  return <h1 >I am Shop page!</h1>
}
const Contact=()=>{
  return <h1 >I am Contact page</h1>
}



function App() {
 
  return (
   <Routes> 
<Route path="/" element={<Navigation/>}>
  <Route index element={<Home/>}/>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="auth" element={<Auth/>}/>
  <Route path="/contact" element={<Contact/>}/>
  </Route>
   </Routes>
  
  );
}

export default App;
