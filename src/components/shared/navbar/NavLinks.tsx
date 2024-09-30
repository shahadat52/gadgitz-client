'use client'
import { TUser } from '@/Interface/TUser';
import { logOut } from '@/redux/features/auth/authSlice';
import { cartEmpty } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NavLinks = () => {
    const { token, user } = useAppSelector((state) => state.auth.auth);
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(logOut(), cartEmpty());
        // dispatch(cartEmpty())
    }
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const thisUser = user as unknown as TUser
    return (
        <div
            tabIndex={0}
            className="menu menu-sm dropdown-content text-xl font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
    );
};

export default NavLinks;