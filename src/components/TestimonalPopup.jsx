import React from 'react';
import '../styles/Teams.module.css';

const TestimonialPopup = ({ onClose }) => {
  return (
    <div className="testimonial-popup-overlay">
      <div className="testimonial-popup">
        <button className="popup-close" onClick={onClose}>×</button>
        <div className="popup-content">
          <h1>Testimonials</h1>
          <p>
            Our clients are so much satisfied by working with us. The 100% satisfaction ratio and tremendous respect
            showcase the affection of clients towards the company. Each client is like a star in the constellation,
            without it the beauty is incomplete.
          </p>
          <p>
            Let's have a look at what they have to say about their experience with Exeoft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPopup;
