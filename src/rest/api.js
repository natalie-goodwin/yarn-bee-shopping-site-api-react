import React from "react";
import './App.css';
import Cart from './pages/cart'

const CART_ENDPOINT = "https://62f04496e2bca93cd2353e70.mockapi.io/cart";
// endpoint for all classes
export default class Api extends React.Component {
  constructor(props) { /*pass to super props */
    super(props);
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  } /*bind above methods; methods will be called 
  for adding and deleting items in cart */
  
  render() { /*here we want to iterate through the cart with if/else */
    const carts = this.state /*variable for iterating through state of cart */
    ? this.state.carts.map((cart, index) => /*pass in cart and index arguments */
    <Cart /*we are returning a cart */
    key={index} /*unique id for each cart */
    data={cart} /*the cart for this data */
    addNewRoom={this.addNewItem} /*method passed down from props*/
    deleteRoom={this.deleteItem} />) /*method passed down from props */
    : null; /*if the state is not null we iterate through the cart and create a cart element; 
    if it's null, we won't render anything */ 
  return (
    <div>
      {carts} 
    </div> /*array of houses being iterated */
  ); /*we will return a div with all the houses we create above */
}/*we have to add a room and delete a room */
   /*if the state is not null, we will iterate through all the
  houses on the state using 'map', and create a house element 
  out of them, as above; if the state doesn't have houses, it
  will render as null   */ 

  componentDidMount(){ /* here make asynchronous calls*/
  fetch(CART_ENDPOINT)
    .then(res => res.json())
    .then(data => { /*when data comes back we call setState */
      this.setState ({
        carts: data /*data we get back becomes the cart in our state -- grabs cart */
      }); /*the data we get back from the http request,
      we make that a cart in our state */
    });
  }

  deleteItem(e, cart, item) { /* e is the default action when the browser handles an event */
    const index = cart.items.indexOf(item); /*index identifies which cart list we will delete */
    cart.items.splice(index, 1); /*we are splicing out item at index, and only splicing one of them */
    updateHouse(house) /*taking array we have in memory and removing a room */
      .then(() => { /* here we send HTTP request to make this permanent in the database that our API is wrapping around*/
        this.setState(state => { /*passing in cart through the updateCart method */
          for (let c of state.carts){ /* iterate over cart list in previouse state*/
            if (c.id === cart.id) {
              let c = cart;
              break; /*iterate through cart in 
              previous state and when we find 
              cart id we want to update we set 'c' 
              to it and this will be new state 
              object(updated cart) and return new 
              state with updated cart*/
            } /*here we call update cart and display new data
            once the cart is updated to rerender it in the UI */
          }
          return state;
        }); 
      });/*have an index and identify which item we will delete; 
      we remove the element at position index, and just
      remove one */

      e.preventDefault();
  } 

  addNewItem(e, cart, item) { /*here we push a new item to the cart */
    cart.items.push(item)
    updateCart(cart)
      .then(() => {
        this.setState(state => {
          for (let c of state.carts){ 
            if (c.id === cart.id) {
              let c = cart;
              break;
            } /*here we call update cart and display new data
            once the cart is updated to rerender it in the UI */
          }
          return state;
        }); 
      });/* with addItem, we want to push this new item to 
      the house*/  
      e.preventDefault();/*this is the default 
      action that any event the browser 
      fires off is going to take */
  } 
} 
 

function updateCart(cart) { /*using updateCart from above in this function */
  return fetch(`${CART_ENDPOINT}/${cart.id}`, {
    method: 'PUT', /*update house and change rooms */
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(cart)
  }); /*whatever cart is passed into this method, we send a 
  "PUT" request and send the cart back to the server to be 
  updated in the database*/
} /*whether we add or delete an item, we really just 
perform a 'PUT' request, update and change items on the cart*/
