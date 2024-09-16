'use client'
import { TUser } from '@/Interface/TUser';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React from 'react';

const DashboardLink = () => {
    const user = useAppSelector((state) => state?.auth?.auth?.user)
    const thisUser = user as unknown as TUser
    const role = thisUser?.role || "user";
    return (
        <div className='mt-5 flex flex-col gap-3 px-2'>
            <Link
                className='rounded-xl border border-gray-300 hover:bg-gray-500 p-2 w-[100%]'
                href={`/dashboard/${role}/allProducts`}
            >All Products</Link>


        </div>
    );
};

export default DashboardLink;