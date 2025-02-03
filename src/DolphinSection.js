// src/components/DolphinSection.js
import React from 'react';

const DolphinSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Watch the Dolphin Swim!</h2>
      <div style={styles.gifContainer}>
        <img 
          src="/dolphin.gif" 
          alt="Dolphin swimming" 
          style={styles.gif}
        />
        <div style={styles.textOverlay}>
          <p style={styles.overlayHeading}>Core Values:</p>
          <ul style={styles.overlayList}>
            <li>Excellence</li>
            <li>Trust</li>
            <li>Collaboration</li>
            <li>Integrity</li>
            <li>Leadership</li>
            <li>Accountability</li>
            <li>Passion</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(to bottom, white 0%,rgba(4, 100, 185, 0.66) 50%, white 100%)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  gifContainer: {
    position: 'relative', // Required for text positioning
    display: 'inline-block', // Ensures the container wraps the GIF
  },
  gif: {
    maxWidth: '100%',
    height: '800px',
    borderRadius: '10px',
    
    
  },
  textOverlay: {
    position: 'absolute', // Positions the text over the GIF
    top: '50%', // Centers vertically
    left: '50%', // Centers horizontally
    transform: 'translate(-50%, -50%)', // Centers the text precisely
    textAlign: 'left', // Aligns text to the left
    backgroundColor: 'rgba(255, 255, 255, 0)', // Semi-transparent background
    padding: '20px',
    borderRadius: '10px',
    color: '#fff', // White text
  },
  overlayHeading: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds a shadow for better readability
  },
  overlayList: {
    listStyleType: 'none', // Removes default bullet points
    padding: 0,
    margin: 0,
    fontSize: '1.2rem',
    lineHeight: '1.6', // Adds spacing between list items
  },
};

export default DolphinSection;