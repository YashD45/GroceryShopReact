
import './App.css';
import {Home} from './Home';
import {Cart} from './Cart';
import {MyOrder} from './MyOrder';
import {BrowserRouter,  NavLink} from "react-router-dom";
import {Route , Switch} from "react-router-dom";
import Searchbar from "./searchbar";
import SignIn from './SignIn';
//import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from "./SignUp";
import Header from './Header';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <h3 className=" d-flex justify-content-center m-3">
       GroceryShop
     </h3>
     
     <nav className="navbar navbar-expand-sm bg-light navbar-dark">
     
           <NavLink className="btn btn-light btn-outline-primary" to="/SignUp" >
             Signup
           </NavLink>
      
        
           <NavLink className="btn btn-light btn-outline-primary" to="/SignIn" >
             SignIn
           </NavLink>
        
       <ul className="navbar-nav">
         <li className="nav-item-m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/Home" >
             Home
           </NavLink>
         </li>
         <li className="nav-item-m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/MyOrder">
             MyOrder
           </NavLink>
         </li>
         <li className="nav-item-m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/Cart" >
             cart
           </NavLink>
         </li>
         <li className="nav-item-m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/logOut" >
             Logout
           </NavLink>
         </li>
        
        
         
       </ul>
       <div className="col-sm-6 offset-sm-3">
    <Searchbar  /></div>
     </nav>
     
  
    <Switch>
             <Route path='/Home' component={Home}/>
             <Route path='/MyOrder' component={MyOrder}/>
             <Route path='/Cart' component={Cart}/>
             <Route path='/SignUp' component={Signup}/>
             <Route path='/SignIn' component={SignIn}/>
             <Route path='/logOut' component={Header}/>
           </Switch>
           </div>
    </BrowserRouter>
  );
}

export default App;
