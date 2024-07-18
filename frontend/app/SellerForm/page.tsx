'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

interface FormData {
  location: string;
  purpose: string;
  price: string;
  areaSize: string;
  bedrooms: string;
  bathrooms: string;
  kitchen: string;
  propertyDescription: string;
  propertyFeatures: {
    busy: boolean;
    peaceful: boolean;
    greenArea: boolean;
    commercialArea: boolean;
    supportiveCommunity: boolean;
    resistantCommunity: boolean;
  };
}

const SellerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    location: '',
    purpose: '',
    price: '',
    areaSize: '',
    bedrooms: '',
    bathrooms: '',
    kitchen: '',
    propertyDescription: '',
    propertyFeatures: {
      busy: false,
      peaceful: false,
      greenArea: false,
      commercialArea: false,
      supportiveCommunity: false,
      resistantCommunity: false,
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prevFormData => ({
        ...prevFormData,
        propertyFeatures: {
          ...prevFormData.propertyFeatures,
          [name]: checked,
        },
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Seller Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3 align-items-center">
          <Col md={9}>
            <Form.Group>
              <h4>Purpose</h4>
              <div className="d-flex mt-3">
                <Button
                  className='me-5 rounded-5 px-3'
                  variant={formData.purpose === 'sell' ? 'primary' : 'outline-primary'}
                  onClick={() => setFormData(prev => ({ ...prev, purpose: 'sell' }))}
                >
                  Sell
                </Button>
                <Button
                  className='ms-2 rounded-5 px-3'
                  variant={formData.purpose === 'rent' ? 'primary' : 'outline-primary'}
                  onClick={() => setFormData(prev => ({ ...prev, purpose: 'rent' }))}
                >
                  Rent
                </Button>
              </div>
            </Form.Group>
          </Col>
          <Col md={3} className="p-3 border rounded-circle shadow-sm">
            <Button variant="link">
              <img src="/home-icon.png" alt="Icon" />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group>
              <h4>Location</h4>
              <div className="d-flex mt-3 "></div>
              <Form.Control className='w-50 mb-4'
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <Form.Group>
              <h4>Area Size</h4>
              <div className="d-flex mt-3"></div>
              <Form.Control
                type="text"
                name="areaSize"
                value={formData.areaSize}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group>
              <h4>Price</h4>
              <div className="d-flex mt-3"></div>
              <Form.Control
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
        <div className="d-flex mt-3"></div>
          <h3>Property Description</h3>
          <Form.Control className='w-50'
            as="textarea"
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Bedrooms:</Form.Label>
              <Form.Control
                type="text"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Bathrooms:</Form.Label>
              <Form.Control
                type="text"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Kitchen:</Form.Label>
              <Form.Control
                type="text"
                name="kitchen"
                value={formData.kitchen}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <Form.Label>Property Features:</Form.Label>
          <Row>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                id="busy"
                label="Busy Area"
                checked={formData.propertyFeatures.busy}
                onChange={handleChange}
              />
            </Col>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                id="peaceful"
                label="Peaceful Area"
                checked={formData.propertyFeatures.peaceful}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                id="greenArea"
                label="Green Area"
                checked={formData.propertyFeatures.greenArea}
                onChange={handleChange}
              />
            </Col>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                id="commercialArea"
                label="Commercial Area"
                checked={formData.propertyFeatures.commercialArea}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                id="supportiveCommunity"
                label="Supportive Community"
                checked={formData.propertyFeatures.supportiveCommunity}
                onChange={handleChange}
              />
            </Col>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                id="resistantCommunity"
                label="Resistant Community"
                checked={formData.propertyFeatures.resistantCommunity}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Button 
            type="submit" variant="primary" className='me-5 rounded-5 px-3'>
              publish
            </Button>
          </Col>
          <Col md={6}>
          <Button variant="primary" className='me-5 rounded-5 px-3'>
             Publish
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SellerForm;
