/* holds props for product, rating, and stars*/
import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddToCartButton from "./add-to-cart-button";



export default class Item extends React.Component {
    constructor(props) { /*passing the product props from the constructor into the 
    superconstructor so they can be reused in the component */
        super(props);
        this.state = { /*adding props to the state so the state will update correctly; 
        state is the current state of the data */
            name: props.name,
            image: props.image,
            price: props.price,
            button: props.button,
           
        }
    }
    
  

    render() {
        return( /*returning AddToCartButton, ReviewList, and ReviewButton */ 
            <Container>
                <Row>
                    <Col>
                    <img src={this.state.image} alt="product image" />
                    </Col>
                    <Col>
                   <h2>{this.state.name} </h2> 
                    <br/> 
                   <h4>{this.state.price}</h4> 
                    </Col>
                    <Col>
                    <AddToCartButton/>
                    </Col>
                </Row>            
            </Container>
            
       ) 
    }
}