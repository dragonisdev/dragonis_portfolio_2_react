import React, { useState, useEffect } from 'react';
import Spinner from './Spinner'; // Import a loading spinner component

function importImages() {
  const importPromises = [];
  for (let i = 1; i <= 21; i++) {
    importPromises.push(import(`@/gallery/${i}.png`));
  }
  return Promise.all(importPromises);
}

function Gallery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      const importedImages = await importImages();
      const imageUrls = importedImages.map((image) => image.default);
      const shuffledData = imageUrls.map((url, index) => ({
        id: index + 1,
        imgSrc: url,
      }));
      setData(shuffledData);
      setLoading(false);
    }
    loadImages();
  }, []);

  return (
    <div className='gallery'>
      {loading ? (
        <Spinner /> // Display a loading spinner component while images are being loaded
      ) : (
        data.map((item) => (
          <div className='pics' key={item.id}>
            <img src={item.imgSrc} alt={`Image ${item.id}`} />
          </div>
        ))
      )}
    </div>
  );
}

export default Gallery;