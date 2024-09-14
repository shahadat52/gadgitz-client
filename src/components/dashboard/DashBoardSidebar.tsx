'use client'
import { TUser } from '@/Interface/TUser';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React from 'react';

const DashBoardSidebar = () => {
    const user = useAppSelector((state) => state.auth.user)
    const thisUser = user as unknown as TUser
    return (
        <div>
            <Link href={`${thisUser?.role}/allProducts`}>All Products</Link>
        </div>
    );
};

export default DashBoardSidebar;