/*Home Page */

import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        
        <Container>
            <br/> 
            <Row>                                     
                <Col>
                <blockquote>
                <p>
                  YarnBee is a family-owned craft business in the Nashville community. Our goal is to
                  provide our customers with the yarn and needlework brands they know and love including Lion, Red Heart,
                  Lily Sugar 'N Cream, Caron, Bernat, Clover, Boye and many more! Visit us today and let us 
                  help you find what you need for your next project.                                  
                </p>                
                </blockquote>
                </Col>
                <Col>
                <img className="yarnCloset" src="images/Paul Hanaoka.jpg" alt="Yarn Closet"/> 
                </Col>         
                <Col>
                <img className="basket" src="images/Dragan SmiljkovicUnsplash.jpg" alt="..."/> 
                <img className="heart" src="images/gojakUpsplash.jpg" alt=""/>
                </Col>                
            </Row> 
            <br/>           
            <Row>            
            <p>Home page images available on <a href="http://www.unsplash.com">unsplash.com</a>. 
             Credits: yarn closet: Paul Hanaoka; yarn basket: Dragan Smiljkovic; crochet hook with heart: gojak. Product images from Amazon.com.</p>
            </Row>
        </Container>
           )    
};

export default Home;