import React, { useEffect } from "react";
import styles from '../styles/Footer.css';
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';

const Footer = () => {

  const MAPBOX_ACCESS_TOKEN = 'ADD YOUR ACCESS TOKEN';

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [67.0425, 24.8790],
      zoom: 14
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([67.0425, 24.8790]) // Coordinates of the marker's position
      .addTo(map);
    marker.setLngLat([67.0425, 24.8790]);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <footer id="footer">

      <div className="leftFooter">
        <h4>Get New Updates</h4>
        <div className="subscribe-container">
          <input type="email" placeholder="Enter your Email*" />
          <button>Subscribe</button>
        </div>
        <p>Stay informed with our latest news and exclusive content.</p>
      </div>

      <div className="midFooter">
        <h1>Tech Twirl</h1>
        <p>Where Quality Meets Innovation.</p>
        <p>© 2025 . All Rights Reserved.</p>
        <h4>Follow Us</h4>
        <div class="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="rightFooter">
        <h4>Our Location</h4>
        <div id="map" style={{ width: "100%", height: "200px" }}></div>
      </div>

    </footer>
  );
};

export default Footer;