
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './form.css'
import { apilinkmain } from './api';

const NewUpcomingEvent = () => {
  const [title, settitle] = useState('');
  const [image, setImage] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedNewType, setSelectedNewType] = useState('');
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [seatCount, setSeatCount] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const cntid = localStorage.getItem('cnt');
      if (!token) {
        setError('User not authenticated');
        return;
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('time', time);
      formData.append('date', date);
      formData.append('mode', selectedNewType);
      formData.append('cnt', cntid);
      formData.append('status', selectedStatus);
      formData.append('image', image);
      formData.append('seats', seatCount);

      console.log(cntid);
      await axios.post(`${apilinkmain}/upcomevt`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });
      Swal.fire({
        icon: "success",
        title: "Added Successfully!",

      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        } else {
          window.location.reload();
        }
      });


    } catch (error) {
      if (error.response && error.response.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Failed to Add!",
          text: "Unauthorized. Please login to register products."
        });

      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Add!",
          text: "Error registering product. Please try again later."
        });
      }
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

  return (
    <div className='formdiv custom-scrollbar' id='viewNewUpcoming'>
      <h3>Add New Upcoming Event</h3>


      <form onSubmit={handleSubmit}>
        <div className='lbl'>
          <label>Title :</label>
        </div>
        <div className='intp'>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />


        </div>

        <div className='lbl'>
          <label>Description :</label>
        </div>
        <div className='intp'>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className='lbl'>
          <label>Time :</label>
        </div>
        <div className='intp'>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>


        <div className='lbl'>
          <label>Date :</label>
        </div>
        <div className='intp'>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className='lbl'>
          <label>Seat Count :</label>
        </div>
        <div className='intp'>
          <input
            type="number"
            value={seatCount}
            onChange={(e) => setSeatCount(e.target.value)}
            required
          />
        </div>

        <div className='lbl'>
          <label>Mode :</label>
        </div>
        <div className='intp'>
          <select
            value={selectedNewType}
            onChange={(e) => setSelectedNewType(e.target.value)}
          >
            <option value="">Select mode</option>
            <option value="Physical">Physical</option>
            <option value="Online">Online</option>
          </select>
        </div>

        <div className='lbl'>
          <label>Image :</label>
        </div>
        <div className='intp'>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

        </div>

        <div className='lbl'>
          <label>News Status :</label>
        </div>
        <div className='intp'>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Select a status</option>
            {statuses.map((status) => (
              <option key={status.id} value={status.id}>
                {status.status}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Register Upcoming Event</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default NewUpcomingEvent;
