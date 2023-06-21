import React, { useState, useEffect } from 'react';

// Generate an array of image import promises dynamically
function Gallery() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const importImages = async () => {
        const importPromises = [];
        for (let i = 1; i <= 21; i++) {
          importPromises.push(import(`@/gallery/${i}.png`));
        }
        try {
          const importedImages = await Promise.all(importPromises);
          const imageUrls = importedImages.map((image) => image.default);
          const shuffledData = imageUrls.map((imgSrc, index) => ({
            id: index + 1,
            imgSrc,
          })).sort(() => Math.random() - 0.5);
          setData(shuffledData);
          setIsLoading(false);
        } catch (error) {
          console.error('Error loading images:', error);
        }
      };
  
      importImages();
    }, []);
  
    if (isLoading) {
      return (
        <div className="spinner-container">
          <div className="spinner" />
        </div>
      );
    }
  
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