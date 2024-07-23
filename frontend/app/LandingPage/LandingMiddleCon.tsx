import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Button, Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import './main.css';
import landingPageImage from './landingPageImage.svg';

const LandingPageComp: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Container fluid className="landing-container">
      <Row className="w-100">
        <Col className="left-half">
          <div>
            <div className="big-text">Find Your Perfect <br /> Home Today!</div>
            <div className="small-text">Welcome to Locospace, your ultimate destination for finding the perfect home</div>
            <div className="search-container">
              <div className="buttons-container">
                <Button className='search_buttons' variant="primary">Buy</Button>
                <Button className='search_buttons' variant="primary">Sell</Button>
                <Button className='search_buttons' variant="primary">Rent</Button>
              </div>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Discover your perfect home" />
                  <Button variant="outline-secondary" onClick={toggleFilters}>
                    <FontAwesomeIcon icon={faFilter} />
                  </Button>
                  <Button variant="primary" id="button-search">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </InputGroup>
                {showFilters && (
                  <Form.Group controlId="filter" className="mt-3">
                    <Form.Control as="select" multiple>
                      <option>Busy</option>
                      <option>Green</option>
                      <option>Pet friendly</option>
                    </Form.Control>
                  </Form.Group>
                )}
              </Form>
            </div>
          </div>
        </Col>
        <Col className="right-half">
          <Image src={landingPageImage}  width="500" height="500" alt="Landing Image" className="landing-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPageComp;
