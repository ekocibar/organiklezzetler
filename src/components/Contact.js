import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Contact extends Component{
  render(){
    return(
      <div>
        <h1 className='details-heading'>ILETISIM</h1>
        <Container className='contact-container'>
          <Row>
            <Col>
              <p>
                Telefon : 0543 263 11 50
              </p>
              <p>
                email : organiklezzetler@gmail.com
              </p>
              <p>
                instagram : https://www.instagram.com/_organiklezzetler_/
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
  
export default Contact;  