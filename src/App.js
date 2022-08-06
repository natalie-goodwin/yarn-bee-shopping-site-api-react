/* This will hold the react-router pages*/

import { Route, Switch } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/navbar';
import Home from './pages/home';
import Cart from './pages/cart';
import ShopOurSite from './pages/shopoursite';
import StoreInfo from './pages/storeinfo';

function App() {
  return (
    
      <div className="App">
      <NavBar />
      
    
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