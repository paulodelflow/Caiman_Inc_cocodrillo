import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="relative w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 opacity-75">
        {/* Burbujas animadas */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-white rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white rounded-full opacity-20 animate-ping"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
