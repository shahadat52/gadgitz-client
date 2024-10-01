import { bestSellingCategories } from '@/utils/bestSellingCategories';
import React from 'react';
import BestSellingCategoryCard from './BestSellingCategoryCard';

const BestSelling = async () => {
    return (
        <div className='p-5 shadow-xl rounded-2xl bg-gradient-to-r from-indigo-200  via-sky-200 to-indigo-200 m-5' >
            <div className='grid grid-cols-3  items-center'>
                <p className='bg-gray-500 h-[1px] w-full'></p>
                <h2 className='gradient-text text-center text-xl font-semibold '>Best selling categories</h2>
                <p className='bg-gray-500 w-full h-[1px]'></p>
            </div>

            <div className='flex w-full mt-5'>
                {
                    bestSellingCategories?.map((category) => <BestSellingCategoryCard category={category} key={category.id} />)
                }
            </div>
        </div>
    );
};

export default BestSelling;