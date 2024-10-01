/* eslint-disable @typescript-eslint/no-explicit-any */
import { allCategories } from '@/utils/bestSellingCategories';
import React from 'react';
import CategoryDropdown from './CategoryDropdown';

const Categories = () => {

    return (
        <div className='flex w-full'>
            {
                allCategories?.map((category: any) => <CategoryDropdown key={category.id} category={category} />)
            }
        </div>
    );
};

export default Categories;