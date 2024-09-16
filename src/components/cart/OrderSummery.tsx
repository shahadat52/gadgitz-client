'use client'
import React from 'react';
import ShippingAddress from './ShippingAddress';
import { useAppSelector } from '@/redux/hooks';

const OrderSummery = () => {
    const products = useAppSelector((state) => state.auth.cart.products)
    console.log(products)
    const total = products?.reduce((acc, item) => acc + item.price, 0)
    console.log(total);
    return (
        <div >
            <div className='bg-gray-2050 p-3 mb-5 rounded-xl'>
                <h1 className='text-2xl font-semibold'>Checkout Summary</h1> <hr />
                <div>
                    <p>Subtotal</p>
                    <p>Shipping</p>
                    <div className='flex  justify-between'>
                        <p>Total: </p>
                        <p> {total}</p>

                    </div>
                    <p>Payable Total</p>
                </div>
            </div>
            <ShippingAddress />
        </div>
    );
};

export default OrderSummery;