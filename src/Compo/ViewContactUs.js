import './VVendor.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VendorUpdateModal from './VendorUpdateModal';
import './vncard.css';
import { apilinkmain } from './api';

const ViewContactUs = () => {
  const [contactUsRec, setContactUsRec] = useState([]);

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

      await axios.post(`${apilinkmain}/readcontactus`, formData, {
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

      const response = await axios.get(`${apilinkmain}/cntunread`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'id': `${cnt}`
        }
      });
      setContactUsRec(response.data);
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
    <div className="Vendor custom-scrollbar" id='viewContactUs'>
      <h3>Contact Us Messages</h3>


      {contactUsRec.map((contUs) => (
        <div className="vcards" key={contUs.id} onClick={() => setSelectedProduct(contUs)}>

          <h4>First Name :{contUs.firstname} </h4>
          <p> <strong>Last message :</strong> {contUs.lastname}</p>
          <p> <strong>Company :</strong> {contUs.company}</p>
          <p> <strong>Contact No :</strong> {contUs.tpno}</p>
          <p> <strong>Email :</strong> {contUs.email}</p>
          <p> <strong>Message :</strong> {contUs.comment}</p>


          <button style={{ backgroundColor: 'lightblue', border: 'none', margin: '2px', borderRadius: '5px', marginLeft: '30%', height: '25px' }} onClick={() => handleClick(contUs.id)}>Read</button>
        </div>
      ))}



    </div>
  )
}
export default ViewContactUs;