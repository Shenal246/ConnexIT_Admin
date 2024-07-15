import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsUpdateModal from './NewsUpdateModal';
import VideoModal from './VideoModal';
import './vncard.css';
import { apilinkmain } from './api';

const Cntmsg = () => {
  const [read, setread] = useState([]);
  const [unread, setunread] = useState([]);
  let  [dataaarya,setdataarray] =useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

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
          'id':`${cnt}`
        }
      });

      setread(response.data);

      const response1 = await axios.get(`${apilinkmain}/cntunread`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'id':`${cnt}`
        }
      });

      setunread(response1.data);
      setdataarray(unread);
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
  const openVideoModal = (url) => {
    setVideoUrl(url);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setVideoUrl('');
  };

  const selectopt =()=>{
    var sel=document.getElementById("sel").value;
    if(sel===1){
        setdataarray(read);
    }else{
        setdataarray(unread);
    }

  };

  return (
    <div className='vncard'>
      <div className='space'></div>
      <h2>Conatact Messages</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <select id='sel' onChange={selectopt}>
        <option value='1' checked>UnRead</option>
        <option value='2'>Read</option>
      </select>
      <div className='crdmsg'>
      {dataaarya.map((data) => (
            <div className='msg'>ID :{data.id} |  Name : {data.firstname} {data.lastname}  | Company : {data.company} | Message : {data.comment}<hr></hr></div>
      ))}
      </div>
      {selectedProduct && (
        <NewsUpdateModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          read={selectedProduct}
          onUpdate={fetchProducts} // Directly passing the fetchProducts function
        />
      )}
    
    </div>
  );
};

export default Cntmsg;
