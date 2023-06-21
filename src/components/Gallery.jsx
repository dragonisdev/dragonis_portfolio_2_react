import React, { useState, useEffect } from 'react';

// Generate an array of image import promises dynamically
const importImages = () => {
  const importPromises = [];
  for (let i = 1; i <= 58; i++) {
    importPromises.push(import(`@/gallery/${i}.png`));
  }
  return Promise.all(importPromises);
};

function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const importedImages = await importImages();
        const imageUrls = importedImages.map((image) => image.default);
        const shuffledData = imageUrls.map((imgSrc, index) => ({
          id: index + 1,
          imgSrc,
        })).sort(() => Math.random() - 0.5);
        setData(shuffledData);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="gallery">
      {data.map((item) => (
        <div className="pics py-2" key={item.id}>
          <img src={item.imgSrc} className="w-full" alt={`Image ${item.id}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;