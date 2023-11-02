import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 15); // Replace with your office's latitude and longitude and desired zoom level

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });

    tileLayer.addTo(map);

    const marker = L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup('Kraft Interiors')
      .openPopup(); // Replace with your office's coordinates

    // Add a click event to the marker to zoom in when clicked
    marker.on('click', () => {
      map.setView(marker.getLatLng(), 17); // You can adjust the zoom level (e.g., 17) as desired
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default LeafletMap;
