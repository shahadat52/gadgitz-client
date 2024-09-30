'use client'
import Link from 'next/link';
import React from 'react';

const DashboardLink = () => {
    return (
        <div className='mt-5 flex flex-col gap-3 px-2'>
            <Link
                className='rounded-xl border border-gray-300 hover:bg-gray-500 p-2 w-[100%]'
                href={`/dashboard/admin/allProducts`}
            >All Products
            </Link>

            <Link
                className='rounded-xl border border-gray-300 hover:bg-gray-500 p-2 w-[100%]'
                href={`/dashboard/admin/allOrders`}
            >All Orders</Link>


        </div>
    );
};

export default DashboardLink;