/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react';
import ShippingAddress from './ShippingAddress';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TProduct } from '@/types/TProduct';
import { useCreateBookingMutation } from '@/redux/features/booking/bookingApi';
import { TUser } from '@/Interface/TUser';
import { toast } from 'sonner';
import Spinner from '../Spinner';
import { cartEmpty } from '@/redux/features/cart/cartSlice';

const OrderSummery = () => {
    const [isClient, setIsClient] = useState(false)
    const [loading, setLoading] = useState(false)

    const { products, address } = useAppSelector((state) => state.auth.cart)
    const dispatch = useAppDispatch()
    const user: TUser | any = useAppSelector((state) => state.auth.auth.user)
    const [createBooking] = useCreateBookingMutation()
    console.log(user);
    console.log(products)
    const total = products?.reduce((acc, item) => acc + item.price, 0)
    const payableTotal = total + 120
    const handleCheckout = async () => {
        const isConfirmed = window.confirm('Are you sure for proceed order?');
        if (isConfirmed) {
            setLoading(true)
            const toastId = toast.loading('Order Creating', { duration: 2000 })
            const productsArray = products.map((product: TProduct) => {
                return {
                    product: product._id,
                    quantity: product.quantity

                };

            });
            const data = {
                customer: user.id,
                products: productsArray,
                address
            }

            try {
                const res = await createBooking(data)
                if (res?.data?.success) {
                    console.log(res.data);
                    setLoading(false)
                    dispatch(cartEmpty())
                } else if (res.error) {
                    console.log(res.error);
                    setLoading(false)
                    toast.error(`${(res.error as any)?.data?.message}`, { id: toastId, duration: 2000 })

                }
            } catch (error) {
                setLoading(false)
                toast.error(`${(error as any)?.data?.message}`, { id: toastId, duration: 2000 })
            }
        } else {
            return
        }
    }

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div >

            <div className='bg-gray-2050 p-3 mb-5 rounded-xl max-w-[50%]'>
                <h1 className='text-lg lg:text-2xl font-semibold'>Checkout Summary</h1> <hr />
                <div>
                    <div className='flex  justify-between'>
                        <p>Subtotal: </p>
                        <p> {isClient ? total : 0}</p>

                    </div>
                    <div className='flex  justify-between'>
                        <p>Shipping: </p>
                        <p> 120</p>

                    </div>
                    <div className='flex  justify-between'>
                        <p>Total: </p>
                        <p> {isClient ? total : 0}</p>

                    </div>
                    <div className='flex  justify-between'>
                        <p>Tax: </p>
                        <p>0</p>

                    </div> <hr />
                    <div className='flex  justify-between'>
                        <p>Payable Total: </p>
                        <p> {isClient ? payableTotal : 0}</p>

                    </div>

                </div>
                <button
                    onClick={handleCheckout}
                    className='bg-accent w-full py-2 rounded my-2 font-semibold text-white cursor-pointer'
                >
                    {
                        loading ? <Spinner /> : 'Proceed to order'
                    }
                </button>
            </div>

            <ShippingAddress />
        </div>
    );
};

export default OrderSummery;