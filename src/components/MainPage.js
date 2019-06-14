import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap'


class MainPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Organik Lezzetler</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank"
                  >
                      Bingol Bali
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default MainPage;
