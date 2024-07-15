import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apilinkmain } from './api';

const NewsUpdateModal = ({ isOpen, onClose, newses, onUpdate }) => {
  const [error, setError] = useState('');
  const [title, setTitle] = useState(newses.ntitle);
  const [link, setLink] = useState(newses.nlink);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(newses.nstatus);
  const [selectedNewType, setSelectedNewType] = useState(newses.ntype);

  useEffect(() => {
    setTitle(newses.ntitle);
    setLink(newses.nlink);
    if (newses.image_data) {
      const blob = new Blob([Uint8Array.from(atob(newses.image_data), c => c.charCodeAt(0))], { type: 'image/jpeg' });
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    }
  }, [newses]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User not authenticated');
        return;
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('link', link);
      formData.append('image', image || new Blob([Uint8Array.from(atob(newses.image_data), c => c.charCodeAt(0))], { type: 'image/jpeg' }));
      formData.append('status', selectedStatus);
      formData.append('type', selectedNewType);

      await axios.put(`${apilinkmain}/addnews/${newses.nid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });

      onUpdate();
      onClose();
    } catch (error) {
      setError('Error updating product. Please try again later.');
    }
  };

  const [statuses, setStatuses] = useState([]);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setErrors('User not authenticated');
          return;
        }

        const response = await axios.get(`${apilinkmain}/statuses`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setStatuses(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setErrors('Unauthorized. Please login to view statuses.');
        } else {
          setErrors('Error fetching statuses. Please try again later.');
        }
      }
    };

    fetchStatuses();
  }, []);

  const [newTypes, setNewTypes] = useState([]);
  const [errors2, setErrors2] = useState('');

  useEffect(() => {
    const fetchNewTypes = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setErrors2('User not authenticated');
          return;
        }

        const response = await axios.get(`${apilinkmain}/news_types`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setNewTypes(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setErrors2('Unauthorized. Please login to view new types.');
        } else {
          setErrors2('Error fetching new types. Please try again later.');
        }
      }
    };

    fetchNewTypes();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update News & Events</h2>
        <form onSubmit={handleUpdate}>
          {imageUrl && !image && (
            <img src={imageUrl} alt="News" className='img1'/>
          )}<br></br>
                <div className='lbl'>
                <label>Title :</label>
                </div>
                <div className='intp'>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                </div>
                <div className='lbl'>
                <label>Link :</label>
                </div>
                <div className='intp'>

                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                />
                </div>
                <div className='lbl'>
                <label>Image :</label>
                </div>
                <div className='intp'>

               
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                </div>

                <div className='lbl'>
                <label>News Type :</label>
                </div>
                <div className='intp'>

               
                <select
                  value={selectedNewType}
                  onChange={(e) => setSelectedNewType(e.target.value)}
                >
                  {newTypes.map((newType) => (
                    <option key={newType.id} value={newType.id}>
                      {newType.type}
                    </option>
                  ))}
                </select>
                </div>
                <div className='lbl'>
                <label>News Status :</label>
                </div>
                <div className='intp'>

               
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.status}
                    </option>
                  ))}
                </select>
             
                </div>
               
             
            
             
              
              
           
              
           

            
               
          
                
            
                
             
                

          <button type="submit">Update News</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <button id='b1' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NewsUpdateModal;
