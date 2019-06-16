import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Bottom extends Component {
    render() {
        return (
         <Jumbotron className="bottom">
            <Container >
              <Row>
                <Col>
                    <a href="https://www.instagram.com/_organiklezzetler_" target="1" >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=905432631150" target="1" >
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" className="green"/>
                    </a>
                </Col>
              </Row>
              <Row>
                <Col >
                    <p>Tüm Hakları Saklıdır <br/>kocibar © 2019 </p>
                </Col>
            </Row>
            </Container>
          </Jumbotron>
        );
    }
}

export default Bottom;