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
      const importImages = async () => {
        const importedImages = [];
        for (let i = 1; i <= 58; i++) {
          const image = await import(`@/gallery/${i}.png`);
          importedImages.push(image.default);
        }
        setData(importedImages.map((imgSrc, index) => ({ id: index + 1, imgSrc })));
      };
  
      importImages();
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