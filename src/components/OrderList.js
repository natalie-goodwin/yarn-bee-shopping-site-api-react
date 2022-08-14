import React, { Component } from "react";

export default class OrderList extends Component {
  constructor(props) {
    super(props);

    //console.log("Constructor-Product");

    this.state = {
      product: this.props.product,
    };fd
  } /*this allows for supplying all properties; if you want 
  to supply only individual properties, it is better to type out
  property (ex: this.props.id, this.props.price) */

  render() {
    //console.log(this.props); /*with console.log you don't see key because it is only accessible internally by react to
    // identify each instance of the element; react identifies
    // which element is being added, removed, or changed by
    // using key internally */
    //console.log("render-Product");

    return (
      <div className="col-lg-6">
        {/*it has to take up 6 columns on larger devices 
      but on smaller devices it occupies 12 columns */}
        <div className="card m-2">
          {/*m-2 produces a margin distance between each card */}
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span               
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }} /*when user clicks this span tag, it calls the onDelete method in
              the parent component and supplies current product as an argument which
              will be deleted in the parent component; user clicks the delte
              in the child and calls on the parent delte method and removing
              the product based on index, then re-renders */
              >
                <button className="btn btn-outline-info float-left">Delete Item</button>
              </span>
              
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          {/*card body ends here */}
          <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
            <div className="float-left">
              <span className="badge bg-info text-dark m-2">
                {this.state.product.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-info"
                  onClick={() => {
                    this.props.onIncrement(
                      this.state.product,
                      10
                    ); /*max value if increment 10 */
                  }}>                
                  +
                </button>
                <button
                  className="btn btn-outline-info"
                  onClick={() => {
                    this.props.onDecrement(
                      this.state.product,
                      0
                    ); /*mininum value if decrement in 0 */
                  }}>                  
                  -
                </button>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
        {/*this.props.children represents the react element of the button; this
        is how a parent supplies content to children and child component renders the same in the
        desired place */}
      </div>
    ); //render ends here
    /*the product is the child that grabs info from the parent 
    shoppingCart by using this.props; this.props is the built-in property 
    in the product component that contains the list of properties 
    supplied by the parent while invoking the child; every component
    contains props and state; props is set of values supplied from parent 
    component while invoking child component; but even though 
    one component is the parent of the child, each component 
    has its own state; neither component can access the state
    of the other component; you can change state using setState 
    method  */
  }

  /*Each time the child component phase will be 
  executed after the render method of the component*/

  // componentDidMount() {
  //   console.log("componentDidMount-Product");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate-Product");
  // }
  // /*Executes when current instance of curren component
  // is being deleted from memory */
  // componentWillUnmount() {
  //   console.log("componentWillUnmount-Product");
  // }
}
