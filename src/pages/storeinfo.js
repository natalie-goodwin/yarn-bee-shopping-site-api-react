import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const StoreInfo = () => {
    return (
        <Container>
            <br/>
            <h3>Hours</h3>
            <Table striped bordered hover>
            <thead>
            <tr>            
              <th scope="col-sm">Day</th>
              <th scope="col-sm">Time</th>            
            </tr>
          </thead>        
          <tbody>
            <tr>        
              <td>SUNDAY</td>
              <td>12:00 noon - 5:00 p.m.</td>            
            </tr>
            <tr>            
              <td>MONDAY</td>
              <td>10:00 a.m. - 9:00 p.m.</td>            
            </tr>
            <tr>            
              <td>TUESDAY</td>
              <td>10:00 a.m. - 9:00 p.m.</td>            
            </tr>
            <tr>            
              <td>WEDNESDAY</td>
              <td>10:00 a.m. - 9:00 p.m.</td>            
            </tr>
            <tr>           
              <td>THURSDAY</td>
              <td>10:00 a.m. - 9:00 p.m.</td>            
            </tr>
            <tr>          
              <td>FRIDAY</td>
              <td>10:00 a.m. - 9:00 p.m.</td>            
            </tr>
            <tr>            
              <td>SATURDAY</td>
              <td>10:00 a.m. - 7:00 p.m.</td>            
            </tr>
          </tbody>
            </Table>
            <br/>
            <Row>
                <Col>
                <h3>Location</h3>
                <h5>1237 White Bridge Rd.</h5>
                <h5>Nashville, TN 37205</h5>
                </Col>
                <Col>
                <h3>Contact Us</h3>
                <h5>615-555-4999</h5>
                <h5>customerservice@yarnbee.com</h5>
                </Col>
            </Row>
            <br/><br/>
            <Row>
            <p>Images available on <a href="http://www.unsplash.com">unsplash.com</a>. 
          Credits: yarn closet: Paul Hanaoka; yarn basket: Dragan Smiljkovic; crochet hook with heart: gojak</p>
            </Row>
        </Container>
    )


};

export default StoreInfo;


/*  
        
          
        
          
       
        
        </div>
    
           
          
        </div> <!--closing footer class div-->   */