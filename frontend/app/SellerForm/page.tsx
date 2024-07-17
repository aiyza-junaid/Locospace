'use client'
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  propertyTitle: string;
  propertyType: string;
  propertyDescription: string;
  location: string;
  price: string;
  areaSize: string;
  bedrooms: string;
  bathrooms: string;
  propertyFeatures: {
    busyOrPeaceful: boolean;
    greenOrCommercial: boolean;
    supportiveOrResistant: boolean;
  };
}

const SellerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyTitle: '',
    propertyType: '',
    propertyDescription: '',
    location: '',
    price: '',
    areaSize: '',
    bedrooms: '',
    bathrooms: '',
    propertyFeatures: {
      busyOrPeaceful: false,
      greenOrCommercial: false,
      supportiveOrResistant: false,
    },
  });

  useEffect(() => {
    // Reset form data when component mounts or formData dependencies change
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      propertyTitle: '',
      propertyType: '',
      propertyDescription: '',
      location: '',
      price: '',
      areaSize: '',
      bedrooms: '',
      bathrooms: '',
      propertyFeatures: {
        busyOrPeaceful: false,
        greenOrCommercial: false,
        supportiveOrResistant: false,
      },
    });
  }, []);

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
    <div className="container mt-5">
      <h1 className="text-center mb-4">Seller Form</h1>
      <form onSubmit={handleSubmit}>
        <h2>Seller Information</h2>
        {/* Seller information inputs */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {/* Other seller inputs like email, phone, address */}
        {/* Property details inputs */}
        <div className="form-group">
          <label htmlFor="propertyTitle">Property Title:</label>
          <input
            type="text"
            id="propertyTitle"
            name="propertyTitle"
            value={formData.propertyTitle}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {/* Other property details inputs like propertyType, location, price */}
        <h2>Property Description</h2>
        <div className="form-group">
          <label htmlFor="propertyDescription">Property Description:</label>
          <textarea
            id="propertyDescription"
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {/* Property features checkboxes */}
        <div className="form-group">
          <label>Property Features:</label>
          <div className="form-check">
            <input
              type="checkbox"
              id="busyOrPeaceful"
              name="busyOrPeaceful"
              checked={formData.propertyFeatures.busyOrPeaceful}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="busyOrPeaceful" className="form-check-label">Busy or Peaceful Area</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="greenOrCommercial"
              name="greenOrCommercial"
              checked={formData.propertyFeatures.greenOrCommercial}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="greenOrCommercial" className="form-check-label">Green or Commercial Area</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="supportiveOrResistant"
              name="supportiveOrResistant"
              checked={formData.propertyFeatures.supportiveOrResistant}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="supportiveOrResistant" className="form-check-label">Supportive or Resistant Community</label>
          </div>
        </div>
        {/* Other property details inputs like areaSize, bedrooms, bathrooms */}
        {/* Listing submission button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SellerForm;
