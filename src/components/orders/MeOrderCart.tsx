/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';

const MeOrderCart = ({ product, index }: { product: any, index: number }) => {
    console.log(product);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <Image
                    src={product?.image}
                    alt='product'
                    width={50}
                    height={50}
                />
            </td>
            <td>{product?.name}</td>
            <td>{product?.price}</td>
        </tr>
    );
};

export default MeOrderCart;