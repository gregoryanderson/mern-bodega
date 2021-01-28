import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='secondary-background'>
      <Container>
        <Row>
          <Col className="text-center py-3">Copywrite &copy; Buttermilk's Bodega</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
