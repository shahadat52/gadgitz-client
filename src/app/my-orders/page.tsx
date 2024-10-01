/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import OurOrders from '@/components/orders/MyOrders';
import { useGetOrdersByCustomerQuery } from '@/redux/features/booking/bookingApi';
import React from 'react';

const MyOrdersPage = () => {
    const { data } = useGetOrdersByCustomerQuery(undefined)
    const products = data?.data?.map((product: any) => product.productInfo);
    console.log(products);
    return (
        <div>
            <h1>{products?.map((product: any) => product.name)}</h1>
            <OurOrders products={products} />
        </div>
    );
};

export default MyOrdersPage;