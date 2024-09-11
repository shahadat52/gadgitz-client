import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import CarouselCard from './CarouselCard';
import { TProduct } from '@/types/TProduct';
import FlashSell from './FlashSell';

const Header = () => {
    const productsData: TProduct[] = [
        { id: 1, name: 'Product 1', price: '$10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s' },
        { id: 2, name: 'Product 2', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s' },
        { id: 3, name: 'Product 3', price: '$30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s' },
        { id: 4, name: 'Product 4', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s' },
        { id: 5, name: 'Product 5', price: '$50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s' },
        { id: 6, name: 'Product 6', price: '$60', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s' },
    ];
    return (
        <div className='bg-gray-100  py-5 w-full h-screen'>
            <section className='text-center'>
                <h1 className='text-center text-4xl font-bold pt-10'>Experience the Power of Modern Innovation! <br /> Get the Best Electronics, Only a Click Away!</h1>
                <p className='my-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Velit omnis cupiditate alias harum illo quia laudantium nemo laborum eos vitae..</p>
            </section>
            <div className='flex  items-center mx-20  mb-10'>
                <p className='text-black text-4xl'><FaAngleLeft /></p>
                <div className=' grid grid-cols-3 w-full'>

                    {
                        productsData.slice(0, 3).map((product: TProduct) => <CarouselCard key={product.id} product={product} />)
                    }

                </div>
                <p className='text-black text-4xl'><FaAngleRight /></p>
            </div>

            <div className='mt-40'>
                <div className='flex justify-between mx-20 mb-5'>
                    <h1>Flash sell</h1>
                    <button className='rounded-3xl p-1 w-40 text-white bg-black'>See All</button>
                </div>

                <div className='grid grid-cols-4 w-full'>
                    {
                        productsData.slice(0, 4).map((product: TProduct) => <FlashSell key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;