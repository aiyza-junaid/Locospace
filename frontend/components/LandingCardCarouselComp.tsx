import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import '../styles/main.css';

const CardCarouselComp: React.FC = () => {
  return (
    <Container fluid className="carousel-container">
      <h2 className="heading">Explore Available Listings</h2>
      <Carousel id="carouselExampleIndicators" interval={3000}>
        <Carousel.Item>
          <Card className="d-block w-40 card-custom" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="your-image-url-1.jpg" alt="Card image cap" />
            <Card.Body>
              <Card.Title>Card title 1</Card.Title>
              <Card.Text>
                lala
              </Card.Text>
              <Button variant="primary" href="#">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="d-block w-40 card-custom" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="your-image-url-2.jpg" alt="Card image cap" />
            <Card.Body>
              <Card.Title>Card title 2</Card.Title>
              <Card.Text>
                alala
              </Card.Text>
              <Button variant="primary" href="#">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="d-block w-40 card-custom" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="your-image-url-3.jpg" alt="Card image cap" />
            <Card.Body>
              <Card.Title>Card title 3</Card.Title>
              <Card.Text>
                ahhh
              </Card.Text>
              <Button variant="primary" href="#">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CardCarouselComp;
