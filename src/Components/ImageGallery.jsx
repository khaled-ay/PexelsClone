import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import Popup from './Popup';
import MasonryLayout from './MasonryLayout';
import Search from './Search';

const client = createClient('Ml3dupDE4Rhg13On6Ov418KALR17NLdz7ON9VWaLmMDRwzxvVargZfBx');
function ImageGallery() {
    const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchImages = async (query = 'nature') => {
      try {
        const response = await client.photos.search({ query, per_page: 71, page: 1 });
        setImages(response.photos);
        console.log(selectedImage)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();

    if (searchQuery) {
      fetchImages(searchQuery);
    }
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
    <Search search={searchQuery} handlechange={handleSearchChange}/>
    <MasonryLayout images={images} onImageClick={openPopup}/>
    <Popup isOpen={isPopupOpen} image={selectedImage} onClose={closePopup} />
  </div>
  )
}

export default ImageGallery