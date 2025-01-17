"use client";

import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import '../styles/selectedlist.css';
const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
    const [showModal, setShowModal] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);
  
    const handleThumbnailClick = (index: number) => {
      setCarouselIndex(index);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
  
    const thumbnails = images.slice(0, 6);
  
    return (
      <div className="image-gallery">
        <div className="main-image">
          <img 
            src={images[0]} 
            alt="Main" 
            className="img-fluid" 
            onClick={() => handleThumbnailClick(0)} 
          />
        </div>
        <div className="thumbnail-row d-flex mt-3">
          {thumbnails.map((image, index) => (
            <div key={index} className="thumbnail" onClick={() => handleThumbnailClick(index)}>
              <img src={image} alt={`Thumbnail ${index}`} className="img-thumbnail" />
            </div>
          ))}
        </div>
  
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Body>
            <Carousel activeIndex={carouselIndex} onSelect={(selectedIndex) => setCarouselIndex(selectedIndex)} interval={null}>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </div>
    );
  };
  
  export default ImageGallery;