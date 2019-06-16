import React, { Component } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

import Carousell from './Carousel'
import Products from './Products'


class MainPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="heading">
          <Container>
            <Row>
              <Col>
                <h1>Organik Lezzetler</h1>
                <h2>Doğal Yaşam, Sağlıklı Yaşam</h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Products/>

        <Carousell/>
        
        <Container>
          <Row >
            <Col  xs="12" sm="4" className="info" >
              <FontAwesomeIcon icon={faLeaf} size="4x"/>
              <h6>%100 Dogal urunler</h6>
              <p>Doğadan evinize</p>
            </Col>
            <Col  xs="12" sm="4" className="info" >
              <FontAwesomeIcon icon={faShippingFast} size="4x"/>
              <h6>HIZLI TESLİMAT</h6>
              <p>Siparisleriniz ozenle adresinize teslim edilir.</p>
            </Col>
            <Col  xs="12" sm="4" className="info" >
            <a href="https://api.whatsapp.com/send?phone=905432631150" target="1">
              <FontAwesomeIcon icon={faWhatsappSquare} size="4x" />
            </a>
              <h6>TELEFONDA SİPARİŞ</h6>
              <p>0543 263 11 50<br/>Yukarıdaki butona tıklayıp anında Whatsapp'dan bize ulaşabilirsiniz.</p>
            </Col>
          </Row>
        </Container>

        

      </div>
    );
  }
}

export default MainPage;
