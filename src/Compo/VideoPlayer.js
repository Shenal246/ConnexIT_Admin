import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import video from'./load.mp4';
import './video.css';

const VideoPlayer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000); // Video duration in milliseconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="videos">
      <video width="30%"   autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
