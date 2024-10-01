import { TProduct } from '@/types/TProduct';
import React from 'react';
import ProductCard from '../product/ProductCard';
import Link from 'next/link';

const FlashSell = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const data = await res.json()
    const productsData: TProduct[] = data?.data
    return (
        <div className='mt-40 mb-20'>
            <div className='flex justify-between mx-20 mb-5'>
                <h1>Flash sell</h1>
                <button className='rounded-3xl p-1 w-40 text-white bg-black'>See All</button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5'>
                {
                    productsData?.slice(0, 8)?.map((product: TProduct) => <ProductCard key={product._id} product={product} />)
                }
            </div>
            <div className='flex justify-center items-center mt-5'>
                <Link href='/products'><span className='bg-gradient-to-r from-indigo-300  via-sky-400 to-indigo-400 uppercase font-bold px-4 py-3 rounded-lg'>see all</span></Link>
            </div>
        </div>
    );
};

export default FlashSell;