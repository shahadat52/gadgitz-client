'use client'
import { TUser } from '@/Interface/TUser';
import { logOut } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const NavLinksEnd = () => {
    const { token, user } = useAppSelector((state) => state.auth.auth);
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
    }
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const thisUser = user as unknown as TUser
    return (
        <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal px-1 gap-2 text-lg font-semibold ">
                <Link href='/'>Home</Link>
                <Link href='/products'>Products</Link>
                {
                    isMounted && thisUser?.role === 'admin' && <Link href={`/dashboard/${thisUser?.role}`}>Dashboard</Link>
                }

                {
                    isMounted && thisUser?.role === 'user' && <Link href={`/my-orders`}>Orders</Link>
                }

                {isMounted && token ? (
                    <p onClick={handleLogOut}>Logout</p>
                ) : (
                    <Link href='/login'>Login</Link>
                )}
            </div>
        </div>
    );
};

export default NavLinksEnd;