import React from 'react';
import './About.css'; // Create a CSS file for styling

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero vel velit lacinia cursus.
            Proin euismod libero eu ex ullamcorper bibendum. Duis ullamcorper, felis eu fringilla posuere,
            velit felis sodales odio, at tristique sapien tellus non ante.
          </p>
        </div>
        <div className="image-container">
          <img src="../src/Images/banquets10.jpg" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
