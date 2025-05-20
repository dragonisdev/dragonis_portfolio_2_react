import React, { useState, useEffect, useMemo } from 'react';
import close from "@/assets/close.png";
import Spinner from '@/components/Spinner';

// Move image URLs outside component to prevent recreation on each render
const imageUrls = Array.from({ length: 87 }, (_, i) => `/gallery/${i + 1}.jpg`);

function Gallery() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    // Use useMemo to prevent unnecessary shuffling
    const shuffledData = useMemo(() => {
        return imageUrls
            .map((imgSrc, index) => ({ id: index + 1, imgSrc }))
            .sort(() => Math.random() - 0.5);
    }, []);

    useEffect(() => {
        setData(shuffledData);
        setIsLoading(false);
    }, [shuffledData]);

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <img 
                            src={tempimgSrc} 
                            alt="Preview" 
                            loading="lazy"
                            decoding="async"
                        />
                        <img 
                            className="close2" 
                            src={close} 
                            onClick={() => setModel(false)} 
                            alt="Close"
                            loading="eager"
                        />
                    </>
                )}
            </div>
            <div className="gallery">
                {data.map((item) => (
                    <div 
                        className="pics py-2" 
                        key={item.id} 
                        onClick={() => getImg(item.imgSrc)}
                    >
                        <img 
                            src={item.imgSrc} 
                            className="w-full" 
                            alt={`Image ${item.id}`}
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="200"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;