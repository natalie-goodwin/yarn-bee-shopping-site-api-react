/*NavBar component */
import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
       
       
<Navbar bg="light" expand="lg">
      
      <Container>
        <Navbar.Brand href="/">YarnBee
        <img className= "honeybee" src="images/honeyBee.png" alt="honeybee" />        
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">            
            <Nav className="me-auto">      
            <Nav.Link href="/storeinfo">Store Info</Nav.Link>                      
            <Nav.Link href="/shopoursite">Shop Our Site</Nav.Link>            
            <Nav.Link href="/cart">Go to Cart
            <img className="cart" src="images/cart.png" alt="cart" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>        
      </Container>
    </Navbar>      
        )
    };
    
    export default NavBar;







      