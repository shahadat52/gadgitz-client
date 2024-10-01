/* eslint-disable @typescript-eslint/no-explicit-any */
import OrderTable from '@/components/orders/OrderTable';
import React from 'react';

const AllOrders = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`)
    const data = await res.json();
    const orders = data?.data;
    return (
        <div className='p-4 border grid grid-cols-3 gap-5'>
            {
                orders?.map((order: any) => <OrderTable key={order._id} order={order} />)
            }
        </div>
    );
};

export default AllOrders;