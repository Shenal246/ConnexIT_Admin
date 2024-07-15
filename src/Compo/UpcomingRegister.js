import './VVendor.css';
import img from './test.jpg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VendorUpdateModal from './VendorUpdateModal';
import './vncard.css';
import { apilinkmain } from './api';

const UpcomingRegister = () => {
  const [vendor, setvendor] = useState([]);

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

      const response = await axios.get(`${apilinkmain}/rmsg`, {
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
    <div className="Vendor custom-scrollbar" id='viewUpcomingRegistered'>
      <h3>Upcoming Registered List</h3>


      {vendor.map((vendor) => (
        <div className="vcards" key={vendor.id} onClick={() => setSelectedProduct(vendor)}>

          <h4># Name :{vendor.name} </h4>
          <p> <strong>Messages :</strong> {vendor.problem}</p>
          <p> <strong>Telephone NO :</strong> {vendor.tpno}</p>
          <p> <strong>Date & Time :</strong> {vendor.time}</p>
        </div>
      ))}



    </div>
  )
}
export default UpcomingRegister;