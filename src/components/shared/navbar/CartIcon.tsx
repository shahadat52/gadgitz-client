import Link from 'next/link';
import React from 'react';
import { FaCartPlus } from "react-icons/fa";

const CartIcon = () => {
    return (
        <p className='text-2xl'>
            <Link href='/my-cart'>
                <FaCartPlus />
            </Link>
        </p>
    );
};

export default CartIcon;