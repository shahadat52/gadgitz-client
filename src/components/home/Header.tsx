import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { TProduct } from '@/types/TProduct';
import CarouselCard from './CarouselCard';

const Header = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`)
    const data = await res.json()
    const productsData: TProduct[] = data?.data
    return (
        <div className='bg-gray-100  py-5 w-full '>
            <section className='text-center'>
                <h1 className='text-center text-4xl font-bold pt-10'>Experience the Power of Modern Innovation! <br /> Get the Best Electronics, Only a Click Away!</h1>
                <p className='my-10 text-gray-400'><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Velit omnis cupiditate alias harum illo quia laudantium nemo laborum eos vitae..</i></p>
            </section>
            <div className='md:flex  items-center mx-20  mb-10 hidden '>
                <p className='text-black text-4xl'><FaAngleLeft /></p>
                <div className=' grid grid-cols-3 md:hid gap-4 mx-auto'>

                    {
                        productsData?.slice(0, 3)?.map((product: TProduct) => <CarouselCard key={product._id} product={product} />)
                    }

                </div>
                <p className='text-black text-4xl'><FaAngleRight /></p>

            </div>



        </div>
    );
};

export default Header;