import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {
  const position = [51.505, -0.09]; // Example coordinates, replace with your location

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <MapContainer center={position} zoom={13} style={{ width: '100%', height: '400px' }}>
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tile layer URL
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Location;
