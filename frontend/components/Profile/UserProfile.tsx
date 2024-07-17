import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../styles/profile.css'; // Make sure to adjust the path based on your folder structure
import useAuthStore from '../../authStore';

const UserProfile: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePictureBase64, setProfilePictureBase64] = useState<string>('');
  const [showModal, setShowModal] = useState(false);

  const { token } = useAuthStore();

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/myprofile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const Data = await response.json();
        setUsername(Data.username);
        setPassword(Data.password);
        setName(Data.name);
        setEmail(Data.email);
        setAddress(Data.address);
        if (Data.profilePicture) {
          setProfilePictureBase64(`data:${Data.profilePicture.contentType};base64,${Data.profilePicture}`);
        }
      } else {
        console.log('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    try {
      const response = await fetch('http://localhost:5000/api/edit', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        getData();
        setShowModal(false);
      } else {
        console.log('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [token]);

  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profilePictureBase64} alt="Profile" className="profile-img" />
      </div>
      <div className="profile-details">
        <div className="detail-box">
          <label>Name:</label>
          <p>{name}</p>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Edit Profile
          </Button>
        </div>
        <div className="detail-box">
          <label>Email:</label>
          <p>{email}</p>
        </div>
        <div className="detail-box">
          <label>Address:</label>
          <p>{address}</p>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formProfilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    setProfilePicture(file);
                  }
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;
