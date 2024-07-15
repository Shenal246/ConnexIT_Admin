import React, { useState, useEffect } from 'react';
import './Date.css';

function Dateandtime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to format date and time
  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} Time ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className='dttime'>
      <p>{formatDateTime(dateTime)}</p>
    </div>
  );
}

export default Dateandtime;
