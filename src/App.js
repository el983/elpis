
import React from 'react';
import VantaGlobe from './VantaGlobe';
import SnakeDottedLine from './SnakeDottedLine'; // Import the SnakeDottedLine component
import DolphinSection from './DolphinSection';
import Footer from './components/Footer';
import './App.css';

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

      {/* Additional Content to Enable Scrolling */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to My Website</h1>
        <p>Scroll down to see the globe move!</p>
        <div style={{ height: '200vh', background: '#f0f0f0' }}>
          <p>Keep scrolling...</p>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;

// import React from 'react';
// import JigsawGlobeComponent from './VantaGlobe';

// function App() {
//   return (
//     <div className="App">
//       <JigsawGlobeComponent />
//     </div>
//   );
// }

// export default App;
