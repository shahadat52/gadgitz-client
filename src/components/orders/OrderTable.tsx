/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import NameQuantity from './NameQuantity';

const OrderTable = ({ order }: { order: any }) => {
    const productItems = order?.products.map((product: any) => {
        return {
            name: product.product.name,
            quantity: product.quantity
        }
    });

    return (
        <div className='p-4  mb-2 shadow-md'>
            <h1 className='text-xl font-semibold uppercase'>Customer: {order?.customer?.name}</h1>
            {
                productItems?.map((item: any, index: number) => <NameQuantity key={index} item={item} />)
            }
        </div >
    );
};

export default OrderTable;