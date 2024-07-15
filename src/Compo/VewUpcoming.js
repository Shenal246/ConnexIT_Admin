import './VVendor.css';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import BlogUpdateModal from './BlogUpdateModal';
import './vncard.css';
import { apilinkmain } from './api';

const VewUpcoming = () => {
  const [upEvents, setUpnewses] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const vendorDivRef = useRef(null);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const cnt = localStorage.getItem('cnt');
      if (!token) {
        setError('User not authenticated');
        return;
      }

      const response = await axios.get(`${apilinkmain}/upevtsrc`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'id': `${cnt}`
        }
      });

      // console.log("sdfghfdsawsdfgh",response.data);
      setUpnewses(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Unauthorized. Please login to view products.');
      } else {
        setError('Error fetching products. Please try again later.');
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCardClick = (newses) => {
    setSelectedProduct(newses);
    if (vendorDivRef.current) {
      vendorDivRef.current.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll the Vendor div to the top
    }
  };

  return (
    <div className="Vendor custom-scrollbar" id='viewViewUpcoming' ref={vendorDivRef}>
      <h3>View Upcoming Events</h3>

      {upEvents.map((upevent) => (
        <div className="vcards" key={upevent.id} onClick={() => handleCardClick(upevent)}>
          <div className='image-container'>
            {upevent.image_data ? (
              <>
                <img
                  src={`data:image/jpeg;base64,${upevent.image_data}`}
                  alt={upevent.title}
                />

              </>
            ) : (
              <p>No Image Available</p>
            )}
          </div>
          <h4>Title :{upevent.title} </h4>
          <h4>Date :{upevent.date} </h4>
          <h4>Seat Count :{upevent.seats} </h4>
          {/* {
            const statusText = upevent.status;
          } */}
          <h4>Status :{upevent.status} </h4>


        </div>
      ))}
      {selectedProduct && (
        <BlogUpdateModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          blog={selectedProduct}
          onUpdate={fetchProducts} // Directly passing the fetchProducts function
        />
      )}


    </div>
  )
}
export default VewUpcoming;