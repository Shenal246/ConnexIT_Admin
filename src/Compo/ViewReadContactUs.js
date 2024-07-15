import './VVendor.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VendorUpdateModal from './VendorUpdateModal';
import './vncard.css';
import { apilinkmain } from './api';

const ViewReadContactUs = () => {
  const [readedContMsg, setReadedContMsg] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts(); // Initial fetch when component mounts
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const cnt = localStorage.getItem('cnt');
      if (!token) {
        setError('User not authenticated');
        return;
      }

      const response = await axios.get(`${apilinkmain}/cntread`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'id': `${cnt}`
        }
      });

      setReadedContMsg(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Unauthorized. Please login to view products.');
      } else {
        setError('Error fetching products. Please try again later.');
      }
    }
  };

  return (
    <div className="Vendor custom-scrollbar" id='viewReadContactUs'>
      <h3>Readed Messages</h3>


      {readedContMsg.map((readedcontmsg) => (
        <div className="vcards" key={readedcontmsg.id} onClick={() => setSelectedProduct(readedcontmsg)}>

          <h4>First Name :{readedcontmsg.firstname} </h4>
          <p> <strong>Last message :</strong> {readedcontmsg.lastname}</p>
          <p> <strong>Company :</strong> {readedcontmsg.company}</p>
          <p> <strong>Contact No :</strong> {readedcontmsg.tpno}</p>
          <p> <strong>Email :</strong> {readedcontmsg.email}</p>
          <p> <strong>Message :</strong> {readedcontmsg.comment}</p>
        </div>
      ))}

    </div>
  )
}
export default ViewReadContactUs;