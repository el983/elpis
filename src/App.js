import React from 'react';
import VantaGlobe from './VantaGlobe';
import SnakeDottedLine from './SnakeDottedLine'; // Import the SnakeDottedLine component
import DolphinSection from './DolphinSection';
import Footer from './components/Footer';
import './App.css';

// Import images from the images folder
import Image1 from './images/5.png'; // Replace with your actual image file names
import Image2 from './images/6.png';
import Image3 from './images/7.png';
import Image4 from './images/8.png';
import Image5 from './images/9.png';
import Image6 from './images/10.png';
import Image7 from './images/11.png';
import Image8 from './images/12.png';
import Image9 from './images/13.png';
import Image10 from './images/14.png';
import Image11 from './images/15.png';

function App() {
  return (
    <div className="App">
      {/* Vanta Globe Banner */}
      <VantaGlobe />

      {/* Snake Dotted Line */}
      <SnakeDottedLine />

      {/* Spacer to ensure content starts below the SnakeDottedLine */}
      <div style={{ height: '50vh' }}></div>

      {/* Dolphin Section */}
      <DolphinSection />

      {/* Additional Content with Images */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to My Website</h1>
        <p>Scroll down to see the globe move!</p>
        <div style={{ height: 'auto', background: '#f0f0f0', padding: '20px' }}>
          <h2>Image Gallery</h2>
          <div className="image-gallery">
            <img src={Image1} alt="Image 1" />
            <img src={Image2} alt="Image 2" />
            <img src={Image3} alt="Image 3" />
            <img src={Image4} alt="Image 4" />
            <img src={Image5} alt="Image 5" />
            <img src={Image6} alt="Image 6" />
            <img src={Image7} alt="Image 7" />
            <img src={Image8} alt="Image 8" />
            <img src={Image9} alt="Image 9" />
            <img src={Image10} alt="Image 10" />
            <img src={Image11} alt="Image 11" />
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
