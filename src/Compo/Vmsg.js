import './VVendor.css';
import img from './test.jpg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VendorUpdateModal from './VendorUpdateModal';
import './vncard.css';
import { apilinkmain } from './api';

const Vmsg = () => {
  const [vendor, setvendor] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState('');


  const handleClick = async (id) => {
    try {
      alert('Message Readed !');
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User not authenticated');
        return;
      }

      const formData = new FormData();
      formData.append('id', id);


      await axios.post(`${apilinkmain}/readmsg`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });
      fetchProducts();

    } catch (error) {
      setError('Error updating product. Please try again later.');
    }
  };

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
          'id': `${cnt}`
        }
      });

      setvendor(response.data);
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
    <div className="Vendor custom-scrollbar" id='viewmsg'>
      <h3>New Messages</h3>


      {vendor.map((vendor) => (
        <div className="vcards" key={vendor.id} onClick={() => setSelectedProduct(vendor)}>

          <h4># Name :{vendor.name} </h4>
          <p> <strong>Messages :</strong> {vendor.problem}</p>
          <p> <strong>Telephone NO :</strong> {vendor.tpno}</p>
          <p> <strong>Date & Time :</strong> {vendor.time}</p>


          <button style={{ backgroundColor: 'lightblue', border: 'none', margin: '2px', borderRadius: '5px', marginLeft: '40%', height: '25px' }} onClick={() => handleClick(vendor.id)}>Read</button>
        </div>
      ))}



    </div>
  )
}
export default Vmsg;