// BikeLoader.js
import React, { useState, useEffect } from 'react';
import './Loading.css'; // Import your CSS file

const BikeLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className={`bike-loader ${loading ? '' : 'hidden'}`}>
      <svg className="bike" viewBox="0 0 48 30" width="48px" height="30px">
        {/* Include the provided SVG content here */}
        {/* ... */}
      </svg>
    </div>
  );
};

export default BikeLoader;
