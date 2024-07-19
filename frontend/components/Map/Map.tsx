// components/Map/Map.tsx

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../../styles/map.css'; // Import the CSS file

// Create a default icon to fix missing marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent: React.FC<{ onLocationSelect: (lat: number, lng: number) => void }> = ({ onLocationSelect }) => {
  const [position, setPosition] = React.useState<{ lat: number; lng: number } | null>(null);

  const handleLocationFound = (e: { latlng: { lat: number; lng: number } }) => {
    setPosition(e.latlng);
    onLocationSelect(e.latlng.lat, e.latlng.lng);
  };

  const findMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition({ lat: latitude, lng: longitude });
        onLocationSelect(latitude, longitude);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="map-container">
      <button type="button" onClick={findMe} className="find-me-button">Find Me</button>
      <MapContainer center={position || [51.505, -0.09]} zoom={13} className="map" key={position ? position.lat + position.lng : 'default'}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {position && <Marker position={[position.lat, position.lng]} />}
        <LocationFinder handleLocationFound={handleLocationFound} />
      </MapContainer>
    </div>
  );
};

const LocationFinder: React.FC<{ handleLocationFound: (e: { latlng: { lat: number; lng: number } }) => void }> = ({ handleLocationFound }) => {
  useMapEvents({
    click(e) {
      handleLocationFound(e);
    },
  });
  return null;
};

export default MapComponent;
