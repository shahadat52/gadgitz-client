/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Banner = ({ images }: { images: any }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // change image every 3 seconds

        return () => clearInterval(interval); // clear interval on unmount
    }, []);
    return (
        <div className="relative w-full h-[550px]">
            {images.map((image: any, index: number) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={image.src}

                        alt='banner'
                        layout="fill"
                        objectFit="cover"
                        priority={index === currentImageIndex} // prioritize the current image for faster loading
                    />
                </div>
            ))}
        </div>
    );
};

export default Banner;