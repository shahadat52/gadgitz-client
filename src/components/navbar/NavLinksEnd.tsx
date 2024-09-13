'use client'
import { logOut } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NavLinksEnd = () => {
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
        <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal px-1 gap-2 text-lg font-semibold ">
                <Link href='/'>Home</Link>
                <Link href='/products'>Products</Link>
                <Link href='/dashboard'>Dashboard</Link>
                {isMounted && token ? (
                    <p onClick={handleLogOut}>Log Out</p>
                ) : (
                    <Link href='/login'>Login</Link>
                )}
            </div>
        </div>
    );
};

export default NavLinksEnd;