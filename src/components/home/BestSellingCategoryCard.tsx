/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';

const BestSellingCategoryCard = ({ category }: { category: any }) => {
    return (
        <div className='mx-auto shadow-lg p-5 rounded-lg '>
            <div className='mx-auto'>
                <Image
                    src={category.imageUrl}
                    alt='category'
                    width={180}
                    height={80}
                />
            </div>
            <h2 className='text-center uppercase font-semibold'>{category.name}</h2>
        </div>
    );
};

export default BestSellingCategoryCard;