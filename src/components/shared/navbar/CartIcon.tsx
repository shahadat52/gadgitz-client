'use client'
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";

const CartIcon = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    const products = useAppSelector((state) => state.auth.cart.products);
    const productsLength = products?.length

    return (
        <div className='relative'>
            <Link href='/my-cart' className='text-4xl'>
                <FaCartPlus />
            </Link>
            <p className='absolute -top-3 -right-6 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>
                {isClient ? productsLength : 0}
            </p>
        </div>
    );
};

export default CartIcon;