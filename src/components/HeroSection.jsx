import React from 'react';
import '././../styles/HeroSection.css'; // Make sure to import the CSS file
import { FaAngleDown } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function HeroSection({ scrollToPage }) {
  return (
    <div className="hero-container relative">
      <video
        className="hero-video "
        src="/src/assets/videos/back.mp4" // Ensure this path is correct
        autoPlay
        loop
        muted
      />
      <div
        onClick={() => scrollToPage(1)}
        className="hero-content flex flex-col gap-8
      absolute text-2xl items-center justify-between left-1/2 p-6 -translate-x-1/2 cursor-pointer"
      >
        <div className="flex items-center justify-center flex-col gap-3">
          {/* <p>Urban Adventures - Graffiti Art</p> */}
          <FaAngleDown className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

// Define prop types for the component
HeroSection.propTypes = {
  scrollToPage: PropTypes.func.isRequired,
};

export default HeroSection;
