// src/components/ImagePopup.js
import React from 'react';
import { motion } from 'framer-motion';

const Popup = ({ isOpen, image, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-xl relative space-y-3 w-[450px]"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 font-bold capitalize">{image.photographer}</h2>
        <img src={image.src.portrait} className="w-full max-h-[250px] rounded-sm" />
        <div className="grid grid-cols-3 w-full gap-3">
          <p className="bg-gray-200 p-2 rounded-sm">Width: {image.width}</p>
          <p className="bg-gray-200 p-2 rounded-sm">Height: {image.height}</p>
          <p style={{ backgroundColor: image.avg_color }} className=""></p>
        </div>
        <p className='font-medium'>
          Photographer Profile: <br />
          <a href={image.photographer_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-normal">
            {image.photographer_url}
          </a>
        </p>
        <button
          onClick={() => window.open(image.src.original, '_blank')}
          className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-700"
        >
          Download Image
        </button>
      </motion.div>
    </div>
  );
};

export default Popup;
