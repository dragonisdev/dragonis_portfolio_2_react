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
        const importImages = async () => {
            const importPromises = [];
            for (let i = 1; i <= 61; i++) {
                importPromises.push(import(`@/gallery/${i}.jpg`));
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

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <img src={tempimgSrc} alt="Selected artwork" />
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
                            alt={`Artwork ${item.id}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;