'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Col, Form, Row, Modal, InputGroup, FormControl } from 'react-bootstrap';
import '../../styles/sellerform.css';

interface FormData {
  location: string;
  purpose: string;
  price: string;
  areaSize: string;
  bedrooms: number;
  bathrooms: number;
  kitchen: number;
  propertyDescription: string;
  environment: string[];
}

const SellerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    location: '',
    purpose: '',
    price: '',
    areaSize: '',
    bedrooms: 0,
    bathrooms: 0,
    kitchen: 0,
    propertyDescription: '',
    environment: [],
  });

  const [showEnvironmentModal, setShowEnvironmentModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEnvironments, setFilteredEnvironments] = useState(['Busy', 'Peaceful', 'Green', 'Commercial', 'Supportive', 'Safe', 'Affordable', 'Pet Friendly']);
  const [selectedEnvironments, setSelectedEnvironments] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleIncrement = (field: keyof FormData) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: (prevFormData[field] as number) + 1,
    }));
  };

  const handleDecrement = (field: keyof FormData) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: Math.max((prevFormData[field] as number) - 1, 0),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle form submission logic here
  };

  const handleEnvironmentSelect = (env: string) => {
    setSelectedEnvironments(prev =>
      prev.includes(env) ? prev.filter(e => e !== env) : [...prev, env]
    );
  };

  const handleConfirmEnvironmentSelection = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      environment: selectedEnvironments,
    }));
    setShowEnvironmentModal(false);
  };

  const handleCancelEnvironmentSelection = () => {
    setSelectedEnvironments([]);
    setShowEnvironmentModal(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredEnvironments(
      ['Busy', 'Peaceful', 'Green', 'Commercial', 'Supportive', 'Safe', 'Affordable', 'Pet Friendly'].filter(env => env.toLowerCase().includes(query))
    );
  };

  return (
    <div className="seller-form mt-5 mx-auto">
      <h1 className="text-center mb-4">Property Details</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3 align-items-center">
          <Col md={8}>
            <Form.Group>
              <h4>Purpose</h4>
              <div className="d-flex mt-3">
                <Button
                  className={`me-3 rounded-5 px-4 ${formData.purpose === 'sell' ? 'active' : ''}`}
                  variant={formData.purpose === 'sell' ? 'primary' : 'outline-primary'}
                  onClick={() => setFormData(prev => ({ ...prev, purpose: 'sell' }))}
                >
                  <img src="/buy-home.png" alt="Icon" className="buy-image me-2" />
                  Sell
                </Button>
                <Button
                  className={`ms-3 rounded-5 px-4 ${formData.purpose === 'rent' ? 'active' : ''}`}
                  variant={formData.purpose === 'rent' ? 'primary' : 'outline-primary'}
                  onClick={() => setFormData(prev => ({ ...prev, purpose: 'rent' }))}
>               
                 <img src="/key.png" alt="Icon" className="key-image me-2" />
                Rent
                </Button>

              </div>
            </Form.Group>
          </Col>
          <Col md={4} className="p-3 d-flex justify-content-center align-items-center">
            <div className="icon-container rounded-circle">
              <img src="/home-icon.png" alt="Icon" className="icon-image" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Form.Group>
              <h4>Location</h4>
              <Form.Control
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
          <Col lg={6}>
            <Form.Group>
              <h4>Area Size</h4>
              <Form.Control
                type="text"
                name="areaSize"
                value={formData.areaSize}
                onChange={handleChange}
                className="short-input"
                required
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <h4>Price</h4>
              <Form.Control
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="short-input"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <h4>Description</h4>
          <Form.Control
            as="textarea"
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className='container row'>
          <div className="col-md-6">
            <h4 className="mt-4">Features</h4>
            <ul className="features-list">
              <li className="features-list-item">
                <label>Bedrooms:</label>
                <div className="qty">
                  <span className="minus bg-dark" onClick={() => handleDecrement('bedrooms')}>-</span>
                  <input
                    type="text"
                    name="bedrooms"
                    value={formData.bedrooms}
                    readOnly
                    className="count"
                  />
                  <span className="plus bg-dark" onClick={() => handleIncrement('bedrooms')}>+</span>
                </div>
              </li>
              <li className="features-list-item">
                <label>Kitchen:</label>
                <div className="qty">
                  <span className="minus bg-dark" onClick={() => handleDecrement('kitchen')}>-</span>
                  <input
                    type="text"
                    name="kitchen"
                    value={formData.kitchen}
                    readOnly
                    className="count"
                  />
                  <span className="plus bg-dark" onClick={() => handleIncrement('kitchen')}>+</span>
                </div>
              </li>
              <li className="features-list-item">
                <label>Bathrooms:</label>
                <div className="qty">
                  <span className="minus bg-dark" onClick={() => handleDecrement('bathrooms')}>-</span>
                  <input
                    type="text"
                    name="bathrooms"
                    value={formData.bathrooms}
                    readOnly
                    className="count"
                  />
                  <span className="plus bg-dark" onClick={() => handleIncrement('bathrooms')}>+</span>
                </div>
              </li>
            </ul>

            
          </div>

          <div className="col-md-6">
            <Modal show={showEnvironmentModal} onHide={() => setShowEnvironmentModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Select Environment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </InputGroup>
                <ul className="list-group">
                  {filteredEnvironments.map((env) => (
                    <li
                      key={env}
                      className={`list-group-item environment-option ${selectedEnvironments.includes(env) ? 'selected' : ''}`}
                      onClick={() => handleEnvironmentSelect(env)}
                    >
                      {env}
                    </li>
                  ))}
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="primary"
                  onClick={handleConfirmEnvironmentSelection}
                  className="me-2"
                >
                  Confirm
                </Button>
                <Button
                  variant="primary"
                  onClick={handleCancelEnvironmentSelection}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
            <Form.Group className="mt-4">
              <h4>Environment</h4>
              <div className="d-flex align-items-center">
                <span className="me-3">{formData.environment.length > 0 ? formData.environment.join(', ') : 'Select environments'}</span>
                <Button variant="outline-secondary" onClick={() => setShowEnvironmentModal(true)}>
                  <i className="bi bi-plus"></i>
                </Button>
              </div>
            </Form.Group>
          </div>
        </div>
      </Form>
      <Row className="mb-3">
              <Col className="text-center">
                <Button type="submit" variant="primary" className="rounded-5 px-4 me-2">
                  Publish
                </Button>
                <Button variant="primary" className="rounded-5 px-4 ms-2">
                  Cancel
                </Button>
              </Col>
            </Row>
    </div>
  );
};

export default SellerForm;
