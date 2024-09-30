import React from 'react';
import ProductCard from './ProductCard';
import { TProduct } from '@/types/TProduct';

const ProductCollections = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const data = await res.json();
    const products = data?.data

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
            {
                products?.map((item: TProduct) => <ProductCard key={item._id} product={item} />)
            }
        </div>
    );
};

export default ProductCollections;