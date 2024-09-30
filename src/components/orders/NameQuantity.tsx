/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const NameQuantity = ({ item }: { item: any }) => {
    return (
        <div>
            <p>Product: {item?.name}</p>
            <p>Quantity: {item?.quantity}</p>
        </div>
    );
};

export default NameQuantity;