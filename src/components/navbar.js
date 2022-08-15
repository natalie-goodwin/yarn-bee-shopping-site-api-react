/*NavBar component: holds links for the website */
import React from "react";
import Container from 'react-bootstrap/Container' /*react bootsrap container */
import Nav from 'react-bootstrap/Nav'; /*react bootsrap nav */
import Navbar from 'react-bootstrap/Navbar'; /*react bootsrap navbar */


const NavBar = () => {
    return (
       
       
<Navbar expand="lg" className="navbar-style">
      
      <Container>
        <Navbar.Brand href="/">YarnBee
        <img className= "honeybee" src="images/honeyBee.png" alt="honeybee" />        
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">            
            <Nav className="me-auto">  
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/storeinfo">Store Info</Nav.Link>                      
            <Nav.Link href="/productsinstore">Products in Our Store</Nav.Link>            
          </Nav>
        </Navbar.Collapse>        
      </Container>
    </Navbar>      
        )
    };
    
    export default NavBar;







      