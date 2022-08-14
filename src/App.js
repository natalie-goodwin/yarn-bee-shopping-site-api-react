/* This will hold the react-router pages, navbar, and main api page*/
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar';
import Home from "./components/Home"
import ShoppingCart from './components/ShoppingCart';
import ShopOurSite from './components/ShopOurSite';
import StoreInfo from './components/StoreInfo';


function App() {
  return (
    
      <div className="App">
      <NavBar className="navbar-style"/>   
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/storeinfo" component={StoreInfo}/> 
      <Route path="/shopoursite" component={ShopOurSite}/>
      <Route path="/shoppingcart" component={ShoppingCart}/>
      
    </Switch>
     
    </div>
  )
}

export default App;