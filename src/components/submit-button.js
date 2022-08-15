/*This SubmitButton component will be added to the ReviewForm component */
import React from "react";
import Stars from "./Stars";


export default class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            id: props.id
        }
        this.handleClick = this.handleClick.bind(this) /*bind this to the handleClick 
        method */
    }

    handleClick(e) {
        this.props.onClick(e)
    } /*makes the review button clickable and links a specific button to a specific 
    product; handleClick will call for onClick */
    render() {
        return( /*this is the code that creates the review button and user review form */
            <div className="text-black bg-light card-footer col-sm-12">
                <p className="card-text">What you think of this product?</p>
                <p className="card-text"></p> 
                <Stars/>                  
                <input type="text" id="newReview" placeholder="Enter review"/><br /><br />
                <button className="btn btn-info" onClick={this.handleClick} 
                name={this.state.name} id={this.state.id}>Submit review</button>
            </div> /*creates button with handle click and is set to reviews in the Product 
            component */
        ) 
    }
}