import React, { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  const handleViewProjects = () => {
    setShowProjects(true);
  };

  return (
    <div className="App">
      {showProjects ? (
        <Projects />
      ) : (
        <Hero onViewProjects={handleViewProjects} />
      )}
    </div>
  );
}

export default App; 