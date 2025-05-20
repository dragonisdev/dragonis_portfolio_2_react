import React, { useState, useEffect } from 'react';
import close from "@/assets/close.png";
import Spinner from '@/components/Spinner';

function Gallery() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    useEffect(() => {
        const imageUrls = Array.from({ length: 87 }, (_, i) => `/gallery/${i + 1}.jpg`);
        const shuffledData = imageUrls
            .map((imgSrc, index) => ({ id: index + 1, imgSrc }))
            .sort(() => Math.random() - 0.5);
        setData(shuffledData);
        setIsLoading(false);
    }, []);

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <img src={tempimgSrc} alt="Preview" />
                        <img 
                            className="close2" 
                            src={close} 
                            onClick={() => setModel(false)} 
                            alt="Close"
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
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;