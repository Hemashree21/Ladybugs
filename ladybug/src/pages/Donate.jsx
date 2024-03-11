import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Donate = () => {

    const redirect = () => {
        window.open('https://www.donateinkind.in/clothes-donation', '_blank');
    }
    
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Image */}
        <img
          src="https://www.globalgiving.org/pfil/14810/ph_14810_164202.jpg"
          alt=""
          style={{ width: '100%', opacity: '0.5' }}
        />
        {/* Button */}
        <button
          style={{
            position: 'absolute',
            top: '50%',  // Adjust the vertical position as needed
            left: '50%', // Adjust the horizontal position as needed
            transform: 'translate(-50%, -50%)', // Center the button
            background: 'transparent',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            color: 'white', // Button text color
            cursor: 'pointer',
            borderRadius: '5px',
            backgroundColor: 'black',
            border: 'none' // Button border
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = 'pink'; }} 
          onMouseLeave={(e) => { e.target.style.backgroundColor = 'black'; }}
          onClick={redirect}
        >
          Donate Now
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
