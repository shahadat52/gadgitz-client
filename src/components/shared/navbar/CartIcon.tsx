'use client'
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React from 'react';
import { FaCartPlus } from "react-icons/fa";

const CartIcon = () => {
    const products = useAppSelector((state) => state.auth.cart.products);
    const productsLength = products?.length

    return (
        <div className='relative'>
            <Link href='/my-cart' className='text-4xl'>
                <FaCartPlus />
            </Link>
            <p className='absolute -top-3 -right-6 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>
                {productsLength}
            </p>
        </div>
    );
};

export default CartIcon;