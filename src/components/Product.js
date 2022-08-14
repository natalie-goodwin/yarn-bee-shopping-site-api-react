/* holds props for product, rating, and stars*/
import React from "react";
import AddToCartButton from "./AddToCartButton";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";




export default class Product extends React.Component {
    constructor(props) { /*passing the product props from the constructor into the 
    superconstructor so they can be reused in the component */
        super(props);
        this.state = { /*adding props to the state so the state will update correctly; 
        state is the current state of the data */
            name: props.name,
            image: props.image,
            price: props.price,          
        }
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
                    <Col>
                        <AddToCartButton />
                    </Col>
                </Row>            
            </Container>
            
       ) 
    }
}