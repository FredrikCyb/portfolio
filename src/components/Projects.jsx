import React from 'react';
import './Projects.css';
import backgroundVideo from '../assets/backgroundvid.mp4';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.png';

const Projects = () => {
  const projects = [
    {
      title: "Bachelor Thesis",
      image: pic1,
      link: "https://github.com/FredrikCyb/Bachelor-Thesis",
      description: "integrating a large language model and Shodan for assessing vulnerabilities within Cybersecurity."
    },
    {
      title: "Portfolio page",
      image: pic2,
      link: "https://github.com/FredrikCyb/portfolio",
      description: "My portfolio page built with React"
    },
    {
      title: "GitHub",
      image: pic3,
      link: "https://github.com/FredrikCyb?tab=repositories",
      description: "Check out my code"
    },
    {
      title: "LinkedIn",
      image: pic4,
      link: "https://www.linkedin.com/in/fredrik-jensen-6032a5242/",
      description: "Connect with me"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <video
        autoPlay
        loop
        muted
        className="projects-bg-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="projects-content">
        <h2 className="projects-title">My Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-button"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="projects-footer">
        &copy; {new Date().getFullYear()} Fredrik Jensen. All rights reserved.
      </footer>
    </section>
  );
};

export default Projects; 