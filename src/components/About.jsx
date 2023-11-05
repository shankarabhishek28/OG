import React from 'react';
import './About.css'; // Create a CSS file for styling

const AboutSection = () => {
  return (
    <>
      <div className="heading">
        <h1 className='top'>WHYCHOOSEUS</h1>
        <h2 className='top2'>WHY CHOOSE US ?</h2>
      </div>
      <section className="about-section">

        <div className="about-content">
          <div className="text-content">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero vel velit lacinia cursus.
              Proin euismod libero eu ex ullamcorper bibendum. Duis ullamcorper, felis eu fringilla posuere,
              velit felis sodales odio, at tristique sapien tellus non ante.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad facere vel accusantium, iusto perspiciatis aut assumenda vero minima, consequatur exercitationem modi repellat temporibus, ea ab pariatur itaque repudiandae aspernatur?
            </p>
          </div>
          <div className="image-container">
            <img src="../src/Images/banquets10.jpg" alt="About Us" />
          </div>
        </div>
      </section>
     </>
  );
};

export default AboutSection;
