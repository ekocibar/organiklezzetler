import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Contact extends Component{
  render(){
    return(
      <div>
        <h1 className='details-heading'>İLETİŞİM</h1>
        <Container className='contact-container'>
          <Row>
            <Col>
              <p>
                Telefon : 
                <a className='green' href="https://api.whatsapp.com/send?phone=905432691150" target="1"> 0543 269 11 50</a>
              </p>
              <p> 
                instagram :
                <a className='blue' href="https://www.instagram.com/_organiklezzetler_/">  _organiklezzetler_</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
  
export default Contact;  