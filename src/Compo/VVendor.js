import './VVendor.css';
import img from './test.jpg';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import VendorUpdateModal from './VendorUpdateModal';
import './vncard.css';
import { apilinkmain } from './api';

const VVendor = () => {
  const [vendor, setvendor] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState('');
  const vendorDivRef = useRef(null);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const cnt = localStorage.getItem('cnt');
      if (!token) {
        setError('User not authenticated');
        return;
      }

      const response = await axios.get(`${apilinkmain}/vendors`, {
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
  const renderPillars = (vendor) => {
    const pillars = [
      { label: 'Perimeter and Internal Security', value: vendor.Perimeter_and_internal_security },
      { label: 'Cyber Security Governance & Compliance', value: vendor.Cyber_Security_Governance_Compliance },
      { label: 'Authentication & Identity Management', value: vendor.Authentication_Identity_Management },
      { label: 'Security Management', value: vendor.Security_Management },
      { label: 'Endpoint Security', value: vendor.Endpoint_Security },
      { label: 'Networking', value: vendor.Networking },
      { label: 'Data Center Infrastructure and Infrastructure Monitoring', value: vendor.Data_Center_Infrastructure_and_Infrastructure_Monitoring },
      { label: 'Server Storage & Backup Solutions', value: vendor.Server_Storage_Backup_Solutions }
    ];
    return (
      <ol>
        {pillars.map((pillar, index) => (
          pillar.value === "true" ? <li key={index}>{pillar.label}</li> : null
        ))}
      </ol>
    );
  }
  const handleCardClick = (vendor) => {
    setSelectedProduct(vendor);
    if (vendorDivRef.current) {
      vendorDivRef.current.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll the Vendor div to the top
    }
  };
  return (
    <div className="Vendor custom-scrollbar" id='view1' ref={vendorDivRef}>
      <h3>Vendor List</h3>


      {vendor.map((vendor) => (
        <div className="vcards" key={vendor.id} onClick={() => handleCardClick(vendor)}>
          <div className='image-container'>
            {vendor.image_data ? (
              <>
                <img
                  src={`data:image/jpeg;base64,${vendor.image_data}`}
                  alt={vendor.title}

                />

              </>
            ) : (
              <p>No Image Available</p>
            )}
          </div>
          <h4>#ID:{vendor.vid} - {vendor.name}</h4>
          <p> <strong>Description :</strong> {vendor.des}</p>
          <p> <strong>Status :</strong> {vendor.status}</p>
          <p> <strong>Pillors :</strong> </p>

          <p>{renderPillars(vendor)}</p>

        </div>
      ))}
      {selectedProduct && (
        <VendorUpdateModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          vendor={selectedProduct}
          onUpdate={fetchProducts} // Directly passing the fetchProducts function
        />
      )}


    </div>
  )
}
export default VVendor;