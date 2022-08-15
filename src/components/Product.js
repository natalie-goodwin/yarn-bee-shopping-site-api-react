/* holds props for product, rating, and stars*/
import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReviewList from "./review-list"; /*passing ReviewList and ReviewButton components to the Movie class */
import ReviewButton from "./review-button";



export default class Product extends React.Component {
    constructor(props) { /*passing the product props from the constructor into the 
    superconstructor so they can be reused in the component */
        super(props);
        this.state = { /*adding props to the state so the state will update correctly; 
        state is the current state of the data */
            name: props.name,
            image: props.image,
            price: props.price,  
            reviews: props.reviews 
                
        }
        this.setReviews = this.setReviews.bind(this) /*have to bind this to setReviews  */
    }
    
    setReviews(e) {
        let newReview = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value
        this.setState( state => {
            if ( state.name === e.target.name ) { /*when a user adds a review it will be pushed 
            to the Review array */
                state.reviews.push(newReview)
                return {reviews: state.reviews }
            }
        })

    }

    render() {
        return( /*returning AddToCartButton, ReviewList, and ReviewButton */ 
            <Container>
                <br/> <br/> <br/>
                <Row>
                    <Col>
                    <img src={this.state.image} alt="product image" />
                    </Col>
                    <Col>
                   <h6>{this.state.name} </h6> 
                    <br/> 
                   <h6>{this.state.price}</h6> 
                    </Col>                   
                </Row> 
                    <ReviewList reviews={this.state.reviews} />
                    <ReviewButton onClick={ (e) => this.setReviews(e) } name={this.state.name} />
                              
            </Container>
            
       ) 
    }
}

    





