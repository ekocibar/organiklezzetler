import React  from 'react';
import './styles.css'
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

const cards = (img, title, info) => (
  <Col lg="4" xs="12" sm="6" className="cards">
    <Card>
      <CardImg top width="100%" src={img} alt="foto" />
      <CardBody>
        <CardTitle><strong>{title}</strong></CardTitle>
        <CardText>{info}</CardText>
      </CardBody>
    </Card>
  </Col>
  )

export default cards;