import React from 'react';
import './Hero.css';
import backgroundVideo from '../assets/backgroundvid.mp4';

const Hero = ({ onViewProjects }) => {
  const handleScrollToProjects = () => {
    if (onViewProjects) {
      onViewProjects();
    } else {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="hero-container">
      <video
        autoPlay
        loop
        muted
        className="hero-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p>Fredrik Jensen</p>
        <button className="hero-button" onClick={handleScrollToProjects}>View Projects</button>
      </div>
    </div>
  );
};

export default Hero; 