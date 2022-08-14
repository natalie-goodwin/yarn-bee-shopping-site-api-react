import React, { Component } from "react";
import OrderList from "./OrderList";

export default class ShoppingCart extends Component {
  //Executes when the component is mounted
  constructor(props) {
    super(props); /*calling super class's 
    constructor; constructors receives the props
    and they are passed to the super constructor; 
    parent component supplies props that are stored
    to the constructor and initialized in the 
    super constructor and this makes props available
    in the component; don't make http requests in
    the constructor; do this in the render (component did
    mount); constructor executes, then render executes
    then component did mount executes*/
    //Initialize the state
    this.state = {
      products: [
        
      ],
    }; /*the constructor is the only place you 
    can initialize the state by writing 
    ("this.state="); if you tried to assign this.state
    to render(), it is invalid; in all methods EXCEPT
    the constructor, you must use this.setState in 
    order to make updates into the state*/
  }

  render() {
    return (
      <div className="container-fluid">
        {/*this is the code for the shopping cart component*/}
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <OrderList
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-outline-info">Buy Now</button>
              </OrderList>
            );
          })}
          {/*parent will give child component the above handle methods to handle the increment and decrement events in the child component; parent can supply both props and content to 
          the child.*/}
        </div>
      </div>
    );
  } //render ends here

  //Executes after constructor and render method(includes life
  //cycles of child components, if any) of current
  //component; here is where you can make http requests
  componentDidMount() {
    //fetch data from data source
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate-ShoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );

    if (prevProps.x != this.props.x) {
      //condition: make http call
      //make http call; always make the call conditionally
    } /* if http call is unconditional, it will lead 
    to performance issues because the method will be excuted
    for each change of state in the props; */
  }
  /*Executes when current instance of curren component 
  is being deleted from memory */
  // componentWillUnmount() {
  //   console.log("componentWillUnmount-ShoppingCart");
  // }

  // componentDidCatch(error, info) {
  //   console.log("componentWillUnmount-ShoppingCart");
  //   console.log(error, info);

  //   localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  // }

  //executes when the user clicks on + button
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    //update the state of current component(parent component)
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++; /*increase quantity onClick */
      this.setState({
        products: allProducts,
      }); /*setting state allows for updating the state of the quantity */
    }
  };

  //executes when user clicks on - button
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    //update the state of current component(parent component)

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--; /*decrease quantity onClick */
      this.setState({ products: allProducts });
    }
  };

  // executes when the user clicks on Delete(X) button in Product component
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete this product?")) {
      //delete product based on index
      allProducts.splice(
        index,
        1
      ); /*1 element will be removed in the products array */
      //update the state of current component(parent component)
      this.setState({ products: allProducts });
    }
  };
} /*pass as props for each element in the array, the arrow function will be

/*spread operator gets all elements fro the particular 
array             executed; it produces a new instance of product; each 
            element is received as a (prod) argument; here we 
            invoke the product component inside the shopping cart 
            component. The invoked component is the child of the 
            component that invokes it. Product is child of 
            ShoppingCart*/
/*key is internally used by React and the DOM no loger 
            has access to the key to print out. This is the reason 
            for adding the id */
/*all properties passed from parent to child are stored 
            in the object literal: props; props refers to all the 
            properties passed from parent to child*/
