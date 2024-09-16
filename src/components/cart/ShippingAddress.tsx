'use client'
import React from 'react';

const ShippingAddress = () => {

    return (
        <div className='bg-gray-200 rounded-xl p-3'>
            <h1 className='text-2xl font-semibold p-3  '>Shipping address</h1>
            <input type="text" placeholder="Your Name" className="input input-bordered  mb-2 w-full " />
            <input type="text" placeholder="Phone Number" className="input input-bordered  mb-2 w-full" />
            <input type="text" placeholder="Address" className="input input-bordered  mb-2 w-full h-32 " />

        </div>
    );
};

export default ShippingAddress;