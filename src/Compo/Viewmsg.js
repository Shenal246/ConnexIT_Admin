import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsUpdateModal from './NewsUpdateModal';
import VideoModal from './VideoModal';
import './vncard.css';
import { apilinkmain } from './api';

const Viewmsg = () => {
  const [newses, setnewses] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState('');
 

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const cnt = localStorage.getItem('cnt');
      if (!token) {
        setError('User not authenticated');
        return;
      }

      const response = await axios.get(`${apilinkmain}/msg`, {
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

  return (
    <div className='vncard custom-scrollbar'>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='crd'>
        {newses.map((newses) => (
          <div className='vcrd' key={newses.id} onClick={() => setSelectedProduct(newses)}>
            
            <h3>Name :{newses.name}</h3>
            <hr></hr>
            <table>
              <tr>
                <th>
                  <label>Messages : </label>
                </th>
                <td>
                {newses.problem}
               
                </td>
              </tr>
              <tr>
                <th>
                <label>Telephone No : </label>
                </th>
                <td>
                {newses.tpno}
                </td>
              </tr>
            </table>
            <p></p>
            
            

          </div>
        ))}
      </div>
      {selectedProduct && (
        <NewsUpdateModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          newses={selectedProduct}
          onUpdate={fetchProducts} // Directly passing the fetchProducts function
        />
      )}
    
    </div>
  );
};

export default Viewmsg;
