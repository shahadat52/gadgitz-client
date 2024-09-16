import { useAppSelector } from '@/redux/hooks';
import { TProduct } from '@/types/TProduct';
import React, { useEffect, useState } from 'react';

const CartTable = () => {
    const cartState = useAppSelector((state) => state.auth.cart)
    const [isClient, setIsClient] = useState(false)
    const products = cartState?.products
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className="container mx-auto p-4 ">
            <h1 className='font-semibold mb-10 uppercase'>Items</h1>
            <table className="min-w-full bg-white">
                <thead className='bg-gray-500 '>
                    <tr className=' text-white '>
                        <th className="py-2 px-4 border-b text-start ">Name</th>
                        <th className="py-2 px-4 border-b text-start">Description</th>
                        <th className="py-2 px-4 border-b text-start">Price</th>
                        <th className="py-2 px-4 border-b text-start">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {isClient && products?.map((product: TProduct) => (
                        <tr key={product._id}>
                            <td className="py-2 px-4 border-b  text-start font-bold">{product.name}</td>
                            <td className="py-2 px-4 border-b text-start">{product.description.substring(0, 30)}</td>
                            <td className="py-2 px-4 border-b text-start">{product.price}</td>
                            <td className="py-2 px-4 border-b text-start">
                                {product?.quantity}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default CartTable;