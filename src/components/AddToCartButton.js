import React from "react";

/*Edit to fit with shopping cart and Products */

export default class AddToCartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.name,
            id: props.id
        }
        this.handleClick = this.handleClick.bind(this) /*bind this to the handleClick method */
    }

    handleClick(e) {
        this.props.onClick(e)
        console.log(e); 
    } /*makes the review button clickable and links a specific button to a specific film title; handleClick will call for onClick */
 
    render() {
        return( /*this is the code that creates the review button and review form */
            <div>
               <button className="btn btn-info" onClick={this.handleClick} name={this.state.title} id={this.state.id}>Add to cart</button>
            </div>
        ) 
    }
}