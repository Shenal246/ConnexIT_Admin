import './VVendor.css';

import React, { useEffect,useRef, useState } from 'react';
import axios from 'axios';
import BlogUpdateModal from './BlogUpdateModal';
import './vncard.css';
import { apilinkmain } from './api';

const  Vblog =()=> {
  const [newses, setnewses] = useState([]);
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

      const response = await axios.get(`${apilinkmain}/vblogs`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'id':`${cnt}`
        }
      });

      setnewses(response.data);
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
    return(
        <div className="Vendor custom-scrollbar" id='viewblog' ref={vendorDivRef}>
            <h3>News & Event List</h3>


            {newses.map((newses) => (
                <div className="vcards" key={newses.id} onClick={() => handleCardClick(newses)}>
            <div className='image-container'>
              {newses.image_data ? (
                <>
                  <img
                    src={`data:image/jpeg;base64,${newses.image_data}`}
                    alt={newses.title}

                  />
                 
                </>
              ) : (
                <p>No Image Available</p>
              )}
            </div>
            <h4>#ID :{newses.title} </h4>
                <p> {newses.firstText}</p>
                <p> {newses.description}</p>
                <p> <strong>Status :</strong> {newses.status}</p>
               
                  
           
         
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
export default Vblog;