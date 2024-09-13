'use client'
import { logOut } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NavLinks = () => {
    const token = useAppSelector((state) => state.auth.token);
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
    }
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <div
            tabIndex={0}
            className="menu menu-sm dropdown-content text-xl font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link href='/'>Home</Link>
            <Link href='/products'>Products</Link>
            <Link href='/dashboard'>Dashboard</Link>
            {isMounted && token ? (
                <p onClick={handleLogOut}>Log Out</p>
            ) : (
                <Link href='/login'>Login</Link>
            )}
        </div>
    );
};

export default NavLinks;