'use client'
import React from 'react';
import ShippingAddress from './ShippingAddress';
import { useAppSelector } from '@/redux/hooks';

const OrderSummery = () => {
    const products = useAppSelector((state) => state.auth.cart.products)
    console.log(products)
    const total = products?.reduce((acc, item) => acc + item.price, 0)
    const payableTotal = total + 120
    return (
        <div >
            <div className='bg-gray-2050 p-3 mb-5 rounded-xl'>
                <h1 className='text-2xl font-semibold'>Checkout Summary</h1> <hr />
                <div>
                    <div className='flex  justify-between'>
                        <p>Subtotal: </p>
                        <p> {total}</p>

                    </div>
                    <div className='flex  justify-between'>
                        <p>Shipping: </p>
                        <p> 120</p>

                    </div>
                    <div className='flex  justify-between'>
                        <p>Total: </p>
                        <p> {total}</p>

                    </div>
                    <div className='flex  justify-between'>
                        <p>Tax: </p>
                        <p>0</p>

                    </div> <hr />
                    <div className='flex  justify-between'>
                        <p>Payable Total: </p>
                        <p> {payableTotal}</p>

                    </div>

                </div>
            </div>
            <ShippingAddress />
        </div>
    );
};

export default OrderSummery;