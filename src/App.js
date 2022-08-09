/* This will hold the react-router pages, navbar, and main api page*/

import { Route, Switch } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/full-site components/navbar';
import Home from './pages/home';
import Cart from './pages/cart';
import ShopOurSite from './pages/shopoursite';
import StoreInfo from './pages/storeinfo';
import Api from './rest/api';

function App() {
  return (
    
      <div className="App">
      <NavBar />
      <Api />      
      
    
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/storeinfo" component={StoreInfo}/> 
      <Route path="/shopoursite" component={ShopOurSite}/>
      <Route path="/cart" component={Cart}/>
      
    </Switch>
     
    </div>
  )
}

export default App;