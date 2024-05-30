import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
function MasonryLayout({images,onImageClick}) {
  return (
    <div className="p-5">
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {images.map((image) => (
          <div key={image.id} className="p-2 relative">
            <img
              src={image.src.medium}
              alt={image.alt}
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => onImageClick(image)}
            />
            <div className="photographer_name">
              <p>{image.photographer}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  </div>
  )
}

export default MasonryLayout