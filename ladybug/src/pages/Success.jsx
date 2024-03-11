import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    console.log(location)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1>LADYBUGS</h1><br/>
      <button style={{ width: '8rem', border: 'none', borderRadius: '10px', fontSize: '20px', height: '3rem' ,backgroundColor: 'teal', color: 'white' }}>Successful !</button><br/>
      <p style={{fontSize: '18px'}}>Your order is being prepared. Thank you for choosing Ladybugs !</p>
    </div>
  );
};

export default Success;
