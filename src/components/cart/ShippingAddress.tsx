'use client'
import { saveAddress } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const ShippingAddress = () => {
    const [isClient, setIsClient] = useState(false)
    const { address } = useAppSelector((state) => state.auth.cart);
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm();

    const handleAddressSubmit = (data: FieldValues) => {
        const isConfirmed = window.confirm('Are you sure you want to submit the shipping address?');
        if (isConfirmed) {
            alert('Address submitted successfully!');
        }
        dispatch(saveAddress(data?.address))
    };

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className='max-w-[50%]'>
            {
                isClient && !address && (
                    <div className='bg-gray-200 rounded-xl p-3'>
                        <h1 className='text-2xl font-semibold p-3'>Shipping address</h1>
                        <form onSubmit={handleSubmit(handleAddressSubmit)}>
                            <input
                                type="text"
                                {...register('name', { required: true })}
                                placeholder="Your Name"
                                className="input input-bordered mb-2 w-full"
                            />
                            <input
                                type="text"
                                {...register('phone', { required: true })}
                                placeholder="Phone Number"
                                className="input input-bordered mb-2 w-full"
                            />
                            <input
                                type="text"
                                {...register('address', { required: true })}
                                placeholder="Address"
                                className="input input-bordered mb-2 w-full h-32"
                            />
                            <input
                                type="submit"
                                className='w-full bg-accent rounded py-2'
                            />
                        </form>
                    </div>
                )
            }
            {
                isClient && address && (
                    <div className='bg-gray-200 rounded-xl p-3'>
                        <h1 className='text-2xl font-semibold p-3'>Shipping address</h1>
                        <p className='text-lg font-medium px-3'>{address}</p>

                    </div>
                )
            }
        </div>
    );
};

export default ShippingAddress;
