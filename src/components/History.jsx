import { Carousel, Col, Container, Row } from "react-bootstrap";
import hisbooks from "../products/history.json";

const History = () => (
  <Container>
    <Row className="justify-content-center mt-3">
      <Col xs={12} md={3}>
        <Carousel>
          {hisbooks.map((book) => (
            <Carousel.Item key={book.asin}>
              <img className="d-block w-100" src={book.img} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default History;
